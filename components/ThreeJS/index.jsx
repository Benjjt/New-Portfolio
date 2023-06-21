"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import { Stats, OrbitControls } from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";

const ThreeJS = () => {
  return (
    <Canvas
      shadows
      className="w-full h-full backdrop-blur-xl hover:cursor-pointer "
      camera={{
        position: [-30, 5, 5],
      }}
    >
      <ambientLight intensity={0.5} />
      <mesh>
        <torusKnotGeometry args={[10, 3, 100, 16]} />
        <meshNormalMaterial />
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
