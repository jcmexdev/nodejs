const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getUsers()
    .then((users) => response.success(req, res, users, 200))
    .catch((error) => response.error(req, res, "Unexpected Error", 500, error));
});

router.post("/", function (req, res) {
  controller
    .createUser(req.body.name)
    .then((user) => response.success(req, res, user, 201))
    .catch((error) => response.error(req, res, "Bad request", 400, error));
});

router.patch("/:id", function (req, res) {
  controller
    .updateUser(req.params.id, req.body.name)
    .then((user) => response.success(req, res, user, 201))
    .catch((error) => response.error(req, res, "Bad request", 400, error));
});

router.delete("/:id", function (req, res) {
  controller
    .deleteUser(req.params.id)
    .then((deletedUserId) => response.success(req, res, deletedUserId))
    .catch((error) => response.error(req, res, "Not found", 404, error));
});

module.exports = router;
