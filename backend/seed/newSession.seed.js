const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Session = require("../models/session.model");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const sessions = [
      {
        name: "The Pitch Psyche",
        moduleId: "667bdb2d6b88b4293a39c727",
        description: "One of the test modules for Orbit-Ed's LMS",
        organizationId: "667bd4e9919333220c1f82bb",
        quiz: {
          parameters: {
            numberOfQuestions: null,
            easyPercentage: null,
            mediumPercentage: null,
            hardPercentage: null,
          },
          questions: null
        }
      },
      {
        name: "Introduction to Communication",
        moduleId: "667bdb2d6b88b4293a39c727",
        description: "This module covers the basics of communication.",
        organizationId: "667bd4e9919333220c1f82bb",
        quiz: {
          parameters: {
            numberOfQuestions: null,
            easyPercentage: null,
            mediumPercentage: null,
            hardPercentage: null,
          },
          questions: null
        }
      },
      {
        name: "Verbal Communication",
        moduleId: "667bdb2d6b88b4293a39c727",
        description: "This module delves into verbal communication techniques.",
        organizationId: "667bd4e9919333220c1f82bb",
        quiz: {
          parameters: {
            numberOfQuestions: null,
            easyPercentage: null,
            mediumPercentage: null,
            hardPercentage: null,
          },
          questions: null
        }
      },
      {
        name: "Non-Verbal Communication",
        moduleId: "667bdb2d6b88b4293a39c727",
        description: "This module explores non-verbal communication methods.",
        organizationId: "667bd4e9919333220c1f82bb",
        quiz: {
          parameters: {
            numberOfQuestions: null,
            easyPercentage: null,
            mediumPercentage: null,
            hardPercentage: null,
          },
          questions: null
        }
      },
    ];

    console.log("about to save.");
    await Session.insertMany(sessions);
    
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
