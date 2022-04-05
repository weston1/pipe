import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 400]} scale={4}>
      <MeshDistortMaterial
        color="#8352FD"
        attach="material"
        distort={0.33}
        speed={1.5}
        roughness={0.6}
      />
    </Sphere>
  );
}
