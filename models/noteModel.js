const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  noteContent: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["active", "completed"], default: "active" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Note", noteSchema);
