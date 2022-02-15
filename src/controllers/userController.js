const { createUserService } = require('../services/userServices');

const createUserController = async (req, res) => {
  try {
    const creating = await createUserService(req.body);

    if (creating) return res.status(201).json({ message: 'User successfuly created' })
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createUserController };
