// app/page.tsx

import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Achievements";
import Projects from "@/components/main/Projects";
import Research from "@/components/main/Research";
import LoadingScreen from "@/components/main/LoadingScreen";

const WIP = dynamic(() => import('@/components/main/WIP'), { ssr: false });

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tawhid's Portfolio | Developer",
  description: "Explore the portfolio of Tawhid, a full stack developer skilled in React, Next.js, Node.js, and more.",
  keywords: [
    "Tawhid", "portfolio", "developer", "full stack",
    "React", "Next.js", "Node.js", "TypeScript",
    "Game Development", "Web Development", "Unity", "C#"
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
    title: "Tawhid's Portfolio",
    description: "Check out my development projects and skills.",
    url: "https://tawhid.is-a.dev",
    siteName: "Tawhid's Portfolio",
    images: [
      {
        url: "/NavLogo.png", // ensure this image is in the /public folder
        width: 800,
        height: 600,
        alt: "Tawhid-Bin-Omar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid's Portfolio",
    description: "Explore my developer projects and skills on my portfolio.",
    images: ["/NavLogo.png"],
    creator: "@tawhid_omar", 
  },
  icons: {
    icon: "/NavLogo.png",
    apple: "/NavLogo.png",
  },
  viewport: "width=device-width, initial-scale=1",
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
      </div>
    </main>
  );
}
