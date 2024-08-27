const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors/')






const register = async(req,res) =>{
  try {
      const user = await User.create({...req.body})
      console.log('User created:', user);
      
      const token = user.createJWT();
      console.log('Token created:', token);

      res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  } catch (error) {
      console.error('Registration error:', error);
      res.status(StatusCodes.BAD_REQUEST).json({ error: 'Registration failed' });
  }
};











const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Please provide username and password');
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid credentials');
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.username }, token });
};



module.exports = {
  register,
  login
}