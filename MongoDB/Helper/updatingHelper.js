const { Stock } = require("../../MongoDB/Model/Stock");

async function updateStock(filterCondition, updateValues) {
  await Stock.updateOne(filterCondition, updateValues);
}

module.exports.UpdateStock = updateStock;
