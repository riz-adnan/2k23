import * as RAPIER from "@dimforge/rapier3d-compat"
import { useKeyboardControls } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier"
import { useRef } from "react"
import * as THREE from "three"
import { PointerLockControls } from "@react-three/drei"

const SPEED = 25
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

export function Player({ lerp = THREE.MathUtils.lerp }) {
  
  const ref = useRef()
  const controlsRef = useRef();

  const rapier = useRapier()
  const { camera } = useThree()

  const [, get] = useKeyboardControls()

  if (localStorage.getItem("z") == 150) camera.lookAt( 20, 200, 100 );
  
  

  useFrame((state) => {
    const { forward, backward, left, right, jump } = get()
    const velocity = ref.current.linvel()    
   
    // update camera
    camera.position.set(...ref.current.translation())
    
    // movement
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
    
    // jumping
    const world = rapier.world.raw()
    const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }))
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 6
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 20, z: 0 })
    
    // map rotation
    const rotated = document.getElementById('map');
    const rot = camera.rotation.x
    rotated.style.transform = "rotate(" + rot + "rad)";


    // checking pointer lock
    // if (!(controlsRef.current && controlsRef.current.isLocked)) {
    //   console.log("i am a potato")
    // } 


    // //audio
    // if(Math.abs(backward - forward)) step.play()
    // else step.pause()
  })

  // initial location
  const x = (localStorage.getItem("x") || 35 );
  const y = (localStorage.getItem("y") || 100 );
  const z = (localStorage.getItem("z") || 150 );
  const log = (localStorage.getItem("log") || 0 ); // log=0 => first time


  return (
    <>
      <RigidBody ref={ref} mass={1} type="dynamic" position={[x,y,z]} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[3, 2]} /> 
      </RigidBody>

      <PointerLockControls ref={controlsRef}/>

  
    </>
  )
}
