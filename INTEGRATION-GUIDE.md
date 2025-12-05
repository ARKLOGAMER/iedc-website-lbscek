# Integration Guide: Crowdfunding to Main IEDC Website

## Overview

This guide explains how to integrate the crowdfunding platform into the main IEDC LBSCEK website.

**Your Fork:** https://github.com/ARKLOGAMER/iedc-website-lbscek.git  
**Main Website:** https://github.com/iedclbscek/iedc-website.git

## Integration Options

### Option 1: Subdirectory Route (Recommended)
Add crowdfunding as a route in the main website at `/crowdfunding` or `/summit-2025`

### Option 2: Subdomain
Deploy separately at `crowdfunding.iedclbscek.com` or `summit.iedclbscek.com`

### Option 3: Embedded iFrame
Embed the crowdfunding page within the main website

---

## Option 1: Subdirectory Integration (Recommended)

### Step 1: Prepare the Crowdfunding Component

1. **Create a standalone component:**

```bash
# In your crowdfunding project
mkdir -p integration/components
```

2. **Copy the App component:**

Create `integration/components/CrowdfundingPage.jsx`:
```jsx
// Copy the entire content from src/App.jsx
// This will be the crowdfunding page component
```

3. **Export necessary files:**

Create `integration/export-package.md`:
```
Files to copy to main website:
├── components/
│   └── CrowdfundingPage.jsx (from src/App.jsx)
├── public/
│   └── qr1.jpg
├── styles/
│   └── crowdfunding.css (if any custom styles)
└── api/ (backend routes)
    └── crowdfunding/ (Express routes)
```

### Step 2: Add to Main Website

Assuming the main website uses React/Next.js:

1. **Copy files to main website:**
```bash
# In main website directory
mkdir -p src/pages/crowdfunding
mkdir -p public/crowdfunding
mkdir -p api/crowdfunding
```

2. **Create the page:**

`src/pages/crowdfunding/index.jsx` (or `summit-2025/index.jsx`):
```jsx
import CrowdfundingPage from '@/components/CrowdfundingPage'

export default function Crowdfunding() {
  return <CrowdfundingPage />
}
```

3. **Add API routes:**

Copy the Express routes from `server/index.js` to the main website's API structure.

### Step 3: Update Navigation

Add link to main website navigation:

```jsx
// In main website's navigation component
<nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/events">Events</Link>
  <Link href="/crowdfunding">Support SUMMIT 2025</Link>
  {/* or */}
  <Link href="/summit-2025">SUMMIT 2025</Link>
</nav>
```

### Step 4: Environment Variables

Add to main website's `.env.local`:
```bash
# Crowdfunding Supabase (can be same or separate)
VITE_SUPABASE_URL=https://dbbsbktehhousxoybnwt.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

---

## Option 2: Subdomain Deployment

### Step 1: Deploy Crowdfunding Separately

1. **Deploy to Netlify/Vercel:**
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod

# Or Vercel
vercel --prod
```

2. **Configure custom domain:**
- Set up DNS: `crowdfunding.iedclbscek.com` → Your deployment
- Or: `summit.iedclbscek.com` → Your deployment

### Step 2: Link from Main Website

Add prominent link/button on main website:

```jsx
// On main website homepage or events page
<section className="crowdfunding-banner">
  <h2>Support IEDC SUMMIT 2025</h2>
  <p>Help us make it the biggest student innovation event!</p>
  <a 
    href="https://crowdfunding.iedclbscek.com" 
    target="_blank"
    className="btn-primary"
  >
    Donate Now
  </a>
</section>
```

### Step 3: Add Banner/CTA

Create a prominent call-to-action on the main website:

```jsx
// components/SummitBanner.jsx
export default function SummitBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-500 text-white p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h3 className="font-bold">🚀 IEDC SUMMIT 2025 - Alumni Support Needed!</h3>
          <p className="text-sm">Funding closes in X days</p>
        </div>
        <a 
          href="https://crowdfunding.iedclbscek.com"
          className="bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold"
        >
          Donate Now
        </a>
      </div>
    </div>
  )
}
```

---

## Option 3: iFrame Embedding

### Step 1: Deploy Crowdfunding

Deploy the crowdfunding app to any hosting platform.

### Step 2: Embed in Main Website

```jsx
// pages/crowdfunding.jsx
export default function CrowdfundingPage() {
  return (
    <div className="crowdfunding-container">
      <iframe
        src="https://your-crowdfunding-url.com"
        width="100%"
        height="100%"
        style={{ border: 'none', minHeight: '100vh' }}
        title="IEDC SUMMIT 2025 Crowdfunding"
      />
    </div>
  )
}
```

---

## Recommended Approach: Hybrid

### Best Practice Implementation

1. **Deploy crowdfunding separately** (subdomain)
2. **Add prominent CTAs** on main website
3. **Create a landing section** on main website homepage

### Implementation Steps

#### 1. Create Landing Section on Main Website

```jsx
// components/SummitCrowdfunding.jsx
export default function SummitCrowdfunding() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Alumni, Support IEDC SUMMIT 2025! 🚀
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Help us make SUMMIT 2025 the biggest celebration of student 
          innovation and entrepreneurship at LBSCEK.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-bold mb-2">Fund Events</h3>
            <p className="text-sm">Keynotes, workshops, competitions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl mb-2">💡</div>
            <h3 className="font-bold mb-2">Support Students</h3>
            <p className="text-sm">Resources for next-gen entrepreneurs</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="font-bold mb-2">Prize Pool</h3>
            <p className="text-sm">Rewards for innovators</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://crowdfunding.iedclbscek.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Donate Now →
          </a>
          <a
            href="https://crowdfunding.iedclbscek.com#donors"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition"
          >
            View Donors
          </a>
        </div>

        <p className="mt-8 text-sm opacity-90">
          ⏰ Funding closes December 19, 2025 | Event: December 22, 2025
        </p>
      </div>
    </section>
  )
}
```

#### 2. Add to Main Website Homepage

```jsx
// pages/index.jsx
import SummitCrowdfunding from '@/components/SummitCrowdfunding'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SummitCrowdfunding /> {/* Add this */}
      <Events />
      <Team />
      <Footer />
    </>
  )
}
```

#### 3. Add Navigation Link

```jsx
// components/Navbar.jsx
<nav>
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/events">Events</Link>
  <Link 
    href="https://crowdfunding.iedclbscek.com"
    target="_blank"
    className="bg-orange-500 text-white px-4 py-2 rounded-lg"
  >
    Support SUMMIT 2025 🚀
  </Link>
</nav>
```

#### 4. Add Floating CTA (Optional)

```jsx
// components/FloatingCTA.jsx
'use client'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (closed || !visible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce">
      <div className="bg-orange-500 text-white rounded-lg shadow-2xl p-4 max-w-sm">
        <button
          onClick={() => setClosed(true)}
          className="absolute top-2 right-2 text-white/80 hover:text-white"
        >
          ✕
        </button>
        <h4 className="font-bold mb-2">🚀 Support SUMMIT 2025!</h4>
        <p className="text-sm mb-3">
          Alumni, help us make it the biggest innovation event!
        </p>
        <a
          href="https://crowdfunding.iedclbscek.com"
          target="_blank"
          className="block bg-white text-orange-500 text-center px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          Donate Now
        </a>
      </div>
    </div>
  )
}
```

---

## Deployment Checklist

### For Crowdfunding App

- [ ] Build the app: `npm run build`
- [ ] Deploy frontend to Netlify/Vercel/Cloudflare
- [ ] Deploy backend to Railway/Render
- [ ] Set up custom domain (if using subdomain)
- [ ] Configure environment variables
- [ ] Test all functionality
- [ ] Set up SSL certificate

### For Main Website Integration

- [ ] Add landing section to homepage
- [ ] Add navigation link
- [ ] Add floating CTA (optional)
- [ ] Update footer with crowdfunding link
- [ ] Test all links
- [ ] Mobile responsiveness check
- [ ] Deploy changes

---

## URL Structure Options

### Option A: Subdomain (Recommended)
```
Main: https://iedclbscek.com
Crowdfunding: https://crowdfunding.iedclbscek.com
or
Crowdfunding: https://summit.iedclbscek.com
```

### Option B: Subdirectory
```
Main: https://iedclbscek.com
Crowdfunding: https://iedclbscek.com/crowdfunding
or
Crowdfunding: https://iedclbscek.com/summit-2025
```

### Option C: Separate Domain
```
Main: https://iedclbscek.com
Crowdfunding: https://summit2025.iedclbscek.com
```

---

## Git Workflow

### 1. Fork and Clone Main Website

```bash
# Clone your fork
git clone https://github.com/ARKLOGAMER/iedc-website-lbscek.git
cd iedc-website-lbscek

# Add upstream
git remote add upstream https://github.com/iedclbscek/iedc-website.git
```

### 2. Create Feature Branch

```bash
git checkout -b feature/summit-2025-crowdfunding
```

### 3. Make Changes

Add the landing section, navigation links, and CTAs as described above.

### 4. Commit and Push

```bash
git add .
git commit -m "Add SUMMIT 2025 crowdfunding integration"
git push origin feature/summit-2025-crowdfunding
```

### 5. Create Pull Request

1. Go to your fork on GitHub
2. Click "Pull Request"
3. Select: `base: iedclbscek/iedc-website` ← `compare: ARKLOGAMER/iedc-website-lbscek`
4. Add description:
   ```
   # Add SUMMIT 2025 Crowdfunding Integration
   
   ## Changes
   - Added landing section on homepage
   - Added navigation link to crowdfunding platform
   - Added floating CTA for donations
   - Updated footer with crowdfunding link
   
   ## Crowdfunding Platform
   - Deployed at: [URL]
   - Repository: [crowdfunding repo URL]
   
   ## Testing
   - [x] All links work
   - [x] Mobile responsive
   - [x] Cross-browser tested
   ```

---

## Quick Start (Recommended Path)

### Phase 1: Deploy Crowdfunding (Week 1)
1. Deploy crowdfunding app to Netlify
2. Deploy backend to Railway
3. Set up domain: `crowdfunding.iedclbscek.com`
4. Test thoroughly

### Phase 2: Main Website Integration (Week 1-2)
1. Fork main website
2. Add landing section to homepage
3. Add navigation link
4. Add floating CTA
5. Create pull request

### Phase 3: Promotion (Week 2+)
1. Announce on social media
2. Email alumni
3. Add to all IEDC communications
4. Monitor donations

---

## Files to Share with Main Website Team

Create a package for the main website team:

```bash
# Create integration package
mkdir -p integration-package
cp src/App.jsx integration-package/CrowdfundingPage.jsx
cp public/qr1.jpg integration-package/
cp -r server integration-package/api
```

Create `integration-package/README.md`:
```markdown
# Crowdfunding Integration Package

## What's Included
- CrowdfundingPage.jsx - Main component
- qr1.jpg - QR code image
- api/ - Backend routes

## How to Integrate
See INTEGRATION-GUIDE.md for detailed instructions.

## Quick Links
- Live Demo: [URL]
- Documentation: [URL]
- API Docs: [URL]
```

---

## Support & Maintenance

### Monitoring
- Set up analytics for crowdfunding page
- Track conversion rates
- Monitor donation flow

### Updates
- Keep both repos in sync
- Update countdown timer
- Add new testimonials
- Update donor wall

### After Event
- Thank you page
- Financial transparency report
- Archive the campaign

---

## Questions to Ask Main Website Team

1. What framework is the main website using? (React/Next.js/Other)
2. What's the preferred integration method?
3. Who has access to deploy?
4. What's the domain structure?
5. Any design guidelines to follow?
6. Timeline for integration?

---

## Next Steps

1. **Immediate:**
   - Deploy crowdfunding app
   - Get custom domain approved
   - Test thoroughly

2. **This Week:**
   - Fork main website
   - Add integration components
   - Create pull request

3. **Next Week:**
   - Review with team
   - Merge changes
   - Launch campaign

---

## Contact

For questions about integration:
- GitHub Issues: [Your repo]
- Email: [Your email]
- IEDC Team: [Team contact]

---

**Ready to integrate? Start with Phase 1 deployment!** 🚀
