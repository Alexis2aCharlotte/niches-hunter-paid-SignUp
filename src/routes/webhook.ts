import { Router, Request, Response } from 'express';
import { sendPaidWelcomeEmail } from '../services/email';
import { notifyNewPaidCustomer, notifyError } from '../services/telegram';
import { PlanType } from '../types';

export const webhookRouter = Router();

/**
 * POST /webhook/new-customer
 * Called by Supabase Database Webhook when a new customer is added
 */
webhookRouter.post('/new-customer', async (req: Request, res: Response) => {
  try {
    // Supabase webhook sends the record in different formats
    // It can be { record: {...} } or { type: 'INSERT', record: {...} } or just the record directly
    const payload = req.body;
    
    console.log('📥 Webhook received:', JSON.stringify(payload, null, 2));
    
    // Extract email and plan_type from payload
    const record = payload.record || payload;
    const email = record.email;
    const planType: PlanType = record.plan_type || 'monthly';

    // Validate email
    if (!email || typeof email !== 'string') {
      console.error('❌ Invalid payload - no email found:', payload);
      return res.status(400).json({ 
        error: 'Email is required',
        received: payload 
      });
    }

    console.log(`📧 New paid customer: ${email} (${planType})`);

    // Respond immediately (don't make Supabase wait)
    res.status(200).json({ 
      success: true, 
      message: 'Customer received, sending welcome email...' 
    });

    // Process in background
    processNewCustomer(email, planType).catch(err => {
      console.error(`❌ Error processing customer ${email}:`, err);
    });

  } catch (error) {
    console.error('❌ Webhook error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Process new customer in background
 */
async function processNewCustomer(email: string, planType: PlanType): Promise<void> {
  try {
    // 1. Send personalized welcome email
    console.log(`📨 Sending ${planType} welcome email to ${email}...`);
    await sendPaidWelcomeEmail(email, planType);
    console.log(`✅ Welcome email sent to ${email}`);

    // 2. Notify via Telegram
    await notifyNewPaidCustomer(planType, planType === 'lifetime');
    console.log(`✅ Telegram notification sent`);

  } catch (error) {
    console.error(`❌ Error in processNewCustomer:`, error);
    await notifyError(`Failed to send welcome email to paid customer`);
    throw error;
  }
}

