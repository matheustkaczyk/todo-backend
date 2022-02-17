const User = require('../database/userSchema');
const Task = require('../models/todoModels');

const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

let token;

const user = { username: 'teste', password: 'teste123' }

const payload = {
  description: 'Playing'
}

describe('/LOGIN', () => {
  mocha.beforeEach(() => {
    User.create({ username: 'teste', password: 'aa1bf4646de67fd9086cf6c79007026c' });
  })

  it('Captura o token', (done) => {
    chai.request(server)
      .post('/login')
      .send(user)
      .end((_err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token')
        token = res.body.token;
        done();
      })
  })
})

describe('Task creation FAIL', () => {
  it('Verifica se não é possível criar sem um token', (done) => {
    chai.request(server)
      .post('/todo')
      .send(user)
      .end((_err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').equal('Missing authorization');
        done();
      })
  })

  it('Verifica se é possível criar', (done) => {
    chai.request(server)
      .post('/todo')
      .set('authorization', token)
      .send(payload)
      .end((_err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').equal('Task successfully created');
        done();
      })
  });

  it('Verifica se NÃO é possível criar sem payload', (done) => {
    chai.request(server)
      .post('/todo')
      .set('authorization', token)
      .end((_err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').equal('Todo validation failed: description: Path `description` is required.');
        done();
      })
  });

  it ('Verifica se é possível pegar as tarefas criadas', (done) => {
    chai.request(server)
      .get('/todo')
      .set('authorization', token)
      .end((_err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array');
        res.body.length.should.be.eql(1);
        done();
      })
  });
})