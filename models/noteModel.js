const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./userModel");

const noteSchema = new Schema({
  noteContent: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["active", "completed"], default: "active" },
  createdAt: { type: Date, default: Date.now },
});

noteSchema.pre("save", async function (next) {
  try {
    // Add the user to the user's notes array
    const user = await User.findById(this.user);
    user.notes.push(this._id);
    await user.save();
    next();
  } catch (err) {
    next(err);
  }
});

noteSchema.virtual("contentPreview").get(function () {
  return this.noteContent.substring(0, 20) + "...";
});

module.exports = mongoose.model("Note", noteSchema);
