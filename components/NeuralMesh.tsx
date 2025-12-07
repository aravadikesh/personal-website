'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { createNoise3D } from 'simplex-noise'

interface NodeData {
  position: THREE.Vector3
  velocity: THREE.Vector3
  basePosition: THREE.Vector3
}

const NeuralNetwork = () => {
  const meshRef = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })
  const noise3D = useMemo(() => createNoise3D(), [])

  // Generate neural network nodes
  const { nodes, edges } = useMemo(() => {
    const nodeCount = 50
    const nodes: NodeData[] = []
    const edges: [number, number][] = []

    // Create nodes in 3D space
    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 15
      const z = (Math.random() - 0.5) * 10
      const position = new THREE.Vector3(x, y, z)

      nodes.push({
        position: position.clone(),
        velocity: new THREE.Vector3(),
        basePosition: position.clone(),
      })
    }

    // Create edges between nearby nodes
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)
        if (distance < 5 && Math.random() > 0.7) {
          edges.push([i, j])
        }
      }
    }

    return { nodes, edges }
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    const time = clock.getElapsedTime()

    // Update node positions with mouse repulsion
    nodes.forEach((node) => {
      // Ambient float with noise
      const noiseX = noise3D(node.basePosition.x * 0.1, time * 0.1, 0) * 0.5
      const noiseY = noise3D(node.basePosition.y * 0.1, time * 0.1, 100) * 0.5
      const noiseZ = noise3D(node.basePosition.z * 0.1, time * 0.1, 200) * 0.3

      // Mouse repulsion force
      const mousePos = new THREE.Vector3(
        mouse.current.x * 10,
        mouse.current.y * 8,
        0
      )
      const repulsion = new THREE.Vector3().subVectors(node.position, mousePos)
      const distance = repulsion.length()

      if (distance < 8) {
        repulsion.normalize().multiplyScalar((8 - distance) * 0.5)
        node.velocity.add(repulsion)
      }

      // Apply forces
      node.velocity.multiplyScalar(0.85) // Damping
      node.position.copy(node.basePosition)
      node.position.add(node.velocity)
      node.position.x += noiseX
      node.position.y += noiseY
      node.position.z += noiseZ
    })

    meshRef.current.rotation.y = time * 0.05
  })

  return (
    <group ref={meshRef}>
      {/* Render nodes */}
      {nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial
            color="#00f0ff"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Render edges */}
      {edges.map(([from, to], i) => {
        const start = nodes[from].position
        const end = nodes[to].position
        const distance = start.distanceTo(end)

        const positions = new Float32Array([
          start.x, start.y, start.z,
          end.x, end.y, end.z,
        ])
        
        return (
          <line key={`edge-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color="#00f0ff"
              transparent
              opacity={Math.max(0.1, 1 - distance / 5)}
            />
          </line>
        )
      })}
    </group>
  )
}

export default function NeuralMesh() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <NeuralNetwork />
      </Canvas>
    </div>
  )
}
