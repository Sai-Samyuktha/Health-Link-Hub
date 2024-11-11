const express = require("express");
const {
  createBlood,
  delBlood,
  getAllBloods,
  donateBlood,
} = require("../controllers/BloodController");

const router = express.Router();

router.post("/newBlood", createBlood);

router.post("/delBlood", delBlood);

router.post("/donate", donateBlood);

router.get("/allBlood", getAllBloods);

module.exports = router;
