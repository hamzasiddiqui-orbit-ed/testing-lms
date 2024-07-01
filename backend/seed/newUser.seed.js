const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../models/user.model");
const connectDB = require("../config/db");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const users = [
      {
        username: "test_manager",
        password: "password",
        email: "test_manager@email.com",
        name: "Test Manager",
        phone: "03333333333",
        job_title: "Manager",
        description: "Manage stuff.",
        profile_pic: null,
        user_type: "Manager",
        organization_id: "668281bdb6dd30385357e088",
        assigned_manager: "66828be70b7d4ce9015b2bc7",
        assigned_modules: {
          module_id: null,
          due_date: null,
          sessions_completed: null,
          cumulative_score: null,
          is_completed: null,
        },
        first_login: true,
      },
      {
        username: "test_learner",
        password: "password",
        email: "test_learner@email.com",
        name: "Test Learner",
        phone: "03333333333",
        job_title: "Student",
        description: "BS Computer Science.",
        profile_pic: null,
        user_type: "Learner",
        organization_id: "668281bdb6dd30385357e088",
        assigned_manager: "66828be70b7d4ce9015b2bc7",
        assigned_modules: {
          module_id: "66828b6f44dc507fe8f2f0bd",
          due_date: "2024-08-12",
          sessions_completed: null,
          cumulative_score: null,
          is_completed: false,
        },
        first_login: true,
      },
      {
        username: "root",
        password: "password",
        email: "root@email.com",
        name: "Root User",
        phone: "03333333333",
        job_title: "Root",
        description: "Super User.",
        profile_pic: null,
        user_type: "Root",
        organization_id: null,
        assigned_manager: null,
        assigned_modules: {
          module_id: null,
          due_date: null,
          sessions_completed: null,
          cumulative_score: null,
          is_completed: null,
        },
        first_login: true,
      },
    ];

    console.log("about to save.");
    await User.create(users);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
