import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolio from "@/public/portfolio.png";
import pictureGenerator from "@/public/pictureGenerator.png";
import yappmart from "@/public/yappmart.png";
import nature from "@/public/nature.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "This is my portfolio project where i have presented myself and used all the cutting-edge modern technologies.",
    tags: ["Next.js","React", "Tailwind CSS", "Framer motion" ,"React Email & Resend"],
    imageUrl: portfolio,
    link:"https://rafin-portfolio.vercel.app/"
  },
  {
    title: "Picture Generator",
    description:
      "Built DALL-E-like image generator which creates unique and creative images based on user input.",
    tags: ["Next.js","React", "OPEN AI API","Typescript", "Machine Learning"],
    imageUrl: pictureGenerator,
    link:"https://picture-generator-rafinkhan.vercel.app/"
  },
  {
    title: "Yappmart",
    description:
      "Developed Yappmart shopping software which serves both the customers and shop-keepers and ensured scalability, security, and optimal performance.",
    tags: ["JavaFX", "Scene Builder", "MSSQL", "Authentication"],
    imageUrl: yappmart,
    link:"https://github.com/Rafin298/Yappmart-Shop-management-system-using-javafx-and-mssql"
  },
  {
    title: "Nature-adventure",
    description:
      "Developed Nature-adventure api where users can login and signup and use crud operations on tours api.",
    tags: ["NodeJS", "ExpressJS", "MongoDB","Mongoose", "Authentication"],
    imageUrl: nature,
    link:"https://github.com/Rafin298/nature-adventure"
  }
] as const;

export const skillsData = [
  "Python",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "SQL",
  "Framer Motion",
  "Linux"
] as const;