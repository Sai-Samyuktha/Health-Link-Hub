const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  funds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fund",
    },
  ],
});

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;
