const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const colors = require("colors");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
