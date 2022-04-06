import { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";

function Model(props) {
  /*
  source: https://sketchfab.com/3d-models/lowpoly-earth-ce0cce9b528b47c7984bf0b2b600d705
  title: LowPoly Earth
  */
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh
        geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
        material={materials.Lampd_Ice}
      />
      <mesh
        geometry={nodes["URF-Height_watr_0"].geometry}
        material={materials.watr}
        material-roughness={0}
      />
      <mesh
        geometry={nodes["URF-Height_Lampd_0"].geometry}
        material={materials.Lampd}
        material-color="lightgreen"
      ></mesh>
    </group>
  );
}

export default function Viewer() {
  const ref = useRef();
  return (
    <div className="hero-earth">
      <Canvas dpr={[1, 2]} camera={{ position: [5, 2, 0], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Model position={[0, 0.25, 0]} />
          <Environment preset="city" />
          <ContactShadows
            scale={4}
            position={[0, -1, 0]}
            far={2}
            blur={5}
            opacity={0.8}
            frames={1}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          global={true} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1}
        />
      </Canvas>
    </div>
  );
}
