const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", function (req, res) {
  response.success(req, res, "messages list");
});

router.post("/", function (req, res) {
  response.success(req, res, "message created", 201);
});

module.exports = router;
