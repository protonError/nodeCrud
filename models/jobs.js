const mongoose = require("mongoose");
const validator = require("validator");
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job title is required"],
    trim: true,
    maxlength: [50, "Job title cannot be more than 50 characters"],
    minlength: [3, "Job title cannot be less than 3 characters"],
  },
  description: {
    type: String,
    required: [true, "Job description is required"],
    trim: true,
    maxlength: [500, "Job description cannot be more than 500 characters"],
    minlength: [3, "Job description cannot be less than 3 characters"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please enter a valid email"],
    required: [true, "Email is required"],
    trim: true,
    maxlength: [50, "Email cannot be more than 50 characters"],
    minlength: [3, "Email cannot be less than 3 characters"],
  },
  salary: {
    type: Number,
    required: [true, "Job salary is required"],
    trim: true,
    max: [99999999, "Job salary cannot be more than 99999999"],
    min: [0, "Job salary cannot be less than 0"],
  },
  address: {
    type: String,
    required: [true, "Job location is required"],
    trim: true,
    maxlength: [50, "Job location cannot be more than 50 characters"],
    minlength: [3, "Job location cannot be less than 3 characters"],
  },
});
module.exports = mongoose.model("Job", jobSchema);
