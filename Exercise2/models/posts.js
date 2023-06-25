"use strict";
//Our posts data is defined in this section. 
//It's where we save our post schema.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require('./users')

const postsSchema = new Schema({
    //postId: { type: String, required: true, unique: true }, we don't need this because 
    //Mongoose will generate a unique id by default
    postTitle: { type: String, trim: true, required: true, maxlength: 50 },
    postDescription: { type: String, trim: true, required: true, maxlength: 600 },
    image: { type: Buffer, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}/*, {
    primary: 'postId'
}*/);

module.exports = mongoose.model("posts", postsSchema);

