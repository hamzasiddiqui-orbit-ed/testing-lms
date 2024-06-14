const express = require("express");
const { authUser, logoutUser } = require("../controllers/user.controller");

const router = express.Router();

router.post('/login', authUser);
router.post('/logout', logoutUser);

module.exports = router;