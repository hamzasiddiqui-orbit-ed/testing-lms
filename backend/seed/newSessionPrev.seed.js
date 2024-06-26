const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Module = require("../models/module.model");
const Course = require("../models/course.model");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const modules = [
      {
        name: "The Pitch Psyche",
        courseId: new mongoose.Types.ObjectId("66791e01e6f10256a0cb2b15"),
        description: "One of the test module for Orbit-Ed's LMS",
        organizationId: new mongoose.Types.ObjectId("66791a99feaad4b8f447558d"),
        questions: [
          {
            text: "What is main aspect of giving a killer pitch?",
            options: [
              "Capture info about the audience",
              "Just wing it",
              "Bombard the audience with info",
            ],
            correctOption: "Capture info about the audience",
          },
        ],
      },
      {
        courseId: new mongoose.Types.ObjectId("66791e01e6f10256a0cb2b15"),
        name: "Introduction to Communication",
        description: "This module covers the basics of communication.",
        organizationId: new mongoose.Types.ObjectId("66791a99feaad4b8f447558d"),
        questions: [
          {
            text: "What is communication?",
            options: [
              "A process of sharing information",
              "A way to confuse people",
              "An art form",
              "A science",
            ],
            correctAnswer: "A process of sharing information",
          },
          {
            text: "Which is a key component of effective communication?",
            options: ["Clarity", "Ambiguity", "Noise", "Guesswork"],
            correctAnswer: "Clarity",
          },
        ],
      },
      {
        courseId: new mongoose.Types.ObjectId("66791e01e6f10256a0cb2b15"),
        name: "Verbal Communication",
        description: "This module delves into verbal communication techniques.",
        organizationId: new mongoose.Types.ObjectId("66791a99feaad4b8f447558d"),
        questions: [
          {
            text: "What is verbal communication?",
            options: [
              "Communication using words",
              "Communication using body language",
              "Communication using signs",
              "Communication using silence",
            ],
            correctAnswer: "Communication using words",
          },
          {
            text: "Which is an example of verbal communication?",
            options: ["Speaking", "Nodding", "Waving", "Writing"],
            correctAnswer: "Speaking",
          },
        ],
      },
      {
        courseId: new mongoose.Types.ObjectId("66791e01e6f10256a0cb2b15"),
        name: "Non-Verbal Communication",
        description: "This module explores non-verbal communication methods.",
        organizationId: new mongoose.Types.ObjectId("66791a99feaad4b8f447558d"),
        questions: [
          {
            text: "What is non-verbal communication?",
            options: [
              "Communication without words",
              "Communication using only text",
              "Communication through phone calls",
              "Communication through emails",
            ],
            correctAnswer: "Communication without words",
          },
          {
            text: "Which is a form of non-verbal communication?",
            options: ["Gestures", "Talking", "Listening", "Reading"],
            correctAnswer: "Gestures",
          },
        ],
      },
    ];

    console.log("about to save.");
    const savedModules = await Module.insertMany(modules);

    // Extract module IDs to update the course document
    const moduleIds = savedModules.map(module => module._id);

    // Find the course and update its modules array
    await Course.findByIdAndUpdate(
      "66791e01e6f10256a0cb2b15",
      { $push: { modules: { $each: moduleIds } } },
      { new: true, useFindAndModify: false }
    );

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
