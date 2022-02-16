const { createTaskService, findingByUserIdService } = require('../services/todoServices');

const findingByUserIdController = async (req, res) => {
  try {
    const { userId } = req.user;
    const finding = await findingByUserIdService(userId)

    return res.status(200).json({ data: finding });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createTaskController = async (req, res) => {
  try {
    const user = req.user;
    const task = req.body;
    await createTaskService(task, user);
    res.status(201).json({ message: 'Task successfully created' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createTaskController, findingByUserIdController };
