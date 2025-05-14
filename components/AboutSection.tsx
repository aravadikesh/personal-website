import React from 'react';
import { 
  SiPython, 
  SiTypescript, 
  SiJavascript, 
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiAmazonaws,
  SiKubernetes,
  SiOpencv,
  SiGit,
  SiDocker,
  SiSpringboot,
  SiFlask,
  SiExpress,
  SiUnity,
  SiOpenjdk
} from 'react-icons/si';

interface SkillItem {
  name: string;
  Icon: React.ElementType;
  color: string;
}

const skills: SkillItem[] = [
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
  {
    name: "C++",
    Icon: SiCplusplus,
    color: "#00599C"
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
    name: "AWS",
    Icon: SiAmazonaws,
    color: "#FF9900"
  },
  {
    name: "Kubernetes",
    Icon: SiKubernetes,
    color: "#326CE5"
  },
  {
    name: "OpenCV",
    Icon: SiOpencv,
    color: "#5C3EE8"
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
    name: "Unity",
    Icon: SiUnity,
    color: "#000000"
  }
];

interface SkillIconProps {
  name: string;
  Icon: React.ElementType;
  color: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ name, Icon, color }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className="p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label={`${name} skill`}
      >
        <Icon 
          className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
          style={{ color: color }}
          aria-hidden="true"
        />
      </div>
      <span className="text-sm font-medium">
        {name}
      </span>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify">
              Hi, my name is Arav and I am a{" "}
              <span className="font-bold">{"Bay State Scholar"}</span>,
              <span className="font-bold">{" Data Science enthusiast"}</span>, and
              <span className="font-bold">{" NLP researcher"}</span> based in Amherst, MA.
            </p>
            <br />
            <p className="text-justify">
              I am currently pursuing my Master&apos;s in Computer Science at the University 
              of Massachusetts Amherst, specializing in Data Science and Natural Language Processing. 
              I recently completed my Bachelor&apos;s in Computer Science from UMass Amherst with a 
              minor in Economics, where I focused on data-driven solutions and machine learning applications.
            </p>
            <br />
            <p className="text-justify">
              My research interests lie at the intersection of Natural Language Processing and healthcare, 
              where I work on developing innovative solutions for clinical text analysis and multilingual 
              medical data processing. I&apos;m particularly passionate about creating AI systems that can 
              make healthcare more accessible and efficient across different languages and cultures.
            </p>
            <br />
            <p className="text-justify">
              Outside of my academic and professional pursuits, I maintain an active reading habit, 
              focusing on books that explore the intersection of technology, society, and human potential. 
              My current reading list includes works on AI ethics, healthcare innovation, and the future 
              of human-AI collaboration. I believe that continuous learning through diverse perspectives 
              is crucial for developing responsible and impactful AI solutions.
            </p>
            <br />
            <p className="text-justify">
              I believe in{" "}
              <span className="font-bold text-teal-500">
                leveraging data science and NLP to solve real-world challenges
              </span>{" "}
              and creating scalable solutions that drive meaningful impact. My expertise 
              spans machine learning, natural language processing, and healthcare AI applications. I&apos;m 
              always eager to collaborate on innovative projects that can make a difference in people&apos;s lives. 🚀
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill, idx) => (
                <SkillIcon 
                  key={idx}
                  name={skill.name}
                  Icon={skill.Icon}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;