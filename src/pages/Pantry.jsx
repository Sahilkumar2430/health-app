import React from 'react'
import SectionCard from '../components/SectionCard'

export default function Pantry(){
  const sections = [
    { title: 'Scanner', desc: 'Use image upload to detect pantry items.', gradient: 'from-yellow-100 to-yellow-200' },
    { title: 'Items List', desc: 'Track quantities and expiry dates.', gradient: 'from-indigo-100 to-indigo-200' },
    { title: 'Storage Tips', desc: 'How to store food to increase shelf life.', gradient: 'from-green-100 to-green-200' },
    { title: 'Waste Reduction', desc: 'Recipes to use expiring items.', gradient: 'from-pink-100 to-pink-200' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Pantry</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sections.map((s, idx) => <SectionCard key={idx} title={s.title} desc={s.desc} gradient={s.gradient} />)}
      </div>
    </div>
  )
}
