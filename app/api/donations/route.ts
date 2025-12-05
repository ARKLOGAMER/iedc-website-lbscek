import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Force dynamic rendering
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function POST(request: NextRequest) {
  try {
    if (!supabase) {
      console.error('Supabase client is null')
      return NextResponse.json({ 
        success: false, 
        error: 'Database not configured' 
      }, { status: 500 })
    }

    const formData = await request.formData()
    
    const donationData = {
      name: formData.get('name') as string,
      batch: formData.get('batch') as string || null,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      amount: parseFloat(formData.get('amount') as string),
      donor_type: formData.get('donor_type') as string,
      pan: formData.get('pan') as string || null,
      show_on_wall: formData.get('show_on_wall') === 'true',
      testimonial: formData.get('testimonial') as string || null,
      payment_proof_url: null,
      status: 'pending'
    }

    console.log('Inserting donation:', donationData)

    const { data, error } = await supabase
      .from('donations')
      .insert([donationData])
      .select()
      .single()

    if (error) {
      console.error('Supabase insert error:', error)
      throw error
    }

    console.log('Donation inserted:', data)

    // Handle file upload
    const file = formData.get('payment_proof') as File
    if (file && file.size > 0 && data) {
      console.log('Uploading file:', file.name)
      const fileExt = file.name.split('.').pop()
      const fileName = `${data.id}.${fileExt}`
      
      const { error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(fileName, file, {
          upsert: true
        })

      if (uploadError) {
        console.error('File upload error:', uploadError)
      } else {
        const { data: { publicUrl } } = supabase.storage
          .from('payment-proofs')
          .getPublicUrl(fileName)

        await supabase
          .from('donations')
          .update({ payment_proof_url: publicUrl })
          .eq('id', data.id)
        
        console.log('File uploaded successfully')
      }
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Donation submission error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to submit donation' 
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    if (!supabase) {
      console.log('Supabase not configured, returning empty array')
      return NextResponse.json({ success: true, data: [] })
    }

    const { data, error } = await supabase
      .from('donations')
      .select('name, batch, amount, created_at, testimonial')
      .in('status', ['verified', 'pending'])
      .eq('show_on_wall', true)
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) {
      console.error('Supabase query error:', error)
      return NextResponse.json({ success: true, data: [] })
    }

    return NextResponse.json({ success: true, data: data || [] })
  } catch (error) {
    console.error('Fetch donations error:', error)
    return NextResponse.json({ success: true, data: [] })
  }
}
