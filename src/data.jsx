import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Aavesh",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Attar",
  },

  {
    id: 3,
    title: "Gender : ",
    description: "Male",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Hobbies : ",
    description: "Reading, Football",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Nashik, Maharashtra",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+918793734838",
  },

  {
    id: 8,
    title: "Email : ",
    description: "aavesha5@gmail.com",
  },

  {
    id: 9,
    title: "Github : ",
    description: "aaveshattar",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "English,Hindi,Marathi",
  },
];

export const stats = [
  {
    id: 1,
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "2+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "2+",
    title: "Technical Languages <br /> Known",
  },

  {
    id: 4,
    no: "2+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "NOV 2022 - PRESENT",
    title:
      "Associate Software Engineer <span> Infinite Computer Solutions, Bangalore </span>",
    desc: "<span style='text-align: justify;'>Developed and maintained Spring Boot microservices, enhancing modularity and scalability by 20%.<br />Implemented RESTful APIs for third-party integration, boosting data efficiency by 15%.<br />Optimized database operations with Hibernate and JPA, cutting query execution time by 25%.<br />Enhanced UI responsiveness and compatibility using ReactJS and Material UI, reducing page load time by 15%.<br />Automated batch jobs with Java and PL/SQL, improving data accuracy by 25%.<br />Analyzed and debugged logs, resolving system issues and reducing errors by 30% in six months.<br />Worked in Agile/Scrum environments to deliver high-quality solutions on time.<br /><strong>Key Technologies:</strong> Java, Spring Boot, Microservices, REST APIs, ReactJS, Hibernate, PL/SQL, AWS, Oracle DB, Docker, Jenkins.</span>",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "PG Diploma In Advanced Computing <span> C-DAC Noida </span>",
    desc: "<span style='text-align: justify;'>Covered concepts of programming, operating systems, object-oriented programming with Java, algorithms, data structures, web programming technologies, database technologies, .NET, software development methodologies, and web-based Java programming.</span>",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020",
    title: "Bachelor of Mechanical Engineering <span>Pune University </span>",
    desc: "<span style='text-align: justify;'>Focused on thermodynamics, fluid mechanics, manufacturing, machine design, and engineering materials with practical applications in mechanical systems.</span>",
  },
];

export const skills = [
  {
    id: 1,
    title: "Java",
    percentage: "80",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 3,
    title: "React",
    percentage: "70",
  },

  {
    id: 4,
    title: "Spring-Boot",
    percentage: "70",
  },

  {
    id: 5,
    title: "SQL",
    percentage: "81",
  },

  {
    id: 6,
    title: "Hibernate",
    percentage: "70",
  },

  {
    id: 7,
    title: "Python",
    percentage: "60",
  },

  {
    id: 8,
    title: "Jenkins",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Healthcare",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "NH-MMIS",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "Java EE, Hibernate",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java,JSP,Servlet",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://nhmmis.nh.gov/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "My Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Portfolio",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "ReactJs",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/aaveshattar",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Ecommerce Website",
      },
      {
        icon: <FiUser />,
        title: "Framework : ",
        desc: "ReactJs, Springboot, MySQL",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Java, Javascript, SQL",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/aaveshattar/GreenBee",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
