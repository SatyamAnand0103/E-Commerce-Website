const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LowerSchema = new Schema({
  uid: { type: Number, required: true },
  imgPath: { type: String, required: true },
  price: { type: String, required: true },
  text: { type: String, required: true },
  stars: { type: String, required: true },
});

const Lower = mongoose.model("Lower", LowerSchema);

module.exports = Lower;
