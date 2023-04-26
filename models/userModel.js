var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
});

var User = mongoose.model("User", userSchema);
