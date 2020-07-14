const mongoose = require("mongoose");

function dbConnetion() {
  const MONGODB_URI =
    "mongodb+srv://Nisarg:nis41@cluster0-xpgcm.mongodb.net/shivDemo";

  // const MONGODB_URI = config.get("dbstring");

  mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnetion;
