-- Add batch field to donations table
-- Run this in Supabase SQL Editor

ALTER TABLE donations ADD COLUMN IF NOT EXISTS batch TEXT;
