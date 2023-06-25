"use strict";
//Our comments data is defined in this section. 
//It's where we save our comment schema.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require('./posts')
const User = require('./users')

const commentsSchema = new Schema({
    userId: { type: Schema.Types.String, ref: 'User', required: true },
    postId: { type: Schema.Types.String, ref: 'Post', required: true},
    commentText: { type: String, trim: true, required: true, maxlength: 600 }
});

module.exports = mongoose.model("comments", commentsSchema);