const {
  createTaskModel,
  getTaskByIdModel,
  updateTaskModel,
  deleteTaskModel
} = require('../models/todoModels');

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

const updateTaskService = async (id, description, userId) => {
  const updating = await updateTaskModel(id, description, userId);

  return updating;
};

const deleteTaskService = async (id, userId) => {
  const deleting = await deleteTaskModel(id, userId);

  if (deleting.deletedCount > 0) return deleting;

  throw new Error('Task not found');
};

module.exports = {
  createTaskService,
  findingByUserIdService,
  updateTaskService,
  deleteTaskService
};
