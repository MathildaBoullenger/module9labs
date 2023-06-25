"use strict";
//This route Routes serves the endpoints of our likes to the user.

let express = require("express");
let likesRouter = express.Router();
let Controllers = require("../controllers"); //index.js

likesRouter.get("/", (req, res) => {
  Controllers.likesController.getLikes(res);
});

likesRouter.post("/", (req, res) => {
  Controllers.likesController.createLike(req.body, res);
});

module.exports = likesRouter;