import { useEffect, useState } from "react";

export default function About() {
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    // Trigger progress animation when component mounts
    setTimeout(() => setProgress(true), 300);
  }, []);

  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "JavaScript", level: 92 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "C", level: 75 },
    { name: "C++", level: 80 },
  ];

  return (
    <section id="About" className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left: About Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-2xl">
            Hi, I'm <span className="font-semibold text-blue-600">Vansh Kashyap</span>, 
            a passionate <span className="font-medium">MERN Stack Developer</span> who loves 
            building scalable, modern web applications. My goal is to turn ideas 
            into reality with clean, maintainable code and a great user experience.
          </p>
          <p className="text-gray-700 leading-relaxed text-2xl">
            I have worked on multiple projects using React, Node.js, and MongoDB 
            and enjoy learning new technologies like C++ and advanced JavaScript 
            to sharpen my skills every day.
          </p>
        </div>

        {/* Right: Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Skills & Expertise
          </h3>
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-800 font-medium">{skill.name}</span>
                  <span className="text-gray-600 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: progress ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
