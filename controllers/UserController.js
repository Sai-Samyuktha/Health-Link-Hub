const UserModel = require("../models/UserModel");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        message: "Please fill all fields",
        success: false,
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        message: "User already exist",
        success: false,
      });
    }

    const user = new UserModel({ name, email, password });
    await user.save();
    return res.status(200).send({
      message: "Succesfully registered",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal error",
      success: false,
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        message: "Please provide all fields",
        success: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).send({
      message: "User found successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal error",
      success: false,
      error,
    });
  }
};

exports.singleUser = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(400).send({
        message: "User not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "User successfully fetched",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal error",
      success: false,
      error,
    });
  }
};
