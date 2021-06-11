const express = require("express");

const app = express();

app.use("/", function (req, res) {
  res.send("hola");
});

app.listen(3000, () => {
  console.log("listening on port http://localhost:3000");
});
