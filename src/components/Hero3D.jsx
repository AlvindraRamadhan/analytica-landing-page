import React, { useRef, useContext, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';
import { ThemeContext } from '../contexts/ThemeContext';
import Robot from './Robot';

function Particles() {
  const { isDarkMode } = useContext(ThemeContext);
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2.5 }));

  const particleColor = isDarkMode ? '#8A2BE2' : '#007BFF';

  useFrame((state, delta) => {
    // Simple rotation for the particles
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <directionalLight position={[-10, 10, -10]} intensity={1} color="#A78BFA" />
        <Suspense fallback={null}>
          <group scale={1.8} position-y={-1}>
            <Robot />
          </group>
        </Suspense>
        <Particles />
      </Canvas>
    </div>
  );
}
