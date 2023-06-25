//index.js is on the root level. 
//It's where we set up an express server, 
//establish a database connection and define routes for our app.

"use strict";
const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;

const {
  usersRouter,
  postsRouter,
  likesRouter,
  commentsRouter,
} = require("./routes");

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/likes", likesRouter);
app.use("/api/comments", commentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
