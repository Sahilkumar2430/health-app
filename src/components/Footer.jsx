import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">&copy; {new Date().getFullYear()} HealthMate. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  )
}
