"use strict";
//export of all models to make them accessible by other components()
//i.e. controllers.

const User = require('./users');
const Post = require('./posts');
const Like = require('./likes');
const Comment = require('./comments');

module.exports = {
  User,
  Post,
  Like,
  Comment
};