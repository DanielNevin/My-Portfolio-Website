import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

// Importing Sprite Texture
import roundSpriteTexture from '../../Resources/roundSpriteImageAlpha.png'

export default function HeroBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} style={{ background: "Black" }}>
      <Stars />
    </Canvas>
  )
}

function Stars(props) {
  const ref = useRef()
  const [points] = useState(() => random.inSphere(new Float32Array(10002), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20
    ref.current.rotation.y += delta / 20
  })

  const textureLoader = new THREE.TextureLoader();
  const spriteTexture = textureLoader.load(roundSpriteTexture);

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={points} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffd5b5" size={0.004} sizeAttenuation={true} depthWrite={false} map={spriteTexture} />
      </Points>
    </group>
  )
}
