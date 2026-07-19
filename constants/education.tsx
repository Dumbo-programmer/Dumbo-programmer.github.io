import {
  FaChalkboardTeacher, FaLaptopCode, FaCalculator, FaStar,
  FaBookOpen, FaUsers, FaGlobeAsia, FaRocket, FaHandsHelping,
  FaGraduationCap, FaLightbulb, FaSchool, FaPenFancy,
  FaClipboardList, FaInfinity
} from "react-icons/fa";
import { SiGoogleclassroom, SiFuturelearn } from "react-icons/si";
import { ReactNode } from "react";

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
  "Through workshops, literacy-school outreach, Olympiad mentoring, and open educational resources, I am working toward making high-quality problem-solving education accessible to every student in Bangladesh.";

export const gallerySlides: GallerySlide[] = [
  {
    id: "math-workshop-one",
    image: "/sessions/one.png",
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
    image: "/sessions/two.jpg",
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
    image: "/sessions/three.jpg",
    imageAlt:
      "Tawhid Bin Omar conducting a physics demonstration for community outreach in Bangladesh — students observing a hands-on science experiment during a STEM education event.",
    gradient: "from-slate-900/80 via-blue-900/80 to-teal-900/80",
    icon: <FaRocket className="text-5xl text-purple-300" />,
    title: "Physics Demonstration Session",
    organization: "Community Outreach Program",
    date: "2025",
    caption:
      "Conducting interactive physics demonstrations during community outreach to spark curiosity about the natural world and encourage STEM learning.",
  },
  {
    id: "olympiad-mentoring",
    image: "/sessions/four.jpg",
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
  
];

export const statistics: Statistic[] = [
  {
    icon: <FaChalkboardTeacher className="text-2xl" />,
    value: 40,
    suffix: "+",
    label: "Teaching Sessions",
  },
  {
    icon: <FaUsers className="text-2xl" />,
    value: 700,
    suffix: "+",
    label: "Students Mentored",
  },

  {
    icon: <FaBookOpen className="text-2xl" />,
    value: 500,
    suffix: "+",
    label: "Pages of Educational Resources",
  },
  {
    icon: <FaCalculator className="text-2xl" />,
    value: 1000,
    suffix: "+",
    label: "Math Questions Created",
  },
  {
    icon: <FaStar className="text-2xl" />,
    value: 6,
    suffix: "+",
    label: "Math Events Hosted",
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2022",
    items: ["Joined St. Joseph Higher Secondary School as an Academic Member"],
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
    year: "2025",
    items: [
      "Appointed Head of Academics & Vice President of St. Joseph Higher Secondary School",
      "Launched Math Bootcamp program",
      "Hosted 6+ math events and competitions",
      "Began literacy school outreach program",
      "Created 1000+ original math problems",
    ],
    highlight: true,
  },
  {
    year: "2026",
    items: [
      "President of St. Joseph Higher Secondary School",
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
    icon: <FaSchool className="text-2xl" />,
    title: "Literacy School STEM",
    description:
      "Teaching programming and computational thinking to underprivileged students at the St. Joseph Literacy School, bridging the technology education gap.",
  },
  {
    icon: <FaLaptopCode className="text-2xl" />,
    title: "Programming Workshops",
    description:
      "Conducting hands-on programming workshops covering Python, C++, algorithms, and problem-solving for students at various skill levels.",
  },
  {
    icon: <FaCalculator className="text-2xl" />,
    title: "Mathematics Workshops",
    description:
      "Leading problem-solving workshops in number theory, combinatorics, geometry, and algebra for Olympiad preparation and beyond.",
  },
  {
    icon: <FaStar className="text-2xl" />,
    title: "Olympiad Mentorship",
    description:
      "Mentoring students for national and international Olympiads in mathematics, physics, and astronomy through structured guidance and practice.",
  },
  {
    icon: <FaBookOpen className="text-2xl" />,
    title: "Open Problem Solving Library",
    description:
      "Building a free, open-access library of educational resources in mathematics, physics, competitive programming, and astronomy.",
  },
  {
    icon: <FaPenFancy className="text-2xl" />,
    title: "Bangla Educational Articles",
    description:
      "Writing original educational content in Bangla to make advanced STEM topics accessible to Bengali-speaking students.",
  },
  {
    icon: <FaClipboardList className="text-2xl" />,
    title: "Teacher Resources",
    description:
      "Developing curricula, handouts, and teaching guides to help educators deliver high-quality STEM education in classrooms and clubs.",
  },
  {
    icon: <FaGraduationCap className="text-2xl" />,
    title: "Student Research",
    description:
      "Encouraging and mentoring students to undertake independent research projects in STEM fields, fostering a culture of inquiry.",
  },
  {
    icon: <SiGoogleclassroom className="text-2xl" />,
    title: "Free STEM Handouts",
    description:
      "Distributing free, high-quality study handouts covering essential topics in mathematics, physics, and programming to students nationwide.",
  },
  {
    icon: <FaGlobeAsia className="text-2xl" />,
    title: "Open Educational Resources",
    description:
      "Curating and creating open educational resources that are freely accessible to anyone with an internet connection, removing financial barriers to learning.",
  },
];
