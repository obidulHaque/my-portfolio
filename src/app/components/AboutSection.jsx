"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Programing Languages: javascript, typescript, SQL</li>
        <li>
          Front-end: React, Tailwind CSS, gsap, framer motion, shadcn, Three js
        </li>
        <li>Back-end: Node js, express Js, mongoose, PrismaL</li>
        <li>Database: MongoDB, Mysql</li>
        <li>JavaScript</li>
        <li>State Management: Zustand, React Context</li>
        <li>Validation & Type Safety: Zod, Yup</li>
        <li>Full-Stack Frameworks: Next.js</li>
        <li>Design Tool: Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Diploma in CSE (2022)</li>
        <ul>Rangpur polytechnic Institute</ul>
        <ul>GPA : 3.47 out of 4</ul>
        <hr />
        <li>Dakhil (Madrasah)</li>
        <ul>Dhap Satgara Baitul Mukarram model Kamil Madrasha,Rangpur </ul>
        <ul>GPA :4.78 out of 5</ul>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/1730974999208.jpg"
          width={500}
          height={500}
          alt="my image"
          className="rounded-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with NextJs, React, Zustand, Node.js, Express,MongoDB,
            PostgreSQL, ThreeJs,Figma and Git. I am a quick learner and I am
            always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
