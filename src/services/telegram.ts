import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config/env';
import { PlanType } from '../types';

// Initialize Telegram bot (polling disabled - we only send)
let bot: TelegramBot | null = null;

function getBot(): TelegramBot {
  if (!bot) {
    const token = config.telegram.botToken;
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is not set');
    }
    bot = new TelegramBot(token, { polling: false });
  }
  return bot;
}

/**
 * Send a notification message to Telegram
 */
export async function notifyTelegram(message: string): Promise<void> {
  try {
    // Skip if no token configured (optional feature)
    if (!config.telegram.botToken) {
      console.log('⚠️ Telegram not configured, skipping notification');
      return;
    }
    
    const telegramBot = getBot();
    await telegramBot.sendMessage(config.telegram.chatId, message);
  } catch (error) {
    // Don't throw - Telegram notifications are not critical
    console.error('Failed to send Telegram notification:', error);
  }
}

/**
 * Notify about new paid customer
 */
export async function notifyNewPaidCustomer(
  planType: PlanType,
  isLifetime: boolean
): Promise<void> {
  const emoji = isLifetime ? '🏆💎' : '🎉';
  const planName = isLifetime ? 'LIFETIME' : 'Monthly';
  
  const message = `${emoji} New Paid Customer!

💰 Plan: ${planName}
📧 Welcome email sent ✅

${isLifetime ? '🔥 Lifetime customer acquired!' : ''}`;

  await notifyTelegram(message);
}

/**
 * Notify about error in the flow
 */
export async function notifyError(error: string): Promise<void> {
  const message = `⚠️ Paid SignUp Service Error

${error}

Check Railway logs for details.`;

  await notifyTelegram(message);
}

