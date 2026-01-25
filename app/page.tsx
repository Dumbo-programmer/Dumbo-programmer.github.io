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
  title: "Tawhid's Portfolio | Developer",
  description: "Explore the portfolio of Tawhid, a full stack developer skilled in C#, C++, React, Next.js, Node.js, and more.",
  keywords: [
    "Tawhid", "Tawhid Bin Omar", "Ren", "Dumbo-programmer", "portfolio", "developer", "full stack",
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
    title: "Tawhid's Portfolio | Tawhid Bin Omar",
    description: "Check out my development projects and skills. Also known as Ren and Dumbo-programmer.",
    url: "https://tawhid.is-a.dev",
    siteName: "Tawhid's Portfolio",
    images: [
      {
        url: "/tawhid.png",
        width: 1200,
        height: 630,
        alt: "Tawhid Bin Omar - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid's Portfolio | Tawhid Bin Omar",
    description: "Explore my developer projects and skills on my portfolio.",
    images: ["/tawhid.png"],
    creator: "@tawhid_omar", 
  },
  icons: {
    icon: "/tawhid.png",
    apple: "/tawhid.png",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function Home() {
  const jsonLd = {
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
      "https://instagram.com/renisudesu"
    ],
    "jobTitle": "Full Stack Developer & Student",
    "description": "Full stack developer and physicist passionate about physics, programming, and innovation. Also known as Ren and Dumbo-programmer.",
    "knowsAbout": [
      "Web Development", "Game Development", "Physics", "Artificial Intelligence",
      "React", "Next.js", "Unity", "C#", "TypeScript", "Python"
    ]
  };

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
