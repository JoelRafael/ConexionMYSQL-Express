"use strict"

const express = require("express"),
      route = express.Router();
var MovieController = require("../Controllers/MovieController");
      
      route
      .get("/all-movie", MovieController.getAll)
      .post("/inser-movie", MovieController.insert)

module.exports = route;