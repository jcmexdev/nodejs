const Model = require("./model");

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
    const createdMessage = new Model(newMessage).save();
    resolve(createdMessage);
  });
};

const getMessages = () => {
  return new Promise((resolve, _) => {
    resolve(Model.find());
  });
};

module.exports = {
  addMessage,
  getMessages,
};
