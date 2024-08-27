const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const authMiddleware = async (req, res, next) => {
  try {
    // Check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthenticatedError('Authentication invalid');
    }

    // Extract token
    const token = authHeader.split(' ')[1];

    // Verify token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request object
    req.user = { userId: payload.userId, name: payload.name }; // Adjust according to your payload structure

    // Continue to the next middleware
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ error: 'Authentication invalid' });
  }
};

module.exports = authMiddleware;
