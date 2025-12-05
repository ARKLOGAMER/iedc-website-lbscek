# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│                    http://localhost:3000                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP Requests
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    Vite Dev Server                           │
│                  (Development Only)                          │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              React Application                      │    │
│  │                                                     │    │
│  │  ┌──────────────────────────────────────────┐     │    │
│  │  │           App.jsx                         │     │    │
│  │  │  - Donation Flow (5 steps)               │     │    │
│  │  │  - Donor Wall                            │     │    │
│  │  │  - Testimonials                          │     │    │
│  │  │  - Hero Section                          │     │    │
│  │  └──────────────────────────────────────────┘     │    │
│  │                                                     │    │
│  │  Styled with Tailwind CSS                          │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ API Calls (/api/*)
                         │ Proxied by Vite
                         │
┌────────────────────────▼────────────────────────────────────┐
│                   Express Server                             │
│                 http://localhost:5000                        │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              API Routes                             │    │
│  │                                                     │    │
│  │  GET  /api/donations      - Fetch donors          │    │
│  │  POST /api/donations      - Submit donation       │    │
│  │  GET  /api/testimonials   - Fetch testimonials    │    │
│  │  GET  /api/health         - Health check          │    │
│  │                                                     │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Middleware                                │    │
│  │  - CORS                                            │    │
│  │  - JSON Parser                                     │    │
│  │  - Multer (File Upload)                           │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ Supabase Client
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    Supabase Backend                          │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           PostgreSQL Database                       │    │
│  │                                                     │    │
│  │  Table: donations                                  │    │
│  │  - id, name, email, phone                         │    │
│  │  - amount, donor_type, batch                      │    │
│  │  - testimonial, show_on_wall                      │    │
│  │  - payment_proof_url, status                      │    │
│  │  - created_at                                     │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │           Storage Bucket                            │    │
│  │                                                     │    │
│  │  Bucket: payment-proofs                           │    │
│  │  - Stores uploaded payment screenshots           │    │
│  │  - Public access for verified donations          │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. Donation Submission Flow

```
User Action → React Component → Express API → Supabase
    ↓              ↓                ↓            ↓
Click Donate → Open Modal → POST /api/donations → Insert Record
    ↓              ↓                ↓            ↓
Fill Form → Collect Data → Upload File → Store in Bucket
    ↓              ↓                ↓            ↓
Submit → Send FormData → Process & Save → Return Success
    ↓              ↓                ↓            ↓
Success → Show Confirmation → Refresh List → Display on Wall
```

### 2. Donor Wall Display Flow

```
Page Load → React useEffect → Express API → Supabase
    ↓              ↓                ↓            ↓
Mount → Fetch Donors → GET /api/donations → Query Database
    ↓              ↓                ↓            ↓
Render → Map Data → Return JSON → Filter & Sort
    ↓              ↓                ↓            ↓
Display → Show Cards → Parse Response → Send Results
```

## Component Structure

```
App.jsx
├── Navbar
│   ├── Logo & Title
│   ├── Navigation Links
│   └── Donate Button
│
├── Hero Section
│   ├── Title & Description
│   ├── Countdown Timer
│   └── CTA Buttons
│
├── Impact Section
│   └── Feature Cards (3)
│
├── Testimonials Section
│   └── Testimonial Cards (Dynamic)
│
├── Donor Wall Section
│   └── Donor Cards (Dynamic)
│
├── Modals (Conditional Rendering)
│   ├── Step 1: Location Selection
│   ├── Step 2: Amount Input
│   ├── Step 3: Payment Details
│   ├── Step 4: Upload Proof & Info
│   └── Step 5: Success Message
│
├── Transparency Section
│   └── Trust Indicators
│
└── Footer
    └── Copyright & Info
```

## File Structure

```
project-root/
│
├── src/                          # Frontend Source
│   ├── main.jsx                 # React Entry Point
│   ├── App.jsx                  # Main Component
│   └── index.css                # Global Styles
│
├── server/                       # Backend Source
│   └── index.js                 # Express Server
│
├── public/                       # Static Assets
│   └── qr1.jpg                  # QR Code Image
│
├── dist/                         # Build Output (generated)
│
├── node_modules/                 # Dependencies
│
├── Configuration Files
│   ├── index.html               # HTML Template
│   ├── vite.config.js           # Vite Config
│   ├── tailwind.config.js       # Tailwind Config
│   ├── postcss.config.js        # PostCSS Config
│   ├── package.json             # Dependencies & Scripts
│   ├── .env.local               # Environment Variables
│   └── .gitignore               # Git Ignore Rules
│
└── Documentation
    ├── README-REACT.md
    ├── QUICK-START.md
    ├── DEPLOYMENT-GUIDE.md
    ├── MIGRATION-NOTES.md
    ├── CONVERSION-SUMMARY.md
    ├── BEFORE-AFTER-COMPARISON.md
    ├── POST-CONVERSION-CHECKLIST.md
    └── ARCHITECTURE.md (this file)
```

## Technology Stack

### Frontend
- **React 18** - UI Library
- **Vite 5** - Build Tool & Dev Server
- **Tailwind CSS 3** - Styling Framework
- **PostCSS** - CSS Processing

### Backend
- **Express 4** - Web Framework
- **Multer** - File Upload Middleware
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables

### Database & Storage
- **Supabase** - Backend as a Service
  - PostgreSQL Database
  - Storage Buckets
  - Authentication (if needed)

### Development Tools
- **Concurrently** - Run multiple commands
- **npm** - Package Manager

## API Endpoints

### GET /api/donations
**Purpose:** Fetch verified donors for display on donor wall

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "John Doe",
      "batch": "2015-2019",
      "amount": 5000,
      "created_at": "2025-12-05T10:30:00Z"
    }
  ]
}
```

### POST /api/donations
**Purpose:** Submit new donation with payment proof

**Request:** FormData
- name, email, phone, batch
- amount, donor_type, pan
- show_on_wall, testimonial
- payment_proof (file)

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "amount": 5000,
    "status": "pending"
  }
}
```

### GET /api/testimonials
**Purpose:** Fetch testimonials from donors

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "name": "Jane Smith",
      "testimonial": "IEDC changed my life...",
      "created_at": "2025-12-05T10:30:00Z"
    }
  ]
}
```

### GET /api/health
**Purpose:** Health check endpoint

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-12-05T10:30:00Z"
}
```

## Environment Variables

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...

# Server Configuration
PORT=5000  # Optional, defaults to 5000
```

## Development Workflow

1. **Start Development:**
   ```bash
   npm run dev
   ```
   - Vite starts on port 3000
   - Express starts on port 5000
   - Vite proxies /api/* to Express

2. **Make Changes:**
   - Edit React components in `src/`
   - Edit API routes in `server/`
   - Hot reload happens automatically

3. **Test:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000/api/health

4. **Build:**
   ```bash
   npm run build
   ```
   - Creates optimized bundle in `dist/`

## Production Deployment

### Option 1: Separate Deployment
```
Frontend (Vercel/Netlify)
    ↓
  dist/
    ↓
Static Files

Backend (Railway/Render)
    ↓
server/index.js
    ↓
Node.js Server
```

### Option 2: Monolith
```
Single Server
    ↓
Express serves React
    ↓
All-in-one deployment
```

## Security Considerations

1. **Environment Variables**
   - Never commit .env.local
   - Use different keys for dev/prod

2. **File Uploads**
   - Validate file types
   - Limit file sizes
   - Scan for malware

3. **API Security**
   - CORS configuration
   - Rate limiting (recommended)
   - Input validation

4. **Database**
   - RLS policies enabled
   - Secure credentials
   - Regular backups

## Performance Optimizations

1. **Frontend**
   - Code splitting (automatic with Vite)
   - Lazy loading images
   - Minimize bundle size

2. **Backend**
   - Database query optimization
   - Caching strategies
   - Connection pooling

3. **Network**
   - CDN for static assets
   - Gzip compression
   - HTTP/2 support

## Monitoring & Logging

### Recommended Tools
- **Frontend:** Sentry, LogRocket
- **Backend:** Winston, Morgan
- **Infrastructure:** Datadog, New Relic
- **Uptime:** Pingdom, UptimeRobot

## Scaling Strategy

### Horizontal Scaling
- Deploy multiple backend instances
- Load balancer in front
- Shared database connection

### Vertical Scaling
- Increase server resources
- Optimize database queries
- Add caching layer (Redis)

## Backup & Recovery

1. **Database Backups**
   - Supabase automatic backups
   - Manual exports recommended

2. **Code Backups**
   - Git repository
   - Tagged releases

3. **Recovery Plan**
   - Documented rollback procedure
   - Tested restore process
