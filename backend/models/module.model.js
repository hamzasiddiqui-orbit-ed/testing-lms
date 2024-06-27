const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    questionPool: [
      {
        questionType: {
          type: String,
          required: true,
          enum: ["MCQ", "T/F", "open-ended"],
        },
        questionText: {
          type: String,
          required: true,
        },
        options: [String],
        correctOption: String,
        difficulty: {
          type: String,
          enum: ["easy", "medium", "hard"],
        },
      },
    ],
    quiz: {
      parameters: {
        numberOfQuestions: Number,
        easyPercentage: Number,
        mediumPercentage: Number,
        hardPercentage: Number,
      },
      questions: [mongoose.Schema.Types.ObjectId],
    },
    completionCriteria: {
      numberOfSessions: Number,
      cumulativeScore: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Module", moduleSchema);
