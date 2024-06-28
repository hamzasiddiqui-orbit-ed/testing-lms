const express = require("express");
const {
  getUserReports,
  getUserReport,
  getUserReportsDetailed,
} = require("../controllers/reports.controller");

const router = express.Router();

router.get("/getUserReports", getUserReports);
router.get("/getUserReport", getUserReport);
router.get("/getUserReportsDetailed", getUserReportsDetailed);

module.exports = router;
