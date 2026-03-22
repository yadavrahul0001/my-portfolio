
import React from 'react'
import DecalPlane from './DecalPlane'
import { OrbitControls, Text } from '@react-three/drei'
import { MathUtils } from 'three'

const Model = () => {
    
    
   
  return (
    <>
        <group>
            <Text position={[0,5.2,-3]} scale={[2,2,2]} color="Black">AI FILMS </Text>
            <DecalPlane position={[0, 0, 7]} rotation={[MathUtils.degToRad(20), MathUtils.degToRad(0), MathUtils.degToRad(0)]} decalPosition={[0.1, 0, 0]} decalScale={[15, 15, 15]} text="Coming Soon" textFontSize={0.5} textRotation={[Math.PI , 0, 0]}/>
        </group>
    </>
  )
}

export default Model