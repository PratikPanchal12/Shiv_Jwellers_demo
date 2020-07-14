// console.log("Hello World!");

window.onload = letThePageLoad;

function letThePageLoad(event) {
  //   console.log(event);

  axios
    .get("/api")
    .then((response) => {
      console.log(response);
      renderGold(response.data.goldData);
      renderGoldBhangar(response.data.goldBhangarData);
      renderCash(response.data.cashData);
      renderSilver(response.data.silverData);
      renderSilverBhangar(response.data.silverBhangarData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function renderGold(GoldData) {
  console.log(GoldData);

  const goldDiv = document.querySelector(".item3");

  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  mainDiv.style.maxHeight = "17em";

  const creditDiv = document.createElement("div");
  creditDiv.className = "creditDiv";

  const debitDiv = document.createElement("div");
  debitDiv.className = "debitDiv";

  for (let i = 0; i < GoldData.length; i++) {
    if (GoldData[i].transactionType === "Sale") {
      const creditAmount = document.createElement("h6");
      creditAmount.className = "creditAmount";
      creditAmount.innerText = `₹ ${GoldData[i].Price} /- ${GoldData[i].itemName}`;

      creditDiv.appendChild(creditAmount);

      const extraDetailDivCredit = document.createElement("div");
      extraDetailDivCredit.className = "extraDetailsCreditDiv";

      const exrtaDetailPCredit = document.createElement("p");
      exrtaDetailPCredit.className = "extraDetailCredit";
      exrtaDetailPCredit.innerText = `${GoldData[i].createdAt}`;

      extraDetailDivCredit.appendChild(exrtaDetailPCredit);

      creditDiv.appendChild(extraDetailDivCredit);
    } else {
      const debitAmount = document.createElement("h6");
      debitAmount.className = "debitAmount";
      debitAmount.innerText = `₹ ${GoldData[i].Price} /- ${GoldData[i].itemName}`;

      debitDiv.appendChild(debitAmount);

      const extraDetailDivDebit = document.createElement("div");
      extraDetailDivDebit.className = "extraDetailsDebitDiv";

      const exrtaDetailPDebit = document.createElement("p");
      exrtaDetailPDebit.className = "extraDetailDebit";
      exrtaDetailPDebit.innerText = `${GoldData[i].createdAt}`;

      extraDetailDivDebit.appendChild(exrtaDetailPDebit);

      debitDiv.appendChild(extraDetailDivDebit);
    }
  }

  mainDiv.appendChild(debitDiv);

  mainDiv.appendChild(creditDiv);

  goldDiv.appendChild(mainDiv);
}

function renderGoldBhangar(GoldBhangarData) {
  console.log(GoldBhangarData);

  const goldDiv = document.querySelector(".item4");

  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  mainDiv.style.maxHeight = "17em";

  const creditDiv = document.createElement("div");
  creditDiv.className = "creditDiv";

  const debitDiv = document.createElement("div");
  debitDiv.className = "debitDiv";

  for (let i = 0; i < GoldBhangarData.length; i++) {
    if (GoldBhangarData[i].transactionType == "Sale") {
      const creditAmount = document.createElement("h6");
      creditAmount.className = "creditAmount";
      creditAmount.innerText = `₹ ${GoldBhangarData[i].Price} /- ${GoldBhangarData[i].itemName}`;

      creditDiv.appendChild(creditAmount);

      const extraDetailDivCredit = document.createElement("div");
      extraDetailDivCredit.className = "extraDetailsCreditDiv";

      const exrtaDetailPCredit = document.createElement("p");
      exrtaDetailPCredit.className = "extraDetailCredit";
      exrtaDetailPCredit.innerText = `${GoldBhangarData[i].createdAt}`;

      extraDetailDivCredit.appendChild(exrtaDetailPCredit);

      creditDiv.appendChild(extraDetailDivCredit);
    } else {
      const debitAmount = document.createElement("h6");
      debitAmount.className = "debitAmount";
      debitAmount.innerText = `₹ ${GoldBhangarData[i].Price} /- ${GoldBhangarData[i].itemName}`;

      debitDiv.appendChild(debitAmount);

      const extraDetailDivDebit = document.createElement("div");
      extraDetailDivDebit.className = "extraDetailsDebitDiv";

      const exrtaDetailPDebit = document.createElement("p");
      exrtaDetailPDebit.className = "extraDetailDebit";
      exrtaDetailPDebit.innerText = `${GoldBhangarData[i].createdAt}`;

      extraDetailDivDebit.appendChild(exrtaDetailPDebit);

      debitDiv.appendChild(extraDetailDivDebit);
    }
  }

  mainDiv.appendChild(debitDiv);

  mainDiv.appendChild(creditDiv);

  goldDiv.appendChild(mainDiv);
}

function renderCash(CashData) {
  console.log(CashData);
  const goldDiv = document.querySelector(".item1");

  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  mainDiv.style.maxHeight = "38em";

  const creditDiv = document.createElement("div");
  creditDiv.className = "creditDiv";

  const debitDiv = document.createElement("div");
  debitDiv.className = "debitDiv";

  for (let i = 0; i < CashData.length; i++) {
    if (CashData[i].transactionType === "Credit") {
      const creditAmount = document.createElement("h6");
      creditAmount.className = "creditAmount";
      creditAmount.innerText = `₹ ${CashData[i].amount} /- ${CashData[i].transactionName}`;

      creditDiv.appendChild(creditAmount);

      const extraDetailDivCredit = document.createElement("div");
      extraDetailDivCredit.className = "extraDetailsCreditDiv";

      const exrtaDetailPCredit = document.createElement("p");
      exrtaDetailPCredit.className = "extraDetailCredit";
      exrtaDetailPCredit.innerText = `${CashData[i].createdAt}`;

      extraDetailDivCredit.appendChild(exrtaDetailPCredit);

      creditDiv.appendChild(extraDetailDivCredit);
    } else {
      console.log("In Debit");

      const debitAmount = document.createElement("h6");
      debitAmount.className = "debitAmount";
      debitAmount.innerText = `₹ ${CashData[i].amount} /- ${CashData[i].transactionName}`;

      debitDiv.appendChild(debitAmount);

      const extraDetailDivDebit = document.createElement("div");
      extraDetailDivDebit.className = "extraDetailsDebitDiv";

      const exrtaDetailPDebit = document.createElement("p");
      exrtaDetailPDebit.className = "extraDetailDebit";
      exrtaDetailPDebit.innerText = `${CashData[i].createdAt}`;

      extraDetailDivDebit.appendChild(exrtaDetailPDebit);

      debitDiv.appendChild(extraDetailDivDebit);

      console.log(debitDiv);
    }
  }

  console.log("Before");

  mainDiv.appendChild(debitDiv);

  mainDiv.appendChild(creditDiv);

  goldDiv.appendChild(mainDiv);
}

function renderSilver(SilverData) {
  console.log(SilverData);

  const goldDiv = document.querySelector(".item5");

  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  mainDiv.style.maxHeight = "17em";

  const creditDiv = document.createElement("div");
  creditDiv.className = "creditDiv";

  const debitDiv = document.createElement("div");
  debitDiv.className = "debitDiv";

  for (let i = 0; i < SilverData.length; i++) {
    if (SilverData[i].transactionType === "Sale") {
      const creditAmount = document.createElement("h6");
      creditAmount.className = "creditAmount";
      creditAmount.innerText = `₹ ${SilverData[i].Price} /- ${SilverData[i].itemName}`;

      creditDiv.appendChild(creditAmount);

      const extraDetailDivCredit = document.createElement("div");
      extraDetailDivCredit.className = "extraDetailsCreditDiv";

      const exrtaDetailPCredit = document.createElement("p");
      exrtaDetailPCredit.className = "extraDetailCredit";
      exrtaDetailPCredit.innerText = `${SilverData[i].createdAt}`;

      extraDetailDivCredit.appendChild(exrtaDetailPCredit);

      creditDiv.appendChild(extraDetailDivCredit);
    } else {
      const debitAmount = document.createElement("h6");
      debitAmount.className = "debitAmount";
      debitAmount.innerText = `₹ ${SilverData[i].Price} /- ${SilverData[i].itemName}`;

      debitDiv.appendChild(debitAmount);

      const extraDetailDivDebit = document.createElement("div");
      extraDetailDivDebit.className = "extraDetailsDebitDiv";

      const exrtaDetailPDebit = document.createElement("p");
      exrtaDetailPDebit.className = "extraDetailDebit";
      exrtaDetailPDebit.innerText = `${SilverData[i].createdAt}`;

      extraDetailDivDebit.appendChild(exrtaDetailPDebit);

      debitDiv.appendChild(extraDetailDivDebit);
    }
  }

  mainDiv.appendChild(debitDiv);

  mainDiv.appendChild(creditDiv);

  goldDiv.appendChild(mainDiv);
}

function renderSilverBhangar(SilverBhangarData) {
  console.log(SilverBhangarData);

  const goldDiv = document.querySelector(".item6");

  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";
  mainDiv.style.maxHeight = "17em";

  const creditDiv = document.createElement("div");
  creditDiv.className = "creditDiv";

  const debitDiv = document.createElement("div");
  debitDiv.className = "debitDiv";

  for (let i = 0; i < SilverBhangarData.length; i++) {
    if (SilverBhangarData[i].transactionType == "Sale") {
      const creditAmount = document.createElement("h6");
      creditAmount.className = "creditAmount";
      creditAmount.innerText = `₹ ${SilverBhangarData[i].Price} /- ${SilverBhangarData[i].itemName}`;

      creditDiv.appendChild(creditAmount);

      const extraDetailDivCredit = document.createElement("div");
      extraDetailDivCredit.className = "extraDetailsCreditDiv";

      const exrtaDetailPCredit = document.createElement("p");
      exrtaDetailPCredit.className = "extraDetailCredit";
      exrtaDetailPCredit.innerText = `${SilverBhangarData[i].createdAt}`;

      extraDetailDivCredit.appendChild(exrtaDetailPCredit);

      creditDiv.appendChild(extraDetailDivCredit);
    } else {
      const debitAmount = document.createElement("h6");
      debitAmount.className = "debitAmount";
      debitAmount.innerText = `₹ ${SilverBhangarData[i].Price} /- ${SilverBhangarData[i].itemName}`;

      debitDiv.appendChild(debitAmount);

      const extraDetailDivDebit = document.createElement("div");
      extraDetailDivDebit.className = "extraDetailsDebitDiv";

      const exrtaDetailPDebit = document.createElement("p");
      exrtaDetailPDebit.className = "extraDetailDebit";
      exrtaDetailPDebit.innerText = `${SilverBhangarData[i].createdAt}`;

      extraDetailDivDebit.appendChild(exrtaDetailPDebit);

      debitDiv.appendChild(extraDetailDivDebit);
    }
  }

  mainDiv.appendChild(debitDiv);

  mainDiv.appendChild(creditDiv);

  goldDiv.appendChild(mainDiv);
}
