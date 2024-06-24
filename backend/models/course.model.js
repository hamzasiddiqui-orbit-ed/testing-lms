const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    modules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
    }]
});

module.exports = mongoose.model("Course", courseSchema);