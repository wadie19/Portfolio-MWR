import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";


import { RiReactjsLine } from "react-icons/ri";
import { SiMicrosoftsqlserver, SiMongodb, SiPhpmyadmin, SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { FaAngular } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa'; 
import { FaPhp } from 'react-icons/fa'; 
import { FaJsSquare } from 'react-icons/fa'; 
import { DiSymfony } from "react-icons/di";

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


export const SKILLS = [
  {
    icon: <FaAngular className="text-4xl text-red-500 lg:text-5xl" />,
    name: "Angular",
    experience: "4+ year",
  },
  {
    icon: <SiSpringboot className="text-4xl text-green-500 lg:text-5xl" />,
    name: "Spring boot",
    experience: "3+ year",
  },
  {
    icon: <DiSymfony className="text-4xl text-white lg:text-5xl" />,
    name: "Symfony",
    experience: "2+ year",
  },
  { 
    icon: <FaJava className="text-4xl text-red-300 lg:text-5xl" />,
    name: "Java",
    experience: "4+ year",
  },
  { 
    icon: <FaJsSquare className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "4+ year",
  },
  { 
    icon: <FaPhp className="text-4xl text-purple-400 lg:text-5xl" />,
    name: "PHP",
    experience: "2+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "2+ years",
  },
  { 
    icon: <SiPhpmyadmin className="text-4xl text-orange-200 lg:text-5xl" />,
    name: "MySQL",
    experience: "4+ year",
  },
  { 
    icon: <SiMicrosoftsqlserver className="text-4xl text-red-300 lg:text-5xl" />,
    name: "Sql Server",
    experience: "1+ year",
  },

];


export const EXPERIENCES = [
  {
    title: "Internship - Frontend Developer",
    company: "Genius Career",
    duration: "May 2024 - Aout 2024",
    description:
    "At Genius Career, my role involved developing the front end of the project titled One Crush, which is a dating app, in an Agile SCRUM environment. I focused on building highly interactive and responsive web interfaces using Angular. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. Additionally, I worked with the backend team to consume APIs and used Postman for testing and ensuring smooth integration."
  },
  {
    title: "Internship - Web Developer",
    company: "Designet",
    duration: "February 2022 - June 2022",
    description: 
    "In my end-of-study internship, my role involved designing and building an online course application aimed at individuals seeking personal lessons or sessions with instructors. I worked within an Agile SCRUM framework, using Angular and TypeScript for the front end, and using Spring Boot and Java for the backend development. I implemented responsive design with Bootstrap and managed the database with MySQL. Additionally, I utilized Postman for API testing to ensure effective integration and functionality."
  },
  {
    title: "Internship - Web Developer",
    company: "SeeWise",
    duration: "August 2021",
    description:
      "During my internship at SeeWise in 2021, I contributed to the design and creation of a website for an agency specializing in the online rental and sale of houses and land. The project was developed as a full-stack application using Symfony and PHP, with Bootstrap employed for responsive design. Additionally, I managed the database with MySQL to ensure efficient data handling."
  },
];