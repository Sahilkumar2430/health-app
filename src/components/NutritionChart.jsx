import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const COLORS = ['#60A5FA', '#34D399', '#FBBF24']

export default function NutritionChart({nutrition}) {
  const data = [
    { name: 'Protein', value: nutrition.protein || 0 },
    { name: 'Carbs', value: nutrition.carbs || 0 },
    { name: 'Fats', value: nutrition.fat || 0 }
  ]
  return (
    <div style={{ width: '100%', height: 220 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} label>
            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
