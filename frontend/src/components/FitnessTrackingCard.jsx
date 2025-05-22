import React from "react";

export default function FitnessTrackingCard({ title, value, percent, goalText, color = "bg-blue-400" }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 min-w-[260px] flex flex-col justify-between">
      <div className="mb-2">
        <div className="font-semibold text-lg mb-1">{title}</div>
        <div className="text-3xl font-extrabold mb-1">{value.toLocaleString()}</div>
        <div className="text-gray-500 text-sm mb-3">{percent}% of {goalText}</div>
        <div className="w-full h-3 bg-gray-100 rounded-full">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${color}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}