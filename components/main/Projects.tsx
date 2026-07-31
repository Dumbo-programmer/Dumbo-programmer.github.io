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
  purpose?: string;
  impact?: string;
  users?: string;
}[] = [
  {
    typeA: "image",
    src: "/one.png",
    title: "PlayNux Operating System",
    link: "https://github.com/orgs/PlayNux/repositories",
    description: "Built a Linux distribution from the ground up to power an indie game console concept — making desktop Linux accessible and game-ready.",
    purpose: "Prove that a small team can build a purpose-built OS for gaming without relying on existing heavy distributions.",
    impact: "Complete, bootable distro with custom package selection and performance tuning. Later discontinued as the console project pivoted.",
    users: "Indie game enthusiasts and developers exploring lightweight Linux gaming.",
    tags: ["C", "C++", "Vala", "Bash", "HTML", "CSS", "JS", "Rust"],
  },
  {
    typeA: "image",
    src: "/two.png",
    title: "Preron Food Delivery App",
    link: "https://github.com/Dumbo-programmer/Preron-Re",
    description: "Built a complete food delivery ecosystem connecting customers, riders, and restaurants with real-time chat, email servers, and internal management tools.",
    purpose: "Solve the last-mile delivery gap in Dhaka — getting items from one friend to another quickly, before large delivery platforms dominated.",
    impact: "600+ registered users, 3 dedicated apps (customer, rider, client), 50+ daily orders at peak. Later sunset due to pandemic funding constraints.",
    users: "Urban residents in Dhaka looking for fast peer-to-peer delivery of food and small items.",
    tags: ["IONIC", "VUE", "Firebase", "JS", "Node.js"],
  },
    {
    typeA: "image",
    src: "/special.png",
    title: "Vocal Guard Anti-Vishing AI",
    link: "https://vocalguard.netlify.app",
    description: "An ML-powered system that identifies callers and analyzes live conversations to detect and prevent voice phishing attacks in real time.",
    purpose: "Protect vulnerable populations in Bangladesh from rising voice-phishing fraud by building an accessible, real-time defense layer.",
    impact: "Selected for Conrad Challenge 2025. ML model achieves 94% accuracy on vishing detection test sets.",
    users: "General public in Bangladesh, especially elderly and less tech-literate users targeted by phone scams.",
    tags: ["Jupyter Notebook", "Python", "Firebase", "ML/AI", "Node.js"],
  },
  {
    typeA: "image",
    src: "/conceptvector.png",
    title: "Concept Vector",
    link: "https://conceptvector.netlify.app/",
    description: "An AI tool that maps your understanding of a subject and generates an optimized learning path — filling gaps in the right order.",
    purpose: "Replace the scattered, topic-by-topic approach to self-study with a concept-graph that shows exactly what to learn next and why.",
    impact: "200+ beta users. Core algorithm adapted from graph-based curriculum sequencing research.",
    users: "Self-taught students and autodidacts who struggle with knowing what to learn next.",
    tags: ["AI/ML", "Python", "Jupyter Notebook", "Node.js"],
  },
  {
    typeA: "image",
    src: "/three.png",
    title: "Helping Hand Donation App",
    link: "https://github.com/Dumbo-programmer/Helping-hand",
    description: "A donation platform that leverages ad revenue to fund aid — users watch short ads instead of donating directly.",
    purpose: "Test whether micro-donations through ad views could create a sustainable funding model for social causes in Bangladesh.",
    impact: "Validated the concept — users preferred ad-based donations over direct payments. Proof-of-concept with 30+ installs.",
    users: "People who want to contribute to social causes but cannot afford direct monetary donations.",
    tags: ["Ionic", "Firebase"],
  },
  {
    typeA: "image",
    src: "/jmc.png",
    title: "Josephite Math Club Website",
    link: "https://josephitemathc.netlify.app/",
    description: "Built a full-featured math club platform with user accounts, article publishing, and a built-in contest system for the St. Joseph Math Club.",
    purpose: "Give the math club a digital home where students can access problems, submit solutions, and participate in contests beyond classroom hours.",
    impact: "150+ active student accounts, 12+ online math contests hosted through the platform, 50+ educational articles published.",
    users: "St. Joseph Higher Secondary School students preparing for Olympiads and school math competitions.",
    tags: ["React", "VUE", "MongoDB"],
  },
  {
    typeA: "image",
    src: "/sht.png",
    title: "Desktop Manager",
    link: "https://github.com/Dumbo-programmer/SehtajDesk",
    description: "A personal project management desktop app that organizes ebooks, programming projects, assets, and Unity builds from one interface.",
    purpose: "Solve my own workflow chaos — I had projects scattered across folders, formats, and tools. Built the manager I wished existed.",
    impact: "Personal productivity increased ~3x. Later open-sourced for other indie developers with similar organizational pain.",
    users: "Indie game developers and student programmers managing multiple projects simultaneously.",
    tags: ["Python", "QT5", "FITZ"],
  },
  {
    typeA: "image",
    src: "/b6.png",
    title: "Battle Games Gambling Platform",
    link: "#",
    description: "A web game-based betting platform built for a Nigerian client, featuring competitive mini-games with real-money stakes.",
    purpose: "Develop a skill-based gaming platform where users compete rather than rely on chance — built on commission for an external client.",
    impact: "Company acquired for ~$10k USD, including the game logic and platform code. 5,000+ registered users at time of acquisition.",
    users: "Online gamers in West Africa looking for competitive skill-based gaming.",
    tags: ["HTML", "CSS", "JS", "Node.js", "Firebase"],
  },
    {
    typeA: "image",
    src: "/rhyme.png",
    title: "Basketball Coach Resume",
    link: "https://dumbo-programmer.github.io/rhymeehasan/",
    description: "A professional portfolio site for basketball coach Rhyme to showcase his credentials, training philosophy, and client results.",
    purpose: "Help a coach transition from word-of-mouth to digital presence — making his expertise discoverable by teams and athletes online.",
    impact: "Coach secured 3 new client teams within the first month of launch.",
    users: "Basketball teams and athletes looking for professional coaching in Bangladesh.",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    typeA: "video",
    src: "/ren.mp4",
    link: "#",
    title: "Game Designs",
    description: "A collection of Unity games exploring custom rendering, AI behavior trees, and procedural generation across multiple genres.",
    purpose: "Experiment with game mechanics and engine architecture to discover what makes gameplay feel responsive and alive.",
    impact: "4 trending Android games with 10k+ active players combined. Built a reusable game framework now used by 2 other developers.",
    users: "Mobile gamers in South Asia looking for lightweight, polished indie games.",
    tags: ["C#", "Unity", "OpenGL", "Blender"],
  },
  {
    typeA: "image",
    src: "/latex.png",
    title: "LaTeX Code Generator",
    link: "https://github.com/Dumbo-programmer/Latex-code-generator",
    description: "A utility that converts plain mathematical expressions into properly formatted LaTeX code — saving hours of manual typesetting.",
    purpose: "I was writing dozens of math handouts for the Open Problem Solving Library and needed to speed up LaTeX authoring.",
    impact: "10x faster math typesetting. Used to generate LaTeX for 500+ pages of educational resources.",
    users: "Students, teachers, and content creators who write mathematical documents in LaTeX.",
    tags: ["Python"],
  },
  {
    typeA: "image",
    src: "/hardware.png",
    link: "#",
    title: "Flight Controller",
    description: "A custom drone flight controller built from scratch, inspired by Ardupilot — exploring embedded systems and real-time control loops.",
    purpose: "Understand drone flight dynamics at the hardware level — not just as a user of existing controllers, but as someone who could build one.",
    impact: "Successful hover tests with custom PID tuning. Code and schematics documented for student robotics teams.",
    users: "Student robotics teams and hobbyist drone builders in Bangladesh who lack access to expensive commercial controllers.",
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
            purpose={project.purpose}
            impact={project.impact}
            users={project.users}
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