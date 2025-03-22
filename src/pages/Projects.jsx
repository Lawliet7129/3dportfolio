import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { projects } from "../constants";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start pt-16 pb-20 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating Hearts Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 30 },
            shape: { type: "heart" },
            move: { speed: 1 },
            size: { value: 6 },
            opacity: { value: 0.6 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Title */}
      <motion.h1
        className="relative text-5xl md:text-6xl font-extrabold text-[#333] mt-10 mb-4"
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.1,
          rotateZ: [0, 2, -2, 0],
          transition: { repeat: Infinity, repeatType: "reverse", duration: 1 },
        }}
      >
        My{" "}
        <span className="bg-white/40 px-3 py-1 rounded-md shadow-lg">
          Projects
        </span>
        <span className="absolute -right-10 top-0 text-3xl animate-bounce">
          ✨
        </span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg max-w-2xl text-center text-[#333] mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hover to preview demos. Click to learn more, watch the full video, and
        explore the code!
      </motion.p>

      {/* Projects Grid */}
      <div style={{ perspective: "2000px" }} className="mt-16 px-8 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/60 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden cursor-pointer transform-style-3d p-6 flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 30, rotateX: 20 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              whileHover={{
                scale: 1.1,
                rotateX: 8,
                rotateY: -8,
                rotateZ: 2,
                transition: { type: "spring", stiffness: 120, damping: 15 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openModal(proj)}
            >
              {/* Hover Video */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center"
              >
                <video
                  src={proj.videoUrl}
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
              </motion.div>

              <motion.img
                src={proj.iconUrl}
                alt={proj.name}
                className="w-48 h-48 object-contain mb-4 transition-opacity duration-500 ease-in-out group-hover:opacity-20"
              />

              {/* Hover Icon */}
              <motion.div
                className="absolute top-3 right-3 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                🎉
              </motion.div>

              {/* Project Title */}
              <h2 className="text-xl font-extrabold text-[#333]">{proj.name} 🎥</h2>

              {/* Project Description */}
              <p className="text-sm text-[#333] mt-2">{proj.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
