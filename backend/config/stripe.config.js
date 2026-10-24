
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const Stripe = require("stripe");

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "STRIPE_SECRET_KEY is missing. Check your backend .env file."
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;
