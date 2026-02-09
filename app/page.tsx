// app/page.tsx

import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Achievements from "@/components/main/Achievements";
import Projects from "@/components/main/Projects";
import Research from "@/components/main/Research";
import LoadingScreen from "@/components/main/LoadingScreen";

const WIP = dynamic(() => import('@/components/main/WIP'), { ssr: false });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tawhid Bin Omar - Game Dev, Robotics Engineer & Physicist Prodigy",
  description: "Lead game developer at Pyxl Chronicles (230+ players, custom engine). Physics Olympiad champion: BdPhO National, PHIGA #1/1211 worldwide. Top 7% LeetCode programmer. Built 15+ major projects including PlayNux OS, Vocal Guard AI, assistive robotics systems. Full-stack developer specializing in Next.js, Unity, AI/ML.",
  keywords: [
    // Names & Aliases
    "Tawhid", "Tawhid Bin Omar", "Ren", "Dumbo-programmer", "tawhid developer", "ren developer",
    // Core Roles
    "full stack developer", "game developer", "indie game developer", "lead game developer",
    "physicist", "robotics engineer", "mechanical engineer",
    // Organizations & Projects
    "Pyxl Chronicles", "Team Nokkhotropoth", "Ongko", "PlayNux", "Preron", "Vocal Guard", "Concept Vector",
    // Game Dev & Engine
    "custom game engine", "indie horror game", "procedural generation", "procedural content generation",
    "AI systems", "game AI", "performance optimization", "game optimization", "Unity", "C#", "OpenGL", "Blender",
    "2D mechanics", "3D visuals", "cross-platform deployment", "Windows Linux deployment",
    "CI/CD automation", "game development pipeline", "profiling", "Android games",
    // Robotics & Hardware
    "robotics-for-good", "assistive robotics", "autonomous systems", "assistive systems",
    "robotic canes", "HUD captioning glasses", "spatial-audio hearing aids", "communication wearables",
    "UAV", "unmanned aerial vehicles", "mechatronics", "embedded systems", "Arduino", "Ardupilot",
    "UN Sustainable Development Goals", "UN SDG", "accessibility technology", "healthcare robotics",
    // Physics & Competitions
    "Bangladesh Physics Olympiad", "BdPhO", "Physics Olympiad", "IPHO", "national physics champion",
    "Physics Brawl", "PHIGA", "International Astronomy Competition", "IAAC",
    "NASA Space Apps Challenge", "exoplanet detection",
    // Programming & Competitive
    "LeetCode", "Codeforces", "competitive programming", "algorithm design", "data structures",
    "problem solving", "coding challenges", "Grepper",
    // Technologies - Frontend
    "React", "Next.js", "Next.js 13", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS",
    "Framer Motion", "Material UI", "Redux", "Vue", "VUE", "Ionic",
    // Technologies - Backend
    "Node.js", "Express.js", "Firebase", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "GraphQL",
    // Technologies - Languages
    "Python", "C++", "C", "C#", "Java", "Rust", "Bash", "Vala", "Go", "Ruby", "Swift",
    // Technologies - Tools & Platforms
    "Docker", "Git", "GitHub", "Tauri", "QT5", "FITZ", "Figma",
    "Jupiter Notebook", "Jupyter", "PyTorch", "OpenCV", "Machine Learning", "ML", "AI", "Artificial Intelligence",
    // Projects & Platforms
    "Linux distro", "Ubuntu", "Elementary OS", "operating system development",
    "food delivery app", "real-time chat", "email servers",
    "anti-vishing", "vishing protection", "call analysis", "Conrad Challenge",
    "math website", "Josephite Math Club", "user system", "article system", "contest system",
    "desktop manager", "LaTeX generator", "basketball coach website",
    "dev.to blogger", "technical writing", "HackClub", "Hack Club Arcade",
    // General
    "portfolio", "student developer", "open source", "web development", "game development",
    "St. Joseph Higher Secondary School", "CS50"
  ],
  authors: [{ name: "Tawhid" }],
  metadataBase: new URL("https://tawhid.is-a.dev"),
  alternates: {
    canonical: "https://tawhid.is-a.dev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Tawhid Bin Omar - Game Dev, Robotics Engineer & Physicist",
    description: "🏆 Physics Olympiad Champion (BdPhO, PHIGA #1 worldwide) | 🎮 Lead Game Developer (Pyxl Chronicles, 230+ players) | 🤖 Robotics-for-Good Engineer | 💻 Top 7% LeetCode | Built 15+ projects: custom game engines, AI systems, assistive robotics, PlayNux OS.",
    url: "https://tawhid.is-a.dev",
    siteName: "Tawhid's Portfolio",
    images: [
      {
        url: "https://tawhid.is-a.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tawhid Bin Omar - Game Developer, Robotics Engineer & Physics Olympiad Champion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid Bin Omar - Game Dev, Robotics Engineer & Physicist",
    description: "🏆 Physics Olympiad Champion | 🎮 Custom Game Engine Dev | 🤖 Assistive Robotics | 💻 Top 7% LeetCode | Built Pyxl Chronicles (230+ players), PlayNux OS, AI systems & 15+ projects.",
    images: ["https://tawhid.is-a.dev/og-image.png"],
    creator: "@tawhid_omar", 
  },
  icons: {
    icon: "/tawhid.png",
    apple: "/tawhid.png",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tawhid Bin Omar",
    "alternateName": ["Ren", "Dumbo-programmer", "Tawhid"],
    "url": "https://tawhid.is-a.dev",
    "image": "https://tawhid.is-a.dev/tawhid.png",
    "sameAs": [
      "https://github.com/Dumbo-programmer",
      "https://discord.com/users/707079802531872769",
      "https://www.facebook.com/tawhid.bin.omar.2024/",
      "https://instagram.com/renscule",
      "https://www.linkedin.com/in/tawhid-omar-7a0320212/",
      "https://dev.to/dumbo_programmer",
      "https://leetcode.com/u/Dumbo-programmer/",
      "https://codeforces.com/profile/Dumbo-programmer",
      "https://pyxl-chronicles.itch.io"
    ],
    "jobTitle": "Full Stack Developer, Game Developer & Student",
    "description": "Full stack developer, lead game developer at Pyxl Chronicles, robotics-for-good engineer, and physicist. Built custom game engines with AI and procedural generation. Physics Olympiad champion (BdPhO national champion, PHIGA #1 worldwide, Physics Brawl top 29/1584 teams). Competitive programmer ranked top 7% on LeetCode. Also known as Ren and Dumbo-programmer.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "St. Joseph Higher Secondary School"
    },
    "knowsAbout": [
      "Game Development", "Custom Game Engines", "Procedural Generation", "AI Systems",
      "Robotics", "Assistive Technology", "Autonomous Systems", "Mechatronics", "Embedded Systems",
      "Web Development", "Full Stack Development", "Mobile Development",
      "Physics", "Competitive Physics", "Astrophysics",
      "Competitive Programming", "Algorithms", "Data Structures",
      "Machine Learning", "Artificial Intelligence", "Computer Vision",
      "React", "Next.js", "Node.js", "Unity", "C#", "Python", "C++", "TypeScript",
      "Firebase", "MongoDB", "PostgreSQL", "CI/CD", "Performance Optimization",
      "Linux", "Operating System Development", "Cross-platform Development"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bangladesh Physics Olympiad National Champion",
        "description": "2x regional champion, 2x nationalist, 1x national champion, IPHO national camper"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "PHIGA Physics Competition - 1st Place Worldwide",
        "description": "Achieved 1st place out of 1,211 participants worldwide in the PHIGA International Gamified Physics Competition"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Physics Brawl - Top 29 Team",
        "description": "29th place out of 1,584 teams internationally, 10th nationwide"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "International Astronomy and Astrophysics Competition - Silver Honor",
        "description": "Silver honor and special recognition for well-typesetted solution"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "LeetCode Top 7%",
        "description": "Solved 200+ problems, ranked in top 7% of all users (12.2 million)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Codeforces 1300+ Rating",
        "description": "Achieved rating of 1300+ solving competitive programming problems"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "NASA Space Apps Challenge",
        "description": "Created AI/ML model to identify exoplanets from datasets"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "CS50 Certificate",
        "description": "Completed CS50 and various programming bootcamps"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Pyxl Chronicles",
        "url": "https://pyxl-chronicles.itch.io",
        "description": "Lead Game Developer: Led a 6-developer studio to design and launch an indie horror game with 230+ early players. Built a custom game engine combining 2D mechanics with realistic 3D visuals, implementing AI systems, procedural content generation, and performance-optimized rendering. Improved performance by 50-80% through custom optimization strategies. Managed the full development pipeline—80+ builds, 200+ commits, CI/CD automation, profiling, and cross-platform deployment (Windows/Linux). Leveraged the engine to create 4 additional trending Android games with more than 10k+ active players.",
        "keywords": "indie horror, custom game engine, procedural generation, AI systems, performance optimization, CI/CD, cross-platform, Android games, Unity, C#, game development"
      },
      {
        "@type": "Organization",
        "name": "Team Nokkhotropoth",
        "url": "#",
        "description": "Mechanical Engineering Department Lead & Robotics-for-Good co-founder: Co-founded and co-led a 4-member R&D team (robotics-for-good) tackling accessibility, healthcare, and disaster response in underdeveloped regions. Designed and deployed 10-15 autonomous assistive systems, including robotic canes, HUD captioning glasses, spatial-audio hearing aids, and communication wearables. Led system integration, testing, documentation, and alignment with UN Sustainable Development Goals.",
        "keywords": "robotics-for-good, assistive systems, autonomous systems, UAV, mechatronics, embedded systems, UN SDG, accessibility, healthcare robotics, disaster response"
      },
      {
        "@type": "Organization",
        "name": "Ongko",
        "url": "#",
        "description": "Academic team member contributing to educational initiatives, math olympiad preparation, physics olympiad training, and academic excellence programs.",
        "keywords": "education, math olympiad, physics olympiad, academic excellence"
      },
      {
        "@type": "Organization",
        "name": "Dev.to",
        "url": "https://dev.to/dumbo_programmer",
        "description": "Technical blogger with over 50 blogs, 1300+ followers, and 78k+ post views on Dev.to community platform.",
        "keywords": "technical writing, blogging, dev.to, developer community"
      },
      {
        "@type": "Organization",
        "name": "Grepper",
        "url": "#",
        "description": "Helped 54,117 developers find answers to 85,850 programming problems through code contributions.",
        "keywords": "code answers, developer help, programming solutions"
      },
      {
        "@type": "Organization",
        "name": "Hack Club",
        "url": "#",
        "description": "Participated in Hack Club Arcade summer hackathon and created more than 20 projects.",
        "keywords": "hackathon, Hack Club, Arcade, maker community"
      }
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://tawhid.is-a.dev",
    "name": "Tawhid's Portfolio",
    "publisher": {
      "@type": "Person",
      "name": "Tawhid Bin Omar",
      "url": "https://tawhid.is-a.dev"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tawhid.is-a.dev/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tawhid Bin Omar",
    "url": "https://tawhid.is-a.dev",
    "logo": "https://tawhid.is-a.dev/tawhid.png",
    "sameAs": [
      "https://github.com/Dumbo-programmer",
      "https://instagram.com/renscule",
      "https://www.linkedin.com/in/tawhid-omar-7a0320212/"
    ]
  };

  const navigation = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": "https://tawhid.is-a.dev",
    "about": [
      { "name": "About", "url": "https://tawhid.is-a.dev/#about-me" },
      { "name": "Skills", "url": "https://tawhid.is-a.dev/#skills" },
      { "name": "Projects", "url": "https://tawhid.is-a.dev/#projects" },
      { "name": "Research", "url": "https://tawhid.is-a.dev/#current-projects" },
      { "name": "Notes", "url": "https://tawhid.is-a.dev/notes" }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tawhid.is-a.dev" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://tawhid.is-a.dev/#projects" },
      { "@type": "ListItem", "position": 3, "name": "Research", "item": "https://tawhid.is-a.dev/#current-projects" }
    ]
  };

  const projects = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Portfolio Projects",
    "itemListElement": [
      {
        "@type": "CreativeWork",
        "position": 1,
        "name": "Pyxl Chronicles",
        "description": "Indie horror game with 230+ players. Custom game engine with 2D mechanics, 3D visuals, AI systems, procedural generation, 50-80% performance improvements, CI/CD automation, cross-platform deployment.",
        "url": "https://pyxl-chronicles.itch.io",
        "keywords": "indie horror, custom game engine, AI, procedural generation, Unity, C#, performance optimization, CI/CD, Android",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 2,
        "name": "PlayNux Operating System",
        "description": "Linux distribution based on Ubuntu and Elementary OS, created as a project for the PlayNux console concept.",
        "url": "https://github.com/orgs/PlayNux/repositories",
        "keywords": "Linux distro, Ubuntu, Elementary OS, operating system, C, C++, Vala, Bash, Rust",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 3,
        "name": "Vocal Guard Antivishing AI",
        "description": "AI-based anti-vishing system using ML to identify callers and live analyze calls for protection. Built for Conrad Challenge 2025.",
        "url": "https://vocalguard.netlify.app",
        "keywords": "anti-vishing, AI, ML, call analysis, voice phishing protection, Conrad Challenge, Python, Firebase",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 4,
        "name": "Concept Vector",
        "description": "AI tool that evaluates subject understanding and provides a flow of concepts for learning optimization.",
        "url": "https://conceptvector.netlify.app/",
        "keywords": "AI, ML, education technology, concept learning, Python, Jupyter Notebook",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 5,
        "name": "Preron Food Delivery App",
        "description": "Complete food delivery ecosystem for customers, clients, and riders with dedicated chat and email servers. Founded 2021-2023.",
        "url": "https://github.com/Dumbo-programmer/Preron-Re",
        "keywords": "food delivery, real-time chat, email servers, Ionic, Vue, Firebase, Node.js",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 6,
        "name": "Team Nokkhotropoth Robotics",
        "description": "Robotics-for-good R&D team building 10-15 autonomous assistive systems: robotic canes, HUD glasses, spatial-audio hearing aids, communication wearables aligned with UN SDGs.",
        "url": "#",
        "keywords": "robotics-for-good, assistive systems, autonomous systems, UAV, mechatronics, UN SDG, accessibility, healthcare",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 7,
        "name": "Josephite Math Club Website",
        "description": "Math website with user system, article system, and math contest system built for Josephite Math Club.",
        "url": "https://josephitemathc.netlify.app/",
        "keywords": "math website, user system, contest system, React, Vue, MongoDB",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 8,
        "name": "Desktop Manager",
        "description": "Desktop manager for managing Ebooks, Programming Projects, Assets, and Unity projects. Built with QT5 and FITZ.",
        "url": "https://github.com/Dumbo-programmer/SehtajDesk",
        "keywords": "desktop manager, project management, Python, QT5, FITZ",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      },
      {
        "@type": "CreativeWork",
        "position": 9,
        "name": "LaTeX Code Generator",
        "description": "Tool to quickly generate mathematical LaTeX code for equations and formulas.",
        "url": "https://github.com/Dumbo-programmer/Latex-code-generator",
        "keywords": "LaTeX, math equations, code generator, Python, mathematics",
        "creator": { "@type": "Person", "name": "Tawhid Bin Omar", "url": "https://tawhid.is-a.dev" }
      }
    ]
  };

  const jsonLd = [person, website, organization, navigation, breadcrumb, projects];

  return (
    <main className="h-full w-full" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-20">
        <LoadingScreen />
        <Hero />
        <Skills />
        <Achievements />
        <Projects />
        <Research />
      </div>
    </main>
  );
}
