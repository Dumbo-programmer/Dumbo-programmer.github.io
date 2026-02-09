import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tawhid's Portfolio | Full Stack Developer & Physicist",
    template: "%s | Tawhid's Portfolio"
  },
  description: "Portfolio of Tawhid Bin Omar (Ren, Dumbo-programmer) - Full stack developer, lead game developer at Pyxl Chronicles, robotics-for-good engineer, physics olympiad champion (BdPhO, PHIGA), competitive programmer. Expert in custom game engines, AI systems, procedural generation, assistive robotics, web development.",
  keywords: [
    // Core Identity
    "Tawhid", "Tawhid Bin Omar", "Ren", "Dumbo-programmer", "portfolio", "developer",
    // Roles & Expertise
    "full stack developer", "game developer", "lead game developer", "indie game developer",
    "physicist", "robotics engineer", "mechanical engineer", "student developer",
    // Game Development
    "custom game engine", "indie horror game", "procedural generation", "game AI", "performance optimization",
    "Unity", "C#", "OpenGL", "Blender", "CI/CD", "cross-platform", "Android games",
    // Robotics & Hardware
    "robotics-for-good", "assistive systems", "autonomous systems", "UAV", "mechatronics",
    "embedded systems", "Arduino", "UN SDG", "accessibility technology", "healthcare robotics",
    // Physics & Competitions
    "Bangladesh Physics Olympiad", "BdPhO", "Physics Olympiad", "IPHO", "Physics Brawl",
    "PHIGA", "NASA Space Apps", "International Astronomy Competition",
    // Programming
    "LeetCode", "Codeforces", "competitive programming", "algorithms", "data structures",
    // Technologies
    "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Python", "C++",
    "Firebase", "MongoDB", "PostgreSQL", "Vue", "Ionic", "Tailwind CSS",
    "Machine Learning", "AI", "PyTorch", "OpenCV",
    // Projects
    "Pyxl Chronicles", "Team Nokkhotropoth", "Ongko", "PlayNux", "Vocal Guard",
    "Preron", "Concept Vector", "Josephite Math Club",
    // General
    "Game Development", "Web Development", "Physics", "Robotics", "open source"
  ],
  authors: [{ name: "Tawhid Bin Omar" }],
  creator: "Tawhid Bin Omar",
  metadataBase: new URL("https://tawhid.is-a.dev"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "AIb87YBCHR0yYrFkkuFPNPX0ZM41iD8QODY06HZBC4Q",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <ErrorBoundary>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
