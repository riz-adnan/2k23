/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Road_blocking_covers.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function RoadBlock(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Road_blocking_covers-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube027" geometry={nodes.Cube027.geometry} material={materials.Concrete} position={[706.28, -78.12, 1514.67]} scale={[0.31, 0.14, 0.31]} />
        <mesh name="Cube026" geometry={nodes.Cube026.geometry} material={materials.Concrete} position={[1274.28, -72.29, -944.71]} rotation={[0, 1.57, 0]} scale={[0.57, 0.26, 1]} />
        <mesh name="Cube028" geometry={nodes.Cube028.geometry} material={materials.Concrete} position={[-317.5, -76.19, 1513.29]} scale={[0.52, 0.13, 0.7]} />
        <mesh name="Cube036" geometry={nodes.Cube036.geometry} material={materials.Concrete} position={[-588.36, -72.46, 1032.3]} rotation={[0, -0.69, 0]} scale={[0.12, 0.22, 1]} />
        <mesh name="Cube033" geometry={nodes.Cube033.geometry} material={materials.Concrete} position={[603.09, -68.39, 1270.4]} scale={[0.13, 0.18, 0.42]} />
        <mesh name="Cube042" geometry={nodes.Cube042.geometry} material={materials.Concrete} position={[-327.21, -72.03, 1114.71]} rotation={[0, 0.58, 0]} scale={[0.2, 0.37, 1]} />
        <mesh name="Cube055" geometry={nodes.Cube055.geometry} material={materials.Concrete} position={[-97.11, -71.93, 1213.44]} rotation={[0, 0.47, 0]} scale={[0.08, 0.22, 0.75]} />
        <mesh name="Cube025" geometry={nodes.Cube025.geometry} material={materials.Road} position={[413.98, -74.63, 1536.79]} scale={[113.16, 9.03, 26.85]} />
        <mesh name="Cube034" geometry={nodes.Cube034.geometry} material={materials.Concrete} position={[413.98, -74.63, 1281.28]} rotation={[Math.PI, 0, Math.PI]} scale={[113.16, 9.03, 26.85]} />
        <mesh name="Cube040" geometry={nodes.Cube040.geometry} material={materials['Concrete_stairs.002']} position={[520.19, -59.12, -3108.75]} rotation={[0, 1.57, 0]} scale={[1, 0.45, 0.05]} />
        <mesh name="Cube038" geometry={nodes.Cube038.geometry} material={materials['Concrete_stairs.002']} position={[283.03, -59.12, -3101.67]} rotation={[0, 1.57, 0]} scale={[1, 0.45, 0.05]} />
      </group>
    </group>
  )
}

useGLTF.preload('/Road_blocking_covers-transformed.glb')
