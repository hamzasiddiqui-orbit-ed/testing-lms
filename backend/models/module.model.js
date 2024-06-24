const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    description: {
        type: String,
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    questions: [{
        text: {
            type: String,
        },
        options: [{
            type: String,
        }],
        correctOption: {
            type: String,
        },
    }],
});

module.exports = mongoose.model("Module", moduleSchema);