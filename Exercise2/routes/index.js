"use strict";
//export of all models to make them accessible by other components()
//i.e. controllers.

const usersRouter = require("./usersRoute");
const postsRouter = require("./postsRoute");
const likesRouter = require("./likesRoute");
const commentsRouter = require("./commentsRoute");

module.exports = {
  usersRouter,
  postsRouter,
  likesRouter,
  commentsRouter,
};
