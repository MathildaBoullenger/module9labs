"use strict";
const Post = require("./post");
const User = require("./user"); //require the model
const Like = require("./like")
const Comment = require("./comment")

async function init() {
  await Post.sync(); //sync the model
  await User.sync();
  await Like.sync();
  await Comment.sync();
}

init();

module.exports = {
  User, //export the model
  Post,
  Like,
  Comment
};
