const express = require("express");
const router = express.Router();
const graphqlHTTP = require("express-graphql");
const schema = require("../graphql/schema");
const root = require("../graphql/root");

router.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = router;
