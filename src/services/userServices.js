const { createUserModel, findUserModel } = require('../models/userModels');

const md5 = require('md5');

const jwtSignature = require('../utils/jwtSignature');

const findingUserService = async (username, password) => {
  const hashPass = md5(password);
  const finding = await findUserModel(username, hashPass);
  return finding;
}

const createUserService = async (user) => {
  const alreadyExists = await findingUserService(user.username, user.password);

  if (alreadyExists.length > 0) throw new Error('User already exists')

  user.password = md5(user.password);
  const creating = await createUserModel(user);
  return creating;
}

const loginUserService = async (user) => {
  const doesExist = await findingUserService(user.username, user.password);

  if (doesExist.length > 0) return jwtSignature(user);

  throw new Error('User does not exist');
}

module.exports = { createUserService, findingUserService, loginUserService };
