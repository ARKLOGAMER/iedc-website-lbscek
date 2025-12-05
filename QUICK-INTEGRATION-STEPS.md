# Quick Integration Steps

## TL;DR - Fastest Way to Integrate

### Step 1: Deploy Crowdfunding (30 minutes)

```bash
# 1. Build the app
npm run build

# 2. Deploy to Netlify (easiest)
# - Go to https://app.netlify.com
# - Drag and drop the 'dist' folder
# - Set environment variables in Netlify dashboard
# - Get your URL: https://your-app.netlify.app

# 3. Deploy backend to Railway (easiest)
# - Go to https://railway.app
# - New Project → Deploy from GitHub
# - Select your repo
# - Add environment variables
# - Get your API URL
```

### Step 2: Update Main Website (15 minutes)

```bash
# 1. Clone your fork
git clone https://github.com/ARKLOGAMER/iedc-website-lbscek.git
cd iedc-website-lbscek

# 2. Create branch
git checkout -b add-crowdfunding-link

# 3. Add this to homepage (find the right component)
```

Add this section to the main website homepage:

```jsx
{/* Add this section in the homepage */}
<section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">
      🚀 Support IEDC SUMMIT 2025!
    </h2>
    <p className="text-xl mb-8">
      Alumni, help us make it the biggest student innovation event at LBSCEK!
    </p>
    <a
      href="https://your-crowdfunding-url.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg inline-block hover:bg-gray-100"
    >
      Donate Now →
    </a>
    <p className="mt-4 text-sm">
      ⏰ Funding closes December 19, 2025
    </p>
  </div>
</section>
```

Add this to navigation:

```jsx
{/* Add to navbar */}
<a
  href="https://your-crowdfunding-url.netlify.app"
  target="_blank"
  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
>
  Support SUMMIT 2025
</a>
```

```bash
# 4. Commit and push
git add .
git commit -m "Add SUMMIT 2025 crowdfunding link"
git push origin add-crowdfunding-link

# 5. Create Pull Request on GitHub
```

### Step 3: Test (5 minutes)

- [ ] Click the link from main website
- [ ] Verify crowdfunding page loads
- [ ] Test donation flow
- [ ] Check mobile view

---

## Deployment Commands

### Deploy Frontend to Netlify (CLI)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

### Deploy Backend to Railway (CLI)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

---

## Environment Variables for Deployment

### Netlify (Frontend)
```
VITE_SUPABASE_URL=https://dbbsbktehhousxoybnwt.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

### Railway (Backend)
```
VITE_SUPABASE_URL=https://dbbsbktehhousxoybnwt.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
PORT=5000
```

---

## URLs to Update

After deployment, update these in main website:

1. **Homepage CTA:** `href="https://YOUR-NETLIFY-URL.netlify.app"`
2. **Navigation:** `href="https://YOUR-NETLIFY-URL.netlify.app"`
3. **Footer:** Add link to crowdfunding

---

## Custom Domain (Optional)

### Set up subdomain: crowdfunding.iedclbscek.com

1. **In Netlify:**
   - Go to Domain Settings
   - Add custom domain: `crowdfunding.iedclbscek.com`
   - Get DNS instructions

2. **In your DNS provider:**
   - Add CNAME record:
     ```
     crowdfunding → your-app.netlify.app
     ```

3. **Wait for DNS propagation** (5-30 minutes)

4. **Update main website links** to use custom domain

---

## Complete Example for Main Website

Here's exactly what to add to the main IEDC website:

### File: `src/components/CrowdfundingBanner.jsx` (Create new)

```jsx
export default function CrowdfundingBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🚀 Alumni, Support IEDC SUMMIT 2025!
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Help us make SUMMIT 2025 the biggest celebration of student 
            innovation and entrepreneurship at our alma mater.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2">Summit Events</h3>
              <p className="text-sm opacity-90">
                Keynote speakers, panel discussions, networking
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold text-lg mb-2">Workshops</h3>
              <p className="text-sm opacity-90">
                Hands-on training in entrepreneurship
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Competitions</h3>
              <p className="text-sm opacity-90">
                Pitch competitions, hackathons, prizes
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://YOUR-CROWDFUNDING-URL.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-block"
            >
              Donate Now →
            </a>
            <a
              href="https://YOUR-CROWDFUNDING-URL.netlify.app#donors"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition inline-block"
            >
              View Donors
            </a>
          </div>

          <div className="mt-8 text-sm opacity-90">
            <p>⏰ Funding closes December 19, 2025 | Event: December 22, 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### File: `src/pages/index.jsx` (or wherever homepage is)

```jsx
import CrowdfundingBanner from '@/components/CrowdfundingBanner'

export default function Home() {
  return (
    <>
      {/* Existing sections */}
      <Hero />
      <About />
      
      {/* Add this */}
      <CrowdfundingBanner />
      
      {/* Rest of sections */}
      <Events />
      <Team />
      <Footer />
    </>
  )
}
```

### Update Navigation

Find the navigation component and add:

```jsx
<a
  href="https://YOUR-CROWDFUNDING-URL.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
>
  Support SUMMIT 2025
</a>
```

---

## Checklist

### Deployment
- [ ] Build crowdfunding app
- [ ] Deploy to Netlify
- [ ] Deploy backend to Railway
- [ ] Test crowdfunding URL
- [ ] Set up custom domain (optional)

### Main Website
- [ ] Clone your fork
- [ ] Create feature branch
- [ ] Add CrowdfundingBanner component
- [ ] Add to homepage
- [ ] Update navigation
- [ ] Test locally
- [ ] Push to GitHub
- [ ] Create Pull Request

### Testing
- [ ] Link works from main website
- [ ] Crowdfunding page loads
- [ ] Donation flow works
- [ ] Mobile responsive
- [ ] All sections visible

### Launch
- [ ] Merge PR
- [ ] Deploy main website
- [ ] Announce to alumni
- [ ] Monitor donations

---

## Timeline

**Day 1:**
- Morning: Deploy crowdfunding
- Afternoon: Update main website
- Evening: Create PR

**Day 2:**
- Review with team
- Test thoroughly
- Merge changes

**Day 3:**
- Launch campaign
- Announce to alumni
- Monitor and support

---

## Need Help?

1. **Deployment issues?** Check `DEPLOYMENT-GUIDE.md`
2. **Integration questions?** Check `INTEGRATION-GUIDE.md`
3. **Technical problems?** Check `README.md`

---

**Start with Step 1: Deploy the crowdfunding app!** 🚀
