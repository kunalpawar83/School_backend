const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("*", (req, res) => {
  res.status(200).json({ message: "vrecel Done" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
