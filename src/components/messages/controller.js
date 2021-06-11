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
    resolve(newMessage);
  });
};

module.exports = {
  addMessage,
};
