# Deployment Guide - React Version

## Option 1: Deploy Frontend and Backend Separately

### Frontend (Netlify/Cloudflare Pages/GitHub Pages)

1. **Build the frontend:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)

3. **Deploy to Cloudflare Pages:**
   - Connect your repository
   - Build command: `npm run build`
   - Output directory: `dist`
   - Add environment variables

4. **Update API URL:**
   - In `vite.config.js`, update the proxy target to your backend URL
   - Or use environment variable for API base URL

### Backend (Railway/Render/Heroku)

1. **Deploy to Railway:**
   ```bash
   npm i -g railway
   railway login
   railway init
   railway up
   ```
   - Set start command: `node server/index.js`
   - Add environment variables

2. **Deploy to Render:**
   - Create new Web Service
   - Build command: `npm install`
   - Start command: `node server/index.js`
   - Add environment variables

3. **Deploy to Heroku:**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```
   - Add Procfile: `web: node server/index.js`

## Option 2: Deploy as Monolith

### Serve React from Express

1. **Update `server/index.js`:**
   ```javascript
   import path from 'path'
   import { fileURLToPath } from 'url'
   
   const __filename = fileURLToPath(import.meta.url)
   const __dirname = path.dirname(__filename)
   
   // Serve static files
   app.use(express.static(path.join(__dirname, '../dist')))
   
   // Serve React app for all other routes
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../dist/index.html'))
   })
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npm start
   ```

## Environment Variables

Set these on your hosting platform:

**Frontend (Netlify/Cloudflare):**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Backend (Railway/Render/Heroku):**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=5000
```

## CORS Configuration

If deploying separately, update CORS in `server/index.js`:

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com'
}))
```
