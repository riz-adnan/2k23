/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 MessHall.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function MessHall(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/MessHall-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube031" geometry={nodes.Cube031.geometry} material={materials.Building_material} position={[872.03, -20.39, -677.21]} />
      </group>
    </group>
  )
}

useGLTF.preload('/MessHall-transformed.glb')