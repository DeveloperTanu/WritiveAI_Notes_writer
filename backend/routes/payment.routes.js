const express = require("express");

const { createSession } = require("../controllers/payment.controller");

const { protect } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/checkout", protect, createSession);

module.exports = router;
