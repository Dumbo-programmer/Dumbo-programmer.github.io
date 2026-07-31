export interface GalleryPhoto {
  src: string;
  title: string;
  alt: string;
  caption: string;
  keywords: string[];
  width: number;
  height: number;
}

export const personalPhotos: GalleryPhoto[] = [
  {
    src: "/perimg/tawhid-bin-omar-portrait.png",
    title: "Tawhid Bin Omar — Portrait",
    alt: "Tawhid Bin Omar, Bangladeshi physicist and competitive programmer, portrait photo",
    caption:
      "Tawhid Bin Omar — aspiring physicist, number theory enthusiast, competitive programmer, and STEM educator from Dhaka, Bangladesh.",
    keywords: ["Tawhid Bin Omar", "Bangladeshi physicist", "competitive programmer", "STEM educator", "Dhaka"],
    width: 1600,
    height: 1200,
  },
  {
    src: "/perimg/tawhid-bin-omar-profile.png",
    title: "Tawhid Bin Omar — Profile Photo",
    alt: "Tawhid Bin Omar profile photo — aspiring physicist, number theory enthusiast and STEM educator",
    caption:
      "Profile of Tawhid Bin Omar, founder of the Open Problem Solving Library and Physics Olympiad champion.",
    keywords: ["Tawhid Bin Omar", "profile photo", "Open Problem Solving Library", "Physics Olympiad"],
    width: 821,
    height: 1080,
  },
  {
    src: "/perimg/tawhid-bin-omar-headshot.png",
    title: "Tawhid Bin Omar — Headshot",
    alt: "Tawhid Bin Omar headshot — Physics Olympiad champion, BdPhO National Champion and PHIGA #1 worldwide",
    caption:
      "Headshot of Tawhid Bin Omar — BdPhO National Champion and PHIGA 1st place worldwide, coding educator, and full stack developer.",
    keywords: ["Tawhid Bin Omar", "headshot", "BdPhO National Champion", "PHIGA", "full stack developer"],
    width: 1024,
    height: 1536,
  },
  {
    src: "/perimg/tawhid-bin-omar-portrait-2.jpg",
    title: "Tawhid Bin Omar — Portrait",
    alt: "Portrait photo of Tawhid Bin Omar, competitive programmer and problem solver from Bangladesh",
    caption:
      "A portrait of Tawhid Bin Omar — competitive programmer, problem solver, and STEM educator from Bangladesh.",
    keywords: ["Tawhid Bin Omar", "portrait", "competitive programmer", "problem solver", "Bangladesh"],
    width: 702,
    height: 911,
  },
  {
    src: "/perimg/tawhid-bin-omar-photo-2025.png",
    title: "Tawhid Bin Omar — Photo 2025",
    alt: "Photo of Tawhid Bin Omar taken in 2025 — STEM educator and Olympiad mentor",
    caption: "A photo of Tawhid Bin Omar from 2025.",
    keywords: ["Tawhid Bin Omar", "2025", "STEM educator", "Olympiad mentor"],
    width: 602,
    height: 399,
  },
  {
    src: "/perimg/tawhid-bin-omar-photo-2026.png",
    title: "Tawhid Bin Omar — Photo 2026",
    alt: "Photo of Tawhid Bin Omar taken in 2026 — competitive programmer and problem solver",
    caption: "A photo of Tawhid Bin Omar from 2026.",
    keywords: ["Tawhid Bin Omar", "2026", "competitive programmer", "problem solver"],
    width: 522,
    height: 299,
  },
];

export const sessionPhotos: GalleryPhoto[] = [
  {
    src: "/sessions/tawhid-bin-omar-math-workshop.png",
    title: "Tawhid Bin Omar — Mathematics Problem-Solving Workshop",
    alt: "Tawhid Bin Omar leading a mathematics problem-solving workshop at St. Joseph Higher Secondary School in Dhaka, Bangladesh — students working on Olympiad-level math problems on the whiteboard during a Math Club session.",
    caption:
      "Leading mathematics problem-solving workshops for aspiring Olympiad students at St. Joseph Higher Secondary School.",
    keywords: ["Tawhid Bin Omar", "mathematics workshop", "St. Joseph Higher Secondary School", "Bangladesh", "Math Club", "Olympiad"],
    width: 779,
    height: 409,
  },
  {
    src: "/sessions/tawhid-bin-omar-math-bootcamp.jpg",
    title: "Tawhid Bin Omar — Mathematics Bootcamp Session",
    alt: "Tawhid Bin Omar teaching mathematics at St. Joseph Higher Secondary School Math Club in Dhaka — students engaged in collaborative problem solving during a Math Bootcamp session.",
    caption:
      "Teaching mathematics through the Math Bootcamp program at St. Joseph Higher Secondary School in Dhaka, Bangladesh.",
    keywords: ["Tawhid Bin Omar", "Math Bootcamp", "St. Joseph Higher Secondary School", "mathematics teacher", "Dhaka"],
    width: 2000,
    height: 1500,
  },
  {
    src: "/sessions/tawhid-bin-omar-physics-demonstration.jpg",
    title: "Tawhid Bin Omar — Physics Demonstration Session",
    alt: "Tawhid Bin Omar conducting a physics demonstration for community outreach in Bangladesh — students observing a hands-on science experiment during a STEM education event.",
    caption:
      "Conducting interactive physics demonstrations during community outreach to spark curiosity about science in Bangladesh.",
    keywords: ["Tawhid Bin Omar", "physics demonstration", "community outreach", "STEM education", "Bangladesh"],
    width: 1500,
    height: 2000,
  },
  {
    src: "/sessions/tawhid-bin-omar-olympiad-mentorship.jpg",
    title: "Tawhid Bin Omar — Olympiad Mentorship Program",
    alt: "Tawhid Bin Omar mentoring Bangladesh Physics Olympiad (BdPhO) and mathematics Olympiad students at St. Joseph Higher Secondary School — preparing for national and international competitions.",
    caption:
      "Mentoring students preparing for national and international Olympiads in mathematics and physics in Dhaka, Bangladesh.",
    keywords: ["Tawhid Bin Omar", "Olympiad mentorship", "BdPhO", "physics olympiad", "St. Joseph Higher Secondary School", "Bangladesh"],
    width: 2000,
    height: 1500,
  },
  {
    src: "/sessions/tawhid-bin-omar-teaching-session.jpg",
    title: "Tawhid Bin Omar — STEM Teaching Session",
    alt: "Tawhid Bin Omar teaching a STEM session to students in Bangladesh — a classroom problem-solving session led by the President of the St. Joseph Higher Secondary School Math Club.",
    caption:
      "A STEM teaching session led by Tawhid Bin Omar, President of the St. Joseph Higher Secondary School Math Club.",
    keywords: ["Tawhid Bin Omar", "STEM teaching", "classroom", "St. Joseph Higher Secondary School", "Bangladesh", "Math Club President"],
    width: 2000,
    height: 1333,
  },
];

export const allPhotos: GalleryPhoto[] = [...personalPhotos, ...sessionPhotos];
