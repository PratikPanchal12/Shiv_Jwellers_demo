function fineWeight(grossWeight, touch) {
  return (grossWeight * touch) / 100;
}

function netAmount(
  fineWeight,
  metalCurrentPrice,
  labour,
  netWeight = 0,
  isGold = false
) {
  let finalLabour;
  let price;
  if (isGold) {
    finalLabour = labour * netWeight;
    price = 10;
  } else {
    finalLabour = labour;
    price = 1000;
  }

  // console.log("FineWeight: ", typeof fineWeight);
  // console.log("MetalCurrentPrice: ", typeof metalCurrentPrice);
  // console.log("Labour: ", typeof labour);
  // console.log("NetWeight: ", typeof netWeight);

  // console.log(
  //   "Type Of: ",
  //   typeof parseFloat((fineWeight * metalCurrentPrice) / price + finalLabour)
  // );

  return parseFloat((fineWeight * metalCurrentPrice) / price + finalLabour);
}

module.exports.FineWeight = fineWeight;
module.exports.NetAmount = netAmount;
