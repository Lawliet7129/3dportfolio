import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

import littleGirlScene from "../assets/3d/little_girl.glb";

export function Little_girl() {
  const girlRef = useRef();

  // Load the 3D model and animations
  const { scene, animations } = useGLTF(littleGirlScene);

  // Access animations from the GLTF file
  const { actions } = useAnimations(animations, girlRef);

  useEffect(() => {
    // Play the default animation (adjust based on the animation names in the GLB file)
    if (actions) {
      const animationName = Object.keys(actions)[0]; // Automatically use the first animation
      if (animationName) {
        actions[animationName].play();
      }
    }
  }, [actions]);

  useFrame(({ clock }) => {
    // Example: Make the girl model slightly bounce up and down
    girlRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.05 + 1;
  });

  return (
    <mesh ref={girlRef} position={[0, 1, 0]} scale={[0.01, 0.01, 0.01]}>
      <primitive object={scene} />
    </mesh>
  );
}
