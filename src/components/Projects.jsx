import { motion } from "framer-motion";
import { Github } from "lucide-react"; // for GitHub icon 

export default function Projects() {
  const projects = [
    { 
      title: "ANIL EVENTS",
      description: "A fully functional MERN stack event management website, built for real-world use. Features include responsive design, optimized performance, and a clean UI for seamless user experience.",
      image: "./Images/Projects/anilevents.webp",
      link: "https://anildjevents.netlify.app/",
      github: "https://github.com/vanshkash/p1.git"
    },
    {
      title: "Portfolio Website",
      description: "A fully responsive and modern personal portfolio site built with React and TailwindCSS. It showcases my projects, skills, and experience in an elegant way, with smooth animations and a clean UI to leave a professional impression.",
      image: "./Images/Projects/portfolio.webp",
      link: "#",
      github: "https://github.com/vanshkash/Portfolio-Website.git"
    },
    { 
      title: "Sunrise Printers-Under Development",
      description: "Currently working on this project – a professional printing services website with modern UI/UX and fully responsive design. Will be live soon!",
      image: "./Images/Projects/SRprinters.webp",
      // link: "#",
      // github: "https://github.com/yourusername/portfolio" // add later when available
    },
  ];

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

  return (
    <section id="Projects" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition min-h-[350px] flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 flex-grow">{project.description}</p>

                <div className="flex items-center justify-between mt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      View Project →
                    </a>
                  )}

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-black transition"
                    >
                      <Github className="w-5 h-5 mr-1" /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}