const { createUserModel, findUserModel } = require('../models/userModel');

const md5 = require('md5');

const findingUserService = async (username) => {
  const finding = await findUserModel(username);
  return finding;
}

const createUserService = async (user) => {
  const alreadyExists = await findingUserService(user.username);

  if (alreadyExists.length > 0) throw new Error('User already exists')

  user.password = md5(user.password);
  const creating = await createUserModel(user);
  return creating;
}

module.exports = { createUserService, findingUserService };
