// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Example placeholder images — replace with local assets from /src/assets
const sections = [
  {
    title: "Supplements",
    desc: "Explore the best supplements to boost your health and vitality.",
    img: "https://via.placeholder.com/400x250?text=Supplements",
    link: "/supplements",
  },
  {
    title: "Diet Plans",
    desc: "Tailored diet plans for your goals, lifestyle, and preferences.",
    img: "https://via.placeholder.com/400x250?text=Diet+Plans",
    link: "/diet-plans",
  },
  {
    title: "Skin Care",
    desc: "Smart skincare tips and routines for every skin type.",
    img: "https://via.placeholder.com/400x250?text=Skin+Care",
    link: "/skin-care",
  },
  {
    title: "Workout",
    desc: "Personalized fitness plans and trending workout routines.",
    img: "https://via.placeholder.com/400x250?text=Workout",
    link: "/workout",
  },
  {
    title: "Mental Wellness",
    desc: "Mindfulness, stress relief, and mental health resources.",
    img: "https://via.placeholder.com/400x250?text=Mental+Wellness",
    link: "/mental-wellness",
  },
  {
    title: "Trending Health Tech",
    desc: "Discover AI tools, wearables, and futuristic health gadgets.",
    img: "https://via.placeholder.com/400x250?text=Health+Tech",
    link: "#tech",
  },
  {
    title: "Community Zone",
    desc: "Share your journey, ask questions, and connect with others.",
    img: "https://via.placeholder.com/400x250?text=Community+Zone",
    link: "#community",
  },
  {
    title: "Daily Wellness Tips",
    desc: "Quick, actionable tips to improve your lifestyle every day.",
    img: "https://via.placeholder.com/400x250?text=Wellness+Tips",
    link: "#tips",
  },
  {
    title: "Health Quizzes & Challenges",
    desc: "Engage, learn, and compete for healthier living.",
    img: "https://via.placeholder.com/400x250?text=Quizzes+%26+Challenges",
    link: "#quizzes",
  },
  {
    title: "AI Recommendations",
    desc: "Get personalized suggestions based on your habits and goals.",
    img: "https://via.placeholder.com/400x250?text=AI+Recommendations",
    link: "#ai",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Welcome to Your Health Hub
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          A one-stop platform for everything wellness — powered by the latest
          research, technology, and community support.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((sec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Link to={sec.link}>
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2">{sec.title}</h2>
                <p className="text-gray-600">{sec.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-16 bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-xl shadow-lg text-white"
      >
        <h2 className="text-3xl font-bold mb-3">Your Journey Starts Today</h2>
        <p className="mb-4">
          Explore, learn, and take action toward a healthier, happier you.
        </p>
        <Link
          to="/diet-plans"
          className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </motion.div>
      {/* Final Unique Section: The Future of Wellness */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative mt-20 rounded-2xl overflow-hidden shadow-2xl"
>
  {/* Background Image with Parallax feel */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-cover"
    style={{
      backgroundImage:
        "url('https://via.placeholder.com/1600x900?text=Futuristic+Wellness+Tech')",
      filter: "brightness(0.5)",
    }}
  ></div>

  {/* Content Overlay */}
  <div className="relative z-10 p-12 md:p-20 text-center text-black-900">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      🚀 The Future of Wellness
    </h2>
    <p className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-black-900">
      Imagine AI analyzing your health in real-time, nutrition tailored to your DNA,  
      and VR worlds that heal your mind. The future of health is not just coming —  
      it’s already here.
    </p>

    {/* Feature Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-black">
      {[
        { icon: "🤖", title: "AI Body Scanners", desc: "Track every health metric instantly.", link: "/ai-body-scanners" },
        { icon: "🧬", title: "DNA Nutrition", desc: "Meal plans built from your genetic code.", link: "/dna-nutrition" },
        { icon: "🌌", title: "VR Meditation", desc: "Enter digital worlds for deep relaxation.", link: "/vr-meditation" },
        { icon: "⏳", title: "Longevity Research", desc: "Science to extend healthy lifespans.", link: "/longevity" },
      ].map((item, idx) => (
        <motion.a
          key={idx}
          href={item.link}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 
                     hover:bg-white/20 hover:text-pink-800 transition block"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-blue-800 transition-colors duration-300">
            {item.desc}
          </p>
        </motion.a>
      ))}
    </div>

    {/* Call to Action */}
    <div className="mt-12">
      <a
      href="/explore-future"
       className="px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-full font-semibold shadow-lg transition"
>
  Explore the Future
</a>

    </div>
  </div>
</motion.section>

    </div>
  );
}
