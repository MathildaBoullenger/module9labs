//export of all controllers to make them accessible by other components()
//i.e. routes
"use strict";

const usersController = require('./usersController');
const postsController = require('./postsController');
const likesController = require('./likesController');
const commentsController = require('./commentsController');

module.exports = {
  usersController,
  postsController,
  likesController, 
  commentsController
};