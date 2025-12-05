// Quick script to verify Supabase connection
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dbbsbktehhousxoybnwt.supabase.co'
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiYnNia3RlaGhvdXN4b3libnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDQ2MzksImV4cCI6MjA4MDQyMDYzOX0.Toz_RJmcrWUHfi-5vNhGzL8TfcOGTWVGhZfJmtXhnBU'

const supabase = createClient(supabaseUrl, supabaseKey)

async function verify() {
  console.log('🔍 Verifying Supabase connection...\n')
  
  try {
    // Test connection
    const { data, error } = await supabase.from('donations').select('count').limit(1)
    
    if (error) {
      console.log('❌ Database table not found!')
      console.log('Error:', error.message)
      console.log('\n📋 Next steps:')
      console.log('1. Go to: https://supabase.com/dashboard/project/dbbsbktehhousxoybnwt/sql')
      console.log('2. Click "New Query"')
      console.log('3. Copy contents of supabase-setup.sql')
      console.log('4. Paste and click "Run"')
      console.log('5. Run this script again\n')
      return
    }
    
    console.log('✅ Supabase connected successfully!')
    console.log('✅ Donations table exists!')
    console.log('\n🎉 Your app is ready to accept real donations!\n')
    
  } catch (err) {
    console.log('❌ Connection failed:', err.message)
  }
}

verify()
