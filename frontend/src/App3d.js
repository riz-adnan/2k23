import { Float, Html, KeyboardControls, Loader, PointerLockControls, Sparkles, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics, RigidBody } from "@react-three/rapier"
import { Player } from "./Player"
import { CuboidCollider } from "@react-three/rapier"

import { CRC } from "./CRC"
import { Floors } from "./Floors.jsx"
import { Hostel1 } from "./Hostel1"
import { Hostel23 } from "./Hostel23"
import { Hostel456 } from "./Hostel456"
import { Lab1 } from "./Lab1"
import { Lab2 } from "./Lab2"
import { Library } from "./Library"
import { MessHall } from "./MessHall"
import { OAT } from "./OAT"
import { Road } from "./Road"
import { Debug } from "@react-three/rapier"

import './3d.css'
import { BuildingHoardings } from "./BuildingHoardings"
import { BuildingHoardingText } from "./BuildingHoardingText"
import { Cultural_Technical_Text } from "./Cultural_Technical_Text"
import { EmitBodies } from "./EmitBodies"
import { EntranceGate } from "./EntranceGate"
import { EntranceSign } from "./EntranceSign"
import { EntryColliders } from "./EntryColliders"
import { Grass } from "./Grass"
import { Ground_Spotlights } from "./Ground_Spotlights"
import { LampPosts } from "./LampPosts"
import { Pavements } from "./Pavements"
import { Road_covering_walls } from "./Road_covering_walls"
import { SpotLights } from "./Spotlights"
import { SteelBars } from "./SteelBars"
import { Steps } from "./Steps"
import { StreetLights } from "./StreetLights"
import { Texts } from "./Texts"
import { TirutsavaLogos } from "./TirutsavaLogos"
import { Walls } from "./Walls"
import { WindowFrames } from "./WindowFrames"
import { useState } from "react"
// Controls: WASD + left click
export default function App3d() { 
  var vid = document.getElementById("vid");
  
  function playVid() { 
    console.log('play')
    vid.play(); 
  } 

  function intro() {
    var x = document.getElementById("intro");
      x.style.display = "none";
  }

  const [show, setshow] = useState(false)


  return ( 
    
  <div  style={{ width: "100vw", height: "100vh" }} onClick={() => intro()}>
    <div className="logo3d"> <img src="./tirutsavalogo.png" height="50px"/></div>
    <div className="map3d">  <img id="map" src = "./map2.png" height="150px"/> <br/>
    WASD (← → ↑ ↓) + Space
    </div>

    <div className="intro" id="intro"> 
    Welcome to Tirutsava. Click on the screen to Explore <br/>
    Use W A S D or ← → ↑ ↓ and space to move around
    </div>

    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
    
      <Canvas camera={{ fov: 45 , far:2800 }} className="canvas"> 
      

      <color attach="background" args={["black"]} />
      <Stars radius={300} factor={10} count={1000} speed={5}/>
     
  
     
     <ambientLight intensity={1} position={[0,20,0]} />

         
        <Physics gravity={[0,-30,0]}> 
        <RigidBody type="fixed" colliders="cuboid">
        <Lab1/> <Lab2/> <MessHall/>   <CRC/> <OAT/> <StreetLights/>  
        <LampPosts/>         <EntranceGate/>  
        </RigidBody>
        
         <EmitBodies/>  <BuildingHoardingText/> <BuildingHoardings/>  
          <Texts/> 
        <SteelBars/> <Cultural_Technical_Text/>
          <Ground_Spotlights/>
          <SpotLights/> 
          
          <Float  rotationIntensity={0}  floatIntensity={3} speed={5} > <EntryColliders/> </Float>
          <Sparkles position={[50,0,140]} scale={[200,50,50]} size={100} speed={5} color={'cyan'}/>
        

        <TirutsavaLogos/>
        <WindowFrames/> 
        <Grass/> <Pavements/> <EntranceSign/> 

        <RigidBody type="fixed" colliders="hull"><Steps/>
        <Hostel1/>  <Hostel456/>  <Library/> <Floors/> 
          </RigidBody> 
 
        <RigidBody type="fixed" colliders="trimesh">
        <Road/><Road_covering_walls/> <Walls/> <Hostel23/>
       
         </RigidBody> 

         <Player/> 
              <CuboidCollider type="fixed"
                  args={[30, 10, 35]} position={[80,2.5,0]}
                  sensor
                  onIntersectionEnter={() => setshow(true)}
                />
         </Physics>
         { show ? <Html className="html3d" occlude="blending" transform position={[118.3, 3.4, 6]} rotation={[0,-Math.PI / 2,0 ]} >
        
        <iframe width="1245" height="555" src="https://www.youtube.com/embed/XuByq_9iyDc?autoplay=1" title="YouTube video player" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen></iframe>

        </Html> : null }
        


      
       
      </Canvas>
      <Loader/>
    </KeyboardControls>
     </div>
  )
}
