const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getMessages()
    .then((messages) => response.success(req, res, messages, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

router.get("/:chatId", function (req, res) {
  controller
    .getMessages(req.params.chatId || null)
    .then((messages) => response.success(req, res, messages, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body)
    .then((message) => response.success(req, res, message, 201))
    .catch((error) => response.error(req, res, "Bad request", 400, error));
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((message) => response.success(req, res, message, 201))
    .catch((error) => response.error(req, res, "Bad request", 400, error));
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then((deletedMessage) => response.success(req, res, deletedMessage))
    .catch((error) => response.error(req, res, "Not found", 404, error));
});

module.exports = router;
