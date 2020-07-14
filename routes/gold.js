const router = require("express").Router();

// Helper Function
const { FindCurrentStock } = require("../MongoDB/Helper/FindingHelper");
const { UpdateStock } = require("../MongoDB/Helper/updatingHelper");
const { SaveGold, SaveCash } = require("../MongoDB/Helper/savingHelper");

// Utils Helpers
const { FineWeight, NetAmount } = require("../utils/formulaHelper");

router.get("/", (req, res) => {
  //   if (req.body.keys === undefined) {
  //     return res.status(400).send("empty body");
  //   }

  res.send("done");
});

router.post("/", async (req, res) => {
  //   if (req.body.keys === undefined) {
  //     return res.status(400).send("empty body");
  //   }
  let goldStock;
  let goldBhangarStock;
  let cashStock;
  let cashTransactionType;
  let cashTransactionReason;

  const currStock = await FindCurrentStock();

  goldStock = currStock[0].goldStock;
  goldBhangarStock = currStock[0].goldBhangarStock;
  cashStock = currStock[0].cashStock;

  const savedGold = await SaveGold(
    req.body.itemName,
    req.body.transactionType,
    req.body.qty,
    req.body.grossWeight,
    req.body.netWeight,
    req.body.touch,
    req.body.west,
    req.body.labour,
    req.body.goldPrice,
    req.body.isBhangar
  );

  let fineWeight = FineWeight(req.body.grossWeight, req.body.touch);

  let netAmount = NetAmount(
    fineWeight,
    req.body.goldPrice,
    req.body.labour,
    req.body.netWeight,
    true
  );

  netAmount = parseFloat(netAmount.toFixed(2));

  if (req.body.isBhangar === true) {
    goldBhangarStock += req.body.netWeight;
    cashStock -= netAmount;
    cashTransactionType = "Credit";
    cashTransactionReason = `${req.body.netWeight} Gold Bhangar purchased!`;
  } else {
    if (req.body.transactionType === "Sale") {
      goldStock -= req.body.netWeight;
      cashStock += netAmount;
      cashTransactionType = "Debit";
      cashTransactionReason = `${req.body.netWeight} Gold Sold!`;
    } else {
      goldStock += req.body.netWeight;
      cashStock -= netAmount;
      cashTransactionType = "Credit";
      cashTransactionReason = `${req.body.netWeight} Gold Purchased!`;
    }
  }

  // Cash Entry

  const savedCash = await SaveCash(
    req.body.itemName,
    cashTransactionType,
    netAmount,
    cashTransactionReason
  );

  await UpdateStock(
    { _id: "5ee7590d5cc3750b10215b71" },
    {
      goldStock: goldStock,
      goldBhangarStock: goldBhangarStock,
      cashStock: cashStock,
    }
  );

  res.status(200).send("it's done!");
});

module.exports = router;
