const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`connected to db with host : ${con.connection.host}`);
    });
};

module.exports = connectDatabase;
