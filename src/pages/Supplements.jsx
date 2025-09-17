// src/pages/Supplements.jsx
import React from "react";
import v from "../assets/v.mp4";
import img  from "../assets/img.jpg";

export default function Supplements() {
  const supplements = [
    {
      title: "Vitamins",
      img: img ,
      description:
        "Vitamins are organic compounds essential for various bodily functions. They cannot be produced in sufficient amounts by the body and must be obtained from food or supplements.",
      benefits: [
        "Boosts immune system",
        "Supports skin, hair, and nail health",
        "Improves metabolism and energy levels",
        "Aids in wound healing"
      ],
      dosage: "Most multivitamins: once daily after meals. Fat-soluble vitamins (A, D, E, K) should be taken with food.",
      sideEffects:
        "Overuse can cause toxicity, especially with vitamins A, D, E, and K. Stick to recommended doses.",
      video: v
    },
    {
      title: "Protein Supplements",
      img: img,
      description:
        "Protein supplements, like whey and plant-based powders, are essential for muscle repair, strength building, and recovery after exercise.",
      benefits: [
        "Supports muscle growth & recovery",
        "Helps manage weight by increasing satiety",
        "Boosts metabolism",
        "Aids in maintaining muscle during fat loss"
      ],
      dosage: "20–30g per serving, usually post-workout or as a meal replacement.",
      sideEffects:
        "Excessive intake may cause digestive issues or strain on kidneys in sensitive individuals.",
      video: v
    },
    {
      title: "Omega-3 Fatty Acids",
      img: img,
      description:
        "Omega-3s are essential fatty acids that play a key role in heart health, brain function, and reducing inflammation.",
      benefits: [
        "Improves cardiovascular health",
        "Supports brain and eye health",
        "Reduces joint inflammation",
        "Aids in mood regulation"
      ],
      dosage: "250–500mg of combined EPA and DHA daily.",
      sideEffects:
        "High doses may cause blood thinning; consult your doctor if on medication.",
      video: v
    },
    {
      title: "Minerals",
      img: img,
      description:
        "Minerals like calcium, magnesium, zinc, and iron are essential for healthy bones, muscle function, and hormone balance.",
      benefits: [
        "Supports strong bones and teeth",
        "Regulates muscle contractions",
        "Improves energy production",
        "Aids in immune function"
      ],
      dosage: "Varies per mineral — calcium: 1000mg/day, magnesium: 400mg/day, zinc: 8-11mg/day.",
      sideEffects:
        "Too much iron can be toxic; excess calcium may lead to kidney stones.",
      video: v
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Intro */}
      <h1 className="text-4xl font-bold text-center mb-6">Ultimate Supplements Guide</h1>
      <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Supplements can help fill nutritional gaps, enhance performance, and support overall
        well-being. However, they should complement, not replace, a balanced diet.
        Always consult a healthcare professional before starting new supplements.
      </p>

      {supplements.map((sup, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-6 mb-12 flex flex-col md:flex-row items-center gap-6"
        >
          {/* Image */}
          <img
            src={sup.img}
            alt={sup.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-3">{sup.title}</h2>
            <p className="text-gray-700 mb-4">{sup.description}</p>

            {/* Benefits */}
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {sup.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>

            {/* Dosage */}
            <p className="mb-2"><strong>Dosage:</strong> {sup.dosage}</p>

            {/* Side Effects */}
            <p className="mb-4 text-red-600"><strong>Possible Side Effects:</strong> {sup.sideEffects}</p>

            {/* Video */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-lg"
                src={sup.video}
                title={sup.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}

      {/* Extra Tips */}
      <div className="bg-gray-100 rounded-xl p-6 mt-10">
        <h2 className="text-2xl font-bold mb-3">Tips for Choosing the Right Supplement</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Look for third-party tested products to ensure quality.</li>
          <li>Avoid mega-doses unless prescribed by a doctor.</li>
          <li>Read labels carefully and check ingredient lists.</li>
          <li>Consider your diet — don’t supplement what you already get enough of.</li>
        </ul>
      </div>
    </div>
  );
}
