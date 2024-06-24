const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Course = require("../models/course.model");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const course = new Course({
      name: "Communication-101 Test",
      description: "Orbit-Ed's test course for development",
      organizationId: new mongoose.Types.ObjectId("66791a99feaad4b8f447558d"),
    });

    console.log('about to save.');
    await course.save();

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
