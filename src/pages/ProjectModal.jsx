// ProjectModal.jsx
import React from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-6 w-[90%] max-w-md border border-white"
        variants={modalVariants}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-700 hover:text-gray-900"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {project.name}
        </h2>

        {/* Video */}
        <div className="mb-4 w-full h-48 md:h-56 relative overflow-hidden rounded-lg">
          <video
            src={project.videoUrl}
            controls
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base mb-4">
          {project.description}
        </p>

        {/* Repo or Live Link */}
                {project.repoUrl ? (
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full shadow-lg bg-[#fda085]
                      hover:bg-[#f7945d] transition-colors duration-300 
                      text-[#333] font-semibold text-center"
          >
            View on GitHub
          </motion.a>
        ) : (
          <div className="mt-2 italic text-sm text-gray-600 text-center">
            {project.privateNote || "Private repository — available upon request."}
          </div>
        )}


      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
