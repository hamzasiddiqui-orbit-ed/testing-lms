const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
    moduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    sessionTime: {
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
    quizScores: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question',
        },
        score: {
            type: Number
        }
    }],
    parameters: {
        derived: {
            persuasion: {
                type: Number,
            },
            confidence: {
                type: Number,
            },
            authenticity: {
                type: Number,
            },
            collaboration: {
                type: Number,
            },
            engagement: {
                type: Number,
            },
            performance: {
                type: Number,
            },
            preparation: {
                type: Number,
            },
        },
        base: {
            leftSplit: {
                type: Number,
            },
            rightSplit: {
                type: Number,
            },
            eyeContact: {
                type: Number,
            },
            averageClarity: {
                type: Number,
            },
            fillerSounds: {
                score: {
                    type: Number,
                },
                count: {
                    type: Number,
                },
                list :[{
                    type: Number,
                }],
            },
            totalPauseCount: {
                type: Number,
            },
            totalBadPauseCount: {
                type: Number,
            },
            totalPauseTime: {
                type: Number,
            },
            pauseScore: {
                type: Number,
            },
            averageWPM: {
                type: Number,
            },
            totalFillerWordCount: {
                type: Number,
            },
            totalWordCount: {
                type: Number,
            },
            fillerSoundScore: {
                type: Number,
            },
            clarityScore: {
                type: Number,
            },
            repititiveWords: {
                score: {
                    type: Number,
                },
                count: {
                    type: Number,
                },
                list :[{
                    type: Number,
                }],
            },
            wpmScore: {
                type: Number,
            },
            eyeContactDetails: [{
                name: {
                    type: String,
                },
                contact: {
                    type: Number,
                },
                score: {
                    type: Number,
                },
                avgLength: {
                    type: Number,
                },
            }],
        },
    },
});

module.exports = mongoose.model("Report", reportSchema);