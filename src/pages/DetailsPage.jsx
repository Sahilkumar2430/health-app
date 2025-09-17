// src/pages/DetailsPage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailsPage() {
  const { id } = useParams()

  const details = {
    'supplements': {
      title: 'Supplements',
      content: 'Learn about vitamins, minerals, their benefits, and when to take them for optimal health.'
    },
    'diet-plans': {
      title: 'Diet Plans',
      content: 'Explore balanced diets tailored to goals like weight loss, muscle gain, or general wellness.'
    },
    'skin-care': {
      title: 'Skin Care',
      content: 'Tips, routines, and ingredients that help you maintain healthy skin.'
    },
    'workout': {
      title: 'Workout',
      content: 'Discover effective workout routines for home and gym, along with weekly plans.'
    },
    'mental-wellness': {
      title: 'Mental Wellness',
      content: 'Mindfulness techniques, stress management tips, and sleep improvement guides.'
    }
  }

  const topic = details[id]

  if (!topic) return <div className="p-6">Topic not found.</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic.title}</h1>
      <p className="mb-6">{topic.content}</p>

      {/* Problem submission form */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Discuss Your Problem</h2>
        <form className="space-y-4">
          <textarea
            placeholder="Describe your concern..."
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
