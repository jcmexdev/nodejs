const messagesRouter = require("../components/messages/network");
const usersRouter = require("../components/users/network");
const chatsRouter = require("../components/chats/network");

const routes = (server) => {
  server.use("/messages", messagesRouter);
  server.use("/users", usersRouter);
  server.use("/chats", chatsRouter);
};

module.exports = routes;
