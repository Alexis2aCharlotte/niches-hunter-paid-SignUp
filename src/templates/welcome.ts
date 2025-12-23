import { PlanType } from '../types';
import { config } from '../config/env';

/**
 * Welcome email HTML template for paid customers
 * Personalized based on plan type (monthly vs lifetime)
 */
export function getWelcomeEmailHTML(planType: PlanType): string {
  const isLifetime = planType === 'lifetime';
  
  const heroTitle = isLifetime 
    ? "You're a Lifetime Hunter! 🏆"
    : "You're now a Pro Hunter! 🎯";
  
  const heroSubtitle = isLifetime
    ? "Forever access unlocked"
    : "Welcome to the Pro experience";
  
  const planBadge = isLifetime
    ? `<span style="font-size: 12px; font-weight: 700; color: #FFD700; letter-spacing: 2px">🏆 LIFETIME ACCESS</span>`
    : `<span style="font-size: 12px; font-weight: 700; color: #00FF88; letter-spacing: 2px">⭐ PRO MEMBER</span>`;
  
  const specialMessage = isLifetime
    ? `<tr>
        <td style="padding: 24px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; text-align: center; margin-bottom: 24px">
          <div style="font-size: 24px; margin-bottom: 8px">💎</div>
          <div style="font-size: 18px; color: #FFD700; font-weight: 700; margin-bottom: 8px">Lifetime Legend</div>
          <div style="font-size: 14px; color: #ccc; line-height: 1.6">You've secured unlimited access forever. No renewals, no limits, just pure hunting power.</div>
        </td>
      </tr>
      <tr><td style="height: 24px"></td></tr>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Welcome to Niches Hunter Pro</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Roboto,sans-serif">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0a0a0f; padding: 40px 16px">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px">
            <!-- Logo Badge -->
            <tr>
              <td style="text-align: center; padding-bottom: 32px">
                <div style="display: inline-block; background: linear-gradient(135deg, #111 0%, #1a1a2e 100%); padding: 12px 24px; border-radius: 100px; border: 1px solid #333">
                  ${planBadge}
                </div>
              </td>
            </tr>
            <!-- Main Card -->
            <tr>
              <td>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(180deg, #141420 0%, #0f0f18 100%); border-radius: 24px; overflow: hidden; border: 1px solid #222">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 48px 40px 32px; text-align: center">
                      <h1 style="margin: 0 0 12px; font-size: 32px; font-weight: 800; color: #fff; letter-spacing: -1px; line-height: 1.2">${heroTitle}</h1>
                      <p style="margin: 0; font-size: 17px; color: ${isLifetime ? '#FFD700' : '#00CC6A'}; font-weight: 600">${heroSubtitle}</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 0 40px 40px">
                      <!-- Thank you message -->
                      <p style="margin: 0 0 32px; font-size: 16px; line-height: 1.8; color: #aaa; text-align: center">Thank you for your purchase! You now have full access to all Pro features.</p>
                      
                      ${specialMessage}
                      
                      <!-- What you get -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px">
                        <tr>
                          <td style="padding: 16px; background: rgba(0,255,136,0.05); border-radius: 12px; border-left: 3px solid #00CC6A; margin-bottom: 8px">
                            <span style="font-size: 18px; margin-right: 12px">🔓</span>
                            <span style="color: #fff; font-size: 15px; font-weight: 600">Unlimited Niches</span>
                            <span style="color: #888; font-size: 14px"> – Browse 1000+ profitable opportunities</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 16px; background: rgba(0,255,136,0.05); border-radius: 12px; border-left: 3px solid #00CC6A">
                            <span style="font-size: 18px; margin-right: 12px">🎰</span>
                            <span style="color: #fff; font-size: 15px; font-weight: 600">Niche Roulette</span>
                            <span style="color: #888; font-size: 14px"> – Spin for random inspiration</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 16px; background: rgba(0,255,136,0.05); border-radius: 12px; border-left: 3px solid #00CC6A">
                            <span style="font-size: 18px; margin-right: 12px">✅</span>
                            <span style="color: #fff; font-size: 15px; font-weight: 600">Niche Validator</span>
                            <span style="color: #888; font-size: 14px"> – Validate your ideas instantly</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 16px; background: rgba(0,255,136,0.05); border-radius: 12px; border-left: 3px solid #00CC6A">
                            <span style="font-size: 18px; margin-right: 12px">💰</span>
                            <span style="color: #fff; font-size: 15px; font-weight: 600">Revenue Estimator</span>
                            <span style="color: #888; font-size: 14px"> – Calculate potential earnings</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 16px; background: rgba(0,255,136,0.05); border-radius: 12px; border-left: 3px solid #00CC6A">
                            <span style="font-size: 18px; margin-right: 12px">💾</span>
                            <span style="color: #fff; font-size: 15px; font-weight: 600">Save Niches</span>
                            <span style="color: #888; font-size: 14px"> – Build your personal collection</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 16px; background: rgba(0,255,136,0.05); border-radius: 12px; border-left: 3px solid #00CC6A">
                            <span style="font-size: 18px; margin-right: 12px">📈</span>
                            <span style="color: #fff; font-size: 15px; font-weight: 600">Daily Updates</span>
                            <span style="color: #888; font-size: 14px"> – Fresh niches every day</span>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- CTA Button -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td align="center">
                            <a href="${config.app.dashboardUrl}" style="display: inline-block; background: linear-gradient(135deg, #00CC6A 0%, #00FF88 100%); color: #000; font-size: 16px; font-weight: 700; text-decoration: none; padding: 16px 40px; border-radius: 12px">
                              🚀 Access Your Dashboard
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Support section -->
                  <tr>
                    <td style="padding: 0 40px 40px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: #1a1a2e; border-radius: 12px">
                        <tr>
                          <td style="padding: 20px; text-align: center">
                            <div style="font-size: 14px; color: #888; margin-bottom: 8px">Need help? We're here for you</div>
                            <a href="mailto:${config.app.supportEmail}" style="color: #00CC6A; text-decoration: none; font-weight: 600">${config.app.supportEmail}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Signature -->
                  <tr>
                    <td style="padding: 0 40px 40px; text-align: center">
                      <p style="margin: 0; font-size: 15px; color: #888">Happy hunting! 🚀</p>
                      <p style="margin: 4px 0 0; font-size: 13px; color: #666">The Niches Hunter Team</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="text-align: center; padding: 32px 16px">
                <a href="https://nicheshunter.app" style="color: #00CC6A; text-decoration: none; font-size: 13px; font-weight: 600">nicheshunter.app</a>
                <p style="margin: 12px 0 0; font-size: 11px; color: #666">You're receiving this because you purchased Niches Hunter Pro.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

