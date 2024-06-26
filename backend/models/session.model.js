const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },
    description: String,
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
      },
    quiz: {
      parameters: {
        numberOfQuestions: Number,
        easyPercentage: Number,
        mediumPercentage: Number,
        hardPercentage: Number,
      },
      questions: [mongoose.Schema.Types.ObjectId],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", sessionSchema);
