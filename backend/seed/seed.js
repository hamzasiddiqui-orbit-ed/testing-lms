const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user.model");
const connectDB = require("../config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const user = new User({
      username: "test_admin",
      password: "password",
      email: "test_admin@email.com",
      name: "Test Admin",
      phone: "03333333333",
      jobTitle: "Administrator",
      description: "Administers stuff.",
      userClass: "Admin",
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
