import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand/Intro - span 2 columns on medium screens */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <img src="/health.png" alt="HealthQuest Logo" className="w-10 h-8 mr-2" />
            <span className="text-3xl font-bold text-gray-800">HealthQuest</span>
          </div>
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            Your personalized health and fitness assistant to help you achieve your wellness goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
            <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
            <li><Link to="/workouts" className="text-gray-600 hover:text-blue-600">Workouts</Link></li>
            <li><Link to="/nutrition" className="text-gray-600 hover:text-blue-600">Nutrition</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">Contact</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="mailto:support@healthquest.com" className="hover:text-blue-600">
                support@healthquest.com
              </a>
            </li>
            <li>
              <a href="tel:1-800-HEALTH" className="hover:text-blue-600">
                Health Walfare
              </a>
            </li>
            <li>Benz Circle, Vijayawada</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
