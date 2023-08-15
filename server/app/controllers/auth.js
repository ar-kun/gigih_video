const bcrypt = require('bcrypt');
const db = require('../model');
const jwt = require('jsonwebtoken');
const User = db.user;
require('dotenv').config();

exports.register = async (req, res) => {
 try {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
   return res.status(400).json({ error: 'All fields are required' });
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
   return res.status(409).json({ error: 'Username or email already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
   username: username,
   email: email,
   password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
 } catch (error) {
  res.status(500).json({ error: 'An error occurred while registering the user' });
 }
};

exports.login = async (req, res) => {
 const secretKey = process.env.SECRET_KEY;

 try {
  const user = await User.findOne({ username: req.body.username });

  if (!user) {
   return res.status(400).json({ error: 'Cannot find user' });
  }

  if (await bcrypt.compare(req.body.password, user.password)) {
   const accessToken = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
   res.json({
    status: 'Login Success',
    accessToken: accessToken,
    data: {
     username: user.username,
    },
   });
  } else {
   res.status(401).json({ error: 'Wrong password' });
  }
 } catch (error) {
  res.status(500).json({ error: 'An error occurred while logging in' });
 }
};
