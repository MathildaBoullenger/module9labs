"use strict";
//Our users data is defined in this section. 
//It's where we save our user schema.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    //userId: { type: String, required: true, unique: true }, we don't need this because 
    //Mongoose will generate a unique id by default
    userName: { type: String, trim: true, required: true, maxlength: 50 },
    userEmail: { type: String, trim: true, required: true, maxlength: 100 },
    userPassword: { type: String, trim: true, required: true, maxlength: 100 }
}/*, 
{
    primary: 'userId'
  }*/);

module.exports = mongoose.model("users", usersSchema);

