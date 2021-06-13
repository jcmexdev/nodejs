const store = require("./store");

const addMessage = ({ chat, user, message }) => {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      reject("User and message are required");
    }
    newMessage = {
      chat,
      user,
      message,
      date: new Date(),
    };
    const createdMessage = store.create(newMessage);
    resolve(createdMessage);
  });
};

const getMessages = (chatId = null) => {
  return new Promise((resolve) => {
    let filter = {};
    if (chatId) {
      filter = { chat: chatId };
    }
    resolve(store.all(filter));
  });
};

const updateMessage = (messageId, newMessage) => {
  return new Promise((resolve, reject) => {
    if (!messageId || !newMessage) {
      reject("Invalid Data");
    }

    resolve(store.update(messageId, newMessage));
  });
};

const deleteMessage = (messageId) => {
  return new Promise((resolve, reject) => {
    if (!messageId) {
      reject("Invalid Data");
    }
    resolve(store.remove(messageId));
  });
};

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
