import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 1000]} scale={2}>
      <MeshDistortMaterial
        color="#00df9a"
        attach="material"
        distort={0.33}
        speed={1.8}
        roughness={0.6}
      />
    </Sphere>
  );
}
