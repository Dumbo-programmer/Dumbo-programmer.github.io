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
    default: "Tawhid Bin Omar — Physicist, Rust & STEM Educator",
    template: "%s | Tawhid Bin Omar",
  },
  description:
    "Physics Olympiad champion, published researcher, and STEM educator building free problem-solving resources for 700+ students in Bangladesh.",
  authors: [{ name: "Tawhid Bin Omar", url: "https://tawhid.is-a.dev" }],
  creator: "Tawhid Bin Omar",
  publisher: "Tawhid Bin Omar",
  applicationName: "Tawhid Bin Omar — Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  themeColor: "#030014",
  formatDetection: { telephone: false },
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
    title: "Tawhid Bin Omar — Physicist, Rust & STEM Educator",
    description:
      "Physics Olympiad champion, published researcher, and STEM educator building free learning resources in Bangladesh.",
    url: "https://tawhid.is-a.dev",
    siteName: "Tawhid Bin Omar — Open Problem Solving Library",
    images: [{ url: "https://tawhid.is-a.dev/og-image.png", width: 1200, height: 630, alt: "Tawhid Bin Omar — portfolio" }],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tawhid Bin Omar — Physicist, Rust & STEM Educator",
    description:
      "Physics Olympiad champion, published researcher, and STEM educator building free learning resources in Bangladesh.",
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
