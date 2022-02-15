const userModel = require('../database/userSchema');

const createUserModel = async (user) => {
  try {
    const creating = await userModel.create(user);
    return creating;
  } catch (error) {
    throw new Error(error);
  }
}

const findUserModel = async (username) => {
  try {
    const finding = await userModel.find({ username });

    return finding;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { createUserModel, findUserModel };
