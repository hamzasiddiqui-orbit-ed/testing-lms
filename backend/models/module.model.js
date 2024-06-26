const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    organizationId: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Module", moduleSchema);
