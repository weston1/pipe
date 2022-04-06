import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedSphere from "./AnimatedSphere";

function Blob() {
  return (
    <div clasName="blob-section">
      <Canvas dpr={[1, 2]} camera={{ position: [5, 0, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Blob;
