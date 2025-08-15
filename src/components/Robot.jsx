import React, { useRef, useContext } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus, Capsule, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { ThemeContext } from '../contexts/ThemeContext';

const Robot = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const groupRef = useRef();
  const headRef = useRef();
  const haloRef = useRef();

  // Define colors based on theme
  const bodyColor = isDarkMode ? '#4a4a5a' : '#D1D5DB';
  const accentColor = isDarkMode ? '#A78BFA' : '#6366F1';

  useFrame((state, delta) => {
    // Animate the halo
    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.5;
    }

    // Make the head follow the cursor
    if (headRef.current) {
      const { pointer } = state;
      const targetX = -pointer.y * 0.4; // Reduced sensitivity for a smoother feel
      const targetY = pointer.x * 0.4;

      // Smoothly interpolate rotation
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, delta * 2);
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, delta * 2);
    }

    // Add a subtle bobbing animation to the entire robot
    if (groupRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      groupRef.current.position.y = Math.sin(elapsedTime * 1.2) * 0.04;
    }
  });

  const glassMaterial = (
    <meshPhysicalMaterial
      transmission={1}
      roughness={0.15}
      thickness={0.1}
      ior={1.5}
      color={bodyColor}
    />
  );

  return (
    <group ref={groupRef}>
      {/* Floating "Shoulder" Crystals */}
      <Icosahedron args={[0.3, 1]} position={[-1.2, 0.6, 0]}>
        {glassMaterial}
      </Icosahedron>
      <Icosahedron args={[0.3, 1]} position={[1.2, 0.6, 0]}>
        {glassMaterial}
      </Icosahedron>

      {/* Head Group */}
      <group ref={headRef} position={[0, 0.5, 0]}>
        {/* Main head sphere */}
        <Sphere args={[0.4, 32, 32]}>
          {glassMaterial}
        </Sphere>
        {/* Side "ear" spheres */}
        <Sphere args={[0.15, 32, 32]} position={[-0.45, 0, 0]}>
          {glassMaterial}
        </Sphere>
        <Sphere args={[0.15, 32, 32]} position={[0.45, 0, 0]}>
          {glassMaterial}
        </Sphere>
        {/* Glowing Visor - remains opaque */}
        <Box args={[0.6, 0.1, 0.1]} position={[0, 0.05, 0.35]}>
           <meshStandardMaterial color={accentColor} emissive={accentColor} emissiveIntensity={5} toneMapped={false}/>
        </Box>
        {/* Rotating Halo - with accent colored glass */}
        <Torus ref={haloRef} args={[0.6, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial
            transmission={1}
            roughness={0.1}
            thickness={0.1}
            ior={1.5}
            color={accentColor}
          />
        </Torus>
      </group>

      {/* Body */}
      <Capsule args={[0.3, 0.6, 32, 32]} position={[0, -0.5, 0]}>
        {glassMaterial}
      </Capsule>
    </group>
  );
};

export default Robot;
