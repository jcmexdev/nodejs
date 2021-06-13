const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  chat: {
    type: mongoose.ObjectId,
    ref: "Chats",
    required: true,
  },
  user: {
    type: mongoose.ObjectId,
    ref: "Users",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const model = mongoose.model("Messages", schema);

module.exports = model;
