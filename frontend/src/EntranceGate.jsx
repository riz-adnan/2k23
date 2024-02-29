/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 EntranceGate.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function EntranceGate(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/EntranceGate-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube580" geometry={nodes.Cube580.geometry} material={materials['Building_material.002']} position={[270.8, -21.22, 1830.07]} />
      </group>
    </group>
  )
}

useGLTF.preload('/EntranceGate-transformed.glb')