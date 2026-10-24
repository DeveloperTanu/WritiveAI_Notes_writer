
const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      enum: ["Free", "Pro", "Premium"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    monthlyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    yearlyPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: "usd",
      lowercase: true,
    },
    features: {
      type: [String],
      default: [],
    },
    highlighted: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    stripeMonthlyPriceId: {
      type: String,
      default: null,
    },
    stripeYearlyPriceId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    collection: "writiveplans",
  }
);

module.exports = mongoose.model("Plan", planSchema);