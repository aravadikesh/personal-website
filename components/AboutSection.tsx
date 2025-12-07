'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  SiPython, SiTypescript, SiJavascript, SiMysql, SiPostgresql,
  SiAmazonaws, SiKubernetes, SiGit, SiDocker, SiSpringboot,
  SiFlask, SiExpress, SiReact, SiNodedotjs, SiApachespark,
  SiOpenjdk, SiPytorch, SiJira
} from 'react-icons/si'
import { HiLink } from 'react-icons/hi'

const skills = [
  { name: "Python", Icon: SiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Java", Icon: SiOpenjdk },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "Flask", Icon: SiFlask },
  { name: "Express", Icon: SiExpress },
  { name: "LangGraph", Icon: HiLink },
  { name: "AWS", Icon: SiAmazonaws },
  { name: "Git", Icon: SiGit },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Apache Spark", Icon: SiApachespark },
  { name: "MySQL", Icon: SiMysql },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Jira", Icon: SiJira },
]

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sans font-bold mb-16 text-center"
        >
          <span className="text-gray-500">&gt;&gt; </span>
          <span className="text-white">SYSTEM SPECS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Kernel (Bio) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-terminal glass-terminal-hover p-8 rounded-2xl noise-overlay"
          >
            <h3 className="text-cyan-electric font-mono text-lg mb-6 flex items-center gap-2">
              <span className="text-terminal-green">●</span> KERNEL
            </h3>
            <div className="space-y-4 font-mono text-sm text-gray-300 leading-relaxed">
              <p>
                <span className="text-gray-500">arav@umass:~$</span> Bay State Scholar, AI/ML Engineer, and Healthcare NLP Researcher based in Amherst, MA.
              </p>
              <p>
                Currently pursuing Master&apos;s in Computer Science at UMass Amherst with <span className="text-cyan-electric">4.0 GPA</span>, specializing in Data Science and Natural Language Processing.
              </p>
              <p>
                Research interests lie at the intersection of <span className="text-cyan-electric">agentic AI</span>, NLP, and healthcare — building LLM-powered multi-agent systems that make healthcare more accessible across languages and cultures.
              </p>
              <p>
                Passionate about leveraging <span className="text-cyan-electric">LangGraph, RAG, and agentic workflows</span> to solve real-world challenges with production-ready, scalable AI solutions.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Modules (Skills) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-terminal glass-terminal-hover p-8 rounded-2xl noise-overlay"
          >
            <h3 className="text-cyan-electric font-mono text-lg mb-6 flex items-center gap-2">
              <span className="text-terminal-green">●</span> LOADED MODULES
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
              {skills.map((skill, idx) => {
                const Icon = skill.Icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.02 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-electric transition-colors group"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
