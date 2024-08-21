const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClockSchema = new Schema({
  uid: { type: Number, required: true },
  imgPath: { type: String, required: true },
  price: { type: String, required: true },
});

const Clock = mongoose.model("Clock", ClockSchema); // Updated model name to Clock

module.exports = Clock;
