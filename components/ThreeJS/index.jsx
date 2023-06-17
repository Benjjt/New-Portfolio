"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";

const ThreeJS = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas
        shadows
        className="w-full h-full"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <Floor />
      </Canvas>
    </div>
  );
};

export default ThreeJS;
