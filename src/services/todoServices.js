const { createTaskModel } = require('../models/todoModels');
const { findUserModel } = require('../models/userModels');

const md5 = require('md5');

const createTaskService = async (task, user) => {
  const hashPass = md5(user.password);
  const { description } = task;

  const doesExist = await findUserModel(user.username, hashPass);
  const userLocated = doesExist[0];

  const newTask = { userId: userLocated._id, description,  date: new Date() }
  const creating = await createTaskModel(newTask);
  return creating;
};

module.exports = { createTaskService };
