const store = require("./store");

const addMessage = (user, message) => {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      reject("User and message are required");
    }
    newMessage = {
      user,
      message,
      date: new Date(),
    };
    const createdMessage = store.create(newMessage);
    resolve(createdMessage);
  });
};

const getMessages = () => {
  return new Promise((resolve, _) => {
    resolve(store.all());
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

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
