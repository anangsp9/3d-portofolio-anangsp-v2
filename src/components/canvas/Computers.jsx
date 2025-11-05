import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
  computer.scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.castShadow = true;
      child.receiveShadow = true;

      child.material.side = THREE.DoubleSide;

      // atur lebih natural
      child.material.metalness = 0;       // non-metal
      child.material.roughness = 0.8;     // cukup kasar, tapi masih ada pantulan diffuse
      child.material.envMapIntensity = 0.5; // masih ada cahaya environment
    }
  });
}, [computer]);

  return (
    <mesh>
      {/* Cahaya utama */}
      <hemisphereLight intensity={0.5} groundColor="black" />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={2048}
      />

      {/* Tambahan cahaya */}
      <pointLight intensity={2} position={[10, 10, 10]} />

      {/* Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

        {/* Tambah environment lighting */}
        <Environment preset="city" />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
