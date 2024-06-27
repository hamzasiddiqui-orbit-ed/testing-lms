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
        jobTitle: "Manager",
        description: "Manage stuff.",
        userType: "Manager",
        organizationId: "667bd4e9919333220c1f82bb",
        assignedManager: "667d3b4aaa9add8fdbb78df2",
        assignedModules: {
          moduleId: null,
          dueDate: null,
          sessionsCompleted: null,
          cumulativeScore: null,
          isCompleted: null,
        },
        firstLogin: true,
      },
      {
        username: "test_learner",
        password: "password",
        email: "test_learner@email.com",
        name: "Test Learner",
        phone: "03333333333",
        jobTitle: "Student",
        description: "BS Computer Science.",
        userType: "Learner",
        organizationId: "667bd4e9919333220c1f82bb",
        assignedManager: "667d3b4aaa9add8fdbb78df2",
        assignedModules: {
          moduleId: "667d3d0dc44082f596cdd66a",
          dueDate: "2024-08-12",
          sessionsCompleted: null,
          cumulativeScore: null,
          isCompleted: false,
        },
        firstLogin: true,
      },
    ];

    console.log("about to save.");
    await User.insertMany(users);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
