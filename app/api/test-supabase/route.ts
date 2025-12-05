import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Testing Supabase connection...')
    console.log('Supabase client exists:', !!supabase)
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    if (!supabase) {
      return NextResponse.json({
        success: false,
        error: 'Supabase client is null',
        env: {
          url: process.env.NEXT_PUBLIC_SUPABASE_URL,
          keyExists: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        }
      })
    }

    // Test query
    const { data, error } = await supabase
      .from('donations')
      .select('count')
      .limit(1)

    if (error) {
      console.error('Query error:', error)
      return NextResponse.json({
        success: false,
        error: error.message,
        details: error
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase connected successfully!',
      data
    })


  } catch (error) {
    console.error('Test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
  }
}
