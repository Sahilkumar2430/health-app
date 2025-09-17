// src/pages/DietPlans.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Placeholder assets (replace later with real files in /src/assets)
const dietVideo =
  "https://www.w3schools.com/html/mov_bbb.mp4";
const ketoImg = "https://via.placeholder.com/400x300?text=Keto+Diet";
const veganImg = "https://via.placeholder.com/400x300?text=Vegan+Diet";
const medImg = "https://via.placeholder.com/400x300?text=Mediterranean+Diet";

export default function DietPlans() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("1.2");
  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {
    if (!weight || !height || !age) return;
    // Mifflin-St Jeor Equation for BMR
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // male default
    const tdee = bmr * parseFloat(activity);
    setCalories(Math.round(tdee));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-xl p-8 shadow-lg mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">Personalized Diet Plans</h1>
        <p className="text-lg">
          Modern nutrition meets technology — use our AI-powered Diet Plan
          Calculator to find your daily calorie needs and the best eating
          strategy for you.
        </p>
      </motion.section>

      {/* Diet Plan Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-lg shadow-lg mb-10"
        src={dietVideo}
        controls
      />

      {/* Diet Plan Calculator */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Diet Plan Calculator</h2>
        <p className="mb-4 text-gray-600">
          Enter your details to get your daily calorie target. This is based on
          your Basal Metabolic Rate (BMR) and activity level.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-3 rounded-lg w-full"
          />
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="border p-3 rounded-lg w-full"
          >
            <option value="1.2">Sedentary (little/no exercise)</option>
            <option value="1.375">Lightly active (1-3 days/week)</option>
            <option value="1.55">Moderately active (3-5 days/week)</option>
            <option value="1.725">Very active (6-7 days/week)</option>
            <option value="1.9">Extra active (physical job + exercise)</option>
          </select>
        </div>

        <button
          onClick={calculateCalories}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Calculate
        </button>

        {calories && (
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-lg font-semibold">
              Your daily calorie target:{" "}
              <span className="text-green-700">{calories} kcal</span>
            </p>
            <p className="text-sm text-gray-600">
              Adjust this number depending on whether you want to lose, gain, or
              maintain weight.
            </p>
          </div>
        )}
      </motion.section>

      {/* Example Diets */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={ketoImg} alt="Keto Diet" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Keto Diet</h3>
            <p className="text-gray-600">
              High fat, low carb approach designed to encourage the body to burn
              fat for fuel.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={veganImg} alt="Vegan Diet" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Vegan Diet</h3>
            <p className="text-gray-600">
              100% plant-based diet focusing on fruits, vegetables, grains, and legumes.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={medImg} alt="Mediterranean Diet" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Mediterranean Diet</h3>
            <p className="text-gray-600">
              Rich in olive oil, fish, whole grains, and fresh produce — heart-healthy and sustainable.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
