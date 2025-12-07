'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineDocument } from 'react-icons/hi'

interface DockItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  href?: string
  scrollTo?: string
}

const dockItems: DockItem[] = [
  { id: 'home', icon: AiOutlineHome, label: 'Home', scrollTo: 'home' },
  { id: 'about', icon: AiOutlineUser, label: 'About', scrollTo: 'about' },
  { id: 'education', icon: HiOutlineAcademicCap, label: 'Education', scrollTo: 'education' },
  { id: 'experience', icon: HiOutlineBriefcase, label: 'Work Experience', scrollTo: 'experience' },
  { id: 'projects', icon: AiOutlineFundProjectionScreen, label: 'Projects', scrollTo: 'projects' },
  { id: 'resume', icon: HiOutlineDocument, label: 'Resume', href: '/resume.pdf' },
]

interface DockIconProps {
  item: DockItem
  mouseX: any
}

const DockIcon = ({ item, mouseX }: DockIconProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const Icon = item.icon

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [50, 70, 50])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 12 })

  const handleClick = () => {
    if (item.scrollTo) {
      document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
    } else if (item.href) {
      window.open(item.href, '_blank')
    }
  }

  return (
    <motion.button
      ref={ref}
      style={{ width }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="aspect-square rounded-2xl glass-terminal glass-terminal-hover flex items-center justify-center group relative"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      title={item.label}
    >
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-electric transition-colors" />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 4
        }}
        transition={{ duration: 0.2 }}
        className="absolute -top-14 px-3 py-1.5 bg-void-100 rounded-lg text-xs font-mono text-gray-300 whitespace-nowrap border border-void-50/20 pointer-events-none"
      >
        {item.label}
      </motion.div>
    </motion.button>
  )
}

export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity)

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-[90vw] pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 glass-terminal rounded-3xl pointer-events-auto"
      >
        {dockItems.map((item) => (
          <DockIcon key={item.id} item={item} mouseX={mouseX} />
        ))}
      </motion.div>
    </div>
  )
}
