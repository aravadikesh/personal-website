/**
 * RESUME DATA - Single Source of Truth
 *
 * This file contains all resume information for the website.
 * When updating with a new resume, simply update the values here
 * and all components will automatically reflect the changes.
 *
 * Last Updated: January 2025
 */

export const personalInfo = {
  name: "Arav Adikesh Ramakrishnan",
  title: "MS Computer Science Student | AI/ML Engineer | Healthcare NLP Researcher",
  location: "Amherst, MA",
  email: "aravadikesh@gmail.com",
  phone: "(413) 210-6592",
  linkedin: "https://linkedin.com/in/aravadikesh",
  github: "https://github.com/aravadikesh",
  website: "https://aravadikesh.vercel.app",
  headshot: "/headshot.png",
  resume: "/resume.pdf",
  transcript: "/Transcript.pdf",
};

export const bio = {
  short: "Graduate student at UMass Amherst (May 2026) specializing in AI/ML and Natural Language Processing. Building innovative solutions at the intersection of healthcare and artificial intelligence to make medical care more accessible across languages and cultures.",

  aboutMe: [
    "Hi, my name is Arav and I am a Bay State Scholar, AI/ML Engineer, and Healthcare NLP Researcher based in Amherst, MA.",

    "I am currently pursuing my Master's in Computer Science at the University of Massachusetts Amherst with a 4.0 GPA, specializing in Data Science and Natural Language Processing. I recently completed my Bachelor's in Computer Science from UMass Amherst with a minor in Economics (GPA: 3.93), where I focused on data-driven solutions and machine learning applications.",

    "My research interests lie at the intersection of Natural Language Processing and healthcare, where I work on developing innovative solutions for clinical text analysis and multilingual medical data processing. I'm particularly passionate about creating AI systems that can make healthcare more accessible and efficient across different languages and cultures.",

    "I believe in leveraging AI/ML and NLP to solve real-world challenges and creating scalable, production-ready solutions that drive meaningful impact. My expertise spans machine learning, natural language processing, and healthcare AI applications.",
  ],
};

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Massachusetts Amherst",
    period: "Expected Graduation: May 2026",
    gpa: "4.0",
    concentration: "Data Science",
    achievements: [
      "Graduate Bay State Scholarship",
      "Data Science for the Common Good Fellow (Summer 2025)",
    ],
    coursework: [
      "Machine Learning",
      "Reinforcement Learning",
      "Trustworthy & Responsible AI",
      "Advanced Natural Language Processing",
      "Algorithms for Data Science",
      "Advanced Information Retrieval",
      "Statistics",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science with a Minor in Economics",
    institution: "University of Massachusetts Amherst",
    period: "Graduated May 2024",
    gpa: "3.93",
    achievements: [
      "Chancellor's Scholarship",
      "Dean's List (All Semesters)",
    ],
    coursework: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Advanced Algorithms",
      "Operating Systems",
      "Database Management",
    ],
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],

  tools: [
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "Java", icon: "SiOpenjdk", color: "#ED8B00" },
    { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
    { name: "PyTorch", icon: "SiPytorch", color: "#EE4C2C" },
    { name: "Git", icon: "SiGit", color: "#F05032" },
    { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "PostgreSQL", icon: "SiPostgresql", color: "#316192" },
    { name: "Apache Spark", icon: "SiApachespark", color: "#E25A1C" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "Jira", icon: "SiJira", color: "#0052CC" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Spring Boot", icon: "SiSpringboot", color: "#6DB33F" },
    { name: "Flask", icon: "SiFlask", color: "#000000" },
    { name: "Express", icon: "SiExpress", color: "#000000" },
  ],

  frameworks: [
    "AWS", "PyTorch", "Pandas", "Git", "Kubernetes", "MySQL", "Postgres",
    "Apache Spark", "Docker", "Jira", "Scrum", "Node.js", "React"
  ],
};

export const researchExperience = [
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

export const workExperience = [
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

export const projects = [
  {
    name: "YOLO Knowledge Distillation",
    description: "An optimized knowledge distillation framework for YOLOv8 using PyTorch. Trained and evaluated across CIFAR-10, Tiny-ImageNet, and Oxford Pets datasets. Research paper attached below.",
    image: "/yolo-kd-screenshot.png",
    github: "https://github.com/aravadikesh/yolo-knowledge-distillation",
    link: "/yolo-kd.pdf",
    techStack: ["PyTorch", "Python", "Deep Learning"],
  },
  {
    name: "UMass Outing Club Gear Locker",
    description: "Scalable REST API using Express.js/TypeScript with Firebase Real-time Database, handling 100+ daily transactions. Led a team of 3 developers implementing Agile methodologies and CI/CD pipeline with GitHub Actions.",
    image: "/UMOC.png",
    github: "https://github.com/aravadikesh/320-Team-3-BackEnd",
    techStack: ["TypeScript", "Express.js", "Firebase"],
  },
  {
    name: "Run!",
    description: "Developed an educational game in C# and Unity, inspired by Dead by Daylight. Players solve mental math puzzles to evade ghost pursuers, activate beacons, and survive the night. Created procedural terrain generation for diverse environments and implemented A* pathfinding with Unity's NavMesh for adaptive ghost AI and dynamic chases. Demo linked below.",
    image: "/RUN.png",
    github: "https://github.com/aravadikesh/Run-576-Final-Project",
    link: "https://drive.google.com/file/d/1-wtCPUnHettZnXPk6RDZo6IAnuqrdEGl/view",
    techStack: ["C#", "Unity", "Game Development"],
  },
];

export const navItems = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Education", page: "education" },
  { label: "Work Experience", page: "experience" },
  { label: "Projects", page: "projects" },
  { label: "Resume", page: "/resume.pdf" },
];
