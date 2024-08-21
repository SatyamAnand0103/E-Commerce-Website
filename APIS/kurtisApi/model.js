const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KurtiSchema = new Schema({
  uid: { type: Number, required: true },
  imgPath: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: String, required: true },
});

const Kurtis = mongoose.model("Kurtis", KurtiSchema);

module.exports = Kurtis;
