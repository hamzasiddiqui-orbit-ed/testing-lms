const express = require("express");
const { authUser } = require("../controllers/user.controller");

const router = express.Router();

router.post('/login', authUser);

module.exports = router;