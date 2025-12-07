import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="border-t border-void-50/20 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-xs text-gray-500 text-center md:text-left">
          <span>© 2025 Arav Adikesh Ramakrishnan</span>
          <span className="mx-2 text-gray-700">|</span>
          <span>Built with Next.js & R3F</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:aravadikesh@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="p-2 glass-terminal glass-terminal-hover rounded-lg text-gray-400 hover:text-cyan-electric transition-colors"
            aria-label="Email"
          >
            <AiOutlineMail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/aravadikesh"
            rel="noreferrer"
            target="_blank"
            className="p-2 glass-terminal glass-terminal-hover rounded-lg text-gray-400 hover:text-cyan-electric transition-colors"
            aria-label="GitHub"
          >
            <AiOutlineGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/aravadikesh/"
            rel="noreferrer"
            target="_blank"
            className="p-2 glass-terminal glass-terminal-hover rounded-lg text-gray-400 hover:text-cyan-electric transition-colors"
            aria-label="LinkedIn"
          >
            <AiOutlineLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
