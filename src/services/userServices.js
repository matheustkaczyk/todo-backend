const { createUserModel } = require('../models/userModel');

const md5 = require('md5');

const createUserService = async (user) => {
  try {
    user.password = md5(user.password);
    const creating = await createUserModel(user);
    return creating;
  } catch (error) {
    return error;
  }
}

module.exports = { createUserService };
