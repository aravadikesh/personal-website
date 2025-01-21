import React from "react";
import SlideUp from "./SlideUp";
import { FaGithub } from "react-icons/fa";

const experiences = [
  {
    title: "Independent Researcher",
    company: "UMass Rescue Lab",
    period: "Aug - Dec '24",
    location: "Amherst, MA",
    github: "https://github.com/aravadikesh/DeepFakeDetector",
    bullets: [
      "Architected production-grade deepfake detection system using PyTorch with parallel CNN ensembles, achieving 96% accuracy",
      "Engineered containerized MLOps pipeline with Flask RESTful APIs, reducing model deployment time by 65%",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Prime Focus Technologies",
    period: "May - Sep '24",
    location: "Los Angeles, CA",
    bullets: [
      "Led development of production-ready conversational GenAI-driven image generation system with enterprise integration",
      "Engineered distributed architecture with JavaScript frontend, SpringBoot microservices on Kubernetes, and Flask/Python APIs achieving 100ms response times",
      "Reduced image generation time by 40% and infrastructure costs by 35% through optimized processing",
      "Designed scalable RAG chatbot using LangChain and FAISS vector store achieving 92% customer satisfaction",
    ],
  },
  {
    title: "Undergraduate Course Assistant",
    company: "UMass Amherst",
    period: "Sep '23 - May '24",
    location: "Amherst, MA",
    bullets: [
      "Conducted 5+ weekly office hours, assisting 50+ students with code troubleshooting and learning support",
      "Graded 200+ assignments with precision, offering constructive feedback to support student growth",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Work Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="relative flex flex-col">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500"></div>

        {experiences.map((experience, idx) => {
          return (
            <div key={idx} className="mb-16 w-full">
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex justify-between items-center w-full animate-slideUpCubiBezier animation-delay-1">
                  {/* Time and Location */}
                  <div className="w-5/12 text-right pr-8">
                    <div>
                      <h3 className="text-xl font-bold text-teal-500">
                        {experience.period}
                      </h3>
                      <p className="text-lg text-gray-500 dark:text-gray-300">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-teal-500 rounded-full mt-8"></div>
                  </div>

                  {/* Main Content Box */}
                  <div className="w-5/12 pl-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {experience.title}
                          </h3>
                          <h4 className="text-xl text-teal-600">
                            {experience.company}
                          </h4>
                        </div>
                        {experience.github && (
                          <a
                            href={experience.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-500 transition-colors"
                          >
                            <FaGithub className="text-2xl" />
                          </a>
                        )}
                      </div>
                      <ul className="list-disc ml-6 space-y-2 text-gray-800 dark:text-gray-200">
                        {experience.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="text-lg pl-2">
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
    </section>
  );
};

export default TimelineSection;
