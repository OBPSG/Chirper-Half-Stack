const express = require('express')
const router = express.Router();
const chirpsRouter = require("./chirps");

// localhost:3000/api/chirps/
router.use("/chirps", chirpsRouter);

module.exports = router;