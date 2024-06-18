const express = require("express");
const {logInUser,registerUser} = require("../controllres/loginUser.js");

const router = express.Router();

router.post("/login", logInUser);
router.post("/register", registerUser);

module.exports = router;
