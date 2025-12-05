import express from 'express';
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
    }
  }
});

// GET /api/crowdfund/donations - Fetch verified donations
router.get('/donations', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('name, batch, amount, created_at')
      .eq('verified', true)
      .eq('show_on_wall', true)
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({
      success: true,
      data: data || []
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch donations'
    });
  }
});

// GET /api/crowdfund/testimonials - Fetch approved testimonials
router.get('/testimonials', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('name, testimonial')
      .eq('approved', true)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;

    res.json({
      success: true,
      data: data || []
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch testimonials'
    });
  }
});

// POST /api/crowdfund/donations - Submit new donation
router.post('/donations', upload.single('payment_proof'), async (req, res) => {
  try {
    const { name, batch, email, phone, pan, amount, donor_type, show_on_wall, testimonial } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        error: 'Payment proof is required'
      });
    }

    // Upload file to Supabase Storage
    const fileExt = file.originalname.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `payment-proofs/${fileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('crowdfund')
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: false
      });

    if (uploadError) throw uploadError;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('crowdfund')
      .getPublicUrl(filePath);

    // Insert donation record
    const { data: donationData, error: donationError } = await supabase
      .from('donations')
      .insert([{
        name,
        batch: batch || null,
        email,
        phone,
        pan: pan || null,
        amount: parseFloat(amount),
        donor_type,
        payment_proof_url: publicUrl,
        show_on_wall: show_on_wall === 'true',
        verified: false
      }])
      .select()
      .single();

    if (donationError) throw donationError;

    // If testimonial provided, insert it
    if (testimonial && testimonial.trim()) {
      await supabase
        .from('testimonials')
        .insert([{
          name,
          testimonial: testimonial.trim(),
          approved: false
        }]);
    }

    res.json({
      success: true,
      message: 'Donation submitted successfully',
      data: donationData
    });
  } catch (error) {
    console.error('Error submitting donation:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit donation'
    });
  }
});

export default router;
