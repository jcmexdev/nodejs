const Model = require("./model");

async function all(userId) {
  try {
    let filter = {};
    if (userId) {
      filter = { users: userId };
    }
    return await Model.find(filter).populate("users");
  } catch (error) {
    throw new Error(error);
  }
}

async function create(chat) {
  try {
    const newChat = new Model(chat);
    newChat.save();
    return newChat;
  } catch (error) {
    throw new Error(error);
  }
}

async function remove(id) {
  const chat = await Model.findOne({ _id: id });
  if (!chat) {
    throw new Error("Chat was not found");
  }
  chat.delete();
  return id;
}

module.exports = {
  all,
  create,
  remove,
};
