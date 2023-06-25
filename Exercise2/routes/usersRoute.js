"use strict";
//This route Routes serves the endpoints of our users to the user.

let express = require("express");
let usersRouter = express.Router();
let Controllers = require("../controllers"); //index.js

usersRouter.get("/", (req, res) => {
  Controllers.usersController.getUsers(res);
});

usersRouter.post("/", (req, res) => {
  Controllers.usersController.createUser(req.body, res);
});

module.exports = usersRouter;