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
    default: "Tawhid's Portfolio | Open Problem Solving Library — Bangladesh STEM Education",
    template: "%s | Tawhid's Portfolio"
  },
  description: "Tawhid Bin Omar — Creator of the Open Problem Solving Library, Bangladesh's free open-access STEM education platform. Full stack developer, Physics Olympiad champion (BdPhO, PHIGA #1 worldwide), competitive programmer, and robotics-for-good engineer. Free educational resources in mathematics, physics, programming, and astronomy.",
  keywords: [
    "Tawhid", "Tawhid Bin Omar", "Ren", "Dumbo-programmer",
    "Open Problem Solving Library", "Bangladesh STEM Education",
    "Open Educational Resources", "STEM Education Bangladesh",
    "Free Math Books", "Free Physics Notes", "Mathematics Library",
    "Physics Library", "Programming Library", "Olympiad Mathematics",
    "Olympiad Physics", "Olympiad Programming",
    "Bangladesh Mathematics", "Bangla STEM",
    "Problem Solving", "Critical Thinking", "Computational Thinking",
    "full stack developer", "game developer", "physicist", "robotics engineer",
    "Physics Olympiad", "BdPhO", "PHIGA", "Bangladesh Physics Olympiad",
    "competitive programming", "algorithms", "data structures",
    "React", "Next.js", "TypeScript", "Python", "C++",
    "Unity", "C#", "Firebase", "MongoDB", "PostgreSQL",
    "Pyxl Chronicles", "Team Nokkhotropoth", "Ongko", "PlayNux", "Vocal Guard",
    "Game Development", "Web Development", "Physics", "Robotics", "open source",
    "Bangladesh developer", "STEM education Bangladesh",
    "Free educational resources", "Bangla educational content",
  ],
  authors: [{ name: "Tawhid Bin Omar", url: "https://tawhid.is-a.dev" }],
  creator: "Tawhid Bin Omar",
  publisher: "Tawhid Bin Omar",
  metadataBase: new URL("https://tawhid.is-a.dev"),
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
  verification: {
    google: "AIb87YBCHR0yYrFkkuFPNPX0ZM41iD8QODY06HZBC4Q",
  },
  openGraph: {
    title: "Tawhid Bin Omar — STEM Education, Physics Olympiad & Open Problem Solving Library",
    description: "Creator of the Open Problem Solving Library. Physics Olympiad champion (BdPhO, PHIGA #1 worldwide). Full stack developer, competitive programmer, robotics engineer. Free STEM education resources for Bangladesh.",
    url: "https://tawhid.is-a.dev",
    siteName: "Tawhid Bin Omar — Open Problem Solving Library",
    images: [{ url: "https://tawhid.is-a.dev/og-image.png", width: 1200, height: 630, alt: "Tawhid Bin Omar - Open Problem Solving Library" }],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid Bin Omar — STEM Education & Open Problem Solving Library",
    description: "Creator of the Open Problem Solving Library. Physics Olympiad champion. Free STEM education resources for Bangladesh.",
    images: ["https://tawhid.is-a.dev/og-image.png"],
    creator: "@tawhid_omar",
  },
  icons: {
    icon: "/tawhid.png",
    apple: "/tawhid.png",
  },
  category: "education",
  other: {
    "geo.country": "BD",
    "content-language": "en, bn",
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
