const SessionReport = require("../models/sessionReport.model");
const mongoose = require("mongoose");

const getUserReports = async (req, res) => {
  const userId = req.body._id;

  if (!userId) {
    res.status(400).json("No userId provided!");
  }

  var query = {
    userId: mongoose.Types.ObjectId.createFromHexString(userId),
  };

  var projection = {
    moduleName: 1.0,
    totalScore: 1.0,
    totalTime: 1.0,
    createdAt: 1.0,
  };

  try {
    var result = await SessionReport.find(query, projection);

    console.log(result);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("No session reports found.");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getUserReport = async (req, res) => {
  const reportId = req.body._id;

  if (!reportId) {
    res.status(400).json("No reportId provided.");
  }

  var query = {
    _id: mongoose.Types.ObjectId.createFromHexString(reportId),
  };

  try {
    var result = await SessionReport.find(query);
    console.log(result);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("No report found.");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getUserReportsDetailed = async (req, res) => {
  const userId = req.body._id;

  if (!userId) {
    res.status(400).json("No userId provided!");
  }

  var query = {
    userId: mongoose.Types.ObjectId.createFromHexString(userId),
  };

  try {
    var result = await SessionReport.find(query);
    console.log(result);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json("No session reports found.");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getUserReports, getUserReport, getUserReportsDetailed };
