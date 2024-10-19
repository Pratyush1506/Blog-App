const mongoose = require('mongoose');
const {Schema, model} = mongoose; // this will grab Schema from mongoose library so that we can write Schema instead of mongoose.Schema

const UserSchema = new Schema({
    username: {type: 'String', required: true, min: 4, unique: true},
    password: {type: 'String', required: true},
}); // we created schema here

const UserModel = model('User', UserSchema); // we created model here

module.exports = UserModel;