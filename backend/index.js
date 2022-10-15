const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.port, (err) => {
  if (err) console.log(err);
  console.log("Server started");
});
