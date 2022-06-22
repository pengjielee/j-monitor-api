const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const Log = require("./db/log");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/log/list", async (req, res) => {
  let page = parseInt(req.query.page || 1);
  const size = req.query.size || 5;
  page = page - 1;
  const logs = await Log.find()
    .skip(page * size)
    .limit(size)
    .sort({ date: "desc" })
    .exec();
  if (logs) {
    res.jsonp({ code: 0, message: "ok", data: logs });
  } else {
    res.jsonp({ code: -1, message: "error", data: null });
  }
});

app.get("/api/log/add", async (req, res) => {
  const { app = "", env = "test", url = "", type = "", message = "", date = Date.now(), api = "" } = req.query;
  const log = new Log();
  log.app = app;
  log.env = env;
  log.url = url;
  log.type = type;
  log.message = message;
  log.date = date;
  log.api = api;
  const result = await log.save();
  if (result) {
    res.jsonp({ code: 0, message: "ok" });
  } else {
    res.jsonp({ code: -1, message: "error" });
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
