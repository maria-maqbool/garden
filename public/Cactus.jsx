/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 cactus.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cactus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle2076.geometry} material={materials.color} />
    </group>
  )
}

useGLTF.preload('/cactus.glb')
