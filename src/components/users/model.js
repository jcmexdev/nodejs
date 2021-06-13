const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
});

const model = mongoose.model("Users", schema);

module.exports = model;
