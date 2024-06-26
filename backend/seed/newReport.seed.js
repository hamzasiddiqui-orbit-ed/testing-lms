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
      userId: "667bd70a6e40760d44f8c80a",
      moduleId: "667c02116957d37bb03740bb",
      totalTime: 84,
      audioUrl: null,
      tanscription: "footprints in the snow have been unfailing provokers of sentiment ever since snow was first a white wonder in this drabcolored world of ours in a poetry book presented to one of our us by and on there was a poem by one wordsworth in which they stood out strongly with a picture all to themselves 2 but we didnt think very high either of the poem or of the sentiment footprints in the sand now were clear quite matter and we grasped crusoes attitude of mind much more easily than wordsworth excitement and mystery curiosity and suspense these were the only sentiments that tracks whether in sand or in snow were able to arouse in us",
      deviceName: "Occulus",
      quizScores: [
        {
            questionId: "6679241abd80f3ae7932426a",
            score: 10,
        },
        {
            questionId: "6679241abd80f3ae7932426b",
            score: 0,
        },
      ],
      eyeContact: {
        leftSplit: 9,
        rightSplit: 0,
        score: 2.440537,
        avatars: [
          {
            name: "Hassan A.",
            totalContact: 1.323029,
            qualityContact: 0.5456051,
            avgContactLen: 0.8247817,
          },
          {
            name: "Sana S.",
            totalContact: 1.199012,
            qualityContact: 0.4585415,
            avgContactLen: 1.529731,
          }
        ],
      },
      average_clarity: 50.666666666666664,
      total_pause_count: 22,
      average_wpm: 3.8333333333333335,
      total_pause_time: 11.22,
      total_bad_pause_count: 0,
      total_word_count: 113,
      clarity_score: 84,
      wpm_score: 0.0,
      pauses_score: 98.3,
      persuasion: 31.8,
      confidence: 30.3,
      authenticity: 12.6,
      collaboration: 40.0,
      engagement: 43.2,
      performance: 29.8,
      preparation: 13.6,
      pitch: {
        score: 0,
        mean: 0.03,
        list: [0.017, 0.03, 0.05],
      },
      loudness: {
        score: 86,
        mean: 55.6,
        list: [69.9, 71.3, 70.2],
      },
      repetitiveWords: {
        score: 60.6,
        count: 0,
        wordslist: [],
      },
      fillerSounds: {
        score: 60.6,
        count: 0,
        wordslist: [],
      },
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
