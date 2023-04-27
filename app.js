const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
dotenv.config({ path: ".env" });
const path = require("path");
const colors = require("colors");

// Routers
const indexRoute = require("./routes/indexRoute");
const userRoute = require("./routes/userRoute");

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

// Connect to mongoDB
const connectDB = require("./config/db");
connectDB();

const app = express();

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

// Passport config
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
