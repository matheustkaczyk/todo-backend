const User = require('../database/userSchema');
const Task = require('../models/todoModels');

const chai = require('chai');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const server = require('../server');

let should = chai.should();

chai.use(chaiHttp);

describe('Task creation', () => {
  mocha.beforeEach((done) => {

  })
})