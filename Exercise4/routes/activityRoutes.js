const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");

router.get("/random", async (req, res) => { 
  try {
    const data = await activityController.getRandomActivity(); //simple get request
    res.json({ result: 200, data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ result: 500, error: "Internal Server Error" });
  }
});

router.get("/by-type", async (req, res) => { //request via query
  try {
    const { type } = req.query; //request via query
    const data = await activityController.getActivityByType(type);
    res.json({ result: 200, data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ result: 500, error: "Internal Server Error" });
  }
});

router.get("/by-participants", async (req, res) => { //request via query
  try {
    const { participants } = req.query; //request via query
    const data = await activityController.getActivityByParticipants(participants);
    res.json({ result: 200, data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ result: 500, error: "Internal Server Error" });
  }
});

router.get("/by-key/:key", async (req, res) => { //request via params
  try {
    const { key } = req.params; //request via params
    const data = await activityController.getActivityByKey(key);
    res.json({ result: 200, data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ result: 500, error: "Internal Server Error" });
  }
});


module.exports = router;
