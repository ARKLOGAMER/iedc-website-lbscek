# Deploy to Vercel - Quick Guide

## Option 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **iedc-lbscek-crowdfunding**
- In which directory is your code located? **./**
- Want to override settings? **N**

### Step 4: Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
```
Paste: `https://dbbsbktehhousxoybnwt.supabase.co`

```bash
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```
Paste: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYnNia3RlaGhvdXN4b3libnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDQ2MzksImV4cCI6MjA4MDQyMDYzOX0.Toz_RJmcrWUHfi-5vNhGzL8TfcOGTWVGhZfJmtXhnBU`

### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## Option 2: Deploy via Vercel Dashboard

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - IEDC LBSCEK Crowdfunding"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Click "Import"

### Step 3: Configure Environment Variables
In the "Configure Project" screen:
1. Click "Environment Variables"
2. Add:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://dbbsbktehhousxoybnwt.supabase.co`
3. Add:
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYnNia3RlaGhvdXN4b3libnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDQ2MzksImV4cCI6MjA4MDQyMDYzOX0.Toz_RJmcrWUHfi-5vNhGzL8TfcOGTWVGhZfJmtXhnBU`

### Step 4: Deploy
Click "Deploy" and wait 2-3 minutes!

---

## Your Live URL
After deployment, you'll get a URL like:
`https://iedc-lbscek-crowdfunding.vercel.app`

## Troubleshooting

**Build fails?**
- Check that all dependencies are in package.json
- Run `npm run build` locally first

**Environment variables not working?**
- Make sure they start with `NEXT_PUBLIC_`
- Redeploy after adding env vars

**Database not connecting?**
- Verify Supabase URL and key are correct
- Check Supabase RLS is disabled

## Custom Domain (Optional)
1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
