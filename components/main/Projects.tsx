"use client";  
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const projectData: {
  typeA?: "image" | "video";
  src: string;
  title: string;
  description: string;
  tags?: string[];
  link: string;
}[] = [
  {
    typeA: "image",
    src: "/one.png",
    title: "PlayNux Operating system",
    link: "https://github.com/orgs/PlayNux/repositories",
    description: "It is a linux distro based on ubuntu and elementary os. Playnux was created as a project for the PlayNux console concept by arham and tawhid. It was later discontinued",
    tags: ["C", "C++", "Vala", "Bash", "HTML", "CSS", "JS", "Rust"],
  },
  {
    typeA: "image",
    src: "/two.png",
    title: "Preron Food Delivery App",
    link: "https://github.com/Dumbo-programmer/Preron-Re",
    description: "Applications and ecosystem for customer, client and rider and internal management inside the company. Dedicated chat and email servers were also created to support the project. The idea of a person to deliver a thing to another friend immediately was a new concept when Preron was founded during 2021-2023. The passion project was later abandoned as the initial ignitors drifted apart due to the pandemic and lack of funding",
    tags: ["IONIC", "VUE", "Firebase", "JS", "Node.js"],
  },
    {
    typeA: "image",
    src: "/special.png",
    title: "Vocal Guard Antivishing AI",
    link: "https://vocalguard.netlify.app",
    description: "An AI based antivishing system which uses ML to identify callers and live analyze calls and protect. Built as a special project for Conrad Challenge 2025",
    tags: ["Jupiter Notebook", "Python", "Firebase", "ML/AI", "Node.js"],
  },
  {
    typeA: "image",
    src: "/three.png",
    title: "Helping Hand Donation App",
    link: "https://github.com/Dumbo-programmer/Helping-hand",
    description: "A donation app which was created as an experiment to see if people are willing to watch advertisement to support the poor and needy.",
    tags: ["Ionic", "Firebase"],
  },
  {
    typeA: "image",
    src: "/jmc.png",
    title: "Josephite Math Club website",
    link: "https://josephitemathc.netlify.app/",
    description: "A math website with dedicated user system, article system and math contest system in built. It was built for the Josephite Math Club",
    tags: ["React", "VUE", "MongoDB"],
  },
  {
    typeA: "image",
    src: "/sht.png",
    title: "Desktop Manager",
    link: "https://github.com/Dumbo-programmer/SehtajDesk",
    description: "A desktop manager which I made for my own use. It is a simple desktop manager which can be used to manage Ebooks, Programming Projects, Assets, Unity projects. It is a simple project which I made to learn about QT5 and FITZ",
    tags: ["Python", "QT5", "FITZ"],
  },
  {
    typeA: "image",
    src: "/b6.png",
    title: "Battle Games Gambling website",
    link: "#",
    description: "A web game based gambling site which was made for a Nigerian client and the company behind was later acquired alongside the game logic for around 10k usd",
    tags: ["HTML", "CSS", "JS", "Node.js", "Firebase"],
  },
    {
    typeA: "image",
    src: "/rhyme.png",
    title: "Basketball Coach Resume",
    link: "https://dumbo-programmer.github.io/rhymeehasan/",
    description: "A website for basketball coach Rhyme to showcase his skills and get clients.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    typeA: "video",
    src: "/ren.mp4",
    link: "#",
    title: "Game Designs",
    description: "Various games made in Unity and other tools.",
    tags: ["C#", "Unity", "OpenGL", "Blender"],
  },
  {
    typeA: "image",
    src: "/latex.png",
    title: "Latex code generator",
    link: "https://github.com/Dumbo-programmer/Latex-code-generator",
    description: "A tool to quickly generate math LaTeX code.",
    tags: ["Python"],
  },
  {
    typeA: "image",
    src: "/hardware.png",
    link: "#",
    title: "Flight Controller",
    description: "Passion project inspired by Ardupilot.",
    tags: ["Hardware", "Ardupilot", "Embedded"],
  },
];


const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section aria-labelledby="projects-heading">
      <div className="flex flex-col items-center justify-center py-20" id="projects">
        <h2 id="projects-heading" className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h2>
      <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
        {projectData.slice(0, showAll ? projectData.length : 3).map((project, index) => (
          <ProjectCard
            key={`project-${project.title.replace(/\s+/g, '-').toLowerCase()}-${index}`}
            src={project.src}
            title={project.title}
            link={project.link}
            description={project.description}
            typeA={project.typeA} 
            tags={project.tags}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-80 transition"
        aria-label={showAll ? "Show less projects" : "Show more projects"}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>
  </section>
  );
};

export default Projects;