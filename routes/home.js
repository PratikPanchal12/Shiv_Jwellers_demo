const router = require("express").Router();

// Helper Function
const {
  FindAllGoldData,
  FindAllSilverData,
  FindCurrentStock,
  FindAllCashData,
} = require("../MongoDB/Helper/FindingHelper");
const { FineWeight, NetAmount } = require("../utils/formulaHelper");

// External Lib
const _ = require("lodash");

router.get("/", async (req, res) => {
  const allData = {};
  let goldArray = [];
  let silverArray = [];
  let goldBhangarArray = [];
  let silverBhangarArray = [];
  let cashDataArray = [];

  const stockData = await FindCurrentStock();
  const goldBhangarData = await FindAllGoldData({ isBhangar: true });
  const goldData = await FindAllGoldData({ isBhangar: false });

  const silverBhangarData = await FindAllSilverData({ isBhangar: true });
  const silverData = await FindAllSilverData({ isBhangar: false });

  const cashData = await FindAllCashData();

  for (let i = 0; i < goldData.length; i++) {
    const theFineWeight = FineWeight(
      goldData[i].grossWeight,
      goldData[i].touch
    );

    const theAmount = NetAmount(
      theFineWeight,
      goldData[i].goldPrice,
      goldData[i].labour,
      goldData[i].netWeight,
      true
    );

    const PriceObj = { Price: parseFloat(theAmount.toFixed(2)) };

    const CopyGoldData = { ...goldData[i]._doc };

    _.merge(CopyGoldData, PriceObj);

    goldArray.push(CopyGoldData);
  }

  for (let i = 0; i < goldBhangarData.length; i++) {
    const theFineWeight = FineWeight(
      goldBhangarData[i].grossWeight,
      goldBhangarData[i].touch
    );

    const theAmount = NetAmount(
      theFineWeight,
      goldBhangarData[i].goldPrice,
      goldBhangarData[i].labour,
      goldBhangarData[i].netWeight,
      true
    );

    const PriceObj = { Price: parseFloat(theAmount.toFixed(2)) };

    const CopyGoldBhangarData = { ...goldBhangarData[i]._doc };

    _.merge(CopyGoldBhangarData, PriceObj);

    goldBhangarArray.push(CopyGoldBhangarData);

    // goldBhangarArray.push(goldBhangarData[i]._doc);
  }

  for (let i = 0; i < silverData.length; i++) {
    const theFineWeight = FineWeight(
      silverData[i].grossWeight,
      silverData[i].touch
    );

    const theAmount = NetAmount(
      theFineWeight,
      silverData[i].silverPrice,
      silverData[i].labour,
      silverData[i].netWeight
    );

    const PriceObj = { Price: parseFloat(theAmount.toFixed(2)) };

    const CopySilverData = { ...silverData[i]._doc };

    _.merge(CopySilverData, PriceObj);

    silverArray.push(CopySilverData);

    // silverArray.push(silverData[i]._doc);
  }

  for (let i = 0; i < silverBhangarData.length; i++) {
    const theFineWeight = FineWeight(
      silverBhangarData[i].grossWeight,
      silverBhangarData[i].touch
    );

    const theAmount = NetAmount(
      theFineWeight,
      silverBhangarData[i].silverPrice,
      silverBhangarData[i].labour,
      silverBhangarData[i].netWeight
    );

    const PriceObj = { Price: parseFloat(theAmount.toFixed(2)) };

    const CopySilverBhangarData = { ...silverBhangarData[i]._doc };

    _.merge(CopySilverBhangarData, PriceObj);

    silverBhangarArray.push(CopySilverBhangarData);

    // silverBhangarArray.push(silverBhangarData[i]._doc);
  }

  for (let i = 0; i < cashData.length; i++) {
    cashDataArray.push(cashData[i]._doc);
  }

  allData["stockData"] = stockData;
  allData["goldData"] = goldArray;
  allData["goldBhangarData"] = goldBhangarArray;
  allData["silverData"] = silverArray;
  allData["silverBhangarData"] = silverBhangarArray;
  allData["cashData"] = cashDataArray;

  res.status(200).send(allData);
});

module.exports = router;
