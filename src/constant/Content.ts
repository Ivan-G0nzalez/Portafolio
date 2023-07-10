// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import Hero_person from "~/assets/images/Hero/person.png";

import figma from "~/assets/images/Skills/figma.png";
import tailwind from "~/assets/images/Skills/tailwind.png";
import ps from "~/assets/images/Skills/ps.png";
import reactjs from "~/assets/images/Skills/react.png";
import nodejs from "~/assets/images/Skills/node.png";
import python from "~/assets/images/Skills/python.png";

import services_logo1 from "~/assets/images/Services/logo1.png";
import services_logo2 from "~/assets/images/Services/logo2.png";
import services_logo3 from "~/assets/images/Services/guitarra-acustica.png";

import project1 from "~/assets/images/projects/img1.png";
import project2 from "~/assets/images/projects/img2.png";
import project3 from "~/assets/images/projects/img3.png";
import person_project from "~/assets/images/projects/person1.png";

import avatar1 from "~/assets/images/Testimonials/avatar1.png";
import avatar2 from "~/assets/images/Testimonials/avatar2.png";
import avatar3 from "~/assets/images/Testimonials/avatar3.png";
import avatar4 from "~/assets/images/Testimonials/avatar4.png";
import Hireme_person from "~/assets/images/Hireme/senalando.png";
import Hireme_person2 from "~/assets/images/Hireme/señalando-arriba.png";

// eslint-disable-next-line import/prefer-default-export
export const content = {
  nav: [
    {
      text: "Skills",
      link: "#skills",
      icon: BiUser,
    },
    {
      text: "Services",
      link: "#services",
      icon: RiServiceLine,
    },
    {
      text: "Project",
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      text: "Contact",
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "IVAN",
    LastName: "GONZALEZ",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Habilidades Basicas en Figma",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Manejo de Node",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Buen manejo de Photoshop",
        logo: ps,
      },
      {
        name: "React js",
        para: "Manejo de react",
        logo: reactjs,
      },
      {
        name: "Tailwind",
        para: "Manejo de tailwind",
        logo: tailwind,
      },
      {
        name: "Python",
        para: "Fuertes conociemientos en python",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I offer website design, development, maintenance, optimization, and e-commerce development. Specializing in responsive design, accessibility, and user experience.",
        logo: services_logo1,
      },
      {
        title: "English Translator",
        para: "As a translator, I offer document translation, website and app localization, proofreading, editing, and interpreting services for events and meetings.",
        logo: services_logo2,
      },
      {
        title: "Guitar player",
        para: "As a guitar player, I offer services such as live performances for events, recording sessions for albums or singles, guitar lessons for all levels.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am an enthusiastic individual with a deep passion for both technology and music. As a curious learner, I am constantly seeking out new challenges to enhance my professional growth and expand my skillset.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "iegdlt@gmail.com",
        icon: GrMail,
        link: "mailto:iegdlt@gmail.com",
      },
      {
        text: "+57 3058605697",
        icon: MdCall,
        link: "https://wa.me/3058605697",
      },
      {
        text: "ivangonza15",
        icon: BsInstagram,
        link: "https://www.instagram.com/ivangonz15/",
      },
      {
        text: "Ivan Gonzalez",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/ivan-gonzalez-de-torre/",
      },
      {
        text: "Projects",
        icon: FaGithub,
        link: "https://github.com/Ivan-G0nzalez",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
