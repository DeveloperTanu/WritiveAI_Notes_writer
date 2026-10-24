const express = require("express");
const { getPlans } = require("../controllers/plan.controller");

const router = express.Router();

router.get("/", getPlans);

module.exports = router;