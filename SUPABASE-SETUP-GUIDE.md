# Supabase Setup Guide

## Current Status
✅ App is running in **MOCK MODE** - donations are logged but not saved
✅ Supabase credentials are configured in `.env.local`
❌ Database tables need to be created

## Steps to Enable Real Database

### 1. Create Database Tables
1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/dbbsbktehhousxoybnwt
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire contents of `supabase-setup.sql`
5. Paste into the SQL editor
6. Click **Run** (or press Ctrl+Enter)
7. You should see "Success. No rows returned"

### 2. Verify Tables Created
1. Click **Table Editor** in the left sidebar
2. You should see a new table called `donations`
3. Click **Storage** to verify `payment-proofs` bucket exists

### 3. Enable Supabase Integration
1. In your project, rename:
   - `app/api/donations-supabase/route.ts` → `app/api/donations/route.ts`
   - (This will replace the mock version)

2. Restart your dev server:
   ```bash
   npm run dev
   ```

### 4. Test It
1. Go to http://localhost:3000
2. Click "Donate Now"
3. Complete the donation flow
4. Check Supabase Table Editor to see your donation saved!

## Troubleshooting

**Error: "relation donations does not exist"**
- You haven't run the SQL setup yet. Go back to Step 1.

**Error: "storage bucket not found"**
- The storage bucket wasn't created. Re-run the SQL setup.

**Donations not appearing on donor wall**
- Donations need to be manually verified
- Go to Table Editor > donations
- Change `status` from 'pending' to 'verified'
- Refresh the page

## Current Mock Mode
While in mock mode:
- Donations are logged to console
- Mock data is shown on donor wall
- No data is actually saved
- Perfect for testing the UI!
