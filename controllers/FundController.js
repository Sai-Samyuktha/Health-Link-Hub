const FundModel = require("../models/FundModel");

exports.createNewFund = async (req, res) => {
  try {
    const { name, totalFund } = req.body;
    if (!name) {
      return res.status(400).send({
        message: "Please Fill name ",
        success: false,
      });
    }

    if (!totalFund) {
      return res.status(400).send({
        message: "Please Fill totalFunds ",
        success: false,
      });
    }

    const fund = await new FundModel({
      name: name,
      totalfund: totalFund,
    });
    await fund.save();
    return res.status(200).send({
      message: "Fund Created Succesfully",
      success: true,
      fund,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: falseerror,
    });
  }
};

exports.delFund = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).send({
        message: "PLease provide ID",
        success: false,
      });
    }

    const fund = await FundModel.findByIdAndDelete(id);
    if (!fund) {
      return res.status(400).send({
        message: "Fund dosen't exists",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Fund Deleted Succesfully",
      success: true,
      fund,
    });
  } catch (error) {
    console.log(error);
    return resizeBy.status(500).send({
      message: "Internal Server Error",
      success: falseerror,
    });
  }
};

exports.getAllFunds = async (req, res) => {
  try {
    const funds = await FundModel.find();
    return res.status(200).send({
      message: "All funds data",
      success: true,
      funds,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: falseerror,
    });
  }
};

exports.donateFund = async (req, res) => {
  try {
    const { id, amount } = req.body;

    if (!id || !amount) {
      return res.status(400).json({
        message: "Id and amount are required",
        success: false,
      });
    }

    const fund = await FundModel.findById(id);

    if (!fund) {
      return res.status(404).json({
        message: "Fund not found",
        success: false,
      });
    }

    fund.raisedFund = (fund.raisedFund || 0) + amount;

    await fund.save();

    return res.status(200).json({
      message: "Donation successful",
      success: true,
      fund: fund,
    });
  } catch (error) {
    console.error("Error donating fund:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};
