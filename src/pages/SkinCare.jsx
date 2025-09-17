// src/pages/SkinCare.jsx
import React from "react";
import { motion } from "framer-motion";

// Replace these with local /src/assets paths when you have your own files
const skincareVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
const morningImg = "https://via.placeholder.com/400x300?text=Morning+Routine";
const nightImg = "https://via.placeholder.com/400x300?text=Night+Routine";
const skinTypeImg = "https://via.placeholder.com/400x300?text=Skin+Types";
const techImg = "https://via.placeholder.com/400x300?text=Tech+in+Skincare";

export default function SkinCare() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-xl p-8 shadow-lg mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">Smart Skin Care</h1>
        <p className="text-lg">
          Your skin is your body’s largest organ — and with today’s technology,
          caring for it has never been smarter or more effective.
        </p>
      </motion.section>

      {/* Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-lg shadow-lg mb-10"
        src={skincareVideo}
        controls
      />

      {/* Section 1: Morning Routine */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={morningImg}
          alt="Morning Skin Care"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Morning Routine</h2>
          <p className="text-gray-600 mb-2">
            Start your day with a refreshing cleanser to remove any oil buildup
            from overnight, followed by a hydrating moisturizer and sunscreen.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Cleanser — removes impurities</li>
            <li>Moisturizer — locks in hydration</li>
            <li>Sunscreen — protects from UV damage</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 2: Night Routine */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={nightImg}
          alt="Night Skin Care"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Night Routine</h2>
          <p className="text-gray-600 mb-2">
            Evening skincare focuses on repair and regeneration. Use gentle
            cleansers, nourishing serums, and richer moisturizers.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Double cleanse to remove makeup & dirt</li>
            <li>Apply active serums (Retinol, Vitamin C)</li>
            <li>Night cream for deep hydration</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 3: Skin Types */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={skinTypeImg}
          alt="Skin Types"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Know Your Skin Type</h2>
          <p className="text-gray-600 mb-2">
            Understanding your skin type is the first step to building an
            effective routine. The main types are:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Oily — needs oil control without over-drying</li>
            <li>Dry — requires deep moisturization</li>
            <li>Combination — balance oily & dry areas</li>
            <li>Sensitive — avoid harsh chemicals</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 4: Technology in Skincare */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={techImg}
          alt="Tech in Skincare"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Tech-Enhanced Skin Care</h2>
          <p className="text-gray-600 mb-2">
            From AI-powered skin analyzers to smart face masks, technology is
            making skincare more personalized and effective.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>AI skin scanning apps for instant analysis</li>
            <li>LED therapy masks for anti-aging & acne</li>
            <li>Smart devices for precise serum delivery</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
