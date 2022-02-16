const { createTaskModel, getTaskByIdModel } = require('../models/todoModels');

const findingByUserIdService = async (userId) => {
  const finding = await getTaskByIdModel(userId);
  return finding;
};

const createTaskService = async (task, user) => {
  const { description } = task;

  const newTask = { userId: user.userId, description,  date: new Date() }
  const creating = await createTaskModel(newTask);
  return creating;
};

module.exports = { createTaskService, findingByUserIdService };
