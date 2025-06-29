const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../connect.cjs');

router.post('/register', async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('Users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { email, firstName, lastName, password: hashedPassword };
    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.get('/me', async (req, res) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const db = await connectToDatabase();
    const user = await db.collection('Users').findOne({ email: decoded.email });

    res.json({ firstName: user.firstName });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});


module.exports = router;