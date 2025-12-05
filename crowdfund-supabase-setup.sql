-- Crowdfunding Platform Database Setup for Supabase
-- Run this in your Supabase SQL Editor

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_donations_verified ON donations(verified);
CREATE INDEX IF NOT EXISTS idx_donations_show_on_wall ON donations(show_on_wall);
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON donations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_created_at ON testimonials(created_at DESC);

-- Create storage bucket for payment proofs
INSERT INTO storage.buckets (id, name, public) 
VALUES ('crowdfund', 'crowdfund', true)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS (Row Level Security)
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view verified donations" ON donations;
DROP POLICY IF EXISTS "Public can view approved testimonials" ON testimonials;
DROP POLICY IF EXISTS "Anyone can submit donations" ON donations;
DROP POLICY IF EXISTS "Anyone can submit testimonials" ON testimonials;
DROP POLICY IF EXISTS "Allow public read access" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated uploads" ON storage.objects;

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

-- Storage policies for payment proofs
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'crowdfund');

CREATE POLICY "Allow authenticated uploads" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'crowdfund');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_donations_updated_at ON donations;
CREATE TRIGGER update_donations_updated_at 
  BEFORE UPDATE ON donations 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_testimonials_updated_at ON testimonials;
CREATE TRIGGER update_testimonials_updated_at 
  BEFORE UPDATE ON testimonials 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (optional - for testing)
-- Uncomment the following lines if you want sample data

-- INSERT INTO donations (name, batch, email, phone, amount, donor_type, payment_proof_url, show_on_wall, verified)
-- VALUES 
--   ('John Doe', '2015-2019', 'john@example.com', '+919876543210', 5000.00, 'india', 'https://example.com/proof1.jpg', true, true),
--   ('Jane Smith', '2016-2020', 'jane@example.com', '+919876543211', 10000.00, 'india', 'https://example.com/proof2.jpg', true, true);

-- INSERT INTO testimonials (name, testimonial, approved)
-- VALUES 
--   ('John Doe', 'IEDC gave me the platform to experiment and learn. Best experience of my college life!', true),
--   ('Jane Smith', 'The workshops and mentorship I received through IEDC shaped my entrepreneurial journey.', true);

-- Verify setup
SELECT 'Donations table created' AS status, COUNT(*) AS row_count FROM donations
UNION ALL
SELECT 'Testimonials table created' AS status, COUNT(*) AS row_count FROM testimonials
UNION ALL
SELECT 'Storage bucket created' AS status, COUNT(*) AS row_count FROM storage.buckets WHERE id = 'crowdfund';
