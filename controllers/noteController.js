const { body, validationResult } = require("express-validator");
const asynchandler = require("express-async-handler");
const Note = require("../models/noteModel");
const User = require("../models/userModel");

// @Path: '/note'
// @Mehtod: GET
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, render 'note_index' view
//  - If user is not logged in, redirect to '/login'
exports.note_index = asynchandler(async (req, res) => {
  if (!res.locals.user) {
    res.redirect("/login");
  } else {
    const notes = await Note.find({ author: res.locals.user._id });
    res.render("note_index", { user: res.locals.user, notes: notes });
  }
});

// @Path: '/note/create'
// @Mehtod: GET
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, render 'note_create' view
//  - If user is not logged in, redirect to '/login'
exports.note_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Note create GET");
};

// @Path: '/note/create'
// @Mehtod: POST
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, create a new note
//  - If user is not logged in, redirect to '/login'
exports.note_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Note create POST");
};

// @Path: '/note/:id'
// @Mehtod: GET
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, render 'note_detail' view
//  - If user is not logged in, redirect to '/login'
exports.note_detail_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Note detail GET");
};

// @Path: '/note/:id'
// @Mehtod: POST
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, update a note
//  - If user is not logged in, redirect to '/login'
exports.note_detail_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Note detail POST");
};

// @Path: '/note/:id/delete'
// @Mehtod: GET
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, render 'note_delete' view
//  - If user is not logged in, redirect to '/login'
exports.note_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Note delete GET");
};

// @Path: '/note/:id/delete'
// @Mehtod: POST
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, delete a note
//  - If user is not logged in, redirect to '/login'
exports.note_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Note delete POST");
};

// @Path: '/note/:id/update'
// @Mehtod: GET
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, render 'note_update' view
//  - If user is not logged in, redirect to '/login'
exports.note_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Note update GET");
};

// @Path: '/note/:id/update'
// @Mehtod: POST
// @Access: Private
// @Desc:
//  - Check if user is logged in
//  - If user is logged in, update a note
//  - If user is not logged in, redirect to '/login'
exports.note_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Note update POST");
};
