'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { HiDocumentText } from 'react-icons/hi'

interface Experience {
  title: string
  company: string
  period: string
  location: string
  bullets: string[]
  github?: string
  paper?: string
  link?: string
  status: 'ACTIVE' | 'ARCHIVED'
}

const researchExperiences: Experience[] = [
  {
    title: "LLM Researcher",
    company: "UMass BioNLP Lab",
    period: "[2025-01-01 :: PRESENT]",
    location: "Amherst, MA",
    github: "https://github.com/shahidul034/NoteAid-translation-EngToSpa",
    paper: "https://arxiv.org/pdf/2509.00934",
    status: 'ACTIVE',
    bullets: [
      "Developed MedCOD framework integrating UMLS and LLM-KB knowledge sources to enhance English-to-Spanish medical translation — improving translation quality by 80% (BLEU ↑ from 24.47 → 44.23) through structured prompting and LoRA fine-tuning.",
      "Published research in EMNLP 2025 Findings, contributing a novel approach to domain-specific translation addressing healthcare communication barriers for limited English proficiency populations.",
    ],
  },
  {
    title: "ML Engineer",
    company: "UMass RescueBox",
    period: "[2024-08-01 :: 2024-12-31]",
    location: "Amherst, MA",
    github: "https://github.com/UMass-Rescue/RescueBox",
    status: 'ARCHIVED',
    bullets: [
      "Contributed to RescueBox, an open-source digital forensics platform developed by UMass Rescue Lab for processing large-scale digital evidence.",
      "Engineered and deployed modular forensic analysis plugins, including deepfake detection and perceptual hash-based image similarity systems.",
      "Optimized inference and data pipelines by converting PyTorch models to ONNX, achieving 3× faster inference speeds.",
    ],
  },
]

const workExperiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "UMass Center for Data Science and AI",
    period: "[2025-09-01 :: PRESENT]",
    location: "Boston, MA",
    status: 'ACTIVE',
    bullets: [
      "Designed and deployed Model Context Protocol (MCP) servers to enable document generation (PDF, DOCX) directly through LLM chat interfaces, improving content workflow efficiency by ~40%.",
      "Implemented an MCP connector for Amazon Athena, enabling natural language querying of AWS-hosted databases through LLMs, cutting query formulation and debugging time by ~75%.",
    ],
  },
  {
    title: "Data Science Fellow",
    company: "UMass Center for Data Science and AI",
    period: "[2025-05-01 :: 2025-08-31]",
    location: "Boston, MA",
    github: "https://github.com/UMassCDS/mc-classifier-pipeline",
    link: "/media-cloud-poster.pdf",
    status: 'ARCHIVED',
    bullets: [
      "Led development of Media Cloud classifier pipeline, a fully automated, containerized BERT-based classifier processing 100K+ news articles from a 2B+ corpus with 96% accuracy.",
      "Implemented Optuna-based hyperparameter optimization and dashboard-driven evaluation, boosting reproducibility and deployment-ready ML workflows.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Prime Focus Technologies",
    period: "[2024-05-01 :: 2024-09-30]",
    location: "Los Angeles, CA",
    status: 'ARCHIVED',
    bullets: [
      "Developed a RAG-powered support chatbot using LangChain and FAISS vector database to handle 500+ daily queries, achieving 88% user satisfaction.",
      "Created an automated query classification system that reduced manual triage and saved $15K annually in support costs.",
      "Deployed end-to-end production-grade conversational AI systems with JavaScript frontend, Spring Boot microservices, Flask APIs on AWS Lambda, and Kubernetes, achieving <200ms response time and 99.5% uptime.",
    ],
  },
  {
    title: "Undergraduate Course Assistant",
    company: "UMass Amherst",
    period: "[2023-09-01 :: 2024-05-31]",
    location: "Amherst, MA",
    status: 'ARCHIVED',
    bullets: [
      "Conducted 5+ weekly office hours, assisting 50+ students with code troubleshooting and learning support.",
      "Graded 200+ assignments with precision, offering constructive feedback to support student growth.",
    ],
  },
]

const ExperienceLog = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="relative space-y-8">
      {/* Vertical thread line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-electric/50 via-cyan-electric/20 to-transparent" />

      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative pl-8"
        >
          {/* Status dot */}
          <div className="absolute left-0 top-2 -translate-x-1/2">
            {exp.status === 'ACTIVE' ? (
              <div className="w-3 h-3 rounded-full bg-terminal-green shadow-lg shadow-terminal-green/50 animate-glow-pulse" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-gray-600" />
            )}
          </div>

          {/* Content card */}
          <div className="glass-terminal glass-terminal-hover p-6 rounded-xl noise-overlay">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                    exp.status === 'ACTIVE'
                      ? 'bg-terminal-green/20 text-terminal-green'
                      : 'bg-gray-700/50 text-gray-500'
                  }`}>
                    {exp.status}
                  </span>
                  <span className="font-mono text-xs text-gray-500">{exp.period}</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <p className="font-mono text-sm text-cyan-electric">
                  {exp.company}
                </p>
                <p className="font-mono text-xs text-gray-500">
                  {exp.location}
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-terminal glass-terminal-hover rounded-lg text-gray-400 hover:text-cyan-electric transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                )}
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-terminal glass-terminal-hover rounded-lg text-gray-400 hover:text-cyan-electric transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                )}
                {exp.paper && (
                  <a
                    href={exp.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass-terminal glass-terminal-hover rounded-lg text-gray-400 hover:text-cyan-electric transition-colors"
                  >
                    <HiDocumentText className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <ul className="space-y-2 font-mono text-sm text-gray-300">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex gap-2">
                  <span className="text-cyan-electric flex-shrink-0">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const TimelineSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sans font-bold mb-4"
        >
          <span className="text-gray-500">&gt;&gt; </span>
          <span className="text-white">EXECUTION LOG</span>
        </motion.h2>
        <p className="font-mono text-sm text-gray-500 mb-12">// Work Experience</p>
        <ExperienceLog experiences={workExperiences} />

        <p className="font-mono text-sm text-gray-500 mb-12 mt-20">// Research Experience</p>
        <ExperienceLog experiences={researchExperiences} />
      </div>
    </section>
  )
}

export default TimelineSection
