import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white text-center p-6 max-w-md mx-auto">
        <h1 className="sm:text-2xl font-medium">
          Hi, I'm <span className="font-semibold text-white">Bailey 👋🏻</span>
        </h1>
        <p className="sm:text-md text-black/40">A second-year Computer Science and Math student at the University of Pennsylvania</p>
      </div>
    );

  if (currentStage === 2) {
    return (
      <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white text-center p-6 max-w-md mx-auto">
        <p className="font-medium sm:text-lg text-white/90">
          I am passionate about both quantitative finance and software development!
        </p>

        <Link to="/about" className="inline-flex items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-2 px-4 rounded-lg mt-4 transition-transform transform hover:scale-105">
          Learn more
          <img src={arrow} alt="arrow" className="w-5 h-5 ml-2" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white text-center p-6 max-w-md mx-auto">
        <p className="font-medium sm:text-lg text-white/90">
          I've integrated my passion for design, math and technology into various projects. Want to see my work?
        </p>

        <Link to="/projects" className="inline-flex items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-2 px-4 rounded-lg mt-4 transition-transform transform hover:scale-105">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-5 h-5 ml-2" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="bg-black/15 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-white text-center p-6 max-w-md mx-auto">
        <p className="font-medium sm:text-lg text-white/90">
          I'm always open to new opportunities and collaborations (or just playing chess ♟️)
        </p>
        <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-2 px-4 rounded-lg mt-4 transition-transform transform hover:scale-105">
          Let's talk
          <img src={arrow} alt="arrow" className="w-5 h-5 ml-2" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
