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

const updateTaskModel = async (id, description, userId) => {
  try {
    const updating = await todoModel.updateOne({ _id: id, userId }, { $set: { description } });
    return updating;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteTaskModel = async (id, userId) => {
  try {
    const deleting = await todoModel.deleteOne({ _id: id, userId });

    return deleting;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createTaskModel,
  getTaskByIdModel,
  updateTaskModel,
  deleteTaskModel
};
