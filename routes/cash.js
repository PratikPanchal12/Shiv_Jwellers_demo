const router = require("express").Router();
const { Cash } = require("../MongoDB/Model/Cash");

// timezone helper

const { GetIndianTime } = require("../utils/timeZone");

//databse helper

const { FindCurrentStock } = require("../MongoDB/Helper/FindingHelper");
const { UpdateStock } = require("../MongoDB/Helper/updatingHelper");

router.get("/", (req, res) => {});

router.post("/", async (req, res) => {
  const timeString = GetIndianTime();
  const currStock = await FindCurrentStock();

  let cashStock = currStock[0].cashStock;

  const cash = new Cash({
    transactionName: req.body.transactionName,
    transactionReason: req.body.transactionReason,
    transactionType: req.body.transactionType,
    amount: req.body.amount,
    createdAt: timeString,
  });

  //debit atle - karvana
  //credit atle + karvana

  const cashData = await cash.save();

  if (req.body.transactionType === "Debit") {
    cashStock -= req.body.amount;
  } else {
    cashStock += req.body.amount;
  }

  await UpdateStock(
    { _id: "5ee7590d5cc3750b10215b71" },
    {
      cashStock: cashStock,
    }
  );
  res.status(200).send("it's done");
});

module.exports = router;
