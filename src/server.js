const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("hey from express");
  res.status(200);
  res.json({message: "hello"});
});

module.exports = app;