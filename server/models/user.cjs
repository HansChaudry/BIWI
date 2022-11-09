const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: String,
    password: String,
    userAuctions: [],
    recents: [],
    pastAuctions: []
});

const User = mongoose.model('Users', UserSchema);

module.exports = User;
