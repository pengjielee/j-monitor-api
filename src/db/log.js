const mongoose = require("./mongoose");

const logSchema = new mongoose.Schema({
  app: String,
  env: String,
  url: String,
  type: String,
  message: String,
  date: { type: Date, default: Date.now },
  api: String,
});

const logModel = mongoose.model("Log", logSchema);

module.exports = logModel;
