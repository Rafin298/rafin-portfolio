import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolio from "@/public/portfolio.png";
import ielts from "@/public/ielts.png";
import yappmart from "@/public/yappmart.png";
import foodrecipe from "@/public/foodrecipe2.png";
import Inventory from "@/public/Inventory.png";

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
    name: "Experience",
    hash: "#experience",
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
    title: "IELTS Speaking Mock Test AI",
    description:
      "Built Ielts Speaking mock test AI app where users can practice their speaking test with AI examiner.",
    tags: ["Django", "Next js", "llama", "Openrouter", "Deepgram"],
    imageUrl: ielts,
    link:"https://ielts-speaking-test-ai.vercel.app/"
  },
  {
    title: "Food Recipe Api",
    description:
      "Developed food recipe api and deployed using Docker, aws ec2 and github actions with unit tests.",
    tags: ["Python","Django", "PostgreSQL", "Docker", "AWS EC2", "Github Actions"],
    imageUrl: foodrecipe,
    link:"http://ec2-13-211-197-180.ap-southeast-2.compute.amazonaws.com/api/docs/"
  },
  {
    title: "Portfolio",
    description:
      "This is my portfolio project where i have presented myself and used all the cutting-edge modern technologies.",
    tags: ["Next.js","React", "Tailwind CSS", "Framer motion" ,"React Email & Resend"],
    imageUrl: portfolio,
    link:"https://rafin-portfolio.vercel.app/"
  }
  
] as const;

export const skillsData = [
  "Python",
  "Django",
  "Django REST Framework",
  "Websocket",
  "AI",
  "SQL",
  "NoSQL",
  "JavaScript",
  "Next.js",
  "Node.js",
  "Git",
  "Linux",
  "Docker",
  "AWS",
  "Github Actions",
] as const;