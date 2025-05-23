# HealthQuest

HealthQuest: Personalized Health and Fitness Assistant is a full-stack web application for tracking and improving your fitness and health. The platform allows users to monitor daily steps, calories burned, BMI, weight, workout activities, and fitness goals through an intuitive dashboard with visual cards and charts.

## Features

- **Dashboard Overview:** See BMI, weight, and fitness goal at a glance.
- **Fitness Tracking Cards:** View progress towards your daily step and calorie goals with visual progress bars.
- **Weekly Activity Chart:** Analyze your weekly activity data with interactive bar charts.
- **Upcoming Workouts:** Stay organized with a list of your scheduled workouts.
- **Personalized Metrics:** All health and fitness metrics are user-specific and update in real-time.
- **API-Driven:** Easily update metrics such as steps and calories through API endpoints.
- **Nutrition Insights:** Log and analyze your meal intake for optimized nutrition.
- **Workout Recommendations:** Receive personalized workout suggestions based on your goals and activity history.
- **Progress Visualization:** Visualize your progress over time with easy-to-understand graphs and summaries.
- **Simple, Responsive Design:** Access HealthQuest from any device with a clean and modern UI.

## Tech Stack

- **Frontend:** React, Tailwind CSS, Recharts
- **Backend:** Node.js, Express
- **Database:** SQLite (via Sequelize ORM)
- **API Testing:** Postman

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healthquest.git
   cd healthquest
   ```

2. **Install dependencies for both backend and frontend**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. **Run the backend server**
   ```bash
   cd backend
   npm start
   ```

4. **Run the frontend app**
   ```bash
   cd ../frontend
   npm start
   ```

5. **Open your browser and go to**
   ```
   http://localhost:3000
   ```

## API Endpoints

- **GET /api/dashboard**  
  Retrieve dashboard data (BMI, weight, goals, weekly activity, upcoming workouts, fitness stats).
- **PUT /api/dashboard**  
  Update fitness stats (steps, calories, goals, etc.).

## Screenshots

![image](https://github.com/user-attachments/assets/4ae772e5-d7e5-4ef1-b364-78368325fd0d)
![image](https://github.com/user-attachments/assets/b61ab5ec-dbf7-4aa5-964c-01829cef5544)
![image](https://github.com/user-attachments/assets/09bfb4cb-02ff-4d93-9777-49e4d6b6c89e)

![image](https://github.com/user-attachments/assets/f9aaa188-4600-42dc-a268-7571d5c9b06f)

![image](https://github.com/user-attachments/assets/25aeec5d-22a7-47ba-9bdf-4b9a96a596dd)
![image](https://github.com/user-attachments/assets/beaa9fc1-5059-4980-a7c0-ca28f84511eb)
![image](https://github.com/user-attachments/assets/4749b81a-b5a0-47a4-83ea-ceedddf658e9)
![image](https://github.com/user-attachments/assets/50ce765e-2d6a-4471-99c4-4841764fecc7)
![image](https://github.com/user-attachments/assets/945f4165-7919-48f4-9937-7f8f9dfe9274)

## Why HealthQuest?

- **Personalization:** Whether you're a beginner or a fitness enthusiast, HealthQuest adapts to your needs and fitness journey.
- **Motivation:** Track your daily and weekly progress, set new goals, and celebrate your achievements.
- **Simplicity:** HealthQuest is designed to make health tracking effortless and enjoyable, so you can focus on your wellness.
- **Privacy:** Your data is securely stored and never shared without your consent.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests to help improve HealthQuest.

HealthQuest helps you stay motivated and monitor your health journey, all in one place.
