// /app/page.tsx

import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Research from "@/components/main/Research";
import WIP from "@/components/main/WIP";
import LoadingScreen from "@/components/main/LoadingScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tawhid's Portfolio | Developer",
  description:
    "Explore the portfolio of Tawhid, a full stack developer skilled in React, Next.js, Node.js, and more.",
  keywords: [
    "Tawhid",
    "portfolio",
    "web developer",
    "full stack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Tawhid" }],
  openGraph: {
    title: "Tawhid's Portfolio",
    description:
      "Check out my full stack development projects and skills.",
    url: "https://tawhid.is-a.dev",
    images: [
      {
        url: "/NavLogo.png", // Make sure it's in the public folder
        width: 800,
        height: 600,
        alt: "Tawhid Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid's Portfolio",
    description:
      "Explore my developer projects and skills on Tawhid's portfolio.",
    images: ["/NavLogo.png"],
  },
};

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <LoadingScreen />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Research />
        <WIP />
      </div>
    </main>
  );
}
