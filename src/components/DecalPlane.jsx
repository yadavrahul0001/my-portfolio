import { useGLTF } from "@react-three/drei";
import React from "react";
import { Decal, RenderTexture, Text } from "@react-three/drei";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// import { useRef } from 'react';

const DecalPlane = ({ position, rotation , decalPosition, decalScale , text, textFontSize, textRotation}) => {
  const {scene} = useGLTF("public/models/wave.glb")
  const mesh = scene.children[0]
  const material = mesh.material

  // animation on wave
   const textRef = useRef();
   useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5.5))

  return (
    <>
      <mesh geometry={mesh.geometry} material={material} position={position} rotation={rotation} scale={[1,1,1]} >
        
        <Decal
          position={decalPosition}
          scale={decalScale}
          rotation={[MathUtils.degToRad(90), MathUtils.degToRad(0), MathUtils.degToRad(90)]}
        >
          <meshStandardMaterial
            transparent
            roughness={1}
            polygonOffset
            polygonOffsetFactor={-1}
          >
            <RenderTexture attach="map">
              <color attach="background" args={["blue"]}/>
              <Text ref={textRef} rotation={textRotation} fontSize={textFontSize} color="white">
                {text}
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </Decal>
      </mesh>
    </>
  );
};

export default DecalPlane;
