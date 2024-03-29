/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 OAT.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function OAT(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/OAT-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube029" geometry={nodes.Cube029.geometry} material={materials.Concrete_stairs} position={[1126, -60.57, 61.37]} />
      </group>
    </group>
  )
}

useGLTF.preload('/OAT-transformed.glb')
