import dotenv from 'dotenv';

// Load .env file
dotenv.config();

/**
 * Environment configuration for Paid SignUp service
 */
export const config = {
  // Server
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Supabase (same var names as SignUp project)
  supabase: {
    url: process.env.SUPABASE_URL || '',
    serviceKey: process.env.SUPABASE_SERVICE_KEY || '',
  },
  
  // Email
  email: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    fromEmail: process.env.EMAIL_FROM || 'support@arianeconcept.fr',
  },
  
  // Telegram
  telegram: {
    botToken: process.env.TELEGRAM_BOT_TOKEN || '',
    chatId: process.env.TELEGRAM_CHAT_ID || '1791080209',
  },
  
  // App URLs
  app: {
    dashboardUrl: process.env.DASHBOARD_URL || 'https://nicheshunter.app/login',
    supportEmail: process.env.SUPPORT_EMAIL || 'support@arianeconcept.fr',
  },
};

/**
 * Validate required environment variables
 */
export function validateEnv(): void {
  const required = [
    'SUPABASE_URL',
    'SUPABASE_SERVICE_KEY',
    'RESEND_API_KEY',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(key => console.error(`   - ${key}`));
    process.exit(1);
  }
  
  console.log('✅ Environment variables validated');
}
