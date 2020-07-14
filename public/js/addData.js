console.log("Add Data");

const otherBtn = document.querySelector("#otherBtn");
const saleBtn = document.querySelector("#saleBtn");
const form1 = document.querySelector("#cashForm");
const form2 = document.querySelector("#saleForm");
const addCashForm = document.querySelector("#AddCashForm");
const addSaleForm = document.querySelector("#AddSaleForm");

saleBtn.onclick = saleForm;
otherBtn.onclick = cashForm;
addCashForm.onclick = AddCashForm;
addSaleForm.onclick = AddSaleForm;

function saleForm() {
  //   console.log("Sale Form Opened");
  form2.style.display = "block";
  form1.style.display = "none";
}

function cashForm() {
  //   console.log("Cash Form Opened");
  form1.style.display = "block";
  form2.style.display = "none";
}

// =======================Cash Details===================

function AddCashForm() {
  let transactionName = document.querySelector("#transactionName").value;
  let transactionReason = document.querySelector("#transactionReason").value;
  let transactionType = document.getElementsByName("transactionType");
  let amount = document.querySelector("#amount").value;

  // console.log(transactionName);
  // console.log(transactionReason);
  for (i = 0; i < transactionType.length; i++) {
    if (transactionType[i].checked) transactionType = transactionType[i].value;
  }
  // console.log(amount);
  axios
    .post("/api/cash", {
      transactionName: transactionName,
      transactionReason: transactionReason,
      transactionType: transactionType,
      amount: amount,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  alert("Saved Data");
}

//   let inlineSale = document.querySelector("#inlineSale");
//   // let inlinePurchase = document.querySelector("#inlinePurchase");

//   for (i = 0; i < bhangarType.length; i++) {
//     if (bhangarType[i].checked) {
//       if (bhangarType[i].value === true) {
//         inlineSale.disabled = true;
//       } else {
//         inlineSale.disabled = false;
//       }
//     }
//   }
// };

document.getElementById("inlineYes").onclick = function () {
  var hazard = this.value;
  // console.log(hazard);

  var radios = this.form.elements["transactionType"];

  for (var i = 0, len = radios.length; i < len; i++) {
    var r = radios[i];

    if (hazard) {
      if (r.value === "Purchase") {
        r.checked = true; // set checked
      } else {
        r.checked = false; // unchecked
        r.disabled = true; // disable
      }
    } else {
      r.disabled = false; // no radios disabled
    }
  }
};

document.getElementById("inlineNo").onclick = function () {
  var hazard = this.value;
  // console.log(hazard);

  var radios = this.form.elements["transactionType"];

  for (var i = 0, len = radios.length; i < len; i++) {
    var r = radios[i];

    if (hazard) {
      r.disabled = false;
    }
  }
};

function AddSaleForm() {
  let metalType = document.getElementsByName("metalType");
  let bhangarType = document.getElementsByName("bhangarType");
  let itemName = document.querySelector("#itemName").value;
  let transactionType = document.getElementsByName("transactionType");
  let qty = document.querySelector("#quntity").value;
  let grossWeight = document.querySelector("#grossWeight").value;
  let netWeight = document.querySelector("#netWeight").value;
  let touch = document.querySelector("#touch").value;
  let west = document.querySelector("#west").value;
  let labour = document.querySelector("#labour").value;
  let currentPrice = document.querySelector("#currentPrice").value;

  for (i = 0; i < metalType.length; i++) {
    if (metalType[i].checked) metalType = metalType[i].value;
  }
  for (i = 0; i < transactionType.length; i++) {
    if (transactionType[i].checked) transactionType = transactionType[i].value;
  }
  for (i = 0; i < bhangarType.length; i++) {
    if (bhangarType[i].checked) bhangarType = bhangarType[i].value;
  }

  if (metalType == "Gold") {
    axios
      .post("/api/gold", {
        itemName: itemName,
        transactionType: transactionType,
        qty: qty,
        grossWeight: grossWeight,
        netWeight: netWeight,
        touch: touch,
        west: west,
        labour: labour,
        goldPrice: currentPrice,
        isBhangar: bhangarType,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Saved Data");
  } else {
    axios
      .post("/api/silver", {
        itemName: itemName,
        transactionType: transactionType,
        qty: qty,
        grossWeight: grossWeight,
        netWeight: netWeight,
        touch: touch,
        west: west,
        labour: labour,
        silverPrice: currentPrice,
        isBhangar: bhangarType,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Saved Data");
  }

  // console.log(metalType);
  // console.log(bhangarType);
  // console.log(transactionType);
  // console.log(itemName);
  // console.log(qty);
  // console.log(grossWeight);
  // console.log(netWeight);
  // console.log(touch);
  // console.log(west);
  // console.log(labour);
  // console.log(currentGoldPrice);
}
