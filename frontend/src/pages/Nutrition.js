import React, { useEffect, useState } from 'react';
import API from '../api';
import { toast } from 'react-toastify';
import WaterIntake from '../components/WaterIntake';

export default function Nutrition() {
  const [meals, setMeals] = useState([]);
  const [form, setForm] = useState({ name: '', calories: '', protein: '', carbs: '', fat: '', date: '' });

  const fetchMeals = async () => {
    const today = new Date().toISOString().slice(0, 10);
    const res = await API.get('/meals', { params: { date: today } });
    setMeals(res.data);
  };

  useEffect(() => { fetchMeals(); }, []);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/meals', form);
      toast.success('Meal added');
      setForm({ name: '', calories: '', protein: '', carbs: '', fat: '', date: '' });
      fetchMeals();
    } catch {
      toast.error('Failed to add meal');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Nutrition</h1>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Log a Meal</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input required name="name" placeholder="Meal Name" value={form.name} onChange={onChange} className="border p-2 rounded" />
          <input required name="calories" type="number" placeholder="Calories" value={form.calories} onChange={onChange} className="border p-2 rounded" />
          <input name="protein" type="number" placeholder="Protein (g)" value={form.protein} onChange={onChange} className="border p-2 rounded" />
          <input name="carbs" type="number" placeholder="Carbs (g)" value={form.carbs} onChange={onChange} className="border p-2 rounded" />
          <input name="fat" type="number" placeholder="Fat (g)" value={form.fat} onChange={onChange} className="border p-2 rounded" />
          <input name="date" type="date" value={form.date} onChange={onChange} className="border p-2 rounded" />
          <button className="bg-blue-600 text-white py-2 rounded md:col-span-3">Add Meal</button>
        </form>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Today's Meals</h2>
        <ul>
          {meals.map(m =>
            <li key={m.id} className="border-b py-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-gray-500">{m.calories} kcal • Protein: {m.protein}g • Carbs: {m.carbs}g • Fat: {m.fat}g</div>
                  <div className="text-sm text-gray-400">Date: {m.date}</div>
                </div>
              </div>
            </li>
          )}
        </ul>
      </section>
      <WaterIntake />
    </div>
  );
}