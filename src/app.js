const express = require("express");
const app = express();
const port = 3000;
const Log = require("./db/log");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  const logs = await Log.find();
  console.log(logs);
  res.send(logs);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
