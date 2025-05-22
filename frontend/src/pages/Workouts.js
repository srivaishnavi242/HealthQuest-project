import React, { useEffect, useState } from 'react';
import API from '../api';
import { toast } from 'react-toastify';

const DIFFICULTY = ['Easy', 'Medium', 'Hard'];

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [filters, setFilters] = useState({ type: '', duration: '', difficulty: '' });
  const [form, setForm] = useState({ title: '', type: '', duration: '', difficulty: '', intensity: '', description: '', scheduled_date: '' });

  const fetchWorkouts = async () => {
    const params = {};
    if (filters.type) params.type = filters.type;
    if (filters.duration) params.duration = filters.duration;
    if (filters.difficulty) params.difficulty = filters.difficulty;
    const res = await API.get('/workouts', { params });
    setWorkouts(res.data);
  };

  useEffect(() => { fetchWorkouts(); }, [filters]);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/workouts', form);
      toast.success('Workout added');
      setForm({ title: '', type: '', duration: '', difficulty: '', intensity: '', description: '', scheduled_date: '' });
      fetchWorkouts();
    } catch {
      toast.error('Failed to add workout');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Workouts</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Add a Workout</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input required name="title" placeholder="Title" value={form.title} onChange={onChange} className="border p-2 rounded" />
          <input name="type" placeholder="Type (e.g. Cardio)" value={form.type} onChange={onChange} className="border p-2 rounded" />
          <input name="duration" type="number" placeholder="Duration (min)" value={form.duration} onChange={onChange} className="border p-2 rounded" />
          <select name="difficulty" value={form.difficulty} onChange={onChange} className="border p-2 rounded">
            <option value="">Difficulty</option>
            {DIFFICULTY.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <input name="intensity" placeholder="Intensity" value={form.intensity} onChange={onChange} className="border p-2 rounded" />
          <input name="scheduled_date" type="date" value={form.scheduled_date} onChange={onChange} className="border p-2 rounded" />
          <input name="description" placeholder="Description" value={form.description} onChange={onChange} className="border p-2 rounded md:col-span-3" />
          <button className="bg-blue-600 text-white py-2 rounded md:col-span-3">Add</button>
        </form>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Workout Library</h2>
        <div className="flex space-x-2 mb-4">
          <input placeholder="Type" value={filters.type} onChange={e => setFilters(f => ({ ...f, type: e.target.value }))} className="border p-2 rounded" />
          <input placeholder="Duration" value={filters.duration} onChange={e => setFilters(f => ({ ...f, duration: e.target.value }))} className="border p-2 rounded" />
          <select value={filters.difficulty} onChange={e => setFilters(f => ({ ...f, difficulty: e.target.value }))} className="border p-2 rounded">
            <option value="">Difficulty</option>
            {DIFFICULTY.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <ul>
          {workouts.map(w =>
            <li key={w.id} className="border-b py-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{w.title}</div>
                  <div className="text-gray-500">{w.type} • {w.duration} min • {w.difficulty} • {w.intensity}</div>
                  <div>{w.description}</div>
                  <div className="text-sm text-gray-400">Scheduled: {w.scheduled_date}</div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}