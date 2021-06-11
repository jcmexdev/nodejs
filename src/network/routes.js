const express = require("express");
const response = require("./response");

const testRouter = express.Router();

const routes = (server) => {
  server.use(
    "/test",
    testRouter.get("/", function (req, res) {
      response.success(req, res, "Router was created successfully");
    })
  );
};

module.exports = routes;
