const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:String,
    name: String,
    password: String,
});

module.exports = mongoose.model("user", userSchema);
