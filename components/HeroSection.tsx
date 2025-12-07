'use client'

import { motion } from 'framer-motion'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { HiOutlineDocument } from 'react-icons/hi'
import SpotlightMask from './SpotlightMask'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <SpotlightMask />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10 flex flex-col min-h-screen">
        {/* Top-right status indicator */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 right-8 font-mono text-xs tracking-wider"
        >
          <div className="flex items-center gap-2 text-terminal-green">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-glow-pulse"></span>
            <span>STATUS: ACTIVE // UMASS_AMHERST</span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 flex-1 pb-32">
          {/* Terminal-style name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight">
              <span className="text-white">Arav Adikesh</span>
              <br />
              <span className="text-gray-400">Ramakrishnan</span>
            </h1>

            <div className="font-mono text-sm md:text-base text-gray-400 tracking-wide space-y-1">
              <p>&gt;&gt; MS Computer Science Student</p>
              <p>&gt;&gt; AI/ML Engineer</p>
              <p>&gt;&gt; Healthcare NLP Researcher</p>
            </div>
          </motion.div>

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl text-base md:text-lg text-gray-400 font-mono leading-relaxed"
          >
            Graduate student at UMass Amherst (May 2026) specializing in AI/ML and Natural Language Processing.
            Building LLM-powered agentic systems and innovative solutions at the intersection of healthcare and 
            artificial intelligence to make medical care more accessible across languages and cultures.
          </motion.p>

          {/* Social links - terminal style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex items-center gap-6"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 glass-terminal glass-terminal-hover rounded-xl"
              title="View Resume"
            >
              <HiOutlineDocument className="w-6 h-6 text-gray-400 group-hover:text-cyan-electric transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-void-100 text-xs font-mono text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Resume
              </span>
            </a>
            <a
              href="https://linkedin.com/in/aravadikesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 glass-terminal glass-terminal-hover rounded-xl"
              title="LinkedIn Profile"
            >
              <AiOutlineLinkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-electric transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-void-100 text-xs font-mono text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/aravadikesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 glass-terminal glass-terminal-hover rounded-xl"
              title="GitHub Profile"
            >
              <AiOutlineGithub className="w-6 h-6 text-gray-400 group-hover:text-cyan-electric transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-void-100 text-xs font-mono text-gray-300 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                GitHub
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-gray-500 tracking-wider">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full p-1"
          >
            <div className="w-1 h-2 bg-cyan-electric rounded-full mx-auto"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
