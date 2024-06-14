const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/user.model");

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
};

const authUser = async (req, res) => {
  const { username, password } = req.body;
  console.log('authUser called: ', username, password);

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: "User does not exit." });
  }

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      name: user.name,
      jobTitle: user.jobTitle,
      userClass: user.userClass,
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials. Please try again." });
  }
};

module.exports = { authUser };