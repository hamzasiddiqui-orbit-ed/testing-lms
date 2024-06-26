const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
    totalTime: {
      type: Number,
      required: true,
    },
    audioUrl: {
      type: String,
    },
    transcription: {
      type: String,
    },
    deviceName: {
      type: String,
    },
    quizScores: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
        },
        score: {
          type: Number,
        },
      },
    ],
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
    average_clarity: Number,
    total_pause_count: Number,
    average_wpm: Number,
    total_pause_time: Number,
    total_bad_pause_count: Number,
    total_word_count: Number,
    clarity_score: Number,
    wpm_score: Number,
    pauses_score: Number,
    persuasion: Number,
    confidence: Number,
    authenticity: Number,
    collaboration: Number,
    engagement: Number,
    performance: Number,
    preparation: Number,
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
      wordslist: [String],
    },
    fillerSounds: {
      score: Number,
      count: Number,
      wordslist: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
