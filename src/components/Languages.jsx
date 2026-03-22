import React from "react";
import { Image, Text } from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useState } from "react";
import DecalPlane from "./DecalPlane";
import { MathUtils } from "three";

const Languages = () => {
  
  const textRef = useRef();
  const imageRef = useRef();
  const languageGroup1 = useRef();
  const languageGroup2 = useRef();

  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if(languageGroup1.current){
      languageGroup1.current.position.x = THREE.MathUtils.damp(
        languageGroup1.current.position.x,
        hovered ? 2 : 16,
        6,
        delta
      );
    }

    if(languageGroup2.current){
      languageGroup2.current.position.x = THREE.MathUtils.damp(
        languageGroup2.current.position.x,
        hovered ? -2 : -16,
        6,
        delta
      );
    }
  });

  useFrame((_, delta) => {
    if (imageRef.current) {
      imageRef.current.position.z = THREE.MathUtils.damp(
        imageRef.current.position.z,
        hovered ? -2.5 : 0,
        6,
        delta,
      );

      if (imageRef.current.material) {
        imageRef.current.material.transparent = true;
        imageRef.current.material.opacity = THREE.MathUtils.damp(
          imageRef.current.material.opacity ?? 1,
          hovered ? 0.4 : 1,
          6,
          delta,
        );
      }
    }

    if (textRef.current) {
      textRef.current.position.z = THREE.MathUtils.damp(
        textRef.current.position.z,
        hovered ? -2.3 : -0.2,
        6,
        delta,
      );
    }

    if (textRef.current?.material) {
      textRef.current.material.transparent = true;
      textRef.current.material.opacity = THREE.MathUtils.damp(
        textRef.current.material.opacity ?? 1,
        hovered ? 0.3 : 1,
        6,
        delta,
      );
    }

    
  });

  return (
    <>
    <group position={[0,0,-8]}>
      <DecalPlane
        position={[-0.3, -2.8, 7.5]}
        rotation={[
          MathUtils.degToRad(75),
          MathUtils.degToRad(-90),
          MathUtils.degToRad(0),
        ]}
        decalPosition={[-0.03, 0.1, 0]}
        decalScale={[17, 17, 9]}
        text={"*  HTML  *  CSS  *  JAVASCRIPT  *  REACT  *  THREE.JS  *  REACT THREE.FIBER  *"}
        textFontSize={0.3}
        textRotation={[MathUtils.degToRad(0), MathUtils.degToRad(180), MathUtils.degToRad(0)]}
      />

      <group
        position={[0, 0, 0]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <Image
          ref={imageRef}
          url="/images/image3.PNG"
          scale={[9, 10, 1]}
        />
        <Float speed={3} rotationIntensity={0} floatIntensity={2}>
          <Text
            ref={textRef}
            position={[0, 0, -1]}
            scale={[13, 13, 1]}
            color="blue"
            fontSize={0.5}
            font="/fonts/Aladin-Regular.ttf"
          >
            Languages
          </Text>
        </Float>
      </group>
      <group className="languages1" position={[2, 0, 1]} ref={languageGroup1}>
        <Image 
          url="/languagesFonts/image1.png"
          scale={[1, 1, 1]}
          position={[1, 1, 1]}
        />
        <Image
          url="/languagesFonts/image2.png"
          scale={[1, 1, 1]}
          position={[-0.5, -0.7, 1]}
        />
        <Image
          url="/languagesFonts/image3.png"
          scale={[1, 1, 1]}
          position={[-2, 1.3, 1]}
        />
        <Image
          url="/languagesFonts/image4.png"
          scale={[1, 1, 1]}
          position={[-1, -2.3, 1]}
        />
        <Image
          url="/languagesFonts/image5.png"
          scale={[1, 1, 1]}
          position={[-1, 3.3, 1]}
        />
      </group>
      <group className="languages2" position={[-2, 0, 1]} ref={languageGroup2}> 
        <Image 
          url="/languagesFonts/image6.png"
          scale={[1, 1, 1]}
          position={[1, -1, 1]}
        />
        <Image
          url="/languagesFonts/image7.png"
          scale={[1, 1, 1]}
          position={[-0.5, 0.7, 1]}
        />
        <Image
          url="/languagesFonts/image8.png"
          scale={[1, 1, 1]}
          position={[-2, 1.3, 1]}
        />
        <Image
          url="/languagesFonts/image9.png"
          scale={[1, 1, 1]}
          position={[-1, -2.3, 1]}
        />
        <Image
          url="/languagesFonts/image10.png"
          scale={[1, 1, 1]}
          position={[-1, 3.3, 1]}
        />
      </group>
    </group>
    </>
  );
};

export default Languages;
