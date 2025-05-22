# HealthQuest

HealthQuest is a full-stack web application for tracking and improving your fitness and health. The platform allows users to monitor daily steps, calories burned, BMI, weight, workout activities, and fitness goals through an intuitive dashboard with visual cards and charts.

## Features

- Dashboard Overview: See BMI, weight, and fitness goal at a glance.
- Fitness Tracking Cards: View progress towards your daily step and calorie goals with visual progress bars.
- Weekly Activity Chart: Analyze your weekly activity data with interactive bar charts.
- Upcoming Workouts: Stay organized with a list of your scheduled workouts.
- Personalized Metrics: All health and fitness metrics are user-specific and update in real-time.
- API-Driven: Easily update metrics such as steps and calories through API endpoints.

## Tech Stack

- Frontend: React, Tailwind CSS, Recharts
- Backend: Node.js, Express
- API Testing: Postman

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/healthquest.git
   cd healthquest
   ```

2. Install dependencies for both frontend and backend
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Run the backend server
   ```bash
   cd backend
   npm start
   ```

4. Run the frontend app
   ```bash
   cd ../frontend
   npm start
   ```

5. Open your browser and go to
   ```
   http://localhost:3000
   ```

## API Endpoints

- GET /api/dashboard  
  Retrieve dashboard data (BMI, weight, goals, weekly activity, upcoming workouts, fitness stats).
- PUT /api/dashboard  
  Update fitness stats (steps, calories, goals, etc.).

## Screenshots
![image](https://github.com/user-attachments/assets/4ae772e5-d7e5-4ef1-b364-78368325fd0d)


![image](https://github.com/user-attachments/assets/25aeec5d-22a7-47ba-9bdf-4b9a96a596dd)

![image](https://github.com/user-attachments/assets/beaa9fc1-5059-4980-a7c0-ca28f84511eb)
![image](https://github.com/user-attachments/assets/4749b81a-b5a0-47a4-83ea-ceedddf658e9)
![image](https://github.com/user-attachments/assets/288959c4-11ed-41de-a711-dd7767ba1ae4)

![image](https://github.com/user-attachments/assets/945f4165-7919-48f4-9937-7f8f9dfe9274)





HealthQuest helps you stay motivated and monitor your health journey, all in one place.
