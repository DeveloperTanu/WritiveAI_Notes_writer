const express = require("express");
const cors = require("cors");
const paymentRoutes = require("../routes/payment.routes");
const cookieParser = require("cookie-parser");
const planRoutes = require("../routes/plan.routes");

const app = express();
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.PUBLIC_URL,
  "http://localhost:3000",
].filter(Boolean);

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed by CORS."));
    },
    credentials: true,
  })
);

app.use("/api/plans", planRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Server is online");
});

module.exports = { app };
