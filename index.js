const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const dotenv = require("dotenv");

const port = process.env.PORT || 5000;
//connect database in config/database.js
dotenv.config({ path: "./config/config.env" });
const connectDatabase = require("./config/database");
connectDatabase();

// import routes
const jobs = require("./routes/jobs");
app.use(jobs);

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
