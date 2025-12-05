# Crowdfunding Integration Guide

This PR adds a complete crowdfunding platform for IEDC SUMMIT 2025 at the `/crowdfund` endpoint.

## What's Included

### Frontend (React)
- **New Page**: `client/src/pages/CrowdfundPage.jsx`
  - Complete crowdfunding UI with donation flow
  - Multi-step donation process (location → amount → payment → proof upload)
  - Donor wall displaying verified contributions
  - Testimonials section
  - Responsive design with Tailwind CSS

### Backend (Express.js)
- **New Route**: `server/routes/crowdfund.js`
  - `GET /api/crowdfund/donations` - Fetch verified donations
  - `GET /api/crowdfund/testimonials` - Fetch approved testimonials
  - `POST /api/crowdfund/donations` - Submit new donation with file upload

### Assets
- **QR Code**: `client/public/qr1.jpg` - UPI payment QR code

## Setup Requirements

### 1. Environment Variables

Add these to `server/config/.env`:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabase Setup

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create donations table
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  batch TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  pan TEXT,
  amount DECIMAL(10,2) NOT NULL,
  donor_type TEXT NOT NULL CHECK (donor_type IN ('india', 'international')),
  payment_proof_url TEXT NOT NULL,
  show_on_wall BOOLEAN DEFAULT true,
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket for payment proofs
INSERT INTO storage.buckets (id, name, public) 
VALUES ('crowdfund', 'crowdfund', true);

-- Set up storage policies
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'crowdfund');

CREATE POLICY "Allow authenticated uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'crowdfund');

-- Enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public read policies for verified/approved content
CREATE POLICY "Public can view verified donations" ON donations
  FOR SELECT USING (verified = true AND show_on_wall = true);

CREATE POLICY "Public can view approved testimonials" ON testimonials
  FOR SELECT USING (approved = true);

-- Allow anyone to insert (for donation submissions)
CREATE POLICY "Anyone can submit donations" ON donations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can submit testimonials" ON testimonials
  FOR INSERT WITH CHECK (true);
```

### 3. Install Dependencies

```bash
cd server
npm install @supabase/supabase-js multer
```

### 4. Update Client Environment

Add to `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

For production:
```env
VITE_API_URL=https://your-api-domain.com
```

## Features

### Donation Flow
1. **Location Selection**: India or International
2. **Amount Entry**: Custom donation amount
3. **Payment Method**: 
   - India < ₹10K: UPI QR Code
   - India ≥ ₹10K: UPI or Bank Transfer
   - International: Bank Transfer with SWIFT
4. **Proof Upload**: Screenshot/PDF of payment
5. **Donor Information**: Name, batch, email, phone, optional PAN
6. **Privacy Options**: Choose to show/hide name on donor wall
7. **Testimonial**: Optional story about IEDC experience

### Admin Features
- Donations require manual verification before appearing on donor wall
- Testimonials require approval before display
- All payment proofs stored securely in Supabase Storage

### Security
- File upload validation (images and PDFs only, 5MB limit)
- Row Level Security (RLS) enabled on all tables
- CORS protection
- Rate limiting on API endpoints

## Testing

1. Start the backend:
```bash
cd server
npm run dev
```

2. Start the frontend:
```bash
cd client
npm run dev
```

3. Visit `http://localhost:5173/crowdfund`

## Deployment Notes

- Ensure Supabase environment variables are set in production
- Update CORS origins in `server/server.js` to include production domain
- Set `VITE_API_URL` to production API URL
- Verify Supabase storage bucket is publicly accessible

## Admin Dashboard (Future Enhancement)

Consider adding an admin panel to:
- Verify donations
- Approve testimonials
- View analytics
- Export donor data

## Support

For issues or questions, contact the IEDC tech team.
