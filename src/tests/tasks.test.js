const User = require('../database/userSchema');
const Task = require('../models/todoModels');

const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const server = require('../server');

let should = chai.should();

chai.use(chaiHttp);

let token;

describe('Task creation', () => {
  const user = { username: 'teste', password: 'teste123' }

  mocha.beforeEach(() => {
    User.create({ username: 'teste', password: 'aa1bf4646de67fd9086cf6c79007026c' });
  })

  it('Verifica se não é possível entrar sem um token', (done) => {
    chai.request(server)
    .post('/login')
    .send(user)
    .end((err, res) => {
      res.should.have.status()
    })
  })
})