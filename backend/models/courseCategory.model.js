const mongoose = require("mongoose");

const courseCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: String,
        tags: [String],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Course_Category", courseCategorySchema);