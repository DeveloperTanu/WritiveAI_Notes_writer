
const { createCheckoutSession } = require("../services/stripe.service");

const createSession = async (req, res) => {
  try {
    const { planSlug, billing } = req.body;

    const session = await createCheckoutSession(
      req.user,
      planSlug,
      billing
    );

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error.message);

    const statusCode =
      error.message === "Plan not found" ? 404 :
      error.message === "Invalid billing interval" ||
      error.message === "The Free plan does not require checkout" ? 400 :
      500;

    res.status(statusCode).json({
      message: "Unable to create checkout session.",
    });
  }
};

module.exports = { createSession };