import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function generateRandomPoints(count, range) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * range;
    positions[i * 3 + 1] = (Math.random() - 0.5) * range;
    positions[i * 3 + 2] = (Math.random() - 0.5) * range;
  }
  return positions;
}

function ParticleSystem() {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const count = window.innerWidth < 768 ? 2500 : 5000;
    return generateRandomPoints(count, 10);
  }, []);

  useFrame((state, delta) => {
    pointsRef.current.rotation.x += delta / 20;
    pointsRef.current.rotation.y += delta / 25;
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#9D37F2" 
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function HeroBackground() {
  return (
    <div className="hero-background-canvas">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleSystem />
      </Canvas>
    </div>
  );
}

export default HeroBackground;