const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/UserRoutes");
const patientRoutes = require("./routes/PatientRoutes");
const fundRoutes = require("./routes/FundsRoutes");
const bloodRoutes = require("./routes/BloodRoutes");

const connectDB = require("./config/db");
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/patient", patientRoutes);
app.use("/funds", fundRoutes);
app.use("/bloods", bloodRoutes);

app.listen(8000, () => {
  console.log("Server Is Running");
});
