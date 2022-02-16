const express = require('express');

const { createUserController, loginUserController } = require('./controllers/userController');
const { createTaskController } = require('./controllers/todoController');

const jwtVerify = require('./middlewares/jwtVerify');

const app = express();

app.use(express.json());

app.post('/user', createUserController);
app.post('/login', loginUserController);

app.post('/todo', jwtVerify, createTaskController);

module.exports = app;
