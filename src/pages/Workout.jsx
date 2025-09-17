// src/pages/Workout.jsx
import React from "react";
import { motion } from "framer-motion";

// Replace these URLs with your local /src/assets paths later
const workoutVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
const strengthImg = "https://via.placeholder.com/400x300?text=Strength+Training";
const cardioImg = "https://via.placeholder.com/400x300?text=Cardio";
const flexibilityImg = "https://via.placeholder.com/400x300?text=Flexibility";
const techImg = "https://via.placeholder.com/400x300?text=Tech+in+Fitness";

export default function Workout() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl p-8 shadow-lg mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">Smart Workouts</h1>
        <p className="text-lg">
          Whether you’re at the gym, at home, or outdoors — today’s workout
          routines combine science, tech, and personalization for maximum
          results.
        </p>
      </motion.section>

      {/* Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-lg shadow-lg mb-10"
        src={workoutVideo}
        controls
      />

      {/* Section 1: Strength Training */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={strengthImg}
          alt="Strength Training"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Strength Training</h2>
          <p className="text-gray-600 mb-2">
            Build muscle, boost metabolism, and improve posture with
            weightlifting and resistance exercises.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Free weights & dumbbells</li>
            <li>Resistance bands</li>
            <li>Bodyweight exercises</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 2: Cardio */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={cardioImg}
          alt="Cardio Workouts"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Cardio Workouts</h2>
          <p className="text-gray-600 mb-2">
            Keep your heart healthy and burn calories through activities like
            running, cycling, and swimming.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>HIIT (High-Intensity Interval Training)</li>
            <li>Steady-state cardio</li>
            <li>Outdoor sports</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 3: Flexibility & Mobility */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={flexibilityImg}
          alt="Flexibility and Mobility"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Flexibility & Mobility</h2>
          <p className="text-gray-600 mb-2">
            Enhance movement range and prevent injury with stretching, yoga, and
            mobility drills.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Dynamic stretching before workouts</li>
            <li>Static stretching after workouts</li>
            <li>Foam rolling & massage guns</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 4: Tech in Fitness */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={techImg}
          alt="Tech in Fitness"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Tech-Enhanced Fitness</h2>
          <p className="text-gray-600 mb-2">
            Smartwatches, AI trainers, and virtual reality workouts are making
            fitness more engaging and trackable.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Wearables for heart rate & calorie tracking</li>
            <li>AI-based personalized workout plans</li>
            <li>VR fitness games for fun training</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
