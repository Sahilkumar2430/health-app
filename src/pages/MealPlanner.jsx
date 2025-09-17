import React from 'react'
import SectionCard from '../components/SectionCard'

export default function MealPlanner(){
  const sections = [
    { title: 'AI Tips', desc: 'Get recipe suggestions based on pantry and goals.', gradient: 'from-green-100 to-green-200' },
    { title: 'Weekly Plan', desc: 'Drag & drop to schedule meals for the week.', gradient: 'from-blue-100 to-blue-200' },
    { title: 'Saved Recipes', desc: 'Your favorite recipes & quick meals.', gradient: 'from-pink-100 to-pink-200' },
    { title: 'Nutrition Summary', desc: 'Macros & calorie overview.', gradient: 'from-yellow-100 to-yellow-200' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Meal Planner</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((s, idx) => <SectionCard key={idx} title={s.title} desc={s.desc} gradient={s.gradient} />)}
      </div>
    </div>
  )
}
