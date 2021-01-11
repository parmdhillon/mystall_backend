import User from '../models/usersModel.js';
import bcrypt from 'bcryptjs';

export const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(400);
      throw new Error('User already exist!');
    }

    const user = await User.create({
      fullName,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid User Data!');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
