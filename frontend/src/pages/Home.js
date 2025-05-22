import React from 'react';
import { Link } from 'react-router-dom';
import Feature from '../components/feature'; // Adjust path if needed
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex flex-col items-center justify-center flex-1 py-32">
        <div className="flex flex-col items-center mb-10">
          <img
            src="/health.png"
            alt="HealthQuest Logo"
            className="w-24 h-24 mb-4"
            style={{ objectFit: 'contain' }}
          />
          <h1 className="text-7xl font-extrabold text-blue-700 mb-4 text-center">
            HealthQuest
          </h1>
          <p className="text-2xl mb-8 text-gray-700 font-medium text-center">
            Your personalized health and fitness assistant.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-2xl font-semibold shadow hover:bg-blue-700 transition mb-8"
          >
            Get Started
          </Link>
        </div>
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          <Feature
            img="/fitnesstracking.png"
            title="Fitness Tracking"
            desc="Track your workouts, see progress, and schedule routines easily."
            to="/dashboard"
          />
          <Feature
            img="/recommendations.png"
            title="Personalized Recommendations"
            desc="Get custom workouts and nutrition advice based on your goals."
            to="/workouts"
          />
          <Feature
            img="/nutrition.png"
            title="Nutrition & Hydration"
            desc="Log meals, monitor nutrients, and track your daily water intake."
            to="/nutrition"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}