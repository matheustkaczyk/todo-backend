const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtVerify = (req, res, next) => {
  const { authorization } = req.headers;
  const secret = process.env.JWT_SECRET;

  if (!authorization) return res.status(404).json({ message: 'Missing authorization' });

  try {
    jwt.verify(authorization, secret);
    next()
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = jwtVerify;