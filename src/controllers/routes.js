const express = require("express");
const router = express.Router();

// Set the routes to controllers
router.use("/graphql", require("./graphql.controller"));
router.use("/user", require("./user.controller"));
router.use("/users", require("./users.controller"));

router.get("/", function(req, res) {
  res.send("Hello World");
});

module.exports = router;
