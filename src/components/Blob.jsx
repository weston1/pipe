import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";

function Blob() {
  return (
    <Canvas clasName="blob-section">
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} />
      <Suspense fallback={null}>
        <AnimatedSphere />
      </Suspense>
    </Canvas>
  );
}

export default Blob;
