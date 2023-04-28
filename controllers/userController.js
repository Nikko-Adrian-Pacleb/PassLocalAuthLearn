// Create a user controller
// Create a user controller file in the controllers folder. Add the following code to the file:
// // Path: controllers\userController.js
const asynchandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @Path: '/'
// @Mehtod: GET
// @Access: Public
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, redirect to '/me'-
exports.user_index = (req, res) => {
  res.send("NOT IMPLEMENTED: User index");
};

// @Path: '/me'
// @Mehtod: GET
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, render 'user_me' view
//  - If user is not logged in, redirect to '/login'
exports.user_me_get = (req, res) => {
  res.send("NOT IMPLEMENTED: User me get");
};

// @Path: '/register'
// @Mehtod: GET
// @Access: Public
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, redirect to '/me'
//  - If user is not logged in, render 'user_register' view
exports.user_register_get = (req, res, next) => {
  res.render("user_register");
};

// @Path: '/register'
// @Mehtod: POST
// @Access: Public
// @Desc:
//  - If user input is valid, create a new user
//  - If user input is invalid, render 'user_register' view with errors
exports.user_register_post = [
  // Validate and sanitize fields.
  body("email")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Email must not be empty.")
    .isEmail()
    .withMessage("Email must be valid.")
    .normalizeEmail(),
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username must not be empty.")
    .isAlphanumeric()
    .withMessage("Username must be alphanumeric."),
  body("password", "Password must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  asynchandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.render("user_register", { errors: errors.array() });
    }

    // Check if user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log("User already exists.");
      return res.render("user_register", {
        errors: [{ msg: "User already exists." }],
      });
    }

    // If user does not exist, create a new user
    try {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User created successfully.");
    } catch (err) {
      return next(err);
    }
  }),
];

// @Path: '/login'
// @Mehtod: GET
// @Access: Public
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, redirect to '/me'
//  - If user is not logged in, render 'user_login' view
exports.user_login_get = (req, res) => {
  res.render("user_login");
};

// @Path: '/login'
// @Mehtod: POST
// @Access: Public
// @Desc:
//  - If user input is valid, log in user
//  - If user input is invalid, render 'user_login' view with errors
exports.user_login_post = (req, res) => {
  res.send("NOT IMPLEMENTED: User login post");
};
