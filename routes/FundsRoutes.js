const express = require("express");
const {
  createNewFund,
  delFund,
  getAllFunds,
  donateFund,
} = require("../controllers/FundController");

const router = express.Router();

router.post("/newFund", createNewFund);

router.post("/delFund", delFund);

router.post("/donateFund", donateFund);

router.get("/allFunds", getAllFunds);

module.exports = router;
