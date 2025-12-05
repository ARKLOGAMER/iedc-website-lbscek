# Supabase Setup Instructions

## 1. Create Supabase Project
1. Go to https://supabase.com
2. Create a new project
3. Wait for the project to be ready

## 2. Run Database Setup
1. Go to SQL Editor in Supabase dashboard
2. Copy and paste the contents of `supabase-setup.sql`
3. Run the query

## 3. Configure Environment Variables
1. Copy `.env.local` to your project root
2. Get your Supabase URL and Anon Key from Project Settings > API
3. Update `.env.local`:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   PORT=5000
   ```

## 4. Install Dependencies
```bash
npm install
```

## 5. Run Development Server
```bash
npm run dev
```

## Database Schema
- **donations** table: Stores all donation records
- **payment-proofs** bucket: Stores uploaded payment screenshots

## Admin Access
To verify donations:
1. Go to Supabase Dashboard > Table Editor > donations
2. Change `status` from 'pending' to 'verified'
3. Verified donations with `show_on_wall=true` will appear on the donor wall
