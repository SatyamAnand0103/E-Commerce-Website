const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SareesSchema = new Schema({
  uid: { type: Number, required: true },
  imgPath: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: String, required: true },
});

const Sarees = mongoose.model("Saree", SareesSchema);

module.exports = Sarees;
