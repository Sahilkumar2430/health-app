import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MealPlanner from '../pages/MealPlanner'
import Pantry from '../pages/Pantry'
import RecipeDetail from '../pages/RecipeDetail'
import Supplements from '../pages/Supplements'
import DietPlans from '../pages/DietPlans'
import SkinCare from '../pages/SkinCare'
import Workout from '../pages/Workout'
import MentalWellness from '../pages/MentalWellness'
import ExploreFuture from '../pages/ExploreFuture'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealplanner" element={<MealPlanner />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/recipe" element={<RecipeDetail />} />
      <Route path="/supplements" element={<Supplements />} />
      <Route path="/diet-plans" element={<DietPlans />} />
      <Route path="/skin-care" element={<SkinCare />} />
      <Route path="/workout" element={<Workout />} />
      <Route path="/mental-wellness" element={<MentalWellness />} />
      <Route path="/explore-future" element={<ExploreFuture />} />
    </Routes>
  )
}
