import React from "react";
import FitnessTrackingCard from "./FitnessTrackingCard";

export default function DashboardFitnessSection() {
  // Replace with real data or props as needed
  const dailySteps = 8462, stepsGoal = 10000;
  const calories = 1842, caloriesGoal = 2500;

  return (
    <div className="flex flex-wrap gap-6 bg-gray-50 rounded-lg p-4 my-6">
      <FitnessTrackingCard
        title="Daily Steps"
        value={dailySteps}
        percent={Math.round((dailySteps / stepsGoal) * 100)}
        goalText="daily goal"
        color="bg-blue-400"
      />
      <FitnessTrackingCard
        title="Calories Burned"
        value={calories}
        percent={Math.round((calories / caloriesGoal) * 100)}
        goalText="daily goal"
        color="bg-green-400"
      />
      {/* Add more cards as needed */}
    </div>
  );
}