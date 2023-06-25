//This model is responsible to handle the business logic related to likes.

"use strict";
let Models = require("../models"); //matches index.js

const getLikes = (res) => {
  //finds all likes
  Models.Like.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (data, res) => {
  //creates a new like using JSON data POSTed in request body
  console.log(data);
  new Models.Like(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike
};