const userModel = require('../models/userModel.js');

const createUser = (username, password) => {
  const user = new userModel(username, password);

  try {
    const saving = await user.save();

    return saving;
  } catch (error) {
    return error;
  }
}

module.exports = { createUser };
