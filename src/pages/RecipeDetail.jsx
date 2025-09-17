import React from 'react'
import { useParams } from 'react-router-dom'
import NutritionChart from '../components/NutritionChart'
import SectionCard from '../components/SectionCard'

export default function RecipeDetail(){
  const { id } = useParams()
  const recipe = {
    id,
    title: 'Sample Salmon Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=1200&q=80',
    instructions: '1. Season salmon. 2. Cook for 10 minutes. 3. Serve with rice and veggies.',
    nutrition: { protein: 30, carbs: 40, fat: 15 }
  }

  const related = [
    { title: 'Grilled Salmon', desc: 'Simple grilled salmon with lemon.'},
    { title: 'Quinoa Bowl', desc: 'Protein-rich quinoa mix.'},
    { title: 'Avocado Salad', desc: 'Fresh and light side dish.'},
    { title: 'Miso Soup', desc: 'Warm soup with umami.'},
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
          <img src={recipe.image} alt={recipe.title} className="w-full rounded mb-4 object-cover max-h-96" />
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Instructions</h3>
            <p className="text-gray-700">{recipe.instructions}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Nutrition</h3>
            <NutritionChart nutrition={recipe.nutrition} />
          </div>
        </div>

        <aside>
          <h4 className="font-semibold mb-3">Related Recipes</h4>
          <div className="space-y-3">
            {related.map((r, i) => <SectionCard key={i} title={r.title} desc={r.desc} gradient="from-gray-100 to-gray-200" />)}
          </div>
        </aside>
      </div>
    </div>
  )
}
