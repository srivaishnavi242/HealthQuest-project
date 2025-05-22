import React, { useState } from 'react';

const DAILY_GOAL_LITERS = 2; // 2L daily goal

export default function WaterIntake() {
  const [waterLiters, setWaterLiters] = useState(1.2); // demo initial value

  const percent = Math.min(100, Math.round((waterLiters / DAILY_GOAL_LITERS) * 100));
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  const addWater = () => setWaterLiters(w => Math.min(DAILY_GOAL_LITERS, +(w + 0.2).toFixed(2)));
  const removeWater = () => setWaterLiters(w => Math.max(0, +(w - 0.2).toFixed(2)));

  return (
    <section className="flex flex-col items-center mt-4">
      <h2 className="text-2xl font-bold mb-4">Water Intake</h2>
      <div className="relative flex flex-col items-center mb-2">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#60a5fa"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>
        <span
          className="absolute top-1/2 left-1/2 text-2xl font-bold"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {waterLiters}L
        </span>
      </div>
      <div className="mb-2 text-gray-500 text-lg">
        {percent}% of daily goal ({DAILY_GOAL_LITERS}L)
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={removeWater}
          className="bg-gray-100 text-2xl px-4 py-2 rounded"
        >
          –
        </button>
        <button
          onClick={addWater}
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
        >
          <span className="text-xl mr-2">+</span> Add Water
        </button>
      </div>
    </section>
  );
}