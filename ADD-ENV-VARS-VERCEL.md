# Add Environment Variables to Vercel

Your app is deployed but not working because the Supabase credentials are missing!

## Quick Fix - Add Environment Variables

### Method 1: Via Vercel Dashboard (Easiest)

1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your project (iedc-lbscek-crowdfunding or similar)
3. Click "Settings" tab
4. Click "Environment Variables" in the left sidebar
5. Add these two variables:

**Variable 1:**
- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: `https://dbbsbktehhousxoybnwt.supabase.co`
- Environment: Production, Preview, Development (check all)
- Click "Save"

**Variable 2:**
- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYnNia3RlaGhvdXN4b3libnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDQ2MzksImV4cCI6MjA4MDQyMDYzOX0.Toz_RJmcrWUHfi-5vNhGzL8TfcOGTWVGhZfJmtXhnBU`
- Environment: Production, Preview, Development (check all)
- Click "Save"

6. Go to "Deployments" tab
7. Click the three dots (...) on the latest deployment
8. Click "Redeploy"
9. Wait 2-3 minutes

Your app will now work with Supabase! ✅

---

### Method 2: Via Vercel CLI

```bash
# Add Supabase URL
vercel env add NEXT_PUBLIC_SUPABASE_URL
# When prompted, paste: https://dbbsbktehhousxoybnwt.supabase.co
# Select: Production, Preview, Development

# Add Supabase Key
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# When prompted, paste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYnNia3RlaGhvdXN4b3libnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDQ2MzksImV4cCI6MjA4MDQyMDYzOX0.Toz_RJmcrWUHfi-5vNhGzL8TfcOGTWVGhZfJmtXhnBU
# Select: Production, Preview, Development

# Redeploy
vercel --prod
```

---

## Verify It's Working

After redeploying:
1. Visit your Vercel URL
2. Click "Donate Now"
3. Complete a test donation
4. Check Supabase to see if it saved

If donations are saving to Supabase, it's working! 🎉
