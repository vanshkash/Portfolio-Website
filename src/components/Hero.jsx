import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function Hero() {
  const roles = ["MERN Stack Developer", "Prompt Engineer", "Freelancer", "Problem Solver"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIndex(0);
        setText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, roleIndex]);

  return (
    <section
      id="Home"
      className="bg-gray-50 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-12 grid md:grid-cols-2 gap-6 md:gap-10 items-center relative z-10">
        {/* Right: Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative flex items-center justify-center">
            {/* Animated Rings */}
            <motion.div
              className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-blue-600 opacity-30"
              // animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-purple-600 opacity-20"
              // animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* Floating Dots */}
            <motion.span
              className="absolute w-3 h-3 md:w-4 md:h-4 bg-pink-400 rounded-full shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ top: "20%", right: "-10%" }}
            />
            <motion.span
              className="absolute w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full shadow-md"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "15%", left: "-5%" }}
            />
            {/* Profile Image */}
            <motion.img
              src="./Images/MyProfile.webp"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl ring-4 ring-gray-200 relative z-10"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(59,130,246,0.4)" }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Left: Intro Text */}
        <motion.div
          className="space-y-3 md:space-y-5 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <p className="text-blue-600 font-medium text-2xl md:text-4xl">Hi, I'm</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Vansh Kashyap
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 min-h-[28px] font-bold">
            {text}
            <span className="border-r-2 border-gray-800 animate-pulse ml-1"></span>
          </h2>
          <p className="text-gray-600 max-w-md mx-auto md:mx-0 text-base md:text-xl font-semibold">
            I build responsive, fast and modern web applications using React, Node.js, Express, and MongoDB.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="px-4 py-3 md:px-5 md:py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer transform transition-transform duration-300 hover:scale-110 text-sm md:text-base"
            >
              View Projects
            </Link>
            <Link
              to="Contact"
              smooth={true}
              duration={500}
              className="px-4 py-3 md:px-5 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transform transition-transform duration-300 hover:scale-110 text-sm md:text-base"
            >
              Contact Me
            </Link>
            <a
              href="./Resume/marksheet.pdf"
              download="Vansh-Kashyap-Resume"
              className="px-4 py-3 md:px-5 md:py-3 bg-green-600 text-white rounded-lg shadow flex items-center gap-1 md:gap-2 hover:bg-green-700 transform transition-transform duration-300 hover:scale-110 text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
