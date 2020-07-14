const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  goldStock: { type: Number, required: false }, //gold in gram
  silverStock: { type: Number, required: false }, // silver in kg
  goldBhangarStock: { type: Number, required: false }, //gram
  silverBhangarStock: { type: Number, required: false }, //kg
  cashStock: { type: Number, required: false },
});

const Stock = mongoose.model("stocks", stockSchema);

exports.Stock = Stock;
