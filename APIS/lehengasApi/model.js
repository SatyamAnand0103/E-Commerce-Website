const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LehengasSchema = new Schema({
  uid: { type: Number, required: true, unique: true },
  imgPath: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: String, required: true },
});

const Lehengas = mongoose.model("Lehengas", LehengasSchema);

module.exports = Lehengas;
