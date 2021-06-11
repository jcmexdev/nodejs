const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  response.success(req, res, "messages list");
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((message) => response.success(req, res, message, 201))
    .catch((error) => response.error(req, res, "Bad request", 400, error));
});

module.exports = router;
