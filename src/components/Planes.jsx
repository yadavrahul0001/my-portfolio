import React from 'react'
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import  { useRef } from "react";
import { useState } from "react";
import { Camera } from 'three';



function Plane({ position }) {
  const [hover, setHover] = useState(false);
  const material = useRef();
  useFrame(() => {
    if (material.current) {
      material.current.color.set(hover ? "red" : "blue");
    }
    
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>
      <mesh
        position={position}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <planeGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial ref={material} color="blue" />
      </mesh>
    </Float>
  );
}


const Planes = () => {
  const cols = 9;
  const spacing = 0.7;

  return (
    <>
      
      <ambientLight intensity={3.5} />
      <group position={[0, 7,-3]}>
        {Array.from({ length: 234 }).map((_, index) => (
          <Plane
            key={index}
            position={[
              (index % cols) * spacing - ((cols - 1) * spacing) / 2,
              -Math.floor(index / cols) * spacing,
              0,
            ]}
          />
        ))}
      </group>
    </>
  );
}

export default Planes