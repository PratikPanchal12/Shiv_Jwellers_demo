const mongoose = require("mongoose");

const silverDataSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  transactionType: { type: String, required: true },
  qty: { type: Number, required: true },
  grossWeight: { type: Number, required: true },
  netWeight: { type: Number, required: true },
  touch: { type: Number, required: true },
  west: { type: Number, required: false },
  labour: { type: Number, required: false }, // labour ucchak
  silverPrice: { type: Number, required: true }, // silverPrice per 1 kg
  isBhangar: { type: Boolean, required: true },
  createdAt: { type: String, required: true },
});

// fineweight and netamount will be calculated later on in backend.

// fineWeight formula :-
// fw = (netwight * touch) / 100

// NetAmount formula :-
// NetAmount = ((fw * CurrentSilverPrice)) + (labour)

const Silver = mongoose.model("SilverData", silverDataSchema);

exports.Silver = Silver;
