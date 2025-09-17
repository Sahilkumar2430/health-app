// src/components/SectionCard.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function SectionCard({ title, desc, gradient, link }) {
  return (
    <Link to={link} className="block transform transition duration-300 hover:scale-105">
      <div className={`bg-gradient-to-br ${gradient} p-6 rounded-xl shadow-lg`}>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{desc}</p>
      </div>
    </Link>
  )
}
