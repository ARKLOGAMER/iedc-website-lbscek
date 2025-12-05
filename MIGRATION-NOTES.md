# Migration from Next.js to React.js

## What Changed

### 1. Project Structure
- **Before**: Next.js App Router (`app/` directory)
- **After**: Standard React with Vite (`src/` directory)

### 2. Routing
- **Before**: File-based routing with Next.js
- **After**: Single-page application (no routing needed for this project)

### 3. API Routes
- **Before**: Next.js API routes in `app/api/`
- **After**: Express.js server in `server/index.js`

### 4. Build Tool
- **Before**: Next.js built-in bundler
- **After**: Vite for faster development and builds

### 5. Development Server
- **Before**: Single `next dev` command
- **After**: Concurrent frontend (Vite) and backend (Express) servers

## Files Created

```
✓ src/main.jsx          - React entry point
✓ src/App.jsx           - Main application (converted from app/page.tsx)
✓ src/index.css         - Global styles (from app/globals.css)
✓ server/index.js       - Express backend with all API routes
✓ index.html            - HTML template
✓ vite.config.js        - Vite configuration
✓ .env.example          - Environment variables template
✓ README-REACT.md       - React-specific documentation
✓ DEPLOYMENT-GUIDE.md   - Deployment instructions
```

## Files Modified

```
✓ package.json          - Updated dependencies and scripts
✓ tailwind.config.js    - Updated content paths for React
✓ postcss.config.js     - Changed to ES module syntax
✓ .gitignore            - Added /dist folder
```

## Files No Longer Needed

The following files have been removed:
- ✅ `app/` directory (replaced by `src/`)
- ✅ `lib/` directory (Supabase client moved to server)
- ✅ `next.config.js` (replaced by `vite.config.js`)
- ✅ `tsconfig.json` (not needed for JavaScript project)
- ✅ `vercel.json` (deployment config no longer needed)

## Environment Variables

Updated to use Vite conventions:
- `VITE_SUPABASE_URL` (was `NEXT_PUBLIC_SUPABASE_URL`)
- `VITE_SUPABASE_ANON_KEY` (was `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- Backward compatible - server checks both prefixes

## Key Features Preserved

✓ All UI components and styling
✓ Donation flow (5-step modal process)
✓ Supabase integration
✓ File upload functionality
✓ Donor wall and testimonials
✓ Responsive design
✓ Tailwind CSS styling

## Next Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy environment variables:**
   ```bash
   copy .env.local .env.local
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Test the application:**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Rollback

If you need to rollback to Next.js:
1. Restore the original `package.json`
2. Delete `src/`, `server/`, `vite.config.js`
3. Restore the `app/` directory
4. Run `npm install` and `npm run dev`
