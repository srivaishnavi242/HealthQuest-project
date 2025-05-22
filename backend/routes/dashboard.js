import express from 'express';
import db from '../db.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const user = db.prepare('SELECT weight, height, goal FROM users WHERE id = ?').get(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Calculate BMI
  const heightM = user.height / 100;
  const bmi = heightM > 0 ? (user.weight / (heightM * heightM)).toFixed(2) : 0;

  // Weekly activity (past 7 days)
  const week = db.prepare(`
    SELECT scheduled_date, COUNT(*) as count 
    FROM workouts WHERE user_id = ? AND scheduled_date >= date('now','-6 days')
    GROUP BY scheduled_date
    ORDER BY scheduled_date
  `).all(userId);

  // Upcoming workouts
  const workouts = db.prepare(`
    SELECT id, title, scheduled_date FROM workouts 
    WHERE user_id = ? AND scheduled_date >= date('now')
    ORDER BY scheduled_date LIMIT 5
  `).all(userId);

  res.json({
    bmi, weight: user.weight, height: user.height, goal: user.goal,
    weeklyActivity: week,
    upcomingWorkouts: workouts
  });
});

export default router;