const express = require("express");
const app = express();

const router = express.Router();
// importing Jobs controller Methods

const { getJobs } = require("../controllers/jobcontroller");
const { newJob } = require("../controllers/jobcontroller");
// router.get("/api/addjob", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Job added successfully",
//   });
// });

router.route("/api/getjob").get(getJobs);
router.route("/api/addjob").post(newJob);

module.exports = router;
