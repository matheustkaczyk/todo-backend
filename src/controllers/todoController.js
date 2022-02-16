const {
  createTaskService,
  findingByUserIdService,
  updateTaskService,
  deleteTaskService
} = require('../services/todoServices');

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

const updateTaskController = async (req, res) => {
  try {
    const { description } = req.body;
    const { id } = req.params;
    const { userId } = req.user;

    await updateTaskService(id, description, userId);

    res.status(200).json({ message: 'Task successfully updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    await deleteTaskService(id, userId);

    res.status(200).json({ message: 'Task successfully deleted' })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createTaskController,
  findingByUserIdController,
  updateTaskController,
  deleteTaskController
};
