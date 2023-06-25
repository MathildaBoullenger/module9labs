"use strict";
//This route Routes serves the endpoints of our posts to the user.

let express = require("express");
let postsRouter = express.Router();
let Controllers = require("../controllers"); //index.js

postsRouter.get("/", (req, res) => {
  Controllers.postsController.getPosts(res);
});

postsRouter.post("/", (req, res) => {
  Controllers.postsController.createPost(req.body, res);
});

module.exports = postsRouter;
