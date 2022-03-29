"use strict"

const express = require("express"),
      route   = express.Router();
var   MovieController = require("../Controllers/MovieController");
const { ValidateCreate } = require("../validators/movie");
      
      route
      .get("/all-movie", MovieController.getAll)
      .post("/inser-movie", ValidateCreate, MovieController.insert)
      .get("/get-one/:MovieId", MovieController.getOne)
      .put("/update-movie/:movieid", MovieController.update)
      .delete("/delete-movie/:movieid", MovieController.delete)

module.exports = route;