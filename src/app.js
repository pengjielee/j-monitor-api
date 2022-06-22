const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const Log = require("./db/log");

// app.use(cors({
// 	origin: ['https://www.baidu.com']
// }))

app.use(
  cors({
    origin: "*",
  })
);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/test1", async (req, res) => {
  const logs = await Log.find();
  console.log(logs);
  res.send(logs);
});

app.get("/test2", (req, res) => {
  const names = [
    {
      id: "1",
      item: "Bacon",
    },
    {
      id: "2",
      item: "Eggs",
    },
    {
      id: "3",
      item: "Milk",
    },
    {
      id: "4",
      item: "Butter",
    },
  ];
  res.send(names);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
