const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RingsSchema = new Schema({
  uid: { type: Number, required: true }, // Ensuring uid is a number
  imgPath: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: String, required: true },
});

const Rings = mongoose.model("Rings", RingsSchema);

module.exports = Rings;
