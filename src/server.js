const express = require('express');

const { createUserController, loginUserController } = require('./controllers/userController');
const {
  createTaskController,
  findingByUserIdController,
  updateTaskController
} = require('./controllers/todoController');

const jwtVerify = require('./middlewares/jwtVerify');

const app = express();

app.use(express.json());

app.post('/user', createUserController);
app.post('/login', loginUserController);

app.get('/todo', jwtVerify, findingByUserIdController);
app.post('/todo', jwtVerify, createTaskController);
app.put('/todo/:id', jwtVerify, updateTaskController);

module.exports = app;
