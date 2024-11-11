const BloodModel = require("../models/BloodModel");

exports.createBlood = async (req, res) => {
  try {
    const { name, bloodGroup, address, age } = req.body;
    if (!name || !bloodGroup || !address || !age) {
      return res.status(400).send({
        message: "Please Fill all fields ",
        success: false,
      });
    }

    const blood = new BloodModel({
      name: name,
      bloodGroup: bloodGroup,
      address: address,
      age: age,
    });
    await blood.save();
    return res.status(200).send({
      message: "Blood Created Succesfully",
      success: true,
      blood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.delBlood = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).send({
        message: "PLease provide ID",
        success: false,
      });
    }

    const blood = await BloodModel.findByIdAndDelete(id);
    if (!blood) {
      return res.status(400).send({
        message: "Blood dosen't exists",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Blood Deleted Succesfully",
      success: true,
      blood,
    });
  } catch (error) {
    console.log(error);
    return resizeBy.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.getAllBloods = async (req, res) => {
  try {
    const bloods = await BloodModel.find();
    return res.status(200).send({
      message: "All bloods data",
      success: true,
      bloods,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.donateBlood = async (req, res) => {
  try {
    const { id, recieved } = req.body;

    if (!id || !recieved) {
      return res.status(400).json({
        message: "Id are required",
        success: false,
      });
    }

    const blood = await BloodModel.findById(id);

    if (!blood) {
      return res.status(404).json({
        message: "Blood not found",
        success: false,
      });
    }

    blood.recieved = recieved;

    await blood.save();

    return res.status(200).json({
      message: "Donation successful",
      success: true,
      blood,
    });
  } catch (error) {
    console.error("Error donating blood:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
