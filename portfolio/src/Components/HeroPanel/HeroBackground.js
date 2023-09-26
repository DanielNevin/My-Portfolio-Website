import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

// Importing Sprite Texture
import roundSpriteTexture from '../../Resources/roundSpriteImageAlpha.png'

export default function HeroBackground() {

  // Render the scene using the desired camera position and background hex-color
  return (
    <Canvas id='canvas' camera={{ position: [0, 0, 1] }} style={{ background: "#083344" }}>     
      <Stars />
    </Canvas>
  )
}

function Stars(props) {
  const ref = useRef()
  // Generates an array of 5001 random points within a bounding sphere
  const [points] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1 }))       
  // Defines the desired rotation of the sphere over the X and Y axes to create an "orbiting" effect
  useFrame((state, delta) => {                                                                  
    ref.current.rotation.x += delta / 20
    ref.current.rotation.y += delta / 20
  })

  const textureLoader = new THREE.TextureLoader();
  // Loads a white circle as the sprite texture to render at the point co-ordinates
  const spriteTexture = textureLoader.load(roundSpriteTexture);                                 

  // Renders the scene using a given rotation, hex-color for the sprites, sprite size, and the option for size attenuation to apply a 3D effect
  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#16b6b6" size={0.005} sizeAttenuation={true} depthWrite={false} map={spriteTexture} />
      </Points>
    </group>
  )
}
