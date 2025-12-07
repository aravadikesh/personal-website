'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'

const projects = [
  {
    name: "Agentic Disambiguation for Ambiguous Question Answering",
    description:
      "Research project investigating agentic RAG (Retrieval-Augmented Generation) for handling ambiguous open-domain questions. Implements LangGraph-based multi-agent system with HyDE (Hypothetical Document Embeddings), sub-query decomposition, and structured multi-interpretation synthesis. Achieved 8.6% F1 improvement over vanilla RAG on AmbigNQ dataset using hybrid retrieval (BM25 + FAISS).",
    image: "/agentic-disambiguation-paper.pdf",
    github: "https://github.com/aravadikesh/agentic-disambiguation",
    paper: "/agentic-disambiguation-paper.pdf",
    techStack: ["Python", "LangGraph", "RAG", "LLMs", "FAISS", "PySerini", "OpenAI"]
  },
  {
    name: "Web Agent Security Research",
    description:
      "Research project investigating security vulnerabilities and attack vectors in LLM-powered web agents. Analyzes potential risks and proposes mitigation strategies for autonomous agents interacting with web environments.",
    image: "/web-agent-security-poster.pdf",
    link: "/web-agent-security-poster.pdf",
    techStack: ["LLMs", "Security", "Web Agents", "Research"]
  },
  {
    name: "YOLO Knowledge Distillation",
    description:
      "An optimized knowledge distillation framework for YOLOv8 using PyTorch. Trained and evaluated across CIFAR-10, Tiny-ImageNet, and Oxford Pets datasets.",
    image: "/yolo-kd-screenshot.png",
    github: "https://github.com/aravadikesh/yolo-knowledge-distillation",
    link: "/yolo-kd.pdf",
    techStack: ["PyTorch", "Python", "Deep Learning"]
  },
  {
    name: "UMass Outing Club Gear Locker",
    description:
      "Scalable REST API using Express.js/TypeScript with Firebase Real-time Database, handling 100+ daily transactions. Led a team of 3 developers implementing Agile methodologies.",
    image: "/UMOC.png",
    github: "https://github.com/aravadikesh/320-Team-3-BackEnd",
    techStack: ["TypeScript", "Express.js", "Firebase"]
  },
  {
    name: "Run!",
    description:
      "Educational game in C# and Unity inspired by Dead by Daylight. Players solve mental math puzzles to evade ghost pursuers. Implemented A* pathfinding with Unity's NavMesh for adaptive AI.",
    image: "/RUN.png",
    github: "https://github.com/aravadikesh/Run-576-Final-Project",
    link: "https://drive.google.com/file/d/1-wtCPUnHettZnXPk6RDZo6IAnuqrdEGl/view",
    techStack: ["C#", "Unity", "Game Development"]
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sans font-bold mb-16 text-center"
        >
          <span className="text-gray-500">&gt;&gt; </span>
          <span className="text-white">PROJECT ARCHIVE</span>
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="glass-terminal rounded-2xl overflow-hidden noise-overlay border-2 border-void-50/10 hover:border-cyan-electric/50 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                    {project.image.endsWith('.pdf') ? (
                      <div className="w-full h-full relative bg-white">
                        <iframe
                          src={`${project.image}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                          className="w-full h-full border-0 absolute inset-0"
                          title={`${project.name} Preview`}
                          style={{ minHeight: '100%' }}
                        />
                        {/* Overlay to prevent interaction and add hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/5 via-transparent to-transparent pointer-events-none group-hover:from-cyan-electric/10 transition-all duration-500" />
                      </div>
                    ) : (
                      <>
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Holographic overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-sans font-bold text-white mb-3">
                        {project.name}
                      </h3>
                      <p className="font-mono text-sm text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Dependencies */}
                      <div className="mb-6">
                        <p className="font-mono text-xs text-gray-500 mb-2">// Dependencies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 text-xs font-mono bg-void-100/50 border border-void-50/20 text-gray-400 rounded-md hover:border-cyan-electric/30 hover:text-cyan-electric transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 flex-wrap">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 glass-terminal glass-terminal-hover rounded-lg font-mono text-xs text-gray-400 hover:text-cyan-electric transition-colors"
                        >
                          <BsGithub className="w-4 h-4" />
                          <span>SOURCE</span>
                        </Link>
                      )}
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 bg-cyan-electric/10 border border-cyan-electric/30 hover:bg-cyan-electric/20 rounded-lg font-mono text-xs text-cyan-electric transition-colors"
                        >
                          <BsArrowUpRightSquare className="w-4 h-4" />
                          <span>POSTER</span>
                        </Link>
                      )}
                      {project.paper && (
                        <Link
                          href={project.paper}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 glass-terminal glass-terminal-hover rounded-lg font-mono text-xs text-gray-400 hover:text-cyan-electric transition-colors"
                        >
                          <HiDocumentText className="w-4 h-4" />
                          <span>PAPER</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
