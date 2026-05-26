import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const ParticleUniverse = ({ isDark }) => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x -= 0.0005;
      ref.current.rotation.y -= 0.0005;
      // Parallax effect based on mouse
      ref.current.position.x = (state.pointer.x * 2);
      ref.current.position.y = (state.pointer.y * 2);
    }
  });

  return (
    <group ref={ref}>
      <Stars 
        radius={100} 
        depth={50} 
        count={isDark ? 5000 : 2000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
        color={isDark ? "white" : "#3b82f6"} // Stars are blue in light mode
      />
    </group>
  );
};

const ThreeBackground = () => {
  const { isDark } = useTheme();

  return (
    <div id="canvas-container" className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleUniverse isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
