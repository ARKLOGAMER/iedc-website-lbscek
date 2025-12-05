# LBSCEK Alumni Crowdfunding Platform

A React-based crowdfunding platform for IEDC SUMMIT 2025 at LBS College of Engineering, Kerala.

## 🚀 Tech Stack

- **Frontend:** React 18 + Vite
- **Backend:** Express.js
- **Database:** Supabase (PostgreSQL)
- **Styling:** Tailwind CSS
- **File Upload:** Multer

## ✨ Features

- 5-step donation flow with payment proof upload
- Real-time donor wall display
- Alumni testimonials section
- Support for India and International donations
- UPI and Bank transfer payment options
- Anonymous donation option
- Responsive design for all devices
- Countdown timer for funding deadline

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd crowdfund
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   copy .env.local.example .env.local
   ```
   
   Edit `.env.local` with your credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   PORT=5000
   ```

4. **Set up Supabase database:**
   - Follow instructions in `SUPABASE-SETUP-GUIDE.md`
   - Run the SQL scripts in order

5. **Verify setup:**
   ```bash
   node verify-supabase.js
   ```

## 🚀 Development

Start both frontend and backend servers:

```bash
npm run dev
```

This will start:
- **Frontend:** http://localhost:3000 (Vite dev server)
- **Backend:** http://localhost:5000 (Express API server)

### Individual Commands

```bash
npm run dev:client    # Start only frontend
npm run dev:server    # Start only backend
```

## 🏗️ Build

Build the frontend for production:

```bash
npm run build
```

Output will be in the `dist/` directory.

## 🌐 Production

Start the production server:

```bash
npm start
```

This runs the Express server on port 5000 (or PORT env variable).

## 📁 Project Structure

```
crowdfund/
├── src/                    # React frontend
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── server/                # Express backend
│   └── index.js           # API routes
├── public/                # Static assets
│   └── qr1.jpg           # UPI QR code
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🔌 API Endpoints

- `GET /api/donations` - Fetch verified donors
- `POST /api/donations` - Submit new donation
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/health` - Health check

## 🚢 Deployment

See `DEPLOYMENT-GUIDE.md` for detailed deployment instructions.

### Quick Deploy Options

**Frontend:**
- Netlify
- Cloudflare Pages
- GitHub Pages

**Backend:**
- Railway
- Render
- Heroku

## 📚 Documentation

- `README-REACT.md` - Detailed React documentation
- `QUICK-START.md` - Quick start guide
- `DEPLOYMENT-GUIDE.md` - Deployment instructions
- `ARCHITECTURE.md` - System architecture
- `SUPABASE-SETUP-GUIDE.md` - Database setup
- `CLEANUP-COMPLETE.md` - Conversion notes

## 🧪 Testing

1. Start the development server
2. Navigate to http://localhost:3000
3. Click "Donate Now" and test the flow
4. Verify donor wall updates
5. Check testimonials display

## 🔒 Security

- Environment variables for sensitive data
- File upload validation
- Supabase Row Level Security (RLS)
- CORS configuration
- Input sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `PORT` | Server port (default: 5000) | No |

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Change PORT in .env.local or kill the process
```

**Supabase connection error:**
- Verify environment variables
- Check Supabase project status
- Ensure RLS policies are configured

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is private and proprietary to IEDC LBSCEK.

## 👥 Team

Innovation & Entrepreneurship Development Cell  
LBS College of Engineering, Kerala

## 📞 Support

For issues or questions:
- Check documentation in the repo
- Review `POST-CONVERSION-CHECKLIST.md`
- Contact IEDC LBSCEK team

## 🎉 Acknowledgments

- LBSCEK Alumni for their support
- IEDC team for organizing SUMMIT 2025
- All contributors to this project

---

**Event:** IEDC SUMMIT 2025  
**Date:** December 22, 2025  
**Funding Closes:** December 19, 2025

Made with ❤️ by IEDC LBSCEK
