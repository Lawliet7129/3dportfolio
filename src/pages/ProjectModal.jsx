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
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
      className="relative bg-white/80 backdrop-blur-md rounded-xl shadow-2xl w-[90%] max-w-2xl h-[90vh] overflow-y-auto p-6 border border-white"
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
        <div className="mb-6 w-full aspect-video max-h-[400px] md:max-h-[500px] rounded-lg overflow-hidden">
  <video
    src={project.videoUrl}
    controls
    className="w-full h-full object-contain rounded-lg"
  />
</div>


        {/* Preview Images */}
        {project.previewImages && (
          <div className="flex gap-4 flex-wrap md:flex-nowrap overflow-x-auto mb-6">
            {project.previewImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.name} preview ${idx + 1}`}
                className="w-64 h-64 object-contain rounded-lg border border-white/40 shadow-md hover:scale-105 transition-transform cursor-pointer"
                onClick={() => window.open(img, "_blank")}
              />
            ))}
          </div>
        )}



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
