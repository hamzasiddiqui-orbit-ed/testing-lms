const mongoose = require("mongoose");

const sessionReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moduleName: {
      type: String,
      required: true,
    },
    deviceName: String,
    totalWordCount: Number,
    totalTime: Number,
    totalScore: Number,
    audioUrl: String,
    transcription: String,
    quizScore: [
      {
        questionId: mongoose.Schema.Types.ObjectId,
        score: Number,
      },
    ],
    parameters: {
      base: {
        pitch: {
          score: Number,
          mean: Number,
          list: [Number],
        },
        loudness: {
          score: Number,
          mean: Number,
          list: [Number],
        },
        repetitiveWords: {
          score: Number,
          count: Number,
          list: [String],
        },
        fillerSounds: {
          score: Number,
          count: Number,
          list: [String],
        },
        pauses: {
          time: Number,
          badCount: Number,
          totalCount: Number,
          score: Number,
        },
        clarity: {
          mean: Number,
          score: Number,
        },
        wpm: {
          mean: Number,
          score: Number,
        },
        eyeContact: {
          leftSplit: Number,
          rightSplit: Number,
          score: Number,
          avatars: [
            {
              name: String,
              totalContact: Number,
              qualityContact: Number,
              avgContactLen: Number,
            },
          ],
        },
      },
      derived: {
        persuasion: Number,
        confidence: Number,
        authenticity: Number,
        collaboration: Number,
        engagement: Number,
        performance: Number,
        preparation: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("sessionReport", sessionReportSchema);
