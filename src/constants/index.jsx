import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";

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
    githubLink: "https://github.com/wadie19/Portfolio-MWR",
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
    name: "Stock management",
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


export const BIO = [
  "I am a second-year Master's student in Computer Science at ISIMA, Clermont-Ferrand, specializing in Software Engineering and Application Integration. With a solid academic background and hands-on experience in web and mobile development, I am passionate about building efficient, user-centric digital solutions.",
  "During my studies, I’ve developed a broad skill set that includes front-end frameworks like Angular, back-end technologies such as Spring Boot, and mobile development using Flutter. My technical expertise extends to Java, PHP, JavaScript, MySQL, and Python, allowing me to deliver full-stack solutions across a range of environments.",
  "In addition to academic projects, I’ve completed several internships that solidified my practical knowledge. My most recent experience was at Genius Career in Paris, where I worked on an Agile SCRUM team and focused on front-end development for the 'One Crush' project using Angular and GitLab, integrating the back end with the front end using Postman to test the API. Prior to that, I contributed to the development of an e-learning platform at Designet, where I worked with Angular, Spring Boot, and MySQL to build a comprehensive online course platform. I also gained experience in creating a real estate website during an internship at SeeWise, utilizing Symfony and Bootstrap to deliver a seamless user experience.",
  "I am currently looking for a 5-6 month end-of-study internship starting in April 2025, with a strong interest in web or mobile development roles, ideally with the possibility of pre-hiring.  My goal is to apply my skills in real-world projects that make a positive impact, while continuing to grow as a developer."
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
      "During my internship at SeeWise in 2021, I contributed to the design and development of a website for an agency specializing in the online rental and sale of houses and land. The project was developed as a full-stack application using Symfony and PHP, with Bootstrap employed for responsive design. Additionally, I managed the database with MySQL to ensure efficient data handling."
  },
];

export const EDUCATION = [
  {
    degree: "Master in Computer Science, specializing in software engineering and application integration",
    institution: "ISIMA",
    duration: "September 2023 - Present",
    description:
      "Focused on software engineering, middleware, and application integration. Developed skills in AI, DevOps, and service-oriented architecture (SOA), along with experience in database administration and complexity theory."
  },
  {
    degree: "Bachelor in Computer Science",
    institution: "ISIMA - University of Clermont Auvergne",
    duration: "September 2022 - June 2023",
    description:
      "Focused on software engineering, algorithms, and artificial intelligence, with a focus on subjects such as XML languages, graph theory, compilation, and networking. Gained a solid foundation in problem-solving and system development through various projects, including applications of algorithms and graph theory.",
  },
  {
    degree: "Bachelor in Information Technology specializing in Information Systems Development ",
    institution: "Higher Institute of Technological Studies of Charguia",
    duration: "September 2019 - June 2022",
    description:
      "Focused on web and mobile development, programming languages, and database management. Developed several web applications using HTML, CSS, JavaScript, Python, Java, and PHP, as well as mobile applications using Flutter."
  },
];  

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/wadie.rezgui.9",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/wadie__rezgui/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/wadie19",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/mohamed-wadie-rezgui-28a25b270/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];