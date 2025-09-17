// src/pages/ExploreFuture.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ExploreFuture() {
  const innovations = [
    {
      icon: "🤖",
      title: "AI Body Scanners",
      desc: "Real-time scanning to detect health issues before symptoms appear.",
    },
    {
      icon: "🧬",
      title: "DNA-Based Nutrition",
      desc: "Meal plans tailored to your genetic makeup for peak performance.",
    },
    {
      icon: "🌌",
      title: "Virtual Reality Therapy",
      desc: "Escape to calming digital worlds for stress reduction and focus.",
    },
    {
      icon: "⏳",
      title: "Longevity Science",
      desc: "Groundbreaking research to extend healthy human lifespans.",
    },
  ];

  const futureLinks = [
    {
      title: "Future of Technology",
      link: "https://www.weforum.org/focus/future-of-technology",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Future of Space",
      link: "https://www.nasa.gov/topics/technology",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      title: "Future of Health",
      link: "https://www.who.int/health-topics/digital-health",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Future of Education",
      link: "https://www.unesco.org/en/futures-education",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Future of Environment",
      link: "https://www.unep.org/",
      color: "from-emerald-500 to-lime-500",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8 shadow-lg mb-10"
      >
        <h1 className="text-4xl font-bold mb-3">🚀 Explore the Future of Wellness</h1>
        <p className="text-lg">
          Discover the innovations that will redefine how we live, heal, and thrive —
          from AI-driven diagnostics to immersive VR therapy.
        </p>
      </motion.section>

      {/* Innovations */}
      {innovations.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg mb-8 flex items-start gap-6"
        >
          <div className="text-4xl">{item.icon}</div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </motion.div>
      ))}

      {/* Future of... Links Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          🌟 The Future Awaits — Explore More
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${item.color} text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300 flex flex-col justify-center items-center text-center`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">
                Click to explore the latest developments and research.
              </p>
            </a>
          ))}
        </div>
      </motion.section>
      

      {/* Back Button */}
      <div className="text-center mt-10">
        <a
          href="/"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold shadow-lg transition"
        >
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
}
