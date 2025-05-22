import Database from 'better-sqlite3';

const db = new Database('healthquest.db');

// User Table
db.prepare(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT,
  weight REAL DEFAULT 0,
  height REAL DEFAULT 0,
  goal TEXT DEFAULT ''
)
`).run();

// Workouts Table
db.prepare(`
CREATE TABLE IF NOT EXISTS workouts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  type TEXT,
  duration INTEGER,
  difficulty TEXT,
  intensity TEXT,
  description TEXT,
  user_id INTEGER,
  scheduled_date TEXT,
  FOREIGN KEY(user_id) REFERENCES users(id)
)
`).run();

// Meals Table
db.prepare(`
CREATE TABLE IF NOT EXISTS meals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  calories INTEGER,
  protein REAL,
  carbs REAL,
  fat REAL,
  date TEXT,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
)
`).run();

// Water Intake Table
db.prepare(`
CREATE TABLE IF NOT EXISTS water_intake (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  amount_ml INTEGER,
  date TEXT,
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
)
`).run();

export default db;