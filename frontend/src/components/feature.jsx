import React from 'react';
import { Link } from 'react-router-dom';

export default function Feature({ title, desc, to, img }) {
  return (
    <Link
      to={to}
      className="p-6 bg-white shadow rounded-lg text-center hover:shadow-lg transition cursor-pointer block"
      style={{ minWidth: 180, minHeight: 180 }}
    >
      {img && (
        <img
          src={img}
          alt={title + ' icon'}
          className="mx-auto mb-3 w-12 h-12 object-contain"
        />
      )}
      <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </Link>
  );
}
