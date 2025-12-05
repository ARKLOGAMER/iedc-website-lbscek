-- Fix Row Level Security policy for donations table
-- Run this in Supabase SQL Editor

-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Allow public to insert donations" ON donations;

-- Create a new policy that allows all inserts
CREATE POLICY "Allow public to insert donations"
ON donations FOR INSERT
TO public
WITH CHECK (true);

-- Verify the policy
SELECT * FROM pg_policies WHERE tablename = 'donations';
