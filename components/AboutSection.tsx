import React from 'react';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiAmazonaws,
  SiKubernetes,
  SiGit,
  SiDocker,
  SiSpringboot,
  SiFlask,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiApachespark,
  SiOpenjdk,
  SiPytorch,
  SiJira
} from 'react-icons/si';
import { HiLink } from 'react-icons/hi';

interface SkillItem {
  name: string;
  Icon: React.ElementType;
  color: string;
}

// Skills organized by category: Languages, Frameworks & Libraries, Tools & Platforms
const skills: SkillItem[] = [
  // Languages
  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB"
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6"
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "#F7DF1E"
  },
  {
    name: "Java",
    Icon: SiOpenjdk,
    color: "#ED8B00"
  },

  // Frameworks & Libraries
  {
    name: "PyTorch",
    Icon: SiPytorch,
    color: "#EE4C2C"
  },
  {
    name: "React",
    Icon: SiReact,
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    color: "#339933"
  },
  {
    name: "Spring Boot",
    Icon: SiSpringboot,
    color: "#6DB33F"
  },
  {
    name: "Flask",
    Icon: SiFlask,
    color: "#000000"
  },
  {
    name: "Express",
    Icon: SiExpress,
    color: "#000000"
  },
  {
    name: "LangGraph",
    Icon: HiLink,
    color: "#10B981"
  },

  // Tools & Platforms
  {
    name: "AWS",
    Icon: SiAmazonaws,
    color: "#FF9900"
  },
  {
    name: "Git",
    Icon: SiGit,
    color: "#F05032"
  },
  {
    name: "Docker",
    Icon: SiDocker,
    color: "#2496ED"
  },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
    color: "#326CE5"
  },
  {
    name: "Apache Spark",
    Icon: SiApachespark,
    color: "#E25A1C"
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "#4479A1"
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#316192"
  },
  {
    name: "Jira",
    Icon: SiJira,
    color: "#0052CC"
  }
];

interface SkillIconProps {
  name: string;
  Icon: React.ElementType;
  color: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, Icon, color }) => {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className="p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 dark:hover:from-teal-900/20 dark:hover:to-cyan-900/20 cursor-pointer border border-transparent hover:border-teal-200 dark:hover:border-teal-700 hover:shadow-lg hover:shadow-teal-500/20"
        role="button"
        tabIndex={0}
        aria-label={`${name} skill`}
      >
        <Icon
          className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6"
          style={{ color: color }}
          aria-hidden="true"
        />
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {name}
      </span>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 dark:from-stone-900 dark:to-stone-800">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Get to know me!
            </h1>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Hi, my name is Arav and I am a{" "}
                <span className="font-bold text-teal-600 dark:text-teal-400">Bay State Scholar</span>,{" "}
                <span className="font-bold text-teal-600 dark:text-teal-400">AI/ML Engineer</span>, and{" "}
                <span className="font-bold text-teal-600 dark:text-teal-400">Healthcare NLP Researcher</span>{" "}
                based in Amherst, MA.
              </p>

              <p>
                I am currently pursuing my Master&apos;s in Computer Science at the University
                of Massachusetts Amherst with a <span className="font-semibold">4.0 GPA</span>,
                specializing in Data Science and Natural Language Processing.
                I recently completed my Bachelor&apos;s in Computer Science from UMass Amherst with a
                minor in Economics (GPA: 3.93), where I focused on data-driven solutions and machine learning applications.
              </p>

              <p>
                My research interests lie at the intersection of Natural Language Processing and healthcare,
                where I work on developing innovative solutions for clinical text analysis and multilingual
                medical data processing. I&apos;m particularly passionate about creating AI systems that can
                make healthcare more accessible and efficient across different languages and cultures.
              </p>

              <p>
                I believe in{" "}
                <span className="font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                  leveraging AI/ML and NLP to solve real-world challenges
                </span>{" "}
                and creating scalable, production-ready solutions that drive meaningful impact. My expertise
                spans machine learning, natural language processing, and healthcare AI applications.
              </p>
            </div>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              My Skills
            </h1>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <SkillIcon
                    name={skill.name}
                    Icon={skill.Icon}
                    color={skill.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;