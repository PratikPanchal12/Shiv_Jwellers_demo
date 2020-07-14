const mongoose = require("mongoose");

const dailySchema = new mongoose.Schema({
  details: { type: Object, required: true },
});

const DailyStockDetails = mongoose.model("DailyStockDetail", dailySchema);

exports.DailyStockDetails = DailyStockDetails;
