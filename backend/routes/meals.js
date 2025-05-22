import express from 'express';
import db from '../db.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET meals for user (optionally by date)
router.get('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const { date } = req.query;
  let q = 'SELECT * FROM meals WHERE user_id = ?';
  let params = [userId];
  if (date) { q += ' AND date = ?'; params.push(date); }
  const meals = db.prepare(q).all(...params);
  res.json(meals);
});

// POST add meal
router.post('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const { name, calories, protein, carbs, fat, date } = req.body;
  try {
    db.prepare(
      'INSERT INTO meals (name, calories, protein, carbs, fat, date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(name, calories, protein, carbs, fat, date, userId);
    res.status(201).json({ message: 'Meal added' });
  } catch {
    res.status(400).json({ message: 'Failed to add meal' });
  }
});

export default router;