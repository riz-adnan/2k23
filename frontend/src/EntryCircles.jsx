/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 EntryCircles.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function EntryCircles(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/EntryCircles-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cylinder073" geometry={nodes.Cylinder073.geometry} material={materials.Entrycircle_neon} position={[1162.56, -71.87, 694.85]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder062" geometry={nodes.Cylinder062.geometry} material={materials.Entrycircle_neon} position={[128.4, -35.75, 524.47]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder063" geometry={nodes.Cylinder063.geometry} material={materials.Entrycircle_neon} position={[128.4, -35.75, -283.36]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder064" geometry={nodes.Cylinder064.geometry} material={materials.Entrycircle_neon} position={[81.96, -35.75, -954.47]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder065" geometry={nodes.Cylinder065.geometry} material={materials.Entrycircle_neon} position={[81.96, -35.75, -2077.77]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder066" geometry={nodes.Cylinder066.geometry} material={materials.Entrycircle_neon} position={[81.96, -35.75, -2837.43]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder067" geometry={nodes.Cylinder067.geometry} material={materials.Entrycircle_neon} position={[442.16, -75.51, -2619.1]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder068" geometry={nodes.Cylinder068.geometry} material={materials.Entrycircle_neon} position={[442.16, -75.51, -1840.5]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder069" geometry={nodes.Cylinder069.geometry} material={materials.Entrycircle_neon} position={[442.16, -75.51, -1139.41]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder070" geometry={nodes.Cylinder070.geometry} material={materials.Entrycircle_neon} position={[667.91, -75.51, -464.18]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder071" geometry={nodes.Cylinder071.geometry} material={materials.Entrycircle_neon} position={[1001.58, -75.51, -464.18]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder072" geometry={nodes.Cylinder072.geometry} material={materials.Entrycircle_neon} position={[483.12, -35.75, 623.36]} scale={[21.47, 1.7, 21.47]} />
        <mesh name="Cylinder074" geometry={nodes.Cylinder074.geometry} material={materials.Entrycircle_neon} position={[-1345.35, 174.14, 426.21]} scale={[21.47, 1.7, 21.47]} />
      </group> 
    </group>
  )
}

useGLTF.preload('/EntryCircles-transformed.glb')