"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Green Bangla like Steadfast courier (Next Js)",
    description:
      "It’s a courier website And it it emphasizes teamwork. User Manual: user Account : Email : joyhoqe7@gmail.com password:joy000,Admin Account : Email :mksa.sazzad@gmail.com , Password : 123456 Skills: Next js, Tailwind CSS, Prisma, yup, Cloudinary, MongoDBetc",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Bangladesh 2nd Liberation War Museum (Threejs)",
    description:
      "An interactive 3D experience developed with Three.js and GSAP.User Manual :Move using arrow keys: forward, backward, left, and right.Press 'S' to start movement and 'ESC' to exit.Engage in a virtual journey through Bangladesh's history.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Mystery Message (next js)",
    description:
      "Users can send messages based on usernames, with a feature todisable message reception for privacy. Skills:Next js, Typescript, Node Js, Shadcn, Tailwind css,MongoDB",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ChatApp (Mern)",
    description:
      "User Manual: username: joy, Password:joy000 Skills :WebSocket,zustand,nodejs,expressjs,MongoDB,Render",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Animation website",
    description:
      "Skills: React Js, Tailwind CSS, framer motion, locomotive scroll",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Interview App Project",
    description: "I Create This app for a interviw perpacer",
    image: "/images/projects/6.png",
    tag: ["All", "App"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Runway App Design",
    description: "it's a App Figma Design ",
    image: "/images/projects/7.png",
    tag: ["All", "Figma"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Coffee Shop App Design",
    description: "I Create This app for a interviw perpacer",
    image: "/images/projects/8.png",
    tag: ["All", "Figma"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Ev Bike Website Design",
    description: "I Create This app for a interviw perpacer",
    image: "/images/projects/9.png",
    tag: ["All", "Figma"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="App"
          isSelected={tag === "App"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Figma"
          isSelected={tag === "Figma"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
