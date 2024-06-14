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
    res.cookie('jwt', generateToken(user._id), {
      httpOnly: true,
      // Only secure cookies in production mode
      secure: process.env.NODE_ENV !== 'development',
      // Prevent CSRF attacks
      sameSite: 'Strict',
      // Max age = 24 hours
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      name: user.name,
      jobTitle: user.jobTitle,
      userClass: user.userClass,
    });
  } else {
    return res.status(401).json({ message: "Invalid credentials. Please try again." });
  }
};

const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    // Expire the cookie
    expires: new Date(0)
  });
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { authUser, logoutUser };