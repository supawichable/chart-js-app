const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/cereals", (req, res) => {
  res.json(require("./data/cereal.json"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
