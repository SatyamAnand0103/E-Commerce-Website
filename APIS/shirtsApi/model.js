const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShirtSchema = new Schema({
  uid: { type: Number, required: true },
  imgPath: { type: String, required: true },
  price: { type: String, required: true },
  text: { type: String, required: true },
  stars: { type: String, required: true },
});

const Shirt = mongoose.model("Shirt", ShirtSchema);

module.exports = Shirt;
