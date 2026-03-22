import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react';

const Items = (modelName, position, rotation) => {

    const {scene} = useGLTF(`/models/${modelName}.glb`)
    const mesh = scene.children[0]
    const material = mesh.material
    const copiedScene = useMemo(() => mesh.clone(), [mesh]);
    const copiedMaterial = useMemo(() => material.clone(), [material]);
    copiedScene.material = copiedMaterial;
    // const mesh = copiedScene.children[0]
    // const material = mesh.material
  return (
    <>
    <group>
        <mesh geometry={copiedScene.geometry} material={copiedScene.material} position={position} rotation={rotation} />
    </group>
    </>
  )
}

useGLTF.preload('/models/screen2.glb')
useGLTF.preload('/models/board2.glb')
useGLTF.preload('/models/wave.glb')


export default Items