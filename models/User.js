const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});

// create new collection called users
// No overwrite, create if not existing
mongoose.model("users", userSchema);
