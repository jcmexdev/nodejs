const Model = require("./model");

async function create(message) {
  return await new Model(message).save();
}

/**
 * Return all messages
 * @returns {Array} messages list
 */
async function all(filter) {
  return await Model.find(filter).populate("user");
}

async function update(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = foundMessage.save();
  return newMessage;
}

async function remove(id) {
  const foundMessage = await Model.findOne({ _id: id });
  if (!foundMessage) {
    throw new Error("Message was not found");
  }
  foundMessage.delete();
  return id;
}

module.exports = {
  create,
  all,
  update,
  remove,
};
