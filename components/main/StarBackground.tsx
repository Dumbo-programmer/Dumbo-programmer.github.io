"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2500), { radius: 1.2 })
  );

  // Barely perceptible drift; the stars are ambience, not the main event.
  useFrame((_state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 90;
    ref.current.rotation.y -= delta / 120;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#c4b5fd"
          size={0.0018}
          sizeAttenuation
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="pointer-events-none fixed inset-0 z-[-1] h-full w-full">
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);

export default StarsCanvas;
