const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: String,
    jobTitle: String,
    description: String,
    profilePic: Buffer,
    userType: {
      type: String,
      required: true,
      enum: ["Admin", "Manager", "Learner"],
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization"
    },
    assignedManager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    assignedModules: [
      {
        moduleId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Courses",
        },
        dueDate: Date,
        sessionsCompleted: Number,
        cumulativeScore: Number,
        isCompleted: Boolean,
      },
    ],
    firstLogin: {
      type: Boolean,
      Required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Password hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password matching
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
