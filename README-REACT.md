# LBSCEK Alumni Crowdfunding - React.js Version

This project has been converted from Next.js to React.js with Vite and Express backend.

## Tech Stack

- **Frontend**: React 18 + Vite
- **Backend**: Express.js
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **File Upload**: Multer

## Project Structure

```
├── src/                  # React frontend
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── server/              # Express backend
│   └── index.js         # API routes
├── public/              # Static assets
├── index.html           # HTML template
└── vite.config.js       # Vite configuration
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local`:

```bash
copy .env.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=5000
```

### 3. Run Development Server

The project runs both frontend and backend concurrently:

```bash
npm run dev
```

This will start:
- Frontend (Vite): http://localhost:3000
- Backend (Express): http://localhost:5000

### 4. Build for Production

```bash
npm run build
```

### 5. Run Production Server

```bash
npm start
```

## API Endpoints

- `GET /api/donations` - Fetch verified donors
- `POST /api/donations` - Submit new donation
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/health` - Health check

## Key Differences from Next.js

1. **Routing**: Single-page application (no file-based routing)
2. **API Routes**: Moved to Express server in `server/index.js`
3. **Build Tool**: Vite instead of Next.js
4. **Development**: Runs frontend and backend separately
5. **Environment Variables**: Uses `VITE_` prefix for client-side variables

## Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder

### Backend (Heroku/Railway/Render)
1. Deploy the `server` folder
2. Set environment variables
3. Run `node server/index.js`

## Notes

- The frontend proxies API requests to the backend during development
- File uploads are handled via Multer and stored in Supabase Storage
- Pure React application with no framework dependencies
- The UI and functionality remain identical to the original
