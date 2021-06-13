const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.ObjectId,
      ref: "Users",
      required: true,
    },
  ],
});

const model = new mongoose.model("Chats", chatSchema);

module.exports = model;
