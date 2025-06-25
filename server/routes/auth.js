const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const connectToDatabase = require('../connect.cjs');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const db = await connectToDatabase();
  const usersCollection = db.collection('Users');

  const foundUser = await usersCollection.findOne({ email });
  if (!foundUser) return res.status(401).json({ message: "Invalid credentials" });

  const validPass = await bcrypt.compare(password, foundUser.password);
  if (!validPass) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = jwt.sign(
    { userId: foundUser._id, email: foundUser.email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15m' }
  );

  const refreshToken = jwt.sign(
    { userId: foundUser._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '30d' }
  );

  res.json({ accessToken, refreshToken });
});

module.exports = router;
