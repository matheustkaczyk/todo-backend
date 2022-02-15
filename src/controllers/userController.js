const { createUserService, loginUserService } = require('../services/userServices');

const createUserController = async (req, res) => {
  try {
    await createUserService(req.body);

    res.status(201).json({ message: 'User successfuly created' })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const loginUserController = async (req, res) => {
  try {
    const login = await loginUserService(req.body);

    res.status(200).json({ token: login });
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

module.exports = { createUserController, loginUserController };
