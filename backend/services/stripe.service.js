
const stripe = require("../config/stripe.config");
const Plan = require("../models/plan.model");

const createCheckoutSession = async (user, planSlug, billing) => {
  if (!["monthly", "yearly"].includes(billing)) {
    throw new Error("Invalid billing interval");
  }

  const plan = await Plan.findOne({
    slug: planSlug,
    isActive: true,
  });

  if (!plan) {
    throw new Error("Plan not found");
  }

  if (plan.slug === "free") {
    throw new Error("The Free plan does not require checkout");
  }

  const priceId =
    billing === "monthly"
      ? plan.stripeMonthlyPriceId
      : plan.stripeYearlyPriceId;

  if (!priceId) {
    throw new Error("Stripe price is not configured for this plan");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",

    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],

    success_url:
      `${process.env.FRONTEND_URL}/payment/success` +
      "?session_id={CHECKOUT_SESSION_ID}",

    cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,

    client_reference_id: user.id,

    metadata: {
      planId: plan._id.toString(),
      planSlug: plan.slug,
      billing,
    },

    subscription_data: {
      metadata: {
        planId: plan._id.toString(),
        planSlug: plan.slug,
        billing,
      },
    },
  });

  return session;
};

module.exports = { createCheckoutSession };
