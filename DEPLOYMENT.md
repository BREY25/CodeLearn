# Bug Busters - Deployment Guide

## Netlify Deployment

### Prerequisites
- GitHub repository connected to Netlify
- Supabase project with database configured
- Mistral AI API key

### Environment Variables

Set these in your Netlify dashboard under **Site settings > Build & deploy > Environment**:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
MISTRAL_API_KEY=your_mistral_api_key
```

### Build Configuration

The `netlify.toml` file is pre-configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing redirects for React Router

### Deployment Steps

1. **Connect GitHub Repository**
   - Push your code to GitHub
   - Connect your GitHub repository to Netlify

2. **Add Environment Variables**
   - Go to Site settings > Build & deploy > Environment
   - Add all required environment variables

3. **Deploy**
   - Netlify will automatically build and deploy on every push to main branch

### Supabase Edge Functions

The Mistral AI chatbot uses a Supabase Edge Function deployed at:
- Function: `mistral-chat`
- Endpoint: `https://your-project.supabase.co/functions/v1/mistral-chat`

The function securely handles:
- API communication with Mistral AI
- Conversation history management
- Context-aware responses for learning

### Features

✓ **Build Output**: Optimized `dist` folder with minified assets
✓ **Static Hosting**: Fully compatible with Netlify static hosting
✓ **SPA Routing**: Configured with `_redirects` file
✓ **Edge Functions**: Integrated for secure API calls
✓ **Environment Variables**: Secure secrets management
✓ **Responsive Design**: Mobile-first, all breakpoints covered
✓ **Animations**: Smooth transitions and interactions
✓ **Chatbot**: Fixed bottom-right, context-aware AI assistant

### Performance

- CSS: ~4.43 kB gzipped
- JS: ~86.61 kB gzipped
- Total: ~90 kB gzipped

### Troubleshooting

**Chatbot not responding:**
- Verify `MISTRAL_API_KEY` is set in Netlify environment
- Check browser console for API errors
- Ensure Supabase edge function is deployed

**Build failures:**
- Verify all dependencies are installed: `npm install`
- Run type checking: `npm run typecheck`
- Check build locally: `npm run build`

**Database connection issues:**
- Verify Supabase credentials are correct
- Check Netlify environment variables
- Ensure Supabase project is accessible
