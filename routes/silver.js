const router = require("express").Router();

// Helper Function
const { FindCurrentStock } = require("../MongoDB/Helper/FindingHelper");
const { SaveSilver, SaveCash } = require("../MongoDB/Helper/savingHelper");
const { UpdateStock } = require("../MongoDB/Helper/updatingHelper");

// Utils Helpers
const { FineWeight, NetAmount } = require("../utils/formulaHelper");

router.get("/", (req, res) => {});

router.post("/", async (req, res) => {
  //   if (req.body.keys === undefined) {
  //     return res.status(400).send("empty body");
  //   }
  let silverStock;
  let silverBhangarStock;
  let cashStock;
  let cashTransactionType;
  let cashTransactionReason;

  const currStock = await FindCurrentStock();

  silverStock = currStock[0].silverStock;
  silverBhangarStock = currStock[0].silverBhangarStock;
  cashStock = currStock[0].cashStock;

  const savedSilver = await SaveSilver(
    req.body.itemName,
    req.body.transactionType,
    req.body.qty,
    req.body.grossWeight,
    req.body.netWeight,
    req.body.touch,
    req.body.west,
    req.body.labour,
    req.body.silverPrice,
    req.body.isBhangar
  );

  let fineWeight = FineWeight(req.body.grossWeight, req.body.touch);

  let netAmount = NetAmount(fineWeight, req.body.silverPrice, req.body.labour);

  netAmount = parseFloat(netAmount.toFixed(2));

  if (req.body.isBhangar === true) {
    silverBhangarStock += req.body.netWeight;
    cashStock -= netAmount;
    cashTransactionType = "Credit";
    cashTransactionReason = `${req.body.netWeight} Silver Bhangar purchased!`;
  } else {
    // netAmount /= 10;

    if (req.body.transactionType === "Sale") {
      silverStock -= req.body.netWeight;
      cashStock += netAmount;
      cashTransactionType = "Debit";
      cashTransactionReason = `${req.body.netWeight} Silver Sold!`;
      console.log("NetAmount: ", netAmount);
    } else {
      silverStock += req.body.netWeight;
      cashStock -= netAmount;
      cashTransactionType = "Credit";
      cashTransactionReason = `${req.body.netWeight} Silver Purchased!`;
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
      silverStock: silverStock,
      silverBhangarStock: silverBhangarStock,
      cashStock: cashStock,
    }
  );
  res.status(200).send("it's done");
});

module.exports = router;
