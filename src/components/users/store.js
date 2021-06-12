const Model = require("./model");

async function all() {
  return await Model.find();
}

async function create(user) {
  return await Model(user).save();
}

async function update(id, name) {
  const user = await Model.findOne({ _id: id });
  if (!user) {
    throw new Error("User not found");
  }
  user.name = name;
  user.save();
  return user;
}

async function remove(id) {
  const user = await Model.findOne({ _id: id });
  if (!user) {
    throw new Error("Message was not found");
  }
  user.delete();
  return id;
}

module.exports = { all, create, update, remove };
