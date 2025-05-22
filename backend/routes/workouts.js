import express from 'express';
import db from '../db.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET all or filtered workouts for user
router.get('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const { type, duration, difficulty } = req.query;
  let q = 'SELECT * FROM workouts WHERE user_id = ?';
  let params = [userId];
  if (type) { q += ' AND type = ?'; params.push(type); }
  if (duration) { q += ' AND duration = ?'; params.push(duration); }
  if (difficulty) { q += ' AND difficulty = ?'; params.push(difficulty); }
  const workouts = db.prepare(q).all(...params);
  res.json(workouts);
});

// POST add new workout
router.post('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const { title, type, duration, difficulty, intensity, description, scheduled_date } = req.body;
  try {
    db.prepare(
      'INSERT INTO workouts (title, type, duration, difficulty, intensity, description, user_id, scheduled_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    ).run(title, type, duration, difficulty, intensity, description, userId, scheduled_date);
    res.status(201).json({ message: 'Workout added' });
  } catch {
    res.status(400).json({ message: 'Failed to add workout' });
  }
});

export default router;