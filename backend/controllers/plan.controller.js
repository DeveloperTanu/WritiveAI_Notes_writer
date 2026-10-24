
const Plan = require("../models/plan.model");

const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ isActive: { $ne: false } })
      .select(
        "name slug description monthlyPrice yearlyPrice currency features highlighted"
      )
      .sort({ monthlyPrice: 1 })
      .lean();

    const formattedPlans = plans.map((plan) => ({
      ...plan,
      monthly: {
        price: `${plan.currency === "usd" ? "$" : plan.currency.toUpperCase() + " "}${plan.monthlyPrice}`,
        period: plan.slug === "free" ? "forever" : "per month",
      },
      yearly: {
        price: `${plan.currency === "usd" ? "$" : plan.currency.toUpperCase() + " "}${plan.yearlyPrice}`,
        period: plan.slug === "free" ? "forever" : "per year",
      },
      button:
        plan.slug === "free"
          ? "Get Started"
          : `Get ${plan.name}`,
    }));

    res.status(200).json(formattedPlans);
  } catch (error) {
    console.error("Fetch plans error:", error.message);
    res.status(500).json({ message: "Unable to fetch plans." });
  }
};

module.exports = { getPlans };
