import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ChatRequest {
  message: string;
  context?: {
    topic?: string;
    category?: string;
  };
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { message, context, conversationHistory } = (await req.json()) as ChatRequest;

    if (!message) {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const mistralApiKey = Deno.env.get("MISTRAL_API_KEY");
    if (!mistralApiKey) {
      console.error("MISTRAL_API_KEY not configured");
      return new Response(
        JSON.stringify({
          error: "Mistral API key not configured",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const systemPrompt = `You are Bug Busters, a friendly and knowledgeable learning assistant for programming, cloud development, and tech education. Your role is to:

1. Help learners understand programming concepts, best practices, and common mistakes
2. Recommend relevant lessons and resources from MDN Web Docs, Python.org, Microsoft Learn, AWS, Google Cloud, and freeCodeCamp
3. Provide clear explanations of bugs and their solutions
4. Guide users through learning paths based on their interests
5. Answer questions about web development, cloud platforms, data visualization, and tech fundamentals

When answering:
- Be encouraging and supportive
- Use simple, clear language
- Provide code examples when relevant
- Recommend official resources and trusted tutorials
- Keep responses concise but thorough
${context?.category ? `\nThe user is learning about: ${context.category}` : ''}
${context?.topic ? `Current topic: ${context.topic}` : ''}`;

    const messages = [
      ...(conversationHistory || []),
      { role: "user" as const, content: message },
    ];

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${mistralApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Mistral API error:", errorData);
      return new Response(
        JSON.stringify({
          error: "Failed to get response from Mistral AI",
          details: errorData,
        }),
        {
          status: response.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    return new Response(
      JSON.stringify({
        response: assistantMessage,
        model: data.model,
        usage: data.usage,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in mistral-chat:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
