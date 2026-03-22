import { Html, Image } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntersect } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Images = () => {
  const imageRef = useRef();
  const planeRef = useRef();
  const visible = useRef(false);

  const intersectRef = useIntersect((isVisible) => {
    visible.current = isVisible;
    console.log("visible:", isVisible);
  });

  useFrame((state, delta) => {
    imageRef.current.position.y = THREE.MathUtils.damp(
      imageRef.current.position.y,
      visible.current ? 0 : 5,
      4,
      delta,
    );
    imageRef.current.scale.y = THREE.MathUtils.damp(
      imageRef.current.scale.y,
      visible.current ? 11 : 1,
      4,
      delta,
    );
    imageRef.current.scale.x = THREE.MathUtils.damp(
      imageRef.current.scale.x,
      visible.current ? 10 : 10,
      4,
      delta,
    );
    imageRef.current.scale.z = THREE.MathUtils.damp(
      imageRef.current.scale.z,
      visible.current ? 1 : 1,
      4,
      delta,
    );
  });

  return (
    <>
      <group>
        <mesh ref={planeRef}>
          <planeGeometry args={[15, 15, 1]} />
          <meshBasicMaterial color="white" />
        </mesh>
        <mesh position={[0, -8, 0]} ref={intersectRef}>
          <planeGeometry args={[1, 1, 1.2]} />
          <meshBasicMaterial opacity={0.1} color="white" />
        </mesh>
        <Image
          url="/images/image1.png"
          ref={imageRef}
          className="image"
        />
      </group>
    </>
  );
};

export default Images;
