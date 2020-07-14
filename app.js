const express = require("express");
const mongoose = require("mongoose");
// const config = require("config");
const http = require("http");
const path = require("path");

const cors = require("cors");
require("./StartUp/db")();

const home = require("./routes/home");
const gold = require("./routes/gold");
const silver = require("./routes/silver");
const stock = require("./routes/stock");
const cash = require("./routes/cash");

// Helper function
const { SaveDailyUpdate } = require("./MongoDB/Helper/savingHelper");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// let GetTheRecord;

app.use("/api", home);
app.use("/api/gold", gold);
app.use("/api/silver", silver);
app.use("/api/stock", stock);
app.use("/api/cash", cash);

// setInterval(async () => {
//   GetTheRecord = await SaveDailyUpdate();
// }, 30000);

// let minute = new Date("2020-06-18T10:49:01.134Z");

// console.log(minute);

// setInterval(async function () {
//   // Set interval for checking
//   var date = new Date(); // Create a Date object to find out what time it is

//   if (minute.toLocaleTimeString() != date.toLocaleTimeString()) {
//     GetTheRecord = await SaveDailyUpdate();
//     minute = date;
//   }

//   // console.log(date.getHours());

//   // console.log(date);

//   // if (date.getMinutes() === minute) {
//   //   console.log("-: ", date.getMinutes(), " -:", minute);
//   // }

//   // if(date.getHours() === 8 && date.getMinutes() === 0){ // Check the time
//   //     // Do stuff
//   // }
// }, 25000);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
