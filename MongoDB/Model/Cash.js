const mongoose = require("mongoose");

const cashDataSchema = new mongoose.Schema({
  transactionName: { type: String, required: true },
  transactionReason: { type: String, required: false },
  transactionType: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: {
    type: String,
    required: true,
  },
});

const Cash = mongoose.model("CashData", cashDataSchema);

exports.Cash = Cash;
