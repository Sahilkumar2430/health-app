import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white'}>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <nav className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-xl">HealthMate</div>
        <div className="flex gap-6 items-center">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/mealplanner">Meal Planner</NavItem>
          <NavItem to="/pantry">Pantry</NavItem>
          <NavItem to="/recipe">Recipe</NavItem>
        </div>
      </div>
    </nav>
  )
}
