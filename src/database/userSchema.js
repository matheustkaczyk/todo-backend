const mongoose = require('mongoose');
const db = require('../database/connection');

db.connection;

const UserSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: true
  },
  password: {
    type: 'string',
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
