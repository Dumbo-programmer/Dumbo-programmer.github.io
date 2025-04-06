"use client";  
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const projectData = [
  { type: "image", src: "/one.png", title: "PlayNux Operating system", description: "Used: C, C++, Vala, Bash, HTML, CSS, JS, Rust. It is a linux distro based on ubuntu and elementary os. Playnux was created as a project for the PlayNux console concept by arham and tawhid. It was later discontinued " },
  { type: "image", src: "/two.png", title: "Preron Food Delivery App", description: "Used: IONIC, VUE, Firebase, JS, Node.Js, etc. Applications and ecosystem for customer, client and rider and internal management inside the company. Dedicated chat and email servers were also created to support the project. The idea of a person to deliver a thing to another friend immediately was a new concept when Preron was founded during 2023-2024. The passion project was later abandoned as the initial ignitors drifted apart due to conflict "  },
  { type: "image", src: "/three.png", title: "Helping Hand Donation App", description: "Used: Ionic, firebase, etc. A donation app which was created as an experiment to see if people are willing to watch advertisement to support the poor and needy."  },
  { type: "image", src: "/jmc.png", title: "Josephite Math Club website", description: "Used: React, VUE, Mongodb, etc. A math website with dedicated user system, article system and math contest system in built. It was built for the Josephite Math Club"  },
  { type: "image", src: "/b6.png", title: "Battle Games Gambling website",description: "Used: HTML, CSS, JS, Node.Js, Firebase, etc. A web game based gambling site which was made for a Nigerian client and the company behind was later acquired alongside the game logic for around 100k usd"  },
  { type: "video", src: "/demo.mp4", title: "Game Designs", description: "Used: C#, Unity, OpenGl, Blender, etc. Various Games I made, some are available in my itch.io" },
  { type: "image", src: "/latex.png", title: "Latex code generator", description: "Used: Python. A latex code generator created as a prototype work around to type math problems faster"  },
  { type: "image", src: "/hardware.png", title: "Flight Controller", description: "Used: Ardupilot and other hardware projects for ideas and inspirations. Personal passion project I created with a friend of mine"  },

];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
    <div className="flex flex-col items-center justify-center py-20" id="projects">
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-wrap gap-10 px-10 justify-center">
        {projectData.slice(0, showAll ? projectData.length : 3).map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:opacity-80 transition"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </div>


    </div>

  );
};

export default Projects;