import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Problem Solving Library — Free STEM Education & Olympiad Resources for Bangladesh",
  description: "Bangladesh's free open-access STEM library: mathematics, physics, competitive programming, and astronomy resources for students (Grades 3–12), Olympiad participants, teachers, and researchers. Download free handouts, problem sets, research papers, and educational articles in Bangla and English. Open educational resources for BdPhO, BdMO, IPhO, IMO, IOI, and international Olympiad preparation.",
  keywords: [
    "Bangladesh Mathematics", "Bangladesh STEM", "Open Educational Resources",
    "Problem Solving", "Olympiad Mathematics", "Olympiad Physics", "Olympiad Programming",
    "Free Math Books", "Free Physics Notes", "Mathematics Library",
    "Physics Library", "Programming Library", "Student Research",
    "STEM Education Bangladesh", "Open Science", "Open Mathematics",
    "Problem Solving Curriculum", "Math Curriculum", "Physics Curriculum",
    "Coding Curriculum", "Critical Thinking", "Computational Thinking",
    "Creative Problem Solving", "Education Reform Bangladesh", "Teacher Resources",
    "Learning Resources", "Open Textbooks", "Open Learning",
    "Open Library", "Free Educational Resources", "Mathematics Education",
    "Physics Education", "Programming Education", "Bangla Mathematics",
    "Bangla Physics", "Bangla STEM", "Mathematical Thinking",
    "Scientific Thinking", "Research for High School Students",
    "Tawhid Bin Omar", "Dumbo-programmer",
    "BdPhO", "Bangladesh Physics Olympiad", "Bangladesh Math Olympiad", "BdMO",
    "Physics Olympiad", "Math Olympiad", "Olympiad training",
    "Competitive programming Bangladesh", "STEM resources Bangladesh",
    "Free study materials", "Open access education", "Digital library Bangladesh",
    "Bangladesh education platform", "STEM learning resources",
    "Bangla educational resources", "Olympiad preparation Bangladesh",
    "Free textbooks Bangladesh", "Online learning Bangladesh",
    "Bangladesh open library", "Free STEM books Bangladesh",
    "Olympiad problem solving", "Math olympiad training",
    "Physics olympiad notes", "Programming contest training",
    "Competitive programming handouts", "Bangla STEM education",
    "Open problem solving", "Free learning Bangladesh",
    "IMO preparation", "IPhO preparation", "IOI preparation",
    "Bangladesh education reform", "STEM curriculum Bangladesh",
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
  openGraph: {
    title: "Open Problem Solving Library — Free STEM Education for Bangladesh",
    description: "Free mathematics, physics, competitive programming, and astronomy resources for learners, educators, and Olympiad students. Download handouts, problem sets, research papers, and articles in Bangla and English. Open-access educational platform for STEM education in Bangladesh.",
    url: "https://tawhid.is-a.dev/notes",
    siteName: "Open Problem Solving Library",
    images: [
      {
        url: "https://tawhid.is-a.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Problem Solving Library — Free STEM Education and Olympiad Resources for Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Bangladesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Problem Solving Library — Free STEM Education for Bangladesh",
    description: "Free mathematics, physics, competitive programming, and astronomy resources for learners, educators, and Olympiad students. Open-access educational platform.",
    images: ["https://tawhid.is-a.dev/og-image.png"],
    creator: "@tawhid_omar",
  },
  icons: {
    icon: "/tawhid.png",
    apple: "/tawhid.png",
  },
  alternates: {
    canonical: "https://tawhid.is-a.dev/notes",
    languages: {
      "en": "https://tawhid.is-a.dev/notes",
      "bn": "https://tawhid.is-a.dev/notes",
    },
  },
  category: "education",
  classification: "Educational Resources",
  other: {
    "geo.country": "BD",
    "content-language": "en, bn",
  },
};

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
