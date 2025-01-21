import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "YOLO Knowledge Distillation",
    description: 
      "An optimized knowledge distillation framework for YOLOv8 using PyTorch. Trained and evaluated across CIFAR-10, Tiny-ImageNet, and Oxford Pets datasets. Research paper attached below.",
    image: "/yolo-kd-screenshot.png",
    github: "https://github.com/aravadikesh/yolo-knowledge-distillation",
    link: "/yolo-kd.pdf",
    techStack: ["PyTorch", "Python", "Deep Learning"]
  },
  {
    name: "UMass Outing Club Gear Locker",
    description:
      "Scalable REST API using Express.js/TypeScript with Firebase Real-time Database, handling 100+ daily transactions. Led a team of 3 developers implementing Agile methodologies and CI/CD pipeline with GitHub Actions.",
    image: "/UMOC.png",
    github: "https://github.com/aravadikesh/320-Team-3-BackEnd",
    techStack: ["TypeScript", "Express.js", "Firebase"]
  },
  {
    name: "Run!",
    description:
      "Developed an educational game in C# and Unity, inspired by Dead by Daylight. Players solve mental math puzzles to evade ghost pursuers, activate beacons, and survive the night. \
      Created procedural terrain generation for diverse environments and implemented A* pathfinding with Unity's NavMesh for adaptive ghost AI and dynamic chases. Demo linked below.",
    image: "/RUN.png",
    github: "https://github.com/aravadikesh/Run-576-Final-Project",
    link: "https://drive.google.com/file/d/1-wtCPUnHettZnXPk6RDZo6IAnuqrdEGl/view",
    techStack: ["C#", "Unity", "Game Development"]
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {project.link ? (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-sm bg-teal-500/10 text-teal-500 dark:text-teal-400 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
