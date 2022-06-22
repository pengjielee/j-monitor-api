const mongoose = require("./mongoose");

const logSchema = new mongoose.Schema({
  name: String,
});

const logModel = mongoose.model("Log", logSchema);

module.exports = logModel;
