const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user.model");
const connectDB = require("../config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const user = new User({
      username: "test_learner",
      password: "password",
      email: "test_learner@email.com",
      name: "Test Learner",
      phone: "03333333333",
      jobTitle: "Student",
      description: "Student BS Software Eng.",
      userType: "Learner",
      organizationId: "667bd4e9919333220c1f82bb",
      assignedManager: "667bd584851c2024ca870ebd",
      assignedModules: null,
      firstLogin: true,
    });

    console.log('about to save.');
    await user.save();

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
