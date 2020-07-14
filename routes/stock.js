const express = require("express");
const mongoose = require("mongoose");
const { Stock } = require("../MongoDB/Model/Stock");

const router = express.Router();

// router.get("/", (req, res) => {
//   if (req.body.keys === undefined) {
//     return res.status(400).send("empty body");
//   }

//   res.send("done");
// });

router.post("/", (req, res) => {
  //   console.log(req.body);
  //   if (req.body.keys === undefined) {
  //     return res.status(400).send("empty body");
  //   }

  const stock = new Stock({
    goldStock: req.body.goldStock,
    silverStock: req.body.silverStock,
    goldBhangarStock: req.body.goldBhangarStock,
    silverBhangarStock: req.body.silverBhangarStock,
    cashStock: req.body.cashStock,
  });

  stock
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
