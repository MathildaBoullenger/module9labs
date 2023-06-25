"use strict";
//Our likes data is defined in this section. 
//It's where we save our like schema.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require('./posts')
const User = require('./users')

const likesSchema = new Schema({
    userId: { type: Schema.Types.String, ref: 'User', required: true },
    postId: { type: Schema.Types.String, ref: 'Post', required: true}
});

module.exports = mongoose.model("likes", likesSchema);