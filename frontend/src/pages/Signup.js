import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '', weight: '', height: '', goal: '' });
  const navigate = useNavigate();

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', form);
      toast.success('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      toast.error('Signup failed. Username may already exist.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-8xl font-bold mb-6">Sign Up</h2>
        <input name="username" required placeholder="Username"
          className="w-full border p-2 mb-4 rounded" value={form.username} onChange={onChange} />
        <input name="password" type="password" required placeholder="Password"
          className="w-full border p-2 mb-4 rounded" value={form.password} onChange={onChange} />
        <input name="weight" type="number" placeholder="Weight (kg)"
          className="w-full border p-2 mb-4 rounded" value={form.weight} onChange={onChange} />
        <input name="height" type="number" placeholder="Height (cm)"
          className="w-full border p-2 mb-4 rounded" value={form.height} onChange={onChange} />
        <input name="goal" placeholder="Fitness Goal"
          className="w-full border p-2 mb-4 rounded" value={form.goal} onChange={onChange} />
        <button className="w-full bg-blue-600 text-white py-2 rounded mt-4">Sign Up</button>
      </form>
    </div>
  );
}