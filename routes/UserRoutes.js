const express = require("express");
const {
  loginUser,
  registerUser,
  singleUser,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/singleUser", singleUser);

module.exports = router;
