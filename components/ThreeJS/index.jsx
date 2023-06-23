"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

const ThreeJS = () => {
  return (
    <Canvas
      shadows
      className="w-full h-full backdrop-blur-xl hover:cursor-pointer "
      camera={{
        position: [-50, 5, 5],
      }}
    >
      <ambientLight intensity={0.5} />
      <mesh>
        <torusKnotGeometry args={[10, 3, 100, 16]} />
        <meshNormalMaterial color={"#FFC700"} />
      </mesh>
      <OrbitControls
        maxDistance={50}
        minDistance={20}
        autoRotate={true}
        autoRotateSpeed={5}
      />
    </Canvas>
  );
};

export default ThreeJS;
