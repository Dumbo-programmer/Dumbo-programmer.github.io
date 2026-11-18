import {
  FaChalkboardTeacher,
  FaCalculator,
  FaStar,
  FaBookOpen,
  FaUsers,
  FaRocket,
  FaSchool,
  FaPenFancy,
  FaClipboardList,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { ReactNode } from "react";
import { publishedProblemSetCount } from "@/constants/library";

export interface GallerySlide {
  id: string;
  image?: string;
  gradient: string;
  icon: ReactNode;
  title: string;
  organization: string;
  date: string;
  caption: string;
  imageAlt: string;
}

export interface Statistic {
  icon: ReactNode;
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface TimelineEntry {
  year: string;
  items: string[];
  isFuture?: boolean;
  highlight?: boolean;
}

export interface Initiative {
  icon: ReactNode;
  title: string;
  description: string;
}

export const sectionTitle = "Building the Next Generation of Problem Solvers";

export const sectionSubtitle =
  "Free, open-access learning infrastructure for students in Bangladesh — built through teaching, mentoring, and publishing.";

export const gallerySlides: GallerySlide[] = [
  {
    id: "math-workshop-one",
    image: "/sessions/tawhid-bin-omar-math-workshop.png",
    imageAlt:
      "Tawhid Bin Omar leading a mathematics problem-solving workshop at St. Joseph Higher Secondary School in Dhaka, Bangladesh — students working on Olympiad-level math problems on the whiteboard during a Math Club session.",
    gradient: "from-indigo-900/80 via-purple-900/80 to-pink-900/80",
    icon: <FaCalculator className="text-5xl text-purple-300" />,
    title: "Mathematics Problem-Solving Workshop",
    organization: "St. Joseph Higher Secondary School",
    date: "2024 – Present",
    caption:
      "Leading mathematics problem-solving workshops for aspiring Olympiad students at St. Joseph Higher Secondary School, covering number theory, combinatorics, and geometry.",
  },
  {
    id: "math-workshop",
    image: "/sessions/tawhid-bin-omar-math-bootcamp.jpg",
    imageAlt:
      "Tawhid Bin Omar teaching mathematics at St. Joseph Higher Secondary School Math Club in Dhaka — students engaged in collaborative problem solving during a Math Bootcamp session.",
    gradient: "from-indigo-900/80 via-purple-900/80 to-pink-900/80",
    icon: <FaCalculator className="text-5xl text-purple-300" />,
    title: "Mathematics Bootcamp Session",
    organization: "St. Joseph Higher Secondary School",
    date: "2024 – Present",
    caption:
      "Teaching mathematics through the Math Bootcamp program at St. Joseph Higher Secondary School, building strong problem-solving foundations for Olympiad aspirants.",
  },
  {
    id: "physics-demo",
    image: "/sessions/tawhid-bin-omar-physics-demonstration.jpg",
    imageAlt:
      "Tawhid Bin Omar conducting a physics demonstration for community outreach in Bangladesh — students observing a hands-on science experiment during a STEM education event.",
    gradient: "from-slate-900/80 via-blue-900/80 to-teal-900/80",
    icon: <FaRocket className="text-5xl text-purple-300" />,
    title: "Astrophysics, Astronomy Session",
    organization: "Community Outreach Program",
    date: "2025",
    caption:
      "Conducting interactive physics demonstrations during community outreach to spark curiosity about the natural world and encourage STEM learning.",
  },
  {
    id: "olympiad-mentoring",
    image: "/sessions/tawhid-bin-omar-olympiad-mentorship.jpg",
    imageAlt:
      "Tawhid Bin Omar mentoring Bangladesh Physics Olympiad (BdPhO) and mathematics Olympiad students at St. Joseph Higher Secondary School — preparing for national and international competitions.",
    gradient: "from-amber-900/80 via-purple-900/80 to-rose-900/80",
    icon: <FaStar className="text-5xl text-purple-300" />,
    title: "Olympiad Mentorship Program",
    organization: "BdPhO & St. Joseph Higher Secondary School",
    date: "2024 – Present",
    caption:
      "Mentoring students preparing for national and international Olympiads in mathematics and physics through structured problem-solving sessions and personalized guidance.",
  },
  {
    id: "stem-teaching-session",
    image: "/sessions/tawhid-bin-omar-teaching-session.jpg",
    imageAlt:
      "Tawhid Bin Omar teaching a STEM session to students in Bangladesh — a classroom problem-solving session led by the President of the St. Joseph Higher Secondary School Math Club.",
    gradient: "from-emerald-900/80 via-cyan-900/80 to-slate-900/80",
    icon: <FaChalkboardTeacher className="text-5xl text-purple-300" />,
    title: "Hosted mathematical event with over 25 segments",
    organization: "St. Joseph Higher Secondary School",
    date: "2025 – Present",
    caption:
      "Teaching STEM and problem solving in the classroom as President of the St. Joseph Higher Secondary School Math Club.",
  },
  {
    id: "8th-jmm-speech",
    image: "/sessions/tawhid-bin-omar-8thjmm-speech.JPG",
    imageAlt:
      "Tawhid Bin Omar delivering a speech at the 8th Josephite Math Mania, one of the largest mathematical events in Bangladesh.",
    gradient: "from-amber-900/80 via-purple-900/80 to-rose-900/80",
    icon: <FaStar className="text-5xl text-purple-300" />,
    title: "8th Josephite Math Mania",
    organization: "St. Joseph Higher Secondary School",
    date: "2026",
    caption:
      "Hosted the 8th Josephite Math Mania — one of the largest mathematical events in Bangladesh, uniting thousands of students across 25+ segments of competition, workshops, and celebration.",
  },
];

export const statistics: Statistic[] = [
  {
    icon: <FaChalkboardTeacher className="text-2xl" />,
    value: 40,
    suffix: "+",
    label: "Teaching sessions",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    value: 700,
    suffix: "+",
    label: "Students mentored",
  },
  {
    icon: <FaBookOpen className="text-2xl" />,
    value: 500,
    suffix: "+",
    label: "Pages published",
  },
  {
    icon: <FaStar className="text-2xl" />,
    value: 1000,
    suffix: "+",
    label: "Original problems authored",
  },
  {
    icon: <FaCalculator className="text-2xl" />,
    value: publishedProblemSetCount,
    suffix: "",
    label: "Published library sets",
  },
  {
    icon: <FaClipboardList className="text-2xl" />,
    value: 6,
    suffix: "+",
    label: "National events hosted",
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2022",
    items: ["Joined Josephite Math Club as an Academic Member"],
  },
  {
    year: "2023",
    items: ["Began tutoring mathematics to junior students", "Deepened involvement in Math Club activities"],
  },
  {
    year: "2024",
    items: [
      "Started teaching mathematics and programming workshops",
      "Led problem-solving sessions for Olympiad aspirants",
    ],
  },
  {
    year: "2024–2025",
    items: [
      "Served as Vice President & Head of Academics, Josephite Math Club",
      "Launched Math Bootcamp program",
      "Helped host 6+ national math events and competitions",
      "Began literacy school outreach program",
      "Authored 1000+ original problems across camps and competitions",
    ],
    highlight: true,
  },
  {
    year: "2026",
    items: [
      "President of Josephite Math Club",
      "Organized the 8th Josephite Math Mania \u2014 5000+ participants across 22 events",
      "Led 40+ teaching sessions across schools and clubs",
      "Launched Open Problem Solving Library",
      "Conducted teacher workshops and training sessions",
      "Expanded literacy school STEM curriculum",
    ],
    highlight: true,
  },
  {
    year: "Future",
    items: [
      "National Open Learning Platform",
      "Teacher Academy & Training Program",
      "Problem Solving Curriculum Development",
      "Open STEM Library & Open Textbooks",
      "Student Research Incubation Program",
    ],
    isFuture: true,
  },
];

export const initiatives: Initiative[] = [
  {
    icon: <FaBookOpen className="text-2xl" />,
    title: "Open Problem Solving Library",
    description:
      "Free handouts, problem sets, articles, and research in mathematics, physics, programming, and astronomy.",
  },
  {
    icon: <FaStar className="text-2xl" />,
    title: "Olympiad Mentorship",
    description:
      "Structured preparation for national and international mathematics, physics, and astronomy Olympiads.",
  },
  {
    icon: <FaCalculator className="text-2xl" />,
    title: "Math & Programming Workshops",
    description:
      "Hands-on sessions in number theory, combinatorics, algorithms, and Python/C++ for school and Olympiad learners.",
  },
  {
    icon: <FaSchool className="text-2xl" />,
    title: "Literacy School Outreach",
    description:
      "Computational thinking and STEM sessions for under-resourced students at St. Joseph Literacy School.",
  },
  {
    icon: <FaPenFancy className="text-2xl" />,
    title: "Bangla Articles & Teacher Resources",
    description:
      "Bilingual articles, handouts, and teaching guides that help educators bring advanced topics into ordinary classrooms.",
  },
];
