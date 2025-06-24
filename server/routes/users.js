const express = require('express');
const router = express.Router();
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

    const newUser = { email, firstName, lastName, password };
    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.get("/authenticate", async (req, res) =>{
    const { email, firstName, lastName, password } = req.body;

    try {
        const db =  await connectToDatabase();
        const userCollection = db.collection('Users');

        const existingUser = await usersCollection.findOne({ email, password });
        if (existingUser) {
            // authenticate
    }



    } catch (error) {
        
    }
});

module.exports = router;