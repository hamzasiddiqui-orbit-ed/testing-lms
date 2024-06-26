const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Module = require("../models/module.model");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const module = new Module({
      name: "Communication-101 Test",
      description: "Orbit-Ed's test course for development",
      organizationId: "667bd4e9919333220c1f82bb",
      createdBy: null,
      questionPool:[
        {
          questionType: "T/F",
          questionText: "To give a killer pitch first capture, capture info about your audience first.",
          options: ["True", "False"],
          correctOption: "True",
          difficulty: "medium",
        },
        {
          questionType: "MCQ",
          questionText: "What is communication?",
          options: [
            "A process of sharing information",
            "A way to confuse people",
            "An art form",
            "A science",
          ],
          correctOption: "A process of sharing information",
          difficulty: "easy",
        },
        {
          questionType: "MCQ",
          questionText: "Which is a key component of effective communication?",
          options: ["Clarity", "Ambiguity", "Noise", "Guesswork"],
          correctOption: "Clarity",
          difficulty: "hard",
        },
        {
          questionType: "MCQ",
          questionText: "What is verbal communication?",
          options: [
            "Communication using words",
            "Communication using body language",
            "Communication using signs",
            "Communication using silence",
          ],
          correctOption: "Communication using words",
          difficulty: "easy",
        },
        {
          questionType: "T/F",
          questionText: "Speaking is an example of verbal communication?",
          options: ["True", "False"],
          correctOption: "True",
          difficulty: "easy",
        },
        {
          questionType: "MCQ",
          questionText: "What is non-verbal communication?",
          options: [
            "Communication without words",
            "Communication using only text",
            "Communication through phone calls",
            "Communication through emails",
          ],
          correctOption: "Communication without words",
          difficulty: "medium",
        },
        {
          questionType: "MCQ",
          questionText: "Which is a form of non-verbal communication?",
          options: ["Gestures", "Talking", "Listening", "Reading"],
          correctOption: "Gestures",
          difficulty: "hard",
        },
      ],
      quiz: {
        parameters: {
          numberOfQuestions: null,
          easyPercentage: null,
          mediumPercentage: null,
          hardPercentage: null,
        },
        questions: null,
      },
    });

    console.log('about to save.');
    await module.save();

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
