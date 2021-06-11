const Model = require("./model");

async function create(message) {
  return await new Model(message).save();
}

/**
 * Return all messages
 * @returns {Array} messages list
 */
async function all() {
  return await Model.find();
}

async function update(id, message) {
  const foundMessage = await Model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = foundMessage.save();
  return newMessage;
}

module.exports = {
  create,
  all,
  update,
};
