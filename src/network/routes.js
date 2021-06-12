const messagesRouter = require("../components/messages/network");
const usersRouter = require("../components/users/network");

const routes = (server) => {
  server.use("/messages", messagesRouter);
  server.use("/users", usersRouter);
};

module.exports = routes;
