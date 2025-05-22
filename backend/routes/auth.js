import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password, weight, height, goal } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const stmt = db.prepare('INSERT INTO users (username, password, weight, height, goal) VALUES (?, ?, ?, ?, ?)');
    stmt.run(username, hashed, weight || 0, height || 0, goal || '');
    res.status(201).json({ message: 'Signup successful' });
  } catch (e) {
    res.status(400).json({ message: 'User already exists' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET || 'supersecret', { expiresIn: '7d' });
  res.json({ token, username: user.username });
});

router.post('/logout', (req, res) => {
  // For JWT, client just drops the token
  res.json({ message: 'Logged out' });
});

export default router;