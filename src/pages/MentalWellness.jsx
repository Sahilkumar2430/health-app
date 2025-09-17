// src/pages/MentalWellness.jsx
import React from "react";
import { motion } from "framer-motion";

// Replace these with your local assets in /src/assets
const mentalVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
const aiTherapyImg = "https://via.placeholder.com/400x300?text=AI+Therapy";
const vrMeditationImg = "https://via.placeholder.com/400x300?text=VR+Meditation";
const biofeedbackImg = "https://via.placeholder.com/400x300?text=Biofeedback";
const moodTrackingImg = "https://via.placeholder.com/400x300?text=Mood+Tracking";

export default function MentalWellness() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white rounded-xl p-8 shadow-lg mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">Mental Wellness 2025</h1>
        <p className="text-lg">
          The future of mental wellness blends neuroscience, technology, and
          self-care practices. Discover cutting-edge tools and approaches to
          keep your mind healthy in the digital era.
        </p>
      </motion.section>

      {/* Video */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full rounded-lg shadow-lg mb-10"
        src={mentalVideo}
        controls
      />

      {/* Section 1: AI Therapy */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={aiTherapyImg}
          alt="AI Therapy"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">AI-Powered Therapy</h2>
          <p className="text-gray-600 mb-2">
            AI-based chatbots and therapy assistants now offer 24/7 guidance,
            personalized coping strategies, and mood tracking without replacing
            human therapists.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>On-demand mental health support</li>
            <li>Personalized coping plans</li>
            <li>Integration with wearable data</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 2: VR Meditation */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={vrMeditationImg}
          alt="VR Meditation"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">VR Meditation Experiences</h2>
          <p className="text-gray-600 mb-2">
            Virtual reality can transport you to serene environments like
            beaches, forests, or mountaintops, enhancing meditation and
            relaxation in an immersive way.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Guided VR mindfulness sessions</li>
            <li>Immersive nature environments</li>
            <li>Customizable meditation scenarios</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 3: Biofeedback */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={biofeedbackImg}
          alt="Biofeedback"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-3">Biofeedback & Wearables</h2>
          <p className="text-gray-600 mb-2">
            Smartwatches and biofeedback devices monitor stress levels,
            breathing, and heart rate, providing instant feedback to help you
            manage anxiety in real time.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Heart rate & stress tracking</li>
            <li>Breathing exercises via haptics</li>
            <li>Real-time relaxation coaching</li>
          </ul>
        </div>
      </motion.section>

      {/* Section 4: Mood Tracking Apps */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl p-6 shadow-lg mb-12 flex flex-col md:flex-row gap-6"
      >
        <img
          src={moodTrackingImg}
          alt="Mood Tracking"
          className="rounded-lg w-full md:w-1/3 object-cover"
        />
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Mood Tracking Apps</h2>
                  <p className="text-gray-600 mb-2">
                    Modern mood tracking apps use AI to analyze your daily emotions, habits, and triggers, helping you spot patterns and improve your mental health.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Daily mood journaling</li>
                    <li>AI-driven insights & trends</li>
                    <li>Integration with therapy & self-care routines</li>
                  </ul>
                </div>
              </motion.section>
            </div>
          );
        }
