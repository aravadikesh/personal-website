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
              <span className="font-bold">{" AI/ML enthusiast"}</span>, and
              <span className="font-bold">{" innovative"}</span> software engineer
              based in Amherst, MA.
            </p>
            <br />
            <p className="text-justify">
              I am currently pursuing my Master&apos;s in Computer Science at the University 
              of Massachusetts Amherst, specializing in AI/ML. I recently completed my Bachelor&apos;s in Computer Science 
              from UMass Amherst with a minor in Economics.
            </p>
            <br />
            <p className="text-justify">
              I&apos;m a curious and driven individual who thrives on 
              exploring new ideas and solving challenges creatively. Whether I&apos;m working on a 
              project, or simply spending time with friends, I value 
              meaningful connections and shared growth.  
            </p>
            <br />
            <p className="text-justify">
              Outside of work, you&apos;ll often find me exploring nature, experimenting with 
              new recipes, or getting lost in a good book. I&apos;m always excited to learn 
              from others and share my enthusiasm for building a brighter future. 🌟 
            </p>
            <br />
            <p className="text-justify">
              I believe in{" "}
              <span className="font-bold text-teal-500">
                pushing the boundaries of technology
              </span>{" "}
              and creating scalable solutions that drive real business value. My expertise 
              spans full-stack development, machine learning, and LLM engineering/applications. I&apos;m 
              always eager to collaborate on innovative projects that create meaningful 
              impact. 🚀
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