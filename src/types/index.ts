/**
 * Customer record from Supabase
 */
export interface Customer {
  id: string;
  email: string;
  user_id: string | null;
  stripe_customer_id: string;
  stripe_subscription_id: string | null;
  plan_type: 'monthly' | 'lifetime';
  status: 'active' | 'canceled' | 'past_due';
  current_period_start: string | null;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  canceled_at: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Plan types for personalization
 */
export type PlanType = 'monthly' | 'lifetime';
