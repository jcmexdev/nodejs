const express = require("express");
const routes = require("./src/network/routes");

const app = express();

routes(app);

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
