"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my Bachelor of Science in{" "}
        <span className="font-medium">Computer Science and Engineering</span>, I
        decided to pursue my passion for programming.
        <span className="italic">
          The part that excites me the most about programming{" "}
        </span>
        is solving problems. It&apos;s like cracking a tough nut and the feeling is
        amazing. When it comes to the techie stuff,my main tools are{" "}
        <span className="font-medium">
          Python, Django, Websocket and SQL
        </span>
        . I&apos;ve got a solid grip on{" "}
        <span className="font-medium">JavaScript, NodeJS, NextJS</span>. I am
        also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I&apos;m all about
        having fun. Video games are my jam, and I love watching movies that take
        me on adventures. I&apos;m also a big fan of exploring new places and meeting
        new people when I travel.
      </p>
    </motion.section>
  );
}
