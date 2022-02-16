const { createTaskService } = require('../services/todoServices');

const createTaskController = async (req, res) => {
  try {
    const user = req.user;
    const task = req.body;
    await createTaskService(task, user);
    res.status(201).json({ message: 'Task successfully created' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createTaskController };
