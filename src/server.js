const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(require("./controllers/routes"));

app.listen(PORT, () => {
  console.log(
    `Server listening on port ${PORT}. \nRunning GraphQL API server on localhost:${PORT}/graphql`
  );
});
