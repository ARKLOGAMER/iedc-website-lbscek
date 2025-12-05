# Pull Request Instructions

## ✅ What's Been Done

I've successfully:
1. ✅ Converted the Next.js crowdfunding app to React components
2. ✅ Integrated it into the IEDC website structure at `/crowdfund` endpoint
3. ✅ Created backend API routes for donations and testimonials
4. ✅ Added Supabase integration for data storage
5. ✅ Committed all changes to branch `feature/crowdfund-integration`
6. ✅ Pushed to your repository

## 🚀 Next Steps to Create the PR

### Option 1: Create PR via GitHub Web Interface (Easiest)

1. **Fork the target repository** (if you haven't already):
   - Go to: https://github.com/iedclbscek/iedc-website
   - Click "Fork" button in the top right
   - This creates a copy under your account

2. **Push your branch to your fork**:
   ```bash
   git remote add myfork https://github.com/YOUR_USERNAME/iedc-website.git
   git push myfork feature/crowdfund-integration
   ```

3. **Create the Pull Request**:
   - Go to: https://github.com/iedclbscek/iedc-website
   - You'll see a banner saying "Compare & pull request"
   - Click it and fill in the PR details (see template below)
   - Submit the PR!

### Option 2: Using GitHub CLI (if installed)

```bash
gh pr create --repo iedclbscek/iedc-website --base main --head YOUR_USERNAME:feature/crowdfund-integration --title "feat: Add crowdfunding platform at /crowdfund endpoint" --body-file PR_TEMPLATE.md
```

## 📝 Pull Request Template

Use this when creating your PR:

---

### Title
```
feat: Add crowdfunding platform at /crowdfund endpoint
```

### Description
```markdown
## 🎯 Overview
This PR adds a complete crowdfunding platform for IEDC SUMMIT 2025 alumni donations, accessible at `/crowdfund`.

## ✨ Features
- **React-based crowdfunding page** with multi-step donation flow
- **Payment options**: UPI QR code and bank transfer for India, international bank transfer
- **Donor wall** displaying verified contributions
- **Testimonials section** for alumni stories
- **Backend API** with Express.js routes for donations and testimonials
- **Supabase integration** for data storage and file uploads
- **Payment proof upload** functionality
- **Admin verification** workflow for donations and testimonials

## 📁 Files Added/Modified

### Frontend (Client)
- `client/src/pages/CrowdfundPage.jsx` - Main crowdfunding page
- `client/src/App.jsx` - Added `/crowdfund` route
- `client/public/qr1.jpg` - UPI payment QR code

### Backend (Server)
- `server/routes/crowdfund.js` - API routes for donations and testimonials
- `server/server.js` - Registered crowdfund routes
- `server/package.json` - Added @supabase/supabase-js dependency
- `server/.env.example` - Added Supabase configuration

### Documentation
- `CROWDFUND_INTEGRATION.md` - Complete setup guide
- `crowdfund-supabase-setup.sql` - Database setup script

## 🔧 Setup Required

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment Variables
Add to `server/config/.env`:
```env
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Setup Supabase Database
Run the SQL script in `crowdfund-supabase-setup.sql` in your Supabase SQL Editor.

### 4. Configure Client
Add to `client/.env`:
```env
VITE_API_URL=http://localhost:5000
```

## 📖 Documentation
Complete setup instructions are available in `CROWDFUND_INTEGRATION.md`

## 🧪 Testing
1. Start backend: `cd server && npm run dev`
2. Start frontend: `cd client && npm run dev`
3. Visit: `http://localhost:5173/crowdfund`

## 🎨 Design
- Fully responsive design with Tailwind CSS
- Matches existing IEDC website styling
- Clean, modern UI with smooth transitions

## 🔒 Security
- File upload validation (images/PDFs only, 5MB limit)
- Row Level Security (RLS) enabled on Supabase tables
- Manual verification required for donations to appear publicly
- CORS protection and rate limiting

## 📱 Mobile Responsive
Tested and optimized for mobile, tablet, and desktop views.

## ⏰ Funding Timeline
- Funding closes: December 19, 2025
- Event date: December 22, 2025
- Automatic countdown display

## 🙏 Impact
This platform enables LBSCEK alumni to contribute to IEDC SUMMIT 2025, supporting the next generation of student entrepreneurs.

---

**Ready for review!** 🚀
```

---

## 📋 Checklist Before Creating PR

- [x] Code is committed to `feature/crowdfund-integration` branch
- [x] All files are properly structured for React app
- [x] Backend routes are created and integrated
- [x] Documentation is complete
- [x] SQL setup script is provided
- [ ] Fork the target repository
- [ ] Push branch to your fork
- [ ] Create pull request on GitHub

## 🆘 Need Help?

If you encounter any issues:
1. Make sure you've forked the repository first
2. Ensure your branch is pushed to YOUR fork, not the original repo
3. The PR should be from `YOUR_USERNAME:feature/crowdfund-integration` to `iedclbscek:main`

## 📞 Contact

For questions about the implementation, refer to `CROWDFUND_INTEGRATION.md` or reach out to the IEDC tech team.
