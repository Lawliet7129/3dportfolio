import React, { Suspense, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Chess } from "../models"; // Your 3D model


const DynamicBackground = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full -z-50"
      animate={{
        background: [
          "linear-gradient(135deg, #4b4b4b, #6b6b6b)",
          "linear-gradient(135deg, #5a5a5a, #7a7a7a)",
          "linear-gradient(135deg, #4b4b4b, #6b6b6b)"
        ],
      }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
    />
  );
};




const IntroSection = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          After finishing <a href="https://www.facebook.com/NMHschool/posts/bailey-23-mastered-calculus-as-a-kid-now-a-10th-grader-she-has-a-graduate-level-/10158388284118557/" target="_blank" className="text-blue-600 hover:underline font-semibold">AP Calculus as a fourth grader</a> and TA’ing it in middle school, 
          I naturally gravitated toward math olympiads and strategic games. 
          Since then, I’ve qualified for the AIME 6 times, placed in the global top 30 in AIME, explored the <a href="https://drive.google.com/file/d/16vujzZPYq4GepGaFmyEGSy-cbZ6cspcI/view?usp=sharing" target="_blank" className="text-blue-600 hover:underline font-semibold">Prime Number Theorem</a> in middle school, and climbed into the top 30 worldwide in the board game <em>Splendor</em>.
        </motion.p>
      </div>
    </section>
  );
};


const HeroSection = () => {
    const { scrollYProgress } = useViewportScroll();
    const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Particle Overlay */}
        <Particles
          options={{
            fullScreen: { enable: true, zIndex: -40 },
            fpsLimit: 60,
            particles: {
              number: { value: 60, density: { enable: true, area: 1200 } },
              color: { value: "#888888" },
              opacity: { value: 0.2, random: true },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 1.5, outModes: "out" },
            },
            interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          }}
        />
        {/* 3D Canvas */}
        <Canvas className="absolute inset-0" camera={{ position: [3, 3, 7], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.9} color="#ffffff" />
            <directionalLight intensity={1.2} position={[0, 8, 6]} color="#ffffff" />
            <OrbitControls enableZoom={false} />
            <Chess />
          </Suspense>
        </Canvas>
        {/* Parallax Text Overlay */}
        <motion.div
          style={{ translateY: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.h1
            className="relative text-5xl md:text-7xl font-extrabold uppercase text-gray-100 drop-shadow-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Blurred duplicate behind the text */}
            <span className="absolute inset-0 text-white opacity-10 blur-xl select-none">
              MATHY
            </span>
            MATHY
          </motion.h1>
          <motion.p
            className="mt-4 text-2xl md:text-3xl text-gray-200 italic"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Math • Quant • Strategy
          </motion.p>
        </motion.div>
      </section>
    );
  };
  

const FluidSection = ({ title, content, customDelay = 0 }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-200 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: customDelay }}
      />
      <motion.div
        className="relative z-10 px-6 text-center max-w-3xl"
        initial={{ opacity: 0, y: 50, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: customDelay + 0.3, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-700">{content}</p>
      </motion.div>
    </section>
  );
};


const TimelineSection = () => {
  const timelineItems = [
    {
        title: "AP Calculus TA",
        description: (
            <>
              As a <strong>7th-grader</strong> in middle school, I TAed for AP Calculus AB/BC classes in Pilgrim School Los Angeles.
            </>
          ),
        date: "2018"
      },
      {
        title: "Hampshire College Summer Studies in Mathematics (HCSSiM) alum",
        description: (
          <>
           Selected to participate in a highly selective math summer program as <strong>the youngest participant</strong> ever in the program's history.
          </>
        ),
        date: "2019"
      },
    {
      title: "6x AIME Qualifier (all through AMC 12)",
      description: (
        <>
         <strong>Top 30 scorer</strong> in-grade in AIME II.
        </>
      ),
      date: "2018-2023"
    },
    {
        title: "US National Chemistry Olympiad (USNCO) Finalist",
        description: (
          <>
            <strong>Top 12</strong> in Massachusetts.
          </>
        ),
        date: "2018-2023"
      },
    {
      title: "Citadel Trading Competition @ Penn",
      description: (
        <>
        Team <strong>1st Place</strong>.
        </>
      ),
      date: "2024",
    },
    {
        title: "Wharton Investment and Trading Group (WITG) Quantitative Investment Strategies (QIS) Committee Member",
        description: (
          <>
          Play probability based games and participate in prestigious trading competitions to test strategies under real-world market conditions.
          </>
        ),
        date: "2024",
      },
    {
        title: "Susquehanna International Group (SIG) Sophomore Discovery Day Program Participant",
        description: (
          <>
          Selected from a competitive pool of undergraduates to participate in SIG’s fully paid, 2-day Sophomore Discovery program designed to introduce students to quantitative trading.
          </>
        ),
        date: "2025",
      },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Awards & Experience
        </h2>
        <div className="relative border-l-4 border-gray-700 ml-8">
          {timelineItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-3 top-0 w-4 h-4 bg-gray-700 rounded-full border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              <span className="block text-sm text-gray-600">{item.date}</span>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CarouselSection = () => {
  const researchItems = [
    {
      title: "Statistical Comparison Between the Fractal Dimensions of Brownian Motions vs. Random Walks",
      description: "The fractal dimension of a path measures the “jaggedness” of a fractal image or shape as a decimal number. Since Random Walks are also considered to be fractal, their fractal dimensions should be measurable. However, there are various types of random walk paths. Will different types of Random Walk paths result in different fractal dimensions? If so, by how much?",
      buttonText: "View Paper",
      link: "https://docs.google.com/document/d/1hguNmhCUcbC4TaxWTsBMuqH90poc5ga0/edit?usp=sharing&ouid=102643164178000962605&rtpof=true&sd=true"
    },
    {
      title: "A Comparative Analysis on Police Related Deaths and Prediction of the 2020 Presidential Election",
      description: "Proposed and conducted machine learning research (logistic regression and random forest) to predict state-level outcomes for the 2020 presidential election based on the prevalence of police killings and the 2016 election results",
      buttonText: "View Paper",
      link: "https://www.sciencepublishinggroup.com/article/10.11648/j.ijdsa.20200604.12",
    },
    {
      title: "The Prime Number Theorem & Riemann Zeta Function",
      description: "In middle school, as part of the HCSSiM program, I studied Don Zagier’s proof of the Prime Number Theorem and rewrote it in my own words, unpacking the analytic continuation of the Riemann Zeta function and the non-vanishing of ζ(s) on Re(s) = 1. My goal was to internalize and reconstruct the logical flow.",
      buttonText: "View Article",
      link: "https://drive.google.com/file/d/16vujzZPYq4GepGaFmyEGSy-cbZ6cspcI/view?usp=sharing"
    },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Research & Article
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory space-x-6 pb-4">
          {researchItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-lg snap-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="mb-4 text-gray-700">{item.description}</p>
              {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 rounded-full bg-gray-800 text-white font-bold hover:bg-gray-700 transition"
              >
                {item.buttonText}
              </a>
            ) : (
              <button
                disabled
                className="w-full py-2 rounded-full bg-gray-400 text-white font-bold cursor-not-allowed"
              >
                {item.buttonText}
              </button>
            )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const MasonrySection = () => {
  const insights = [
    {
      title: "Advanced CMS Techniques",
      description:
        "Exploring next‑gen methods to create dynamic, interactive content systems.",
    },
    {
      title: "Innovative Board Game Tactics",
      description:
        "Merging strategy with probability for fresh competitive insights.",
    },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Cool Insights
        </h2>
        <div className="columns-1 md:columns-2 gap-4">
          {insights.map((insight, idx) => (
            <motion.div
              key={idx}
              className="mb-6 p-6 bg-white rounded-lg shadow-md break-inside-avoid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {insight.title}
              </h3>
              <p className="text-gray-700">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BoardGamesSection = () => {
  const boardGames = [
    { 
      name: "Splendor", 
      icon: "🎨", 
      insight: "Teaches resource optimization & risk-adjusted decision making.",
      funFact: "Optimal move selection is similar to portfolio allocation strategies."
    },
    { 
      name: "Dominion", 
      icon: "🏰", 
      insight: "Deck-building mirrors recursive algorithms & data structures.",
      funFact: "Predicting card cycles is similar to memory management in SWE."
    },
    { 
      name: "Dune", 
      icon: "🌵", 
      insight: "Game theory & adversarial decision-making.",
      funFact: "Bidding strategies mimic real-world auction market dynamics."
    },
    { 
      name: "Chess", 
      icon: "♟️", 
      insight: "Pattern recognition & AI-driven decision making.",
      funFact: "Minimax algorithm in Chess is similar to risk minimization in trading."
    },
    { 
      name: "Wingspan", 
      icon: "🕊️", 
      insight: "Probabilistic decision making & risk assessment.",
      funFact: "Card draws mimic probability distributions used in quant trading."
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-200 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Board Games & Strategic Thinking</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl px-6">
        {boardGames.map((game, index) => (
          <motion.div
            key={index}
            className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-5xl">{game.icon}</span>
            <h3 className="text-2xl font-semibold text-gray-900 mt-3">{game.name}</h3>
            <p className="text-gray-600 text-center mt-2">{game.insight}</p>
            <motion.p 
              className="text-blue-500 mt-3 text-sm italic opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              {game.funFact}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


const Mathy = () => {
  const [hasAccess, setHasAccess] = useState(false);
  useEffect(() => {
    const storedAccess = sessionStorage.getItem("hasRecruiterAccess");
    if (storedAccess === "true") {
      setHasAccess(true);
    }
  }, []);
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordSubmit = () => {
    if (passwordInput === import.meta.env.VITE_RECRUITER_PASSWORD) {
      sessionStorage.setItem("hasRecruiterAccess", "true");
      setHasAccess(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };
  return (
    <>
      <DynamicBackground />
      <HeroSection />
      <IntroSection /> 
      {!hasAccess ? (
  <section className="py-20 bg-gray-100 text-center">
    <h2 className="text-2xl font-bold text-gray-700 mb-4">
      Awards & Experience (Recruiter Access Only)
    </h2>
    <p className="text-sm text-gray-600 mb-4">
      Please enter the password to unlock this section.
    </p>
    <div className="flex flex-col items-center justify-center gap-4">
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
        Unlock Section
      </button>
    </div>
  </section>
) : (
  <TimelineSection />
)}

      <CarouselSection />
      <BoardGamesSection />

    </>
  );
};

export default Mathy;
