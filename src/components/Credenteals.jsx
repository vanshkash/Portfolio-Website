import { useState } from "react";
import { motion } from "framer-motion"; // Add this import

export default function Credentials() {
  const [activeTab, setActiveTab] = useState("education");

  const education = [
    {
      title: "BCA (Bachelor of Computer Applications)",
      org: "Sunder Deep Group of Institutions, Ghaziabad",
      year: "2023 - 2025",
      logo: "./Images/Logos/sunderdeep.webp"
    },
    {
      title: "Senior Secondary (Science - PCM)",
      org: "VAB Public School, Hapur",
      year: "2021 - 2023",
      logo: "./Images/Logos/vabschool.webp"
    },
  ];


  const certifications = [
    { title: "React JS Bootcamp", org: "Udemy", year: "2024" },
    { title: "JavaScript Mastery", org: "Coursera", year: "2023" },
  ];

  const experience = [
    { title: "Frontend Developer Intern", org: "Tech Solutions", year: "Jun 2024 - Aug 2024" },
    { title: "Freelance MERN Projects", org: "Self-employed", year: "2023 - Present" },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Use motion.div for animation
  const renderContent = (data) =>
  data.map((item, index) => (
    <motion.div
      key={index}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white p-5 rounded-xl shadow hover:shadow-md transition flex items-center gap-4"
    >
      {/* Logo */}
      {item.logo && (
        <img
          src={item.logo}
          alt={item.org}
          className="w-12 h-12 object-contain rounded-full"
        />
      )}

      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600">{item.org}</p>
        <span className="text-gray-500 text-sm">{item.year}</span>
      </div>
    </motion.div>
  ));


   return (
    <section id="Credentials" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Credentials
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("education")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${activeTab === "education" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${activeTab === "certifications" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}`}
          >
            Certifications
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${activeTab === "experience" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border"}`}
          >
            Experience
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-6 max-w-3xl mx-auto">
          {activeTab === "education" && renderContent(education)}
          {activeTab === "certifications" && renderContent(certifications)}
          {activeTab === "experience" && renderContent(experience)}
        </div>
      </div>
    </section>
  );
}