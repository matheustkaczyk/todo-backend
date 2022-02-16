const express = require('express');

const { createUserController, loginUserController } = require('./controllers/userController');
const {
  createTaskController,
  findingByUserIdController,
  updateTaskController,
  deleteTaskController
} = require('./controllers/todoController');

const jwtVerify = require('./middlewares/jwtVerify');

const app = express();

app.use(express.json());

app.post('/user', createUserController);
app.post('/login', loginUserController);

app.get('/todo', jwtVerify, findingByUserIdController);
app.post('/todo', jwtVerify, createTaskController);
app.put('/todo/:id', jwtVerify, updateTaskController);
app.delete('/todo/:id', jwtVerify, deleteTaskController);

module.exports = app;
