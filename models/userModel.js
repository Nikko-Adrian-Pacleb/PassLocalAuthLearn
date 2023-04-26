var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { String, required: true, unique: true },
  password: { String, required: true },
  email: { String, required: true, unique: true },
  notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
});

var User = mongoose.model("User", userSchema);
