import { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-50 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {["Home", "About", "Projects", "Credentials", "Contact"].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer font-bold bg-blue-500 p-2 rounded-[3px] transform transition-transform duration-300 hover:scale-110"
              >
                {section}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {/* Hamburger / Close Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Slide + Bounce Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
  initial={{ opacity: 0, y: -50, height: 0 }}
  animate={{ opacity: 1, y: 0, height: "auto" }}
  exit={{ opacity: 0, y: -20, height: 0 }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
  className="md:hidden bg-blue-100 shadow-md overflow-hidden"
>
  {["Home", "About", "Projects", "Credentials", "Contact"].map((section) => (
    <Link
      key={section}
      to={section}
      smooth={true}
      duration={500}
      onClick={() => setIsOpen(false)}
      className="block px-4 py-2 text-black font-bold"
      >
      {section}
    </Link>
  ))}
</motion.div>

        )}
      </AnimatePresence>
    </nav>
  );
}
