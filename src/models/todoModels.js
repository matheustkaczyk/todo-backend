const todoModel = require('../database/todoSchema');

const createTaskModel = async (task) => {
  try {
    const creating = await todoModel.create(task);
    return creating;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createTaskModel };
