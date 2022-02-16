const express = require('express');

const { createUserController, loginUserController } = require('./controllers/userController');

const app = express();

app.use(express.json());

app.post('/user', createUserController);
app.post('/login', loginUserController);

// app.post('/todo', )

module.exports = app;
