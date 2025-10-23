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
    <section id="projects" className="bg-white dark:bg-stone-900">
      <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-teal-500 to-cyan-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 group">
                  <div className="md:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      {project.link ? (
                        <Link href={project.link}>
                          <div className="relative group/image">
                            <Image
                              src={project.image}
                              alt={project.name}
                              width={1000}
                              height={1000}
                              className="rounded-2xl transition-all duration-300 group-hover/image:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                          </div>
                        </Link>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={1000}
                          height={1000}
                          className="rounded-2xl"
                        />
                      )}
                    </div>
                  </div>
                  <div className="mt-8 md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                      {project.name}
                    </h1>
                    <p className="text-lg leading-7 mb-6 text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-4 py-2 text-sm bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-900/50 text-teal-700 dark:text-teal-300 rounded-full font-semibold hover:scale-105 transition-transform border border-teal-200 dark:border-teal-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={32}
                          className="hover:-translate-y-1 hover:text-teal-600 dark:hover:text-teal-400 transition-all cursor-pointer"
                        />
                      </Link>
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={32}
                            className="hover:-translate-y-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all cursor-pointer"
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
