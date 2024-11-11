const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://someshrocks144:somesh2004T@cluster0.sqdieb6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
