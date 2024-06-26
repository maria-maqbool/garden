/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 planter.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/planter.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={14.407}>
        <mesh geometry={nodes.Plane038.geometry} material={materials["Material.003"]} />
        <mesh geometry={nodes.Plane038_1.geometry} material={materials["Material.002"]} />
      </group>
      <mesh geometry={nodes.Circle033.geometry} material={materials["Material.001"]} scale={14.407} />
    </group>
  );
}

useGLTF.preload("/planter.glb");
