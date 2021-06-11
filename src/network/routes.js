const express = require("express");
const messagesRouter = require("../components/messages/network");

const routes = (server) => {
  server.use("/messages", messagesRouter);
};

module.exports = routes;
