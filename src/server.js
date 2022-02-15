const express = require('express');

const { createUserController } = require('./controllers/userController');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).json({ message: 'API rodando' }));
app.post('/user', createUserController);

module.exports = app;
