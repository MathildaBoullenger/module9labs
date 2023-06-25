const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/index.js");

router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

router.post("/", (req, res) => {
  Controllers.postController.createPosts(req.body, res);
});

module.exports = router;
