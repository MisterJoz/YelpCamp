var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: { type: Boolean, default: false }
});

//starts addeding methods to the user model (UserSchema  )
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);