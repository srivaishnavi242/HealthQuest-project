import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold underline"
      : "hover:text-blue-600 transition-colors";

  return (
    <nav className="flex justify-between items-center w-full px-16 py-4 bg-white shadow">
      <NavLink to="/" className="text-2xl font-bold text-blue-700">
        HealthQuest
      </NavLink>
      <div className="space-x-4">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        {token && (
          <>
            <NavLink to="/dashboard" className={navLinkClass}>
              Fitness Tracking
            </NavLink>
            <NavLink to="/workouts" className={navLinkClass}>
              Personalized Recommendations
            </NavLink>
            <NavLink to="/nutrition" className={navLinkClass}>
              Nutrition & Hydration
            </NavLink>
          </>
        )}
        {!token ? (
          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </NavLink>
        ) : (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
