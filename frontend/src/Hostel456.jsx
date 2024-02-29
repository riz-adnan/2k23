/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 Hostel456.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function Hostel456(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Hostel456-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube161" geometry={nodes.Cube161.geometry} material={materials.Building_material} position={[573.9, -80.06, -2578.55]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
        <mesh name="Cube173" geometry={nodes.Cube173.geometry} material={materials.Building_material} position={[573.9, -80.06, -1803.59]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
        <mesh name="Cube499" geometry={nodes.Cube499.geometry} material={materials.Building_material} position={[573.9, -80.06, -1099.19]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Hostel456-transformed.glb')