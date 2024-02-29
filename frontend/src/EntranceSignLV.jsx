/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 EntranceSignLV.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function EntranceSignLV(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/EntranceSignLV-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube467" position={[222.45, 95.02, 1096.29]} rotation={[0, 0.35, 0]}>
          <mesh name="Cube362" geometry={nodes.Cube362.geometry} material={materials['Entrance Sign_1']} />
          <mesh name="Cube362_1" geometry={nodes.Cube362_1.geometry} material={materials['Entrance Sign_5']} />
        </group>
        <mesh name="Cylinder036" geometry={nodes.Cylinder036.geometry} material={materials['Entrance Sign_4']} position={[137.07, 140.07, 1135.1]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cylinder037" geometry={nodes.Cylinder037.geometry} material={materials['Entrance Sign_4']} position={[165.45, 140.07, 1124.81]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cylinder038" geometry={nodes.Cylinder038.geometry} material={materials['Entrance Sign_4']} position={[194.9, 140.07, 1114.13]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cylinder039" geometry={nodes.Cylinder039.geometry} material={materials['Entrance Sign_4']} position={[223.54, 140.07, 1103.74]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cylinder040" geometry={nodes.Cylinder040.geometry} material={materials['Entrance Sign_4']} position={[252.19, 140.07, 1093.35]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cylinder041" geometry={nodes.Cylinder041.geometry} material={materials['Entrance Sign_4']} position={[281.64, 140.07, 1082.67]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cylinder042" geometry={nodes.Cylinder042.geometry} material={materials['Entrance Sign_4']} position={[309.22, 140.07, 1072.66]} rotation={[Math.PI / 2, 0, -0.35]} />
        <mesh name="Cube468" geometry={nodes.Cube468.geometry} material={materials['Entrance Sign_2']} position={[145.51, 95.02, 1114.44]} rotation={[0, 0.35, 0]} />
        <mesh name="Cube469" geometry={nodes.Cube469.geometry} material={materials['Entrance Sign_2']} position={[200.53, 95.02, 1094.49]} rotation={[0, 0.35, 0]} />
        <mesh name="Cube470" geometry={nodes.Cube470.geometry} material={materials['Entrance Sign_2']} position={[173.89, 223.8, 1104.15]} rotation={[0, 0.35, -Math.PI / 2]} />
      </group>
    </group>
  )
}

useGLTF.preload('/EntranceSignLV-transformed.glb')
