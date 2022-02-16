const todoModel = require('../database/todoSchema');

const getTaskByIdModel = async (userId) => {
  try {
    const finding = await todoModel.find({ userId });
    return finding;
  } catch (error) {
    throw new Error(error.message);
  }
}

const createTaskModel = async (task) => {
  try {
    const creating = await todoModel.create(task);
    return creating;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createTaskModel, getTaskByIdModel };
