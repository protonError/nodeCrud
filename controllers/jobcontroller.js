const Job = require("../models/jobs");
// Get All Jobs
exports.getJobs = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Jobs fetched successfully",
  });
};

exports.newJob = async (req, res, next) => {
  const job = await Job.create(req.body);
  res.status(200).json({
    success: true,
    message: "Job added successfully",
    data: job,
  });
};
