const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Organization = require("../models/organization.model");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const organization = new Organization({
      name: "Orbit-Ed",
    });

    console.log('about to save.');
    await organization.save();

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
