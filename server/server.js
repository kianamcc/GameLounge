const express = require("express");
const app = express();
const data = require("./serverData.js");

app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
