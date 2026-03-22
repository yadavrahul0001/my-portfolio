import React from "react";
import Planes from "./Planes";
import DecalPlane from "./DecalPlane";
import { MathUtils } from "three";
import { Text } from "@react-three/drei";
import { Image } from "@react-three/drei";

const Hero3D = () => {
  return (
    <>
    <Text position={[0,6.5,0]} scale={[0.3,0.3,1]} font="public\fonts\Aladin-Regular.ttf" color="blue">
        Hi, I'm Rahul
      </Text>
    <Text
        position={[-3.6, 3.67, 1]}
        scale={[1.1,1.4, 1]}
        font="public\fonts\HennyPenny-Regular.ttf" 
        color="blue">
        Creative 
      </Text>
      <Text
        position={[3.2, 3.67, 1]}
        scale={[1,1.3, 1]}
        font="public\fonts\HennyPenny-Regular.ttf" 
        color="blue">
         Developer
      </Text>
      <Image
        url="/images/main.PNG"
        scale={[4, 10, 1]}
        position={[0, 3, 0]}
      />
      {/* <Planes /> */}
      <DecalPlane
        position={[0, 0, 1]}
        rotation={[
          MathUtils.degToRad(30),
          MathUtils.degToRad(90),
          MathUtils.degToRad(0),
        ]}
        decalPosition={[0.1,0.1,0]}
        decalScale={[12,12,9]}
        text={"**************"}
        textFontSize={1}
      />
    </>
  );
}


export default Hero3D;
