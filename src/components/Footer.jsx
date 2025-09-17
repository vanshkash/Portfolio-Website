// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub,FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialIconClass = "text-xl text-white hover:text-blue-400 transition-colors";

  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 px-6 shadow-inner"
      // initial={{ opacity: 0, y: 50 }}
      // // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Portfolio Name */}
        <div className="text-2xl font-bold hover:text-blue-400 transition-colors cursor-pointer">
          <a href="#Home">Vansh Portfolio</a>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6">
          <a href="#Home" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#Projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#About" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#Contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        {/* Social Icons with Scale Animation */}
        <div className="flex gap-4">
          <motion.a
            href="https://www.linkedin.com/in/vansh-kashyap-695965307/"
            className={socialIconClass}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/vanshkash"
            className={socialIconClass}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://wa.me/917983202009?text=Hi%20Vansh%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%20
"
            className={socialIconClass}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            target="_blank"
          >
            <FaWhatsapp />
          </motion.a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Vansh Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
