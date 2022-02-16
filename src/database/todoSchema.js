const mongoose = require('mongoose');
const db = require('../database/connection');

db.connection;

const TodoSchema = new mongoose.Schema({
  userId: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true
  },
  date: {
    type: 'date',
    required: true
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
