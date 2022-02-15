const mongoose = require('mongoose');

const uri = 'mongodb://localhost/todo';

mongoose.connect(uri, { useNewUrlParser: true });

const db = mongoose.connection();

module.exports = db;
