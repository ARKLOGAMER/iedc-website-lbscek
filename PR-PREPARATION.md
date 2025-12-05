# Pull Request Preparation Guide

## Step-by-Step: Push to Your Fork and Create PR

### Step 1: Initialize Git (if not already done)

```bash
# Check if git is initialized
git status

# If not initialized, run:
git init
git add .
git commit -m "Initial commit: React crowdfunding platform"
```

### Step 2: Connect to Your Fork

```bash
# Add your fork as remote
git remote add origin https://github.com/ARKLOGAMER/iedc-website-lbscek.git

# Verify
git remote -v
```

### Step 3: Create Feature Branch

```bash
# Create and switch to feature branch
git checkout -b feature/summit-2025-crowdfunding

# Or if you prefer a different name:
# git checkout -b crowdfunding-platform
```

### Step 4: Stage and Commit Changes

```bash
# Add all files
git add .

# Commit with descriptive message
git commit -m "Add SUMMIT 2025 crowdfunding platform

- React + Vite frontend with donation flow
- Express backend with API routes
- Supabase integration for database
- File upload for payment proofs
- Real-time donor wall
- Alumni testimonials section
- Responsive design with Tailwind CSS
- Complete documentation"
```

### Step 5: Push to Your Fork

```bash
# Push to your fork
git push -u origin feature/summit-2025-crowdfunding

# If you get authentication errors, you may need to:
# 1. Set up SSH key, or
# 2. Use personal access token
```

### Step 6: Create Pull Request

1. **Go to GitHub:**
   - Visit: https://github.com/ARKLOGAMER/iedc-website-lbscek

2. **You'll see a banner:**
   - "feature/summit-2025-crowdfunding had recent pushes"
   - Click "Compare & pull request"

3. **Or manually:**
   - Click "Pull requests" tab
   - Click "New pull request"
   - Select branches:
     - base: `main` (or `master`)
     - compare: `feature/summit-2025-crowdfunding`

4. **Fill in PR details** (see template below)

---

## Pull Request Template

Copy this for your PR description:

```markdown
# 🚀 Add SUMMIT 2025 Alumni Crowdfunding Platform

## 📋 Overview

This PR adds a complete crowdfunding platform for IEDC SUMMIT 2025, enabling alumni to support the event through donations.

## ✨ Features

### Frontend (React + Vite)
- ✅ 5-step donation flow with intuitive UI
- ✅ Support for India and International donations
- ✅ UPI and Bank transfer payment options
- ✅ Payment proof upload functionality
- ✅ Real-time donor wall display
- ✅ Alumni testimonials section
- ✅ Anonymous donation option
- ✅ Countdown timer for funding deadline
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Tailwind CSS styling

### Backend (Express.js)
- ✅ RESTful API endpoints
- ✅ File upload handling with Multer
- ✅ Supabase database integration
- ✅ CORS configuration
- ✅ Environment variable management

### Database (Supabase)
- ✅ PostgreSQL database
- ✅ Storage bucket for payment proofs
- ✅ Row Level Security (RLS) policies
- ✅ Real-time data updates

## 📁 Project Structure

```
crowdfund/
├── src/                          # React Frontend
│   ├── App.jsx                  # Main application
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── server/                       # Express Backend
│   └── index.js                 # API routes
├── public/                       # Static assets
│   └── qr1.jpg                  # UPI QR code
├── Documentation/
│   ├── README.md                # Main documentation
│   ├── INTEGRATION-GUIDE.md     # Integration instructions
│   ├── DEPLOYMENT-GUIDE.md      # Deployment guide
│   ├── ARCHITECTURE.md          # System architecture
│   └── [10+ other docs]
└── Configuration files
```

## 🔌 API Endpoints

- `GET /api/donations` - Fetch verified donors
- `POST /api/donations` - Submit new donation
- `GET /api/testimonials` - Fetch testimonials
- `GET /api/health` - Health check

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite 5, Tailwind CSS 3
- **Backend:** Express 4, Multer, CORS
- **Database:** Supabase (PostgreSQL + Storage)
- **Build Tool:** Vite
- **Package Manager:** npm

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with Supabase credentials

# Run development server
npm run dev
```

## 🚀 Deployment

The platform can be deployed as:
1. **Subdomain:** `crowdfunding.iedclbscek.com`
2. **Subdirectory:** `/crowdfunding` or `/summit-2025`
3. **Separate deployment** with links from main website

See `DEPLOYMENT-GUIDE.md` for detailed instructions.

## 🔒 Security

- ✅ Environment variables for sensitive data
- ✅ File upload validation
- ✅ Supabase RLS policies
- ✅ CORS configuration
- ✅ Input sanitization

## 📱 Screenshots

[Add screenshots here if available]

## 🧪 Testing

- [x] Donation flow (all 5 steps)
- [x] File upload functionality
- [x] Donor wall display
- [x] Testimonials section
- [x] Responsive design
- [x] API endpoints
- [x] Database integration
- [x] Cross-browser compatibility

## 📚 Documentation

Complete documentation included:
- `README.md` - Main project documentation
- `QUICK-START.md` - Quick start guide
- `INTEGRATION-GUIDE.md` - Integration with main website
- `DEPLOYMENT-GUIDE.md` - Deployment instructions
- `ARCHITECTURE.md` - System architecture
- `SUPABASE-SETUP-GUIDE.md` - Database setup
- And 10+ more detailed guides

## 🔗 Integration with Main Website

See `INTEGRATION-GUIDE.md` for three integration options:
1. **Subdirectory route** (recommended)
2. **Subdomain deployment**
3. **iFrame embedding**

Quick integration component provided in `QUICK-INTEGRATION-STEPS.md`.

## 🎯 Event Details

- **Event:** IEDC SUMMIT 2025
- **Date:** December 22, 2025
- **Funding Closes:** December 19, 2025
- **Target Audience:** LBSCEK Alumni

## ✅ Checklist

- [x] Code follows project standards
- [x] All features tested
- [x] Documentation complete
- [x] No console errors
- [x] Mobile responsive
- [x] Cross-browser tested
- [x] Environment variables documented
- [x] Deployment guide included
- [x] Integration guide provided

## 🚦 Next Steps

After merge:
1. Deploy crowdfunding platform
2. Set up custom domain
3. Add links to main website
4. Test end-to-end
5. Launch campaign

## 📞 Support

For questions or issues:
- Check documentation in `/docs`
- Review `TROUBLESHOOTING.md`
- Contact: [Your contact info]

## 🙏 Acknowledgments

- IEDC LBSCEK team
- LBSCEK Alumni
- All contributors

---

**Ready to launch SUMMIT 2025 crowdfunding! 🚀**
```

---

## Alternative: If Creating PR to Main Repo

If you want to create a PR directly to the main IEDC website repo:

### Base Repository
```
base repository: iedclbscek/iedc-website
base branch: main (or master)
```

### Head Repository
```
head repository: ARKLOGAMER/iedc-website-lbscek
compare branch: feature/summit-2025-crowdfunding
```

---

## Git Commands Summary

```bash
# 1. Initialize and commit
git init
git add .
git commit -m "Add SUMMIT 2025 crowdfunding platform"

# 2. Add remote
git remote add origin https://github.com/ARKLOGAMER/iedc-website-lbscek.git

# 3. Create branch
git checkout -b feature/summit-2025-crowdfunding

# 4. Push to fork
git push -u origin feature/summit-2025-crowdfunding

# 5. Go to GitHub and create PR
```

---

## Troubleshooting

### Authentication Error

If you get authentication errors:

**Option 1: Use Personal Access Token**
```bash
# Generate token at: https://github.com/settings/tokens
# Use token as password when prompted
```

**Option 2: Use SSH**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: https://github.com/settings/keys

# Change remote to SSH
git remote set-url origin git@github.com:ARKLOGAMER/iedc-website-lbscek.git
```

### Large Files Error

If you get "file too large" error:

```bash
# Check file sizes
find . -type f -size +50M

# Add to .gitignore if needed
echo "node_modules/" >> .gitignore
echo "dist/" >> .gitignore
echo ".env.local" >> .gitignore

# Recommit
git add .gitignore
git commit --amend
```

---

## After PR is Created

1. **Add labels:**
   - `feature`
   - `enhancement`
   - `documentation`

2. **Request reviewers:**
   - Tag IEDC team members

3. **Link issues:**
   - If there's a related issue

4. **Monitor:**
   - Watch for comments
   - Address feedback
   - Update as needed

---

## PR Checklist for Reviewers

When your PR is reviewed, they'll check:

- [ ] Code quality and standards
- [ ] Documentation completeness
- [ ] Security considerations
- [ ] Performance implications
- [ ] Mobile responsiveness
- [ ] Browser compatibility
- [ ] Integration feasibility
- [ ] Deployment strategy

---

## Ready to Push?

Run these commands now:

```bash
# Make sure you're in the project directory
cd /path/to/crowdfund

# Check status
git status

# If everything looks good, proceed with the commands above!
```

---

**Let's get this crowdfunding platform live! 🚀**
