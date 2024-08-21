const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CurtainsSchema = new Schema({
  uid: { type: Number, required: true }, // Ensuring uid is a number
  imgPath: { type: String, required: true },
  text: { type: String, required: true },
  price: { type: String, required: true },
});

const Curtains = mongoose.model("Curtains", CurtainsSchema);

module.exports = Curtains;
