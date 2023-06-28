"use strict";
const Post = require("./post");
const User = require("./user"); //require the model
const Like = require("./like")
const Comment = require("./comment")

module.exports = {
  User, //export the model
  Post,
  Like,
  Comment
};
