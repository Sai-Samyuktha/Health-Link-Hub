const mongoose = require("mongoose");

const BloodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
  },
  recieved: {
    type: Boolean,
  },
});

const Blood = mongoose.model("Blood", BloodSchema);
module.exports = Blood;
