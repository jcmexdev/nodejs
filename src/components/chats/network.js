const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getChats()
    .then((chats) => response.success(req, res, chats, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

router.get("/:userId", function (req, res) {
  controller
    .getChats(req.params.userId || null)
    .then((chats) => response.success(req, res, chats, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

router.post("/", function (req, res) {
  controller
    .createChat(req.body.users)
    .then((chat) => response.success(req, res, chat, 201))
    .catch((error) => response.error(req, res, "Unexpected Error", 400, error));
});
router.delete("/:id", function (req, res) {
  controller
    .deleteChat(req.params.id)
    .then((deleted) => response.success(req, res, deleted, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 400, error));
});

module.exports = router;
