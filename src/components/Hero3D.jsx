import React, { useRef, useMemo, useContext, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { random } from 'maath';
import { ThemeContext } from '../contexts/ThemeContext';

function Particles() {
  const { isDarkMode } = useContext(ThemeContext);
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  const particleColor = isDarkMode ? '#8A2BE2' : '#007BFF';

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

    // Warp effect on mouse move
    const { pointer } = state;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < sphere.length; i += 3) {
      const x = sphere[i];
      const y = sphere[i + 1];
      const z = sphere[i + 2];

      const distance = Math.sqrt(x*x + y*y + z*z);
      const warpFactor = 1 + pointer.x * 0.5;

      ref.current.geometry.attributes.position.array[i] = x * warpFactor + Math.sin(t + i) * 0.1;
      ref.current.geometry.attributes.position.array[i+1] = y * warpFactor + Math.cos(t + i) * 0.1;
      ref.current.geometry.attributes.position.array[i+2] = z * warpFactor;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
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
      <Canvas camera={{ position: [0, 0, 2.5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Particles />
      </Canvas>
    </div>
  );
}
