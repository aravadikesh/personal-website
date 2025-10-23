import React from "react";
import SlideUp from "./SlideUp";
import { FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  github?: string;
  paper?: string;
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
    company: "DeepFakeDetector Project",
    period: "Aug - Dec '24",
    location: "Amherst, MA",
    github: "https://github.com/UMass-Rescue/RescueBox/tree/main/src/deepfake-detection",
    bullets: [
      "Built a production-ready deepfake detection system for digital forensics. Converted multiple PyTorch models (BNext, Transformer, ResNet50) to ONNX, integrated into RescueBox plugin architecture with RESTful APIs and auto-generated UI.",
      "Optimized inference using ONNX Runtime for real-time image classification (Real/Fake with confidence scores).",
      "Based on CVPR 2024 research, enabling forensic investigators to analyze images via web and desktop interfaces.",
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
      "Architected Model Context Protocol (MCP) server supporting PDF, CSV, and DOCX generation with seamless GenAI platform UI integration, enabling users to create and export ideas in multiple formats directly through the chat interface.",
    ],
  },
  {
    title: "Data Science Fellow",
    company: "UMass Center for Data Science and AI",
    period: "May - Aug '25",
    location: "Boston, MA",
    bullets: [
      "Led development of Media Cloud classifier pipeline by architecting end-to-end dockerized system with automated article retrieval, annotation, and classification — reducing manual researcher effort by 90% while processing 100,000+ articles from a 2-billion-article database at 96% accuracy.",
      "Built production-ready ML classification suite with containerized BERT and Naive Bayes models, Optuna hyperparameter optimization, and automated evaluation frameworks.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Prime Focus Technologies",
    period: "May - Sep '24",
    location: "Los Angeles, CA",
    bullets: [
      "Built RAG-powered customer support chatbot using LangChain and FAISS vector database architecture, achieving 88% customer satisfaction, 30% faster ticket resolution, and handling 500+ daily queries.",
      "Reduced operational costs by developing an automated query resolution system that deflects routine support tickets while maintaining high accuracy on technical questions — saving an estimated $15K annually.",
      "Engineered production-grade conversational AI system with JavaScript frontend, SpringBoot microservices, Flask APIs on AWS Lambda, and Kubernetes — achieving <200ms response time and 99.5% uptime.",
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
          <div key={idx} className="mb-16 w-full">
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex justify-between items-center w-full animate-slideUpCubiBezier animation-delay-1">
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
    <section id="experience" className="bg-gradient-to-b from-gray-50 to-white dark:from-stone-800 dark:to-stone-900">
      {/* Research Experience Section */}
      <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
        Research Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
      </h1>
      <ExperienceTimeline experiences={researchExperiences} />

      {/* Work Experience Section */}
      <h1 className="my-10 mt-24 text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
        Work Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
      </h1>
      <ExperienceTimeline experiences={workExperiences} />
    </section>
  );
};

export default TimelineSection;
