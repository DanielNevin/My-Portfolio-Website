import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

// Importing Sprite Texture
import roundSpriteTexture from '../../Resources/roundSpriteImageAlpha.png'

export default function HeroBackground() {
  return (
    <Canvas id='canvas' camera={{ position: [0, 0, 1] }} style={{ background: "#18181b" }}>
      <Stars />
    </Canvas>
  )
}

function Stars(props) {
  const ref = useRef()
  const [points] = useState(() => random.inSphere(new Float32Array(2001), { radius: 1.2 }))
  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20
    ref.current.rotation.y += delta / 20
  })

  const textureLoader = new THREE.TextureLoader();
  const spriteTexture = textureLoader.load(roundSpriteTexture);

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#fde68a" size={0.007} sizeAttenuation={true} depthWrite={false} map={spriteTexture} />
      </Points>
    </group>
  )
}
