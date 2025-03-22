import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Stars } from "@react-three/drei";
import sakuraMelody from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

// A journey into a digital wonderland
const Home = () => {
  // The sakura melody: a gentle serenade in the breeze
  const melodyRef = useRef(new Audio(sakuraMelody));
  melodyRef.current.volume = 0.4;
  melodyRef.current.loop = true;

  // State to guide our unfolding tale
  const [currentChapter, setCurrentChapter] = useState(1);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isMelodyPlaying, setIsMelodyPlaying] = useState(false);

  // Play or pause our musical muse based on the viewer's desire
  useEffect(() => {
    if (isMelodyPlaying) {
      melodyRef.current.play();
    } else {
      melodyRef.current.pause();
    }
    return () => melodyRef.current.pause();
  }, [isMelodyPlaying]);

  // Adjust the biplane’s essence to the rhythm of your screen
  const computeBiplaneDimensions = () => {
    let scaleDimensions, positionCoordinates;

    if (window.innerWidth < 768) {
      scaleDimensions = [1.5, 1.5, 1.5];
      positionCoordinates = [0, -1.5, 0];
    } else {
      scaleDimensions = [3, 3, 3];
      positionCoordinates = [0, -4, -4];
    }

    return [scaleDimensions, positionCoordinates];
  };

  // Align the enchanted island to the canvas of your device
  const computeIslandDimensions = () => {
    let scaleDimensions, positionCoordinates;

    if (window.innerWidth < 768) {
      scaleDimensions = [0.9, 0.9, 0.9];
      positionCoordinates = [0, -6.5, -43.4];
    } else {
      scaleDimensions = [1, 1, 1];
      positionCoordinates = [0, -6.5, -43.4];
    }

    return [scaleDimensions, positionCoordinates];
  };

  const [biplaneScale, biplanePosition] = computeBiplaneDimensions();
  const [islandScale, islandPosition] = computeIslandDimensions();

  return (
    <section className="w-full h-screen relative">
      {/* The narrative unfolds at the top of the scene */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentChapter && <HomeInfo currentStage={currentChapter} />}
      </div>

      {/* The canvas portal to our otherworldly realm */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isSpinning ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <Stars
            radius={100}      // The inner sphere's radius
            depth={50}        // How deep into space the stars extend
            count={5000}      // Number of stars
            factor={4}        // Size factor for stars
            saturation={0}    // Star color saturation
            fade              // Let them gently fade sat the edges
          />
          
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
          <hemisphereLight skyColor="#ffb1fc" groundColor="#000000" intensity={1} />

          {/* A whimsical bird soaring through digital skies */}
          <Bird />

          {/* The celestial dome, gently rotating with cosmic grace */}
          <Sky isRotating={isSpinning} />
          

          {/* The enchanted island—a sanctuary of mystery and magic */}
          <Island
            isRotating={isSpinning}
            setIsRotating={setIsSpinning}
            setCurrentStage={setCurrentChapter}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />

          {/* The biplane gliding like a dream across the horizon */}
          <Plane
            isRotating={isSpinning}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      {/* A whimsical jukebox to toggle the sakura serenade */}
      <div className="absolute bottom-2 left-2">
        <img
          src={!isMelodyPlaying ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsMelodyPlaying(!isMelodyPlaying)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
