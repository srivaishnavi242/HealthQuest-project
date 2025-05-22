import React, { useEffect, useState } from 'react';
import API from '../api';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardFitnessSection from '../components/DashboardFitnessSection';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get('/dashboard')
      .then(res => setData(res.data))
      .catch(err => {
        console.error('Error loading dashboard:', err);
        setData({});
      });
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  // Demo values until backend supplies these
  const fitness = {
    dailySteps: 8462,
    stepsGoal: 10000,
    caloriesBurned: 1842,
    caloriesGoal: 2500
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        <Metric label="BMI" value={data.bmi ?? '--'} />
        <Metric label="Weight (kg)" value={data.weight ?? '--'} />
        <Metric label="Goal" value={data.goal ?? '--'} />
      </div>

      {/* Fitness Tracking Cards */}
      <DashboardFitnessSection fitness={fitness} />

      {/* Weekly Activity */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Weekly Activity</h2>
        {Array.isArray(data.weeklyActivity) && data.weeklyActivity.length > 0 ? (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.weeklyActivity}>
              <XAxis dataKey="scheduled_date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No activity data available.</p>
        )}
      </section>

      {/* Upcoming Workouts */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Upcoming Workouts</h2>
        {Array.isArray(data.upcomingWorkouts) && data.upcomingWorkouts.length > 0 ? (
          <ul>
            {data.upcomingWorkouts.map(w =>
              <li key={w.id} className="border-b py-2">
                {w.title} – {w.scheduled_date}
              </li>
            )}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming workouts scheduled.</p>
        )}
      </section>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center">
      <div className="text-lg text-gray-600">{label}</div>
      <div className="text-2xl font-bold text-blue-700">{value}</div>
    </div>
  );
}