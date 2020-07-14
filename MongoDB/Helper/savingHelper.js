const { Gold } = require("../../MongoDB/Model/Gold");
const { Silver } = require("../../MongoDB/Model/Silver");
const { Stock } = require("../../MongoDB/Model/Stock");
const { DailyStockDetails } = require("../Model/DailyStockDetails");
const { Cash } = require("../Model/Cash");

//Helper Funcitons
const { FindCurrentStock } = require("../Helper/FindingHelper");
const { GetIndianTime } = require("../../utils/timeZone");

async function saveGold(
  itemName,
  transactionType,
  qty,
  grossWeight,
  netWeight,
  touch,
  west,
  labour,
  goldPrice,
  isBhangar
) {
  const gold = new Gold({
    itemName: itemName,
    transactionType: transactionType,
    qty: qty,
    grossWeight: grossWeight,
    netWeight: netWeight,
    touch: touch,
    west: west,
    labour: labour,
    goldPrice: goldPrice,
    isBhangar: isBhangar,
    createdAt: GetIndianTime(),
  });

  const savedGold = await gold.save();

  return saveGold;
}

async function saveSilver(
  itemName,
  transactionType,
  qty,
  grossWeight,
  netWeight,
  touch,
  west,
  labour,
  silverPrice,
  isBhangar
) {
  const silver = new Silver({
    itemName: itemName,
    transactionType: transactionType,
    qty: qty,
    grossWeight: grossWeight,
    netWeight: netWeight,
    touch: touch,
    west: west,
    labour: labour,
    silverPrice: silverPrice,
    isBhangar: isBhangar,
    createdAt: GetIndianTime(),
  });

  const saveSilver = await silver.save();

  return saveSilver;
}

async function saveDailyUpdate() {
  const CurrentStock = await FindCurrentStock();

  const d = new Date();

  const objectBuilder = {};

  objectBuilder[d] = CurrentStock[0];

  const dailyStock = new DailyStockDetails({
    details: objectBuilder,
  });

  const dailyStockDetail = await dailyStock.save();

  return dailyStockDetail;
}

async function saveCash(
  transactionName,
  transactionType,
  amount,
  transactionReason = ""
) {
  const cash = new Cash({
    transactionName: transactionName,
    transactionReason: transactionReason,
    transactionType: transactionType,
    amount: amount,
    createdAt: GetIndianTime(),
  });

  const savedCash = await cash.save();

  return savedCash;
}

module.exports.SaveGold = saveGold;
module.exports.SaveSilver = saveSilver;
module.exports.SaveDailyUpdate = saveDailyUpdate;
module.exports.SaveCash = saveCash;
