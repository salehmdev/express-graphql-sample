const express = require("express");
const router = express.Router();

router.get("/:id", function(req, res) {
  res.send(`This is user ${req.route.id}`);
});

router.post("/", function(req, res) {
  res.send(`User created.`);
});

router.get("/", function(req, res) {
  res.send(`User!`);
});

module.exports = router;
