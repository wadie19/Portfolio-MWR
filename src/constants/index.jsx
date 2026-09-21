import projectImage1 from "../assets/project1.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#bio" },
  { label: "Experience", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Tchipfy",
    description:
      "Collaborative project: audio playback application built around multiple REST APIs for managing music, users, and ratings, with a unified API integrating data from the different services.",
    image: projectImage5,
    technologies: [
      "Python",
      "Flask",
      "Go",
      "REST APIs",
      "SQLite",
      "Postman",
      "Git",
    ],
    githubLink: "https://github.com/marwenlb/Middleware_examen",
  },

  {
    id: 2,
    name: "Gilded Rose Kata",
    description:
      "Software quality project focused on refactoring legacy code, unit testing, code coverage, and mutation testing.",
    image: projectImage4,
    technologies: [
      "Java",
      "Gradle",
      "JUnit",
      "JaCoCo",
      "PIT",
      "Git",
    ],
    githubLink: "https://github.com/wadie19/GilededRose",
  },

  {
    id: 3,
    name: "Stock Management App",
    description:
      "Mobile application designed to manage inventory, equipment, and equipment loans.",
    image: projectImage3,
    technologies: [
      "Flutter",
      "Dart",
    ],
    githubLink: "https://github.com/wadie19/Gstock_flutter",
  },

  {
    id: 4,
    name: "Instahome",
    description:
      "Web application developed for managing real estate listings, users, and property searches.",
    image: projectImage6,
    technologies: [
      "Symfony",
      "PHP",
      "MySQL",
      "Twig",
    ],
    githubLink: "https://github.com/wadie19/Instahome",
  },

  {
    id: 5,
    name: "Personal Portfolio",
    description:
      "Responsive personal portfolio built to showcase my professional experience, technical skills, projects, and education.",
    image: projectImage1,
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubLink: "https://github.com/wadie19/Portfolio-MWR",
  },
];

export const BIO = [
  "I am a Full-Stack Developer specialized in building and modernizing business applications, with a strong focus on Python, FastAPI, Angular, and SQL.",

  "In my current role, I contribute to the modernization of legacy COBOL/OpenVMS systems by migrating existing processes to Python, developing REST APIs, working with Oracle Rdb and PostgreSQL databases, and building front-end interfaces with Angular.",

  "My work covers different stages of the software development lifecycle, including development, unit and functional testing, automation, technical documentation, and deployment to development and pre-production environments.",

  "My previous experience includes Java, Spring Boot, TypeScript, MySQL, and Symfony. I particularly enjoy projects involving software modernization, problem solving, code quality, and the development of reliable and maintainable applications."
];

export const SKILLS = [
  {
    category: "Backend",
    technologies: ["Python", "FastAPI", "Java", "Spring Boot"],
  },
  {
    category: "Frontend",
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    category: "Databases",
    technologies: [
      "SQL",
      "PostgreSQL",
      "Oracle Rdb",
      "MySQL",
    ],
  },
  {
    category: "Legacy & Systems",
    technologies: [
      "COBOL",
      "OpenVMS",
      "DCL",
    ],
  },
  {
    category: "Tools & DevOps",
    technologies: [
      "Mercurial",
      "Heptapod",
      "Git",
      "GitHub",
      "Azure DevOps",
      "Postman",
    ],
  },
];

export const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company: "Digital",
    duration: "October 2025 - Present",
    summary:
      "Contributing to the modernization of business applications by migrating legacy COBOL/OpenVMS processes to Python and developing modern REST APIs.",
    tasks: [
      "Migration and rewriting of COBOL programs in Python.",
      "Development of REST APIs using FastAPI.",
      "Analysis and execution of existing processes under OpenVMS using DCL commands.",
      "Development of Python scripts to automate testing, file comparison, data restoration, and technical tasks.",
      "Unit and functional testing of migrated applications.",
      "SQL development and data manipulation using Oracle Rdb and PostgreSQL.",
      "Development of user interfaces with Angular, Tailwind CSS, and DaisyUI.",
      "Technical documentation including specifications, mapping files, and test documentation.",
      "Participation in deployments to development and pre-production environments.",
      "Migration and adaptation of Visual Basic email scripts to Python using SMTP."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Angular",
      "SQL",
      "PostgreSQL",
      "Oracle Rdb",
      "COBOL",
      "OpenVMS",
      "DCL",
      "Mercurial",
      "Heptapod",
      "Azure DevOps"
    ]
  },

  {
    title: "Developer Intern",
    company: "Digital",
    duration: "April 2025 - September 2025",
    summary:
      "Internship focused on the modernization of legacy business applications and migration from COBOL/OpenVMS to Python.",
    tasks: [
      "Analysis of existing COBOL programs running under OpenVMS.",
      "Migration and rewriting of COBOL processes in Python.",
      "Development of REST APIs using FastAPI.",
      "Use of DCL commands in OpenVMS environments.",
      "SQL queries and data manipulation using Oracle Rdb.",
      "Unit and functional testing.",
      "Technical documentation including specifications, mapping files, and test documentation."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "COBOL",
      "OpenVMS",
      "DCL",
      "SQL",
      "Oracle Rdb",
      "Mercurial",
      "Heptapod",
      "Azure DevOps"
    ]
  },

  {
    title: "Frontend Developer Intern",
    company: "Genius Career",
    duration: "May 2024 - August 2024",
    summary:
      "Development of the front-end of a web application in an Agile/Scrum environment.",
    tasks: [
      "Development of responsive user interfaces with Angular 17 and TypeScript.",
      "Integration of UI designs using HTML, CSS, and Angular Material.",
      "Integration and consumption of REST APIs.",
      "API testing and request validation using Postman.",
      "Collaboration with the back-end team for feature integration.",
      "Version control using Git and GitHub."
    ],
    technologies: [
      "Angular 17",
      "TypeScript",
      "Angular Material",
      "REST APIs",
      "HTML",
      "CSS",
      "Postman",
      "Git",
      "GitHub"
    ]
  },

  {
    title: "Full-Stack Developer Intern",
    company: "Designet",
    duration: "February 2022 - June 2022",
    summary:
      "Design and development of a web application for managing online courses.",
    tasks: [
      "Development of a REST API with Java and Spring Boot.",
      "Development of the user interface with Angular and Bootstrap.",
      "Implementation of course, user, and reservation management features.",
      "Database design and data management using MySQL.",
      "API testing and validation using Postman.",
      "Version control using Git and GitHub."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "MySQL",
      "Bootstrap",
      "REST APIs",
      "Postman",
      "Git",
      "GitHub"
    ]
  },

  {
    title: "Web Developer Intern",
    company: "SeeWise",
    duration: "July 2021 - August 2021",
    summary:
      "Design and development of a web application for an online real estate agency.",
    tasks: [
      "Back-end development using Symfony and PHP.",
      "Front-end development using Twig.",
      "Database design and data management using MySQL.",
      "Development of property listing and user management features.",
      "Implementation of advanced search functionality."
    ],
    technologies: [
      "Symfony",
      "PHP",
      "Twig",
      "MySQL",
      "Git"
    ]
  }
];

export const EDUCATION = [
  {
    degree:
      "Master's Degree in Computer Science — Software Engineering and Application Integration (GLIA)",
    institution: "ISIMA - Clermont Auvergne INP",
    duration: "September 2023 - March 2025",
    description:
      "Master's program focused on software engineering and application integration, covering software architecture, middleware, DevOps, service-oriented architecture (SOA), artificial intelligence, database administration, and algorithmic complexity.",
  },

  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "Université Clermont Auvergne",
    duration: "September 2022 - June 2023",
    description:
      "Third year of the Computer Science bachelor's program, covering software engineering, algorithms, artificial intelligence, graph theory, compilation, networking, and software development.",
  },

  {
    degree:
      "Bachelor's Degree in Information Technology — Information Systems Development",
    institution:
      "Higher Institute of Technological Studies of Charguia",
    duration: "September 2019 - June 2022",
    description:
      "Program focused on information systems development, including web and mobile development, object-oriented programming, database management, software design methodologies, and service-oriented architecture.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/wadie19",
    icon: (
      <FaGithub
        fontSize={26}
        className="hover:opacity-80"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-wadie-rezgui-28a25b270/",
    icon: (
      <FaLinkedin
        fontSize={26}
        className="hover:opacity-80"
      />
    ),
  },
];