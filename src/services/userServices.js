const { createUser } = require('../models/userModel');

const md5 = require('md5');

const userService = (username, password) => {
  try {
    const creating = createUser(username, md5(password))
    return creating;
  } catch (error) {
    return error;
  }
}

module.exports = { userService };
