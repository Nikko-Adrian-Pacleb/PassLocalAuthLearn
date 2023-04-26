// Create a user controller
// Create a user controller file in the controllers folder. Add the following code to the file:
// // Path: controllers\userController.js
const asynchandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
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
exports.user_register_get = (req, res) => {
  res.send("NOT IMPLEMENTED: User register get");
};

// @Path: '/register'
// @Mehtod: POST
// @Access: Public
// @Desc:
//  - If user input is valid, create a new user
//  - If user input is invalid, render 'user_register' view with errors
exports.user_register_post = (req, res) => {
  res.send("NOT IMPLEMENTED: User register post");
};

// @Path: '/login'
// @Mehtod: GET
// @Access: Public
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, redirect to '/me'
//  - If user is not logged in, render 'user_login' view
exports.user_login_get = (req, res) => {
  res.send("NOT IMPLEMENTED: User login get");
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
