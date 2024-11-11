const mongoose = require("mongoose");

const FundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  totalfund: {
    type: Number,
    required: true,
  },
  raisedFund: {
    type: Number,
    default: 0,
  },
});

const Fund = mongoose.model("Fund", FundSchema);
module.exports = Fund;
