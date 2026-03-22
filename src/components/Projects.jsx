import React from "react";
import { ContactShadows, useGLTF, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MathUtils } from "three";
import gsap from "gsap";

const Projects = () => {
  const lightRef = useRef();
  const clickRef = useRef();
  const activeMesh = useRef();
  const textures = useTexture([
    "/projectsImages/image1.png",
    "/projectsImages/image2.png",
    "/projectsImages/image3.png",
    "/projectsImages/image4.png",
  ]);

  textures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
  });

  useFrame((state) => {
    const { mouse } = state;

    const target = new THREE.Vector3(mouse.x * 9, mouse.y * 9, 2);

    lightRef.current.position.lerp(target, 0.8);
  });

  // function to reset the position and scale of the mesh
  const resetMesh = (mesh) => {
    if (!mesh) return;

    gsap.to(mesh.position, {
      z: 0.3,
      duration: 0.4,
    });

    gsap.to(mesh.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.4,
    });
  };

  // click handler for project images
  const handleClick = (e) => {
    e.stopPropagation(); // important

    const mesh = e.object;

    // reset previous
    if (activeMesh.current && activeMesh.current !== mesh) {
      resetMesh(activeMesh.current);
    }

    // animate new
    gsap.to(mesh.position, {
      z: 1.5,
      duration: 0.5,
    });

    gsap.to(mesh.scale, {
      x: 1.5,
      y: 1.5,
      z: 1.5,
      duration: 0.5,
    });

    activeMesh.current = mesh;
  };

  // click outside
  const handleMissed = () => {
    resetMesh(activeMesh.current);
    activeMesh.current = null;
  };

  return (
    <>
      <ContactShadows
        position={[0, -3, 0]}
        opacity={1}
        scale={60}
        blur={1}
        far={1.5}
      />
      <ambientLight intensity={0.1} />
      <pointLight
        position={[0, 0, 12]}
        intensity={15}
        ref={lightRef}
        castShadow
        shadow-mapSize-width={64}
        shadow-mapSize-height={64}

      />
      <group scale={[1.9, 1.9, 1]} position={[0, 0, 1]}>
        <mesh>
          <planeGeometry args={[11, 11, 1]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
        <group className="projectsImages" position={[0, 0, 0]}>
          <mesh
            position={[-2.5, 1.4, 0.3]}
            ref={clickRef}
            onClick={handleClick}
            onPointerMissed={handleMissed}
            castShadow
          >
            <planeGeometry args={[2, 1.5, 1]} />
            <meshStandardMaterial map={textures[0]} />
          </mesh>
          <mesh
            position={[2.5, 1.5, 0.3]}
            ref={clickRef}
            onClick={handleClick}
            onPointerMissed={handleMissed}
            castShadow
          >
            <planeGeometry args={[2, 1.5, 1]} />
            <meshStandardMaterial map={textures[1]} />
          </mesh>
          <mesh
            position={[2.5, -1, 0.3]}
            ref={clickRef}
            onClick={handleClick}
            onPointerMissed={handleMissed}
            castShadow
          >
            <planeGeometry args={[2, 1.5, 1]} />
            <meshStandardMaterial map={textures[2]} />
          </mesh>
          <mesh
            position={[-2.5, -1, 0.3]}
            ref={clickRef}
            onClick={handleClick}
            onPointerMissed={handleMissed}
            castShadow
          >
            <planeGeometry args={[2, 1.5, 1]} />
            <meshStandardMaterial map={textures[3]} />
          </mesh>
        </group>
      </group>
    </>
  );
};

useGLTF.preload("public/models/board2.glb");
export default Projects;
