import { Resend } from 'resend';
import { config } from '../config/env';
import { getWelcomeEmailHTML } from '../templates/welcome';
import { PlanType } from '../types';

// Initialize Resend client (lazy loading to avoid crash on startup)
let resend: Resend | null = null;

function getResendClient(): Resend {
  if (!resend) {
    const apiKey = config.email.resendApiKey;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set in environment variables');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

/**
 * Send welcome email to new paid customer
 * Personalized based on plan type (monthly vs lifetime)
 */
export async function sendPaidWelcomeEmail(
  toEmail: string,
  planType: PlanType
): Promise<void> {
  const html = getWelcomeEmailHTML(planType);
  
  const subject = planType === 'lifetime'
    ? 'Welcome to Niches Hunter Pro – Lifetime Access! 🎯🏆'
    : 'Welcome to Niches Hunter Pro! 🎯';

  const { error } = await getResendClient().emails.send({
    from: config.email.fromEmail,
    to: toEmail,
    subject: subject,
    html: html,
  });

  if (error) {
    console.error('Error sending paid welcome email:', error);
    throw error;
  }
  
  console.log(`✅ Paid welcome email sent to ${toEmail} (${planType})`);
}

