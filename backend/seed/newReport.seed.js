const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
// const Course = require("../models/course.model");
const Report = require("../models/report.model");

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const report = new Report({
      userId: new mongoose.Types.ObjectId("666c2b04ca8f8648fd6b2d98"),
      dateTime: new Date("2024-05-11T20:14:14.796Z"),
      moduleId: new mongoose.Types.ObjectId("6679241abd80f3ae79324269"),
      courseId: new mongoose.Types.ObjectId("66791e01e6f10256a0cb2b15"),
      sessionTime: 346,
      tanscription: "footprints in the snow have been unfailing provokers of sentiment ever since snow was first a white wonder in this drabcolored world of ours in a poetry book presented to one of our us by and on there was a poem by one wordsworth in which they stood out strongly with a picture all to themselves 2 but we didnt think very high either of the poem or of the sentiment footprints in the sand now were clear quite matter and we grasped crusoes attitude of mind much more easily than wordsworth excitement and mystery curiosity and suspense these were the only sentiments that tracks whether in sand or in snow were able to arouse in us",
      deviceName: "Occulus",
      quizScores: [
        {
            questionId: new mongoose.Types.ObjectId("6679241abd80f3ae7932426a"),
            score: 10,
        },
        {
            questionId: new mongoose.Types.ObjectId("6679241abd80f3ae7932426b"),
            score: 0,
        },
      ],
      parameters: {
        derived: {
            persuasion: 46,
            confidence: 46,
            authenticity: 53,
            collaboration: 65,
            engagement: 56,
            performance: 52,
            preparation: 14,
        },
        base: {
            leftSplit: 3,
            rightSplit: 5,
            eyeContact: 12.13522,
            averageClarity: 65,
            fillerSounds: {
                score: 75,
                count: 1,
                list: [1],
            },
            totalPauseCount: 3,
            totalBadPauseCount: 0,
            totalPauseTime: 4,
            pauseScore: 97,
            averageWPM: 82,
            totalFillerWordCount: 1,
            totalWordCount: 41,
            fillerSoundScore: 71,
            clarityScore: 65,
            repititiveWords: {
                score: 4.11446,
                count: 3,
                list: [1, 1, 1],
            },
            wpmScore: 64,
            eyeContactDetails: [
                {
                    name: "Sarah H.",
                    contract: 8.105,
                    score: 12.13522,
                    avgLength: 1.497244,
                },
                {
                    name: "Umer F.",
                    contract: 4.9105,
                    score: 5.73522,
                    avgLength: 1.117244,
                },
                {
                    name: "Sana S.",
                    contract: 1.1995,
                    score: 0.43522,
                    avgLength: 1.57244,
                }
            ]
        }
      }
    });

    console.log("about to save.");
    await report.save();

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
