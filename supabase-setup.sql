-- Create donations table
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  donor_type TEXT NOT NULL CHECK (donor_type IN ('india', 'international')),
  pan TEXT,
  show_on_wall BOOLEAN DEFAULT true,
  testimonial TEXT,
  payment_proof_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create storage bucket for payment proofs
INSERT INTO storage.buckets (id, name, public) 
VALUES ('payment-proofs', 'payment-proofs', true);

-- Enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert donations (no authentication required)
CREATE POLICY "Allow public to insert donations"
ON donations FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Policy: Allow public to read verified donations
CREATE POLICY "Allow public to read verified donations"
ON donations FOR SELECT
TO public
USING (status = 'verified' AND show_on_wall = true);

-- Storage policy: Allow public to upload
CREATE POLICY "Allow public to upload payment proofs"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'payment-proofs');

-- Storage policy: Allow public to read
CREATE POLICY "Allow public to read payment proofs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'payment-proofs');

-- Create index for faster queries
CREATE INDEX idx_donations_status ON donations(status);
CREATE INDEX idx_donations_created_at ON donations(created_at DESC);
