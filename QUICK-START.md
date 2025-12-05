# Quick Start Guide - React Version

## Prerequisites
- Node.js 18+ installed
- Supabase account with database setup

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   copy .env.local.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_url_here
   VITE_SUPABASE_ANON_KEY=your_key_here
   PORT=5000
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   This starts:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Available Scripts

- `npm run dev` - Run both frontend and backend
- `npm run dev:client` - Run only frontend (Vite)
- `npm run dev:server` - Run only backend (Express)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Run production server

## Project Structure

```
├── src/                    # React frontend
│   ├── App.jsx            # Main component
│   ├── main.jsx           # Entry point
│   └── index.css          # Styles
├── server/                # Express backend
│   └── index.js           # API routes
├── public/                # Static assets
│   └── qr1.jpg           # QR code image
├── index.html             # HTML template
└── vite.config.js         # Vite config
```

## Testing

1. Open http://localhost:3000
2. Click "Donate Now"
3. Follow the donation flow
4. Check donor wall updates

## Troubleshooting

**Port already in use:**
```bash
# Change port in vite.config.js or server/index.js
```

**Supabase connection error:**
- Verify environment variables
- Check Supabase project status
- Ensure RLS policies are configured

**File upload not working:**
- Check Supabase Storage bucket exists
- Verify storage policies allow uploads

## Next Steps

- Read `README-REACT.md` for detailed documentation
- Check `DEPLOYMENT-GUIDE.md` for deployment options
- Review `MIGRATION-NOTES.md` for changes from Next.js
