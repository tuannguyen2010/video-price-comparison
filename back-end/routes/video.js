const express = require("express");
const videoController = require("../controllers/videoController");
var route = express.Router();

route.get("/", videoController.getVideoList);

module.exports = route;