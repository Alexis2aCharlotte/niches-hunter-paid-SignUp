import { PlanType } from '../types';
import { config } from '../config/env';

/**
 * Welcome email HTML template for paid customers
 * Same design as free signup, adapted for Pro users
 */
export function getWelcomeEmailHTML(planType: PlanType): string {
  const isLifetime = planType === 'lifetime';
  
  const planBadge = isLifetime
    ? '🏆 LIFETIME HUNTER'
    : '⭐ PRO HUNTER';
  
  const heroTitle = isLifetime 
    ? "You're a Legend! 🏆"
    : "You're now Pro! 🎯";
  
  const heroSubtitle = isLifetime
    ? "Forever access unlocked"
    : "Welcome to the Pro experience";

  const accentColor = isLifetime ? '#FFD700' : '#00CC6A';
  
  const lifetimeBadge = isLifetime ? `
                      <!-- Lifetime Special Badge -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px">
                        <tr>
                          <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border-radius: 16px; padding: 24px; text-align: center">
                            <div style="font-size: 24px; margin-bottom: 8px">💎</div>
                            <div style="font-size: 16px; color: #FFD700; font-weight: 700; margin-bottom: 4px">Lifetime Legend</div>
                            <div style="font-size: 13px; color: #ccc;">No renewals, no limits, forever yours</div>
                          </td>
                        </tr>
                      </table>` : '';

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Welcome to Niches Hunter Pro</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f5f7; font-family: -apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Roboto,sans-serif">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f7; padding: 40px 16px">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px">
            <!-- Logo Badge -->
            <tr>
              <td style="text-align: center; padding-bottom: 32px">
                <div style="display: inline-block; background: #111; padding: 10px 20px; border-radius: 100px">
                  <span style="font-size: 12px; font-weight: 700; color: ${accentColor}; letter-spacing: 2px">${planBadge}</span>
                </div>
              </td>
            </tr>
            <!-- Main Card -->
            <tr>
              <td>
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 2px 40px rgba(0,0,0,0.08)">
                  <!-- Header -->
                  <tr>
                    <td style="padding: 48px 40px 32px; text-align: center">
                      <h1 style="margin: 0 0 12px; font-size: 36px; font-weight: 800; color: #111; letter-spacing: -1.5px; line-height: 1.1">${heroTitle}</h1>
                      <p style="margin: 0; font-size: 17px; color: ${accentColor}; font-weight: 600">${heroSubtitle}</p>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 0 40px 40px">
                      <!-- Intro -->
                      <p style="margin: 0 0 32px; font-size: 16px; line-height: 1.8; color: #444; text-align: center">Thank you for your purchase! You now have full access to all Pro features.</p>
                      ${lifetimeBadge}
                      <!-- Stats Row -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px; background: #f8f9fa; border-radius: 16px; overflow: hidden">
                        <tr>
                          <td width="33%" style="text-align: center; padding: 24px 8px; border-right: 1px solid #eee">
                            <div style="font-size: 32px; font-weight: 800; color: ${accentColor}; margin-bottom: 4px">1000+</div>
                            <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600">Niches</div>
                          </td>
                          <td width="33%" style="text-align: center; padding: 24px 8px; border-right: 1px solid #eee">
                            <div style="font-size: 32px; font-weight: 800; color: ${accentColor}; margin-bottom: 4px">∞</div>
                            <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600">Access</div>
                          </td>
                          <td width="33%" style="text-align: center; padding: 24px 8px">
                            <div style="font-size: 32px; font-weight: 800; color: ${accentColor}; margin-bottom: 4px">5</div>
                            <div style="font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px; font-weight: 600">Pro Tools</div>
                          </td>
                        </tr>
                      </table>
                      <!-- Features -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px">
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px; margin-bottom: 8px">
                            <span style="font-size: 18px; margin-right: 12px">🔓</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Unlimited Niches</span>
                            <span style="color: #888; font-size: 14px"> browse 1000+ opportunities</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">🎰</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Niche Roulette</span>
                            <span style="color: #888; font-size: 14px"> spin for random inspiration</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">✅</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Niche Validator</span>
                            <span style="color: #888; font-size: 14px"> validate your ideas instantly</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">💰</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Revenue Estimator</span>
                            <span style="color: #888; font-size: 14px"> calculate potential earnings</span>
                          </td>
                        </tr>
                        <tr><td style="height: 8px"></td></tr>
                        <tr>
                          <td style="padding: 14px 16px; background: #f8f9fa; border-radius: 12px">
                            <span style="font-size: 18px; margin-right: 12px">💾</span>
                            <span style="color: #111; font-size: 15px; font-weight: 600">Save Niches</span>
                            <span style="color: #888; font-size: 14px"> build your personal collection</span>
                          </td>
                        </tr>
                      </table>
                      <!-- CTA -->
                      <table border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                          <td style="text-align: center">
                            <a href="${config.app.dashboardUrl}" style="display: inline-block; background: #111; color: #fff; font-size: 16px; font-weight: 700; text-decoration: none; padding: 16px 40px; border-radius: 12px">
                              🚀 Access Your Dashboard
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Support -->
                  <tr>
                    <td style="padding: 0 40px 40px">
                      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: #f8f9fa; border-radius: 12px">
                        <tr>
                          <td style="padding: 16px; text-align: center">
                            <span style="font-size: 14px; color: #666">Need help? </span>
                            <a href="mailto:${config.app.supportEmail}" style="color: ${accentColor}; text-decoration: none; font-weight: 600">${config.app.supportEmail}</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Signature -->
                  <tr>
                    <td style="padding: 0 40px 40px; text-align: center">
                      <p style="margin: 0; font-size: 15px; color: #666">Happy hunting 🚀</p>
                      <p style="margin: 4px 0 0; font-size: 13px; color: #888">The Niches Hunter Team</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="text-align: center; padding: 32px 16px">
                <a href="https://nicheshunter.app" style="color: #00CC6A; text-decoration: none; font-size: 13px; font-weight: 600">nicheshunter.app</a>
                <p style="margin: 12px 0 0; font-size: 11px; color: #999">You purchased Niches Hunter Pro. Smart move.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
