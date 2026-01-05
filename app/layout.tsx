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
  description: "Portfolio of Tawhid Bin Omar - Full stack developer, physicist, and ambitious student passionate about physics, programming, and innovation. Explore projects in web development, game development, AI/ML, and more.",
  keywords: [
    "Tawhid", "Tawhid Bin Omar", "portfolio", "developer", "full stack",
    "React", "Next.js", "Node.js", "TypeScript", "Physics",
    "Game Development", "Web Development", "Unity", "C#", "AI", "ML"
  ],
  authors: [{ name: "Tawhid Bin Omar" }],
  creator: "Tawhid Bin Omar",
  metadataBase: new URL("https://tawhid.is-a.dev"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
