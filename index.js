require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", schoolRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the School API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//https://school-backend-git-main-kunal-pawars-projects-3d399083.vercel.app/
