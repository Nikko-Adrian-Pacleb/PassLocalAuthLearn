const express = require("express");
const dotenv = require("dotenv");
const asynchandler = require("express-async-handler");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
dotenv.config({ path: ".env" });
const path = require("path");
const colors = require("colors");
const User = require("./models/userModel");

// Routers
const indexRoute = require("./routes/indexRoute");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute");

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

// Passport middleware
passport.use(
  new LocalStrategy(
    asynchandler(async (username, password, done) => {
      try {
        const user = User.findOne({ username: username }).then((user) => {
          if (!user)
            return done(null, false, { message: "Incorrect username." });
          bcrypt.compare(password, user.password, (err, res) => {
            if (err) return done(err);
            // Password Match
            if (res) return done(null, user);
            // Passwords do not match
            else return done(null, false, { message: "Incorrect password." });
          });
        });
      } catch (error) {
        console.log(error);
      }
    })
  )
);
// Passport serialize and deserialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(
  asynchandler(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  })
);

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

// Global variables
app.use((req, res, next) => {
  if (req.user) {
    res.locals.user = {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    };
  } else {
    res.locals.user = null;
  }
  next();
});

app.use("/", indexRoute);
app.use("/user", userRoute);
app.use("/note", noteRoute);

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
