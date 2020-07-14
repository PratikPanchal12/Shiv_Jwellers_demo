const { Stock } = require("../Model/Stock");
const { Gold } = require("../Model/Gold");
const { Silver } = require("../Model/Silver");
const { Cash } = require("../Model/Cash");

async function findCurrentStock() {
  const CurrentStock = await Stock.find();

  return CurrentStock;
}

async function findAllGoldData(filterCondition = null) {
  const GoldData = await Gold.find(filterCondition);

  return GoldData;
}

async function findAllSilverData(filterCondition = null) {
  const SilverData = await Silver.find(filterCondition);

  return SilverData;
}

async function findAllCashData(filterCondition = null) {
  const CashData = await Cash.find(filterCondition);

  return CashData;
}

module.exports.FindCurrentStock = findCurrentStock;
module.exports.FindAllGoldData = findAllGoldData;
module.exports.FindAllSilverData = findAllSilverData;
module.exports.FindAllCashData = findAllCashData;
