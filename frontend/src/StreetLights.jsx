/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 StreetLights.glb -T
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

export function StreetLights(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/StreetLights-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group scale={0.1} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube175" geometry={nodes.Cube175.geometry} material={materials['Lamp post']} position={[1526.51, -68.53, 956.22]} />
        <mesh name="Cube386" geometry={nodes.Cube386.geometry} material={materials['Lamp post']} position={[1508.99, -68.53, 314.58]} />
        <mesh name="Cube432" geometry={nodes.Cube432.geometry} material={materials['Lamp post']} position={[1494.04, -68.53, -402.98]} />
        <mesh name="Cube505" geometry={nodes.Cube505.geometry} material={materials['Lamp post']} position={[1480.72, -68.53, -1079.18]} />
        <mesh name="Cube515" geometry={nodes.Cube515.geometry} material={materials['Lamp post']} position={[1464.51, -68.53, -1893.95]} />
        <mesh name="Cube517" geometry={nodes.Cube517.geometry} material={materials['Lamp post']} position={[1469.5, -68.53, -2642.03]} />
        <mesh name="Cube519" geometry={nodes.Cube519.geometry} material={materials['Lamp post']} position={[1380.56, -68.53, -3217.98]} rotation={[0, 0.67, 0]} />
        <mesh name="Cube521" geometry={nodes.Cube521.geometry} material={materials['Lamp post']} position={[981.19, -68.53, -3372.39]} rotation={[0, 1.56, 0]} />
        <mesh name="Cube523" geometry={nodes.Cube523.geometry} material={materials['Lamp post']} position={[584.32, -68.53, -3393.05]} rotation={[0, -0.01, 0]} />
        <mesh name="Cube525" geometry={nodes.Cube525.geometry} material={materials['Lamp post']} position={[237.95, -68.53, -3393.32]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube531" geometry={nodes.Cube531.geometry} material={materials['Lamp post']} position={[-194.06, -39.12, -3359.62]} rotation={[0, 1.56, 0]} />
        <mesh name="Cube536" geometry={nodes.Cube536.geometry} material={materials['Lamp post']} position={[-856.28, -28.53, -3340.32]} rotation={[-Math.PI, 1.24, -Math.PI]} />
        <mesh name="Cube555" geometry={nodes.Cube555.geometry} material={materials['Lamp post']} position={[-492.29, -28.53, -3361.79]} rotation={[-Math.PI, 1.57, -Math.PI]} />
        <mesh name="Cube560" geometry={nodes.Cube560.geometry} material={materials['Lamp post']} position={[-965, -32.94, -2942.95]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube562" geometry={nodes.Cube562.geometry} material={materials['Lamp post']} position={[-965, -32.94, -2451.97]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube564" geometry={nodes.Cube564.geometry} material={materials['Lamp post']} position={[-965, -32.94, -1847.9]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube566" geometry={nodes.Cube566.geometry} material={materials['Lamp post']} position={[-965, -32.94, -1163.91]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube568" geometry={nodes.Cube568.geometry} material={materials['Lamp post']} position={[-965, -32.94, -325.54]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube570" geometry={nodes.Cube570.geometry} material={materials['Lamp post']} position={[-965, -32.94, 316.84]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube572" geometry={nodes.Cube572.geometry} material={materials['Lamp post']} position={[-965, -32.94, 881.3]} rotation={[-Math.PI, 0.01, -Math.PI]} />
        <mesh name="Cube574" geometry={nodes.Cube574.geometry} material={materials['Lamp post']} position={[-90.62, -81.19, 1238.34]} rotation={[0, -0.01, 0]} />
        <mesh name="Cube576" geometry={nodes.Cube576.geometry} material={materials['Lamp post']} position={[547.4, -81.19, 1252.64]} rotation={[0, -0.01, 0]} />
        <mesh name="Cube578" geometry={nodes.Cube578.geometry} material={materials['Lamp post']} position={[-1272.48, 72.22, -1012.08]} rotation={[0, -0.53, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/StreetLights-transformed.glb')
