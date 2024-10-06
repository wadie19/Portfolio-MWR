import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio site built with React and Tailwind CSS to feature my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/wadie19/Portfolio_MWR",
  },
  {
    id: 2,
    name: "Tchipfy",
    description:
      "Developed an audio playback application featuring three REST APIs to manage music, users, and ratings, along with a unified REST API that integrates data, using technologies such as Golang, Git, Flask (Python), Postman, and SQLite.",
    image: projectImage5,
    githubLink: "https://github.com/marwenlb/Middleware_examen",
  },
  {
    id: 3,
    name: "Stock and equipment loan management",
    description:
      " Implemented a mobile application for managing stock and equipment loans, built with Flutter.",
    image: projectImage3,
    githubLink: "https://github.com/wadie19/Gstock_flutter",
  },
  {
    id: 4,
    name: "Kata Gilded Rose",
    description:
      "Implementation of the 'Gilded Rose' Kata, which includes unit tests, code mutation, and refactoring, using technologies such as Java, Git, Gradle, JaCoCo, and PIT.",
    image: projectImage4,
    githubLink: "https://github.com/wadie19/GilededRose",
  },
  {
    id: 5,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 6,
    name: "Instahome App",
    description:
      "Design and development of a website for an agency specializing in the online rental and sale of houses and land, using Symfony and MySQL.",
    image: projectImage6,
    githubLink: "https://github.com/wadie19/Instahome",
  },
];


