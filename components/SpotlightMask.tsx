'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

export default function SpotlightMask() {
  const [mounted, setMounted] = useState(false)

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  // Create the transform before any conditional returns
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(0, 240, 255, 0.06), transparent 80%)`
  )

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{ background }}
    />
  )
}
