const mongoose = require("mongoose");

const goldDataSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  transactionType: { type: String, required: true },
  qty: { type: Number, required: true },
  grossWeight: { type: Number, required: true },
  netWeight: { type: Number, required: true },
  touch: { type: Number, required: true },
  west: { type: Number, required: false },
  labour: { type: Number, required: false }, // labour per gram
  goldPrice: { type: Number, required: true }, // goldPrice per 10 gram
  isBhangar: { type: Boolean, required: true },
  createdAt: { type: String, required: true },
});

// fineweight and netamount will be calculated later on in backend.

// fineWeight formula :-
// fw = (netwight * touch) / 100

// NetAmount formula :-
// NetAmount = ((fw * CurrentGoldPrice) / 10) + (labour * NetWeight)

const Gold = mongoose.model("GoldData", goldDataSchema);

exports.Gold = Gold;
