'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-sans font-bold mb-4"
        >
          <span className="text-gray-500">&gt;&gt; </span>
          <span className="text-white">EDUCATION RECORDS</span>
        </motion.h2>

        <div className="flex items-center gap-3 mb-12">
          <a
            href="/Transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-cyan-electric hover:text-cyan-electric/80 transition-colors underline underline-offset-4"
          >
            // View Official Transcript
          </a>
        </div>

        <div className="space-y-8">
          {/* Graduate */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-terminal glass-terminal-hover p-8 rounded-2xl noise-overlay relative"
          >
            <div className="absolute top-4 right-4">
              <span className="font-mono text-xs px-2 py-1 bg-terminal-green/20 text-terminal-green rounded">
                IN PROGRESS
              </span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-white mb-2">
              Master of Science in Computer Science
            </h3>
            <p className="font-mono text-sm text-cyan-electric mb-1">
              University of Massachusetts Amherst
            </p>
            <p className="font-mono text-xs text-gray-500 mb-4">
              Expected: May 2026 | GPA: 4.0
            </p>

            <div className="space-y-3 font-mono text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">// Concentration:</p>
                <p className="text-gray-300">Data Science</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs mb-2">// Achievements:</p>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-electric">→</span>
                    Graduate Bay State Scholarship
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-electric">→</span>
                    Data Science for the Common Good Fellow (Summer 2025)
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 text-xs mb-2">// Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Reinforcement Learning",
                    "Trustworthy & Responsible AI",
                    "Advanced NLP",
                    "Algorithms for Data Science",
                    "Advanced Information Retrieval",
                    "Statistics for Data Science",
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-void-100/50 border border-void-50/20 text-gray-400 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Undergraduate */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-terminal glass-terminal-hover p-8 rounded-2xl noise-overlay relative"
          >
            <div className="absolute top-4 right-4">
              <span className="font-mono text-xs px-2 py-1 bg-gray-700/50 text-gray-500 rounded">
                COMPLETED
              </span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-white mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="font-mono text-sm text-cyan-electric mb-1">
              University of Massachusetts Amherst
            </p>
            <p className="font-mono text-xs text-gray-500 mb-4">
              Graduated: May 2024 | GPA: 3.93
            </p>

            <div className="space-y-3 font-mono text-sm">
              <div>
                <p className="text-gray-500 text-xs mb-1">// Minor:</p>
                <p className="text-gray-300">Economics</p>
              </div>

              <div>
                <p className="text-gray-500 text-xs mb-2">// Achievements:</p>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex gap-2">
                    <span className="text-cyan-electric">→</span>
                    Chancellor&apos;s Scholarship
                  </li>
                  <li className="flex gap-2">
                    <span className="text-cyan-electric">→</span>
                    Dean&apos;s List (All Semesters)
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-500 text-xs mb-2">// Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Engineering",
                    "Data Structures & Algorithms",
                    "Advanced Algorithms",
                    "Operating Systems",
                    "Database Management",
                  ].map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-void-100/50 border border-void-50/20 text-gray-400 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
