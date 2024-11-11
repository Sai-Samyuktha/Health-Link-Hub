const express = require("express");
const {
  loginUser,
  registerUser,
  singleUser,
  getAllUsers,
} = require("../controllers/PatientController");

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/singleUser", singleUser);

router.get("/allUsers", getAllUsers);

module.exports = router;
