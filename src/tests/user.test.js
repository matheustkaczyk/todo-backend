let User = require('../database/userSchema');

const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const server = require('../server');

let should = chai.should();

chai.use(chaiHttp);

const defaultUser = {
  username: 'teste',
  password: 'teste123'
};

describe('User creation', () => {
  mocha.beforeEach((done) => {
    User.remove({}, () => done())
  });

  it('Testa que a criação de usuario funciona', (done) => {
    const user = {
      username: 'João teste',
      password: 'teste123'
    };
    
    chai.request(server)
      .post('/user')
      .send(user)
      .end((_err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').equal('User successfuly created');
        done();
      })
  });

  it('Testa que acriação de usuário NÃO funciona sem o username no payload', (done) => {
    const user = {
      password: 'teste123'
    };

    chai.request(server)
    .post('/user')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(404);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').equal('Please enter a username and password');
      done();
    })
  });

  it('Testa que a criação de usuário NÃO funciona sem o password no payload', (done) => {
    const user = {
      username: 'João teste'
    };

    chai.request(server)
    .post('/user')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(404);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').equal('Please enter a username and password');
      done();
    })
  });
})

describe('User login', () => {
  mocha.beforeEach(() => {
    User.create({ username: 'teste', password: 'aa1bf4646de67fd9086cf6c79007026c' })
  })

  mocha.afterEach((done) => {
    User.remove({}, () => done())
  });

  it('Testa que a pessoa usuária consegue logar', (done) => {
    chai.request(server)
    .post('/login')
    .send(defaultUser)
    .end((_err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('token');
      done();
    })
  })

  it('Testa que a pessoa usuária NÃO consegue logar sem payload', (done) => {
    chai.request(server)
    .post('/login')
    .end((_err, res) => {
      res.should.have.status(400);
      done();
    })
  })

  it('Testa que o login da pessoa usuária NÃO funciona sem o username no payload', (done) => {
    const user = {
      password: 'teste123'
    };

    chai.request(server)
    .post('/login')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').equal("User not found");
      done();
    })
  });

  it('Testa que o login da pessoa usuária NÃO funciona sem o password no payload', (done) => {
    const user = {
      username: 'teste'
    };

    chai.request(server)
    .post('/login')
    .send(user)
    .end((_err, res) => {
      res.should.have.status(400);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').equal("Illegal argument undefined");
      done();
    })
  });

  describe('Verifica que a pessoa usuária não consegue logar sem tiver cadastrado', () => {
    mocha.beforeEach((done) => {
      User.remove({}, () => done());
    });

    it('Verifica se usuário inexistente NÃO consegue logar', (done) => {
      chai.request(server)
      .post('/login')
      .send(defaultUser)
      .end((_err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('message').equal('User not found');
        done();
      })
    })
  })
})