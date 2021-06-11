const express = require("express");
const routes = require("./src/network/routes");
const { appPort } = require("./src/config/config");
const db = require("./src/config/db");

const app = express();

db.connect();

app.use(express.json());
routes(app);

app.listen(appPort, () => {
  console.log(`listening on http://localhost:${appPort}`);
});
