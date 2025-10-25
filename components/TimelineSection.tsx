import React from "react";
import SlideUp from "./SlideUp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  github?: string;
  paper?: string;
  link?: string;
}

const researchExperiences: Experience[] = [
  {
    title: "LLM Researcher",
    company: "UMass BioNLP Lab",
    period: "Jan '25 - Present",
    location: "Amherst, MA",
    github: "https://github.com/shahidul034/NoteAid-translation-EngToSpa",
    paper: "https://arxiv.org/pdf/2509.00934",
    bullets: [
      "Developed MedCOD framework integrating UMLS and LLM-KB knowledge sources to enhance English-to-Spanish medical translation — improving translation quality by 80% (BLEU ↑ from 24.47 → 44.23) through structured prompting and LoRA fine-tuning.",
      "Published research in EMNLP 2025 Findings, contributing a novel approach to domain-specific translation addressing healthcare communication barriers for limited English proficiency populations.",
    ],
  },
  {
    title: "ML Engineer",
    company: "UMass RescueBox",
    period: "Aug - Dec '24",
    location: "Amherst, MA",
    github: "https://github.com/UMass-Rescue/RescueBox",
    bullets: [
      "Contributed to RescueBox, an open-source digital forensics platform developed by UMass Rescue Lab for processing large-scale digital evidence. The system enables forensic professionals and rescue operations to rapidly analyze thousands of images and audio files using ML-powered automation — critical for time-sensitive investigations.",
      "Engineered and deployed modular forensic analysis plugins, including deepfake detection and perceptual hash-based image similarity systems. Built RESTful APIs, PostgreSQL + pgvector-backed vector search, and auto-generated UIs, reducing manual forensic analysis time by ~70% and improving cross-platform accessibility.",
      "Optimized inference and data pipelines by converting PyTorch models to ONNX and integrating ONNX Runtime for real-time performance, achieving 3× faster inference speeds and enabling large-scale duplicate image detection (10K+ images) through high-throughput perceptual hashing algorithms (pHash, dHash, PDQ, etc.).",
    ],
  },
];

const workExperiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "UMass Center for Data Science and AI",
    period: "Sep '25 - Present",
    location: "Boston, MA",
    bullets: [
      "Designed and deployed Model Context Protocol (MCP) servers to enable document generation (PDF, DOCX) directly through LLM chat interfaces, improving content workflow efficiency by ~40%.",
      "Implemented an MCP connector for Amazon Athena, enabling natural language querying of AWS-hosted databases through LLMs, cutting query formulation and debugging time by ~75%, empowering non-technical users to perform structured data seamlessly.",
    ],
  },
  {
    title: "Data Science Fellow",
    company: "UMass Center for Data Science and AI",
    period: "May - Aug '25",
    location: "Boston, MA",
    github: "https://github.com/UMassCDS/mc-classifier-pipeline",
    bullets: [
      "Led development of Media Cloud classifier pipeline, a fully automated, containerized BERT-based classifier processing 100K+ news articles from a 2B+ corpus with 96% accuracy, automating ingestion, labeling, and model training.",
      "Implemented Optuna-based hyperparameter optimization and dashboard-driven evaluation, boosting reproducibility and deployment-ready ML workflows.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Prime Focus Technologies",
    period: "May - Sep '24",
    location: "Los Angeles, CA",
    bullets: [
      "Developed a RAG-powered support chatbot using LangChain and FAISS vector database to handle 500+ daily queries, achieving customer satisfaction improved by 30% and achieving 88% user satisfaction.",
      "Created an automated query classification system that reduced manual triage and saved $15K annually in support costs.",
      "Deployed end-to-end production-grade conversational AI systems with JavaScript frontend, Spring Boot microservices, Flask APIs on AWS Lambda, and Kubernetes, achieving <200ms response time and 99.5% uptime.",
    ],
  },
  {
    title: "Undergraduate Course Assistant",
    company: "UMass Amherst",
    period: "Sep '23 - May '24",
    location: "Amherst, MA",
    bullets: [
      "Conducted 5+ weekly office hours, assisting 50+ students with code troubleshooting and learning support.",
      "Graded 200+ assignments with precision, offering constructive feedback to support student growth.",
    ],
  },
];

const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="relative flex flex-col">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 to-cyan-400"></div>

      {experiences.map((experience, idx) => {
        return (
          <div
            key={idx}
            className="mb-16 w-full"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex justify-between items-center w-full animate-slideUpCubiBezier">
                {/* Time and Location */}
                <div className="w-5/12 text-right pr-8">
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                      {experience.period}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {experience.location}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full mt-8 ring-4 ring-white dark:ring-stone-900 shadow-lg"></div>
                  </div>
                </div>

                {/* Main Content Box */}
                <div className="w-5/12 pl-8">
                  <div className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl p-6 border border-teal-100 dark:border-teal-900 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                          {experience.title}
                        </h3>
                        <h4 className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
                          {experience.company}
                        </h4>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {experience.link && (
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all hover:scale-110"
                            aria-label="External Link"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                          </a>
                        )}
                        {experience.github && (
                          <a
                            href={experience.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all hover:scale-110"
                            aria-label="GitHub Repository"
                          >
                            <FaGithub className="text-2xl" />
                          </a>
                        )}
                        {experience.paper && (
                          <a
                            href={experience.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400 transition-all hover:scale-110"
                            aria-label="Research Paper"
                          >
                            <HiDocumentText className="text-2xl" />
                          </a>
                        )}
                      </div>
                    </div>
                    <ul className="list-disc ml-6 space-y-3 text-gray-700 dark:text-gray-200">
                      {experience.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-base pl-2 leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        );
      })}
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section id="experience">
      {/* Work Experience Section */}
      <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
        Work Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
      </h1>
      <ExperienceTimeline experiences={workExperiences} />

      {/* Research Experience Section */}
      <h1 className="my-10 mt-24 text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
        Research Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
      </h1>
      <ExperienceTimeline experiences={researchExperiences} />
    </section>
  );
};

export default TimelineSection;
