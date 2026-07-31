// app/page.tsx

import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import SeoImageLayer from "@/components/main/SeoImageLayer";
import Skills from "@/components/main/Skills";
import Achievements from "@/components/main/Achievements";
import Projects from "@/components/main/Projects";
import EducationImpactSection from "@/components/main/EducationImpactSection";
import Research from "@/components/main/Research";
import LibrarySection from "@/components/main/LibrarySection";
import LoadingScreen from "@/components/main/LoadingScreen";

const WIP = dynamic(() => import('@/components/main/WIP'), { ssr: false });

import type { Metadata } from "next";
import { allPhotos } from "@/constants/gallery";

export const metadata: Metadata = {
  title: "Tawhid Bin Omar — Physics, Number Theory, Competitive Programming & STEM Education",
  description: "Aspiring physicist, number theory enthusiast, and competitive programmer building STEM education infrastructure in Bangladesh. Creator of the Open Problem Solving Library — free open-access problem solving resources, Olympiad training programs, and assistive robotics. Physics Olympiad champion (BdPhO National, PHIGA #1 worldwide). Driven by a deep curiosity about how the universe works and the belief that a student's zip code should not determine their educational outcome.",
  keywords: [
    "Open Problem Solving Library", "Bangladesh STEM Education", "Free Educational Resources",
    "Olympiad Mathematics", "Olympiad Physics", "Olympiad Programming",
    "STEM Education Bangladesh", "Open Educational Resources", "Bangladesh Mathematics",
    "Problem Solving", "Free Math Books", "Free Physics Notes",
    "Teacher Resources Bangladesh", "Bangla STEM", "Open Textbooks",
    "Mathematics Library", "Physics Library", "Programming Library",
    "Computational Thinking", "Creative Problem Solving", "Critical Thinking",
    "Education Reform Bangladesh", "Student Research",
    "Tawhid Bin Omar", "Dumbo-programmer", "Tawhid",
    "Tawhid Bin Omar photos", "Tawhid Bin Omar images", "Tawhid Bin Omar picture",
    "full stack developer", "game developer", "physicist", "robotics engineer",
    "Pyxl Chronicles", "Team Nokkhotropoth", "Ongko", "PlayNux", "Vocal Guard",
    "Bangladesh Physics Olympiad", "BdPhO", "PHIGA", "Physics Olympiad",
    "competitive programming", "algorithms", "data structures",
    "React", "Next.js", "TypeScript", "Python", "C++", "Unity",
    "open source", "STEM education", "education technology",
    "Bangladesh education", "free learning resources",
    "math olympiad training", "physics olympiad notes",
    "Bangla STEM education", "Olympiad preparation Bangladesh",
    "STEM education", "problem solving", "open educational resources",
    "Olympiad preparation", "teacher resources", "computational thinking",
    "education in Bangladesh", "mathematics education", "physics education",
    "programming education", "student research", "Bangladesh problem solving",
  ],
  authors: [{ name: "Tawhid Bin Omar", url: "https://tawhid.is-a.dev" }],
  metadataBase: new URL("https://tawhid.is-a.dev"),
  alternates: {
    canonical: "https://tawhid.is-a.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Tawhid Bin Omar — Physics, Number Theory, Competitive Programming & STEM Education",
    description: "Aspiring physicist, number theory enthusiast, competitive programmer, and STEM educator. Creator of the Open Problem Solving Library. Physics Olympiad champion (BdPhO National, PHIGA #1 worldwide). Free STEM education resources for Bangladesh: mathematics, physics, competitive programming, and astronomy.",
    url: "https://tawhid.is-a.dev",
    siteName: "Tawhid Bin Omar — Open Problem Solving Library",
    images: [
      {
        url: "https://tawhid.is-a.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tawhid Bin Omar — Aspiring physicist, Avid Problem Solver, Robotics Enthusiast",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid Bin Omar — Physics, Number Theory, Competitive Programming & STEM Education",
    description: "Aspiring physicist, number theory enthusiast, competitive programmer, and STEM educator. Creator of the Open Problem Solving Library. Physics Olympiad champion. Free STEM education resources for Bangladesh.",
    images: ["https://tawhid.is-a.dev/og-image.png"],
    creator: "@tawhid_omar",
  },
  icons: {
    icon: "/tawhid.png",
    apple: "/tawhid.png",
  },
  viewport: "width=device-width, initial-scale=1",
  category: "education",
  other: {
    "geo.country": "BD",
  },
};

export default function Home() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://tawhid.is-a.dev/#person",
    "name": "Tawhid Bin Omar",
    "alternateName": ["Ren", "Dumbo-programmer", "Tawhid", "Tawhid Omar"],
    "givenName": "Tawhid",
    "familyName": "Bin Omar",
    "url": "https://tawhid.is-a.dev",
    "image": [
      {
        "@type": "ImageObject",
        "name": "Tawhid Bin Omar — profile photo",
        "description": "Profile photo of Tawhid Bin Omar, Bangladeshi physicist, competitive programmer, and STEM educator.",
        "url": "https://tawhid.is-a.dev/tawhid.png",
        "contentUrl": "https://tawhid.is-a.dev/tawhid.png",
        "representativeOfPage": true
      },
      ...allPhotos.map((photo) => ({
        "@type": "ImageObject",
        "name": photo.title,
        "description": photo.caption,
        "caption": photo.alt,
        "url": `https://tawhid.is-a.dev${photo.src}`,
        "contentUrl": `https://tawhid.is-a.dev${photo.src}`,
        "width": photo.width,
        "height": photo.height,
        "keywords": photo.keywords.join(", "),
        "creator": { "@id": "https://tawhid.is-a.dev/#person" },
      })),
    ],
    "sameAs": [
      "https://github.com/Dumbo-programmer",
      "https://www.linkedin.com/in/tawhidbinomar/",
      "https://www.facebook.com/tawhiddayo/",
      "https://instagram.com/renscule",
      "https://dev.to/dumbo_programmer",
      "https://leetcode.com/u/Dumbo-programmer/",
      "https://codeforces.com/profile/Dumbo-programmer",
      "https://pyxl-chronicles.itch.io",
      "https://discord.com/users/707079802531872769",
      "https://www.youtube.com/@tawhidbinomar",
    ],
    "jobTitle": [
      "Aspiring Physicist & Number Theory Enthusiast",
      "Competitive Programmer & Problem Solver",
      "STEM Educator & Problem Solving Curriculum Developer",
      "President of St. Joseph Higher Secondary School Math Club",
      "Full Stack Developer",
      "Physics Olympiad Champion — BdPhO National Champion, PHIGA #1 Worldwide",
    ],
    "description":
      "Tawhid Bin Omar is a Bangladesh-based aspiring physicist, number theory enthusiast, competitive programmer, and STEM educator. Physics Olympiad champion (BdPhO National Champion, PHIGA 1st place worldwide out of 1,211), creator of the Open Problem Solving Library — a free open-access STEM education platform. He serves as President of the St. Joseph Higher Secondary School Math Club in Dhaka, where he leads the Math Bootcamp program, mentors Olympiad aspirants, conducts teacher training, and creates open educational resources in mathematics, physics, competitive programming, and astronomy. Beyond education, he is a full stack developer, game developer (Pyxl Chronicles), robotics-for-good engineer (Team Nokkhotropoth), and a lifelong learner of quantum physics, number theory, and algorithms.",
    "nationality": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "knowsLanguage": ["en", "bn"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "personal",
      "email": "tawhidbinomar@gmail.com",
      "availableLanguage": ["en", "bn"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "birthPlace": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      }
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "St. Joseph Higher Secondary School"
      }
    ],
    "affiliation": [
      {
        "@type": "Organization",
        "name": "St. Joseph Higher Secondary School Math Club",
        "url": "https://tawhid.is-a.dev/#education-impact"
      },
      {
        "@type": "Organization",
        "name": "Bangladesh Physics Olympiad (BdPhO)",
        "url": "https://physicsolympiad.org.bd"
      },
      {
        "@type": "Organization",
        "name": "PHIGA International Physics Competition"
      },
      {
        "@type": "Organization",
        "name": "Scintilla Science Club",
        "url": "https://tawhid.is-a.dev/#education-impact"
      }
    ],
    "knowsAbout": [
      "Physics",
      "Quantum Physics",
      "Astrophysics",
      "General Relativity",
      "Thermodynamics",
      "Competitive Physics",
      "Number Theory",
      "Analytic Number Theory",
      "Combinatorics",
      "Geometry",
      "Algebra",
      "Mathematics",
      "Competitive Programming",
      "Algorithms",
      "Data Structures",
      "Artificial Intelligence",
      "Machine Learning",
      "STEM Education Bangladesh",
      "Problem Solving Pedagogy",
      "Mathematics Olympiad Training",
      "Physics Olympiad Training",
      "Competitive Programming Education",
      "Open Educational Resources",
      "Bangladesh Education Reform",
      "Teacher Training and Curriculum Development",
      "Game Development",
      "Custom Game Engines",
      "Robotics for Good",
      "Assistive Technology",
      "Full Stack Web Development",
    ],
    "award": [
      {
        "@type": "Award",
        "name": "Bangladesh Physics Olympiad — National Champion",
        "description": "2x regional champion, 2x nationalist, 1x national champion, IPHO national camper"
      },
      {
        "@type": "Award",
        "name": "PHIGA Physics Competition — 1st Place Worldwide",
        "description": "Achieved 1st place out of 1,211 participants worldwide"
      },
      {
        "@type": "Award",
        "name": "Physics Brawl — Top 29 Teams Internationally",
        "description": "29th place out of 1,584 teams, 10th nationwide"
      },
      {
        "@type": "Award",
        "name": "IAAC — Silver Honor, International Astronomy and Astrophysics Competition"
      },
      {
        "@type": "Award",
        "name": "LeetCode Top 7% — Solved 200+ Problems"
      },
      {
        "@type": "Award",
        "name": "Codeforces 1300+ Rating"
      },
      {
        "@type": "Award",
        "name": "NASA Space Apps Challenge — Exoplanet AI Model"
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
    "@id": "https://tawhid.is-a.dev/#website",
    "url": "https://tawhid.is-a.dev",
    "name": "Tawhid Bin Omar — Portfolio",
    "publisher": {
      "@type": "Person",
      "@id": "https://tawhid.is-a.dev/#person",
      "name": "Tawhid Bin Omar",
      "url": "https://tawhid.is-a.dev"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tawhid.is-a.dev/notes?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tawhid.is-a.dev/#organization",
    "name": "Open Problem Solving Library — Tawhid Bin Omar",
    "url": "https://tawhid.is-a.dev",
    "logo": "https://tawhid.is-a.dev/tawhid.png",
    "description": "Free open-access STEM education platform for Bangladesh, founded by Tawhid Bin Omar. Provides educational resources in mathematics, physics, competitive programming, and astronomy for students, teachers, and Olympiad participants.",
    "foundingDate": "2026",
    "founder": {
      "@type": "Person",
      "@id": "https://tawhid.is-a.dev/#person",
      "name": "Tawhid Bin Omar"
    },
    "sameAs": [
      "https://github.com/Dumbo-programmer",
      "https://www.linkedin.com/in/tawhidbinomar/",
      "https://www.facebook.com/tawhiddayo/"
    ]
  };

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://tawhid.is-a.dev/#profile-page",
    "name": "Tawhid Bin Omar — Portfolio",
    "headline": "Tawhid Bin Omar — Physicist, Number Theorist, Competitive Programmer & STEM Educator",
    "description":
      "The official online profile of Tawhid Bin Omar — aspiring physicist, number theory enthusiast, competitive programmer, and STEM educator from Dhaka, Bangladesh. Creator of the Open Problem Solving Library, BdPhO National Champion, PHIGA 1st place worldwide.",
    "url": "https://tawhid.is-a.dev",
    "inLanguage": "en",
    "isPartOf": { "@id": "https://tawhid.is-a.dev/#website" },
    "mainEntity": { "@id": "https://tawhid.is-a.dev/#person" },
    "about": { "@id": "https://tawhid.is-a.dev/#person" },
    "creator": { "@id": "https://tawhid.is-a.dev/#person" },
    "author": { "@id": "https://tawhid.is-a.dev/#person" },
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
      { "name": "Education Impact", "url": "https://tawhid.is-a.dev/#education-impact" },
      { "name": "Research", "url": "https://tawhid.is-a.dev/#current-projects" },
      { "name": "Library", "url": "https://tawhid.is-a.dev/notes" }
    ]
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tawhid.is-a.dev" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://tawhid.is-a.dev/#projects" },
      { "@type": "ListItem", "position": 3, "name": "Education Impact", "item": "https://tawhid.is-a.dev/#education-impact" },
      { "@type": "ListItem", "position": 4, "name": "Research", "item": "https://tawhid.is-a.dev/#current-projects" }
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

  const educationalProgram = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "Open Problem Solving Library — STEM Education Resources",
    "description": "Free open-access STEM education platform providing educational resources in mathematics, physics, competitive programming, and astronomy for students, teachers, and Olympiad participants in Bangladesh.",
    "educationalCredentialAwarded": "Certificate of Completion",
    "educationalProgramMode": "DistanceLearning",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Person",
      "@id": "https://tawhid.is-a.dev/#person",
      "name": "Tawhid Bin Omar"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Students in Bangladesh", "Olympiad Aspirants", "STEM Learners", "Teachers"]
    },
    "teaches": ["Mathematics", "Physics", "Competitive Programming", "Astronomy", "Problem Solving"],
    "inLanguage": ["en", "bn"],
    "timeRequired": "Self-paced",
    "numberOfCredits": 0,
    "occupationalCategory": "Educational Resources",
    "programPrerequisites": "None — open to all skill levels",
    "applicationDeadline": "Rolling admission"
  };

  const jsonLd = [person, profilePage, website, organization, navigation, breadcrumb, projects, educationalProgram];

  return (
    <main className="h-full w-full" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-20">
        <LoadingScreen />
        <Hero />
        <SeoImageLayer />
        <Skills />
        <Achievements />
        <Projects />
        <EducationImpactSection />
        <Research />
        <LibrarySection />
      </div>
    </main>
  );
}
