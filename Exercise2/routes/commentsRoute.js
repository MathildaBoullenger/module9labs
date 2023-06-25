"use strict";
//This route Routes serves the endpoints of our comments to the user.

let express = require("express");
let commentsRouter = express.Router();
let Controllers = require("../controllers"); //index.js

commentsRouter.get("/", (req, res) => {
  Controllers.commentsController.getComments(res);
});

commentsRouter.post("/", (req, res) => {
  Controllers.commentsController.createComment(req.body, res);
});

module.exports = commentsRouter;