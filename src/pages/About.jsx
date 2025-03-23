import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import ReactConfetti from "react-confetti";
import profile from "../assets/images/profile.jpg";

// Import your resume PDFs:
import resumeQuant from "../assets/files/resume_quant.pdf";
import resumeSwe from "../assets/files/resume_swe.pdf";

// Example data (skills, experiences) – unchanged:
import { skills, experiences } from "../constants";

// Staggered text variants
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};



const correctPassword = import.meta.env.VITE_RECRUITER_PASSWORD;

const handlePasswordSubmit = () => {
  if (passwordInput === correctPassword) {
    localStorage.setItem("hasRecruiterAccess", "true"); 
    setHasAccess(true);
  } else {
    alert("Incorrect password. Please try again.");
  }
};


const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [hasAccess, setHasAccess] = useState(false);

  const correctPassword = import.meta.env.VITE_RECRUITER_PASSWORD;

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword) {
      sessionStorage.setItem("hasRecruiterAccess", "true"); // ← use sessionStorage
      setHasAccess(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  useEffect(() => {
    const storedAccess = sessionStorage.getItem("hasRecruiterAccess");
    if (storedAccess === "true") {
      setHasAccess(true);
    }
  }, []);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <>
      {/* Pastel Confetti */}
      <AnimatePresence>
        {showConfetti && (
          <ReactConfetti
            colors={["#f6d365", "#fda085", "#fbc2eb", "#a6c1ee"]}
          />
        )}
      </AnimatePresence>

      {/* Particle Background */}
      <Particles
        options={{
          fullScreen: { enable: true, zIndex: -20 },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.5 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
        }}
      />

      {/* About Section */}
      <section
        id="about"
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4 overflow-hidden"
      >
        {/* Pastel Gradient Background */}
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

        {/* Wave at the Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full -z-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,96C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </svg>

        {/* Glassmorphic Text Column */}
        <motion.div
          // FIX #1: changed `p- md:p-6` to `p-4 md:p-6`
          className="relative flex-1 z-8 mx-4 md:mx-20 my-10 p-4 md:p-6 text-[#333]
                     backdrop-blur-md bg-white/20 rounded-xl shadow-lg 
                     text-center md:text-left"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading (with line break) */}
          <motion.h1
            // FIX #2: reduced clamp from (1rem,5vw,3rem) → (1rem,4vw,2.5rem)
            className="text-[clamp(1rem,4vw,2.5rem)] font-extrabold leading-tight"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            Hi, I'm Bailey👋
            <br />
            I’m{" "}
            <span className="bg-[#fafaf7c7] px-2 py-1 rounded-md">
              <Typewriter
                words={[
                  "a Trader",
                  "a Developer",
                  "a Problem Solver",
                  "a Programmer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
          </motion.h1>

          <motion.p className="mt-4 text-lg md:text-md" variants={itemVariants}>
            I’m a second-year Computer Science student at the University of
            Pennsylvania, exploring <strong>Quantitative Trading</strong> and{" "}
            <strong>Software Engineering</strong>. I love blending{" "}
            <strong>mathematical rigor &amp; technology</strong> to build
            innovative financial and engineering solutions.
          </motion.p>

          <p className="mt-2 text-xs text-gray-600 text-center ">
          Resume and experience sections are protected. Please enter the password for recruiter access.
            </p>
          
                    {!hasAccess && (
            <div className="mt-4 flex flex-col items-center justify-center gap-4">
              <input
                type="password"
                placeholder="Enter recruiter password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="px-4 py-2 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />

              <button
                onClick={handlePasswordSubmit}
                className="px-6 py-2 bg-[#fda085] hover:bg-[#f7945d] text-[#333] font-semibold rounded-full transition"
              >
                Unlock Resume + Experience
              </button>
            </div>
          )}


          {/* TWO Download Resume Buttons */}
          {hasAccess && (
  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-8">
    <motion.a href={resumeQuant} 
              download
              className="px-6 py-3 rounded-full shadow-lg bg-[#fda085]
                         hover:bg-[#f7945d] transition-colors duration-300 
                         text-[#333] font-semibold text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfetti}
            >
              Download Quant Resume
            </motion.a>
            <motion.a
              href={resumeSwe}
              download
              className="px-6 py-3 rounded-full shadow-lg bg-[#fda085]
                         hover:bg-[#f7945d] transition-colors duration-300 
                         text-[#333] font-semibold text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfetti}
            >
              Download SWE Resume
            </motion.a>
          </div>)}
        </motion.div>

        {/* Profile Image Overlapping the Wave */}
        <motion.div
          className="relative z-10 mt-8 mx-7 md:mt-0"
          initial={{ scale: 0.8, opacity: 0, x: 50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ rotateY: 10, rotateX: 5 }}
          whileTap={{ scale: 0.95 }}
          // FIX #3: Only apply negative margin on larger screens
          // so mobile isn’t cut off.
          style={{
            marginBottom: 0,         // no negative margin on mobile
          }}
          // Then apply negative margin for bigger screens with Tailwind classes:
          // e.g., md:mb-[-40px]
        >
          <motion.img
            src={profile}
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white mx-auto md:mb-[-40px]"
            whileHover={{ scale: 1.05, rotate: 2 }}
          />
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                     flex flex-col items-center text-[#333]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </section>

      {/* ----------------------------- */}
      {/* Math/Quant/Boardgame Section */}
      {/* ----------------------------- */}
      <section
        id="math-quant"
        className="relative py-16 flex flex-col items-center justify-center 
                   bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 
                   text-center"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-4 text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Math / Quant / Boardgame Side
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-[#333]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I love exploring deeper mathematical theories, building quant models,
            and even strategizing with friends over boardgames.
            Check out more of that side here:
          </motion.p>
          <motion.a
            href="/mathy" // <-- replace with your actual route
            className="inline-block mt-8 px-6 py-3 rounded-full shadow-lg bg-[#fda085] 
                       hover:bg-[#f7945d] transition-colors duration-300 
                       text-[#333] font-semibold"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Mathy Side
          </motion.a>
        </div>
      </section>

      {/* ------------------- */}
      {/* Tech Stack Section */}
      {/* ------------------- */}
      <section id="tech-stack" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tech Stack
          </motion.h2>

          {/* Parent container with variants */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  // The parent will stagger its children
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="flex flex-col items-center p-4 bg-gray-100 
                           rounded-lg hover:bg-gray-200 transition-colors"
              >
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-16 h-16"
                />
                <p className="mt-2 text-lg font-semibold text-[#333]">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------- */}
      {/* Experience Section */}
      {/* ------------------- */}
      {hasAccess && (
  <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 text-[#333]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
          <div className="relative border-l border-gray-300">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-10 ml-6"
                initial={{ opacity: 0, x: -50, rotate: -2 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="absolute -left-3.5 flex items-center justify-center w-7 h-7 bg-white rounded-full ring-4 ring-gray-300">
                  <img
                    src={exp.icon}
                    alt={exp.company_name}
                    className="w-5 h-5"
                    style={{ background: exp.iconBg, borderRadius: "50%" }}
                  />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
                  {exp.title}{" "}
                  <span className="ml-2 text-base text-gray-600">
                    @ {exp.company_name}
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                  {exp.date}
                </time>
                <ul className="list-disc pl-5 text-gray-700">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>)}
    </>
  );
};

export default About;
