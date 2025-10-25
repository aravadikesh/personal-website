import React from 'react';
import { FaCode, FaFlask, FaRocket } from 'react-icons/fa';

interface WorkItem {
  text: string;
  icon: React.ElementType;
  color: string;
}

const currentWork: WorkItem[] = [
  {
    text: "Building Model Context Protocol servers for GenAI platform at UMass Center for Data Science",
    icon: FaRocket,
    color: "text-blue-500"
  },
  {
    text: "Developing perceptual hash-based image similarity detection for open-source RescueBox forensics platform",
    icon: FaCode,
    color: "text-teal-500"
  },
  {
    text: "Researching LLM-powered medical translation at UMass BioNLP Lab",
    icon: FaFlask,
    color: "text-purple-500"
  }
];

const CurrentWorkTicker: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 py-3 overflow-hidden shadow-lg">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Duplicate the items to create seamless loop */}
        {[...currentWork, ...currentWork, ...currentWork].map((work, idx) => {
          const Icon = work.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center mx-8 text-white font-medium"
            >
              <Icon className={`${work.color} mr-2 flex-shrink-0`} />
              <span className="text-sm md:text-base">{work.text}</span>
              <span className="mx-4 text-white/50">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWorkTicker;
