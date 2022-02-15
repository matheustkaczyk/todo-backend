const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSignature = (user) => {
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(user, secret, { expiresIn: '7d' })
    return token
};

module.exports = jwtSignature;
