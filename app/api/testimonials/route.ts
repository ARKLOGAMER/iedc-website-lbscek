import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    if (!supabase) {
      console.log('Supabase not configured, returning empty array')
      return NextResponse.json({ success: true, data: [] })
    }

    const { data, error } = await supabase
      .from('donations')
      .select('name, testimonial, created_at')
      .not('testimonial', 'is', null)
      .neq('testimonial', '')
      .in('status', ['verified', 'pending'])
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) {
      console.error('Supabase query error:', error)
      return NextResponse.json({ success: true, data: [] })
    }

    return NextResponse.json({ success: true, data: data || [] })
  } catch (error) {
    console.error('Fetch testimonials error:', error)
    return NextResponse.json({ success: true, data: [] })
  }
}
