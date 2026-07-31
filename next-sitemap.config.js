/** @type {import('next-sitemap').IConfig} */
const photoImages = [
  {
    src: "/perimg/tawhid-bin-omar-portrait.png",
    title: "Tawhid Bin Omar — Portrait",
    caption: "Tawhid Bin Omar, Bangladeshi physicist and competitive programmer, portrait photo.",
  },
  {
    src: "/perimg/tawhid-bin-omar-profile.png",
    title: "Tawhid Bin Omar — Profile Photo",
    caption: "Tawhid Bin Omar profile photo — aspiring physicist, number theory enthusiast and STEM educator.",
  },
  {
    src: "/perimg/tawhid-bin-omar-headshot.png",
    title: "Tawhid Bin Omar — Headshot",
    caption: "Tawhid Bin Omar headshot — Physics Olympiad champion, BdPhO National Champion and PHIGA #1 worldwide.",
  },
  {
    src: "/perimg/tawhid-bin-omar-portrait-2.jpg",
    title: "Tawhid Bin Omar — Portrait",
    caption: "Portrait photo of Tawhid Bin Omar, competitive programmer and problem solver from Bangladesh.",
  },
  {
    src: "/perimg/tawhid-bin-omar-photo-2025.png",
    title: "Tawhid Bin Omar — Photo 2025",
    caption: "Photo of Tawhid Bin Omar taken in 2025 — STEM educator and Olympiad mentor.",
  },
  {
    src: "/perimg/tawhid-bin-omar-photo-2026.png",
    title: "Tawhid Bin Omar — Photo 2026",
    caption: "Photo of Tawhid Bin Omar taken in 2026 — competitive programmer and problem solver.",
  },
  {
    src: "/sessions/tawhid-bin-omar-math-workshop.png",
    title: "Tawhid Bin Omar — Mathematics Problem-Solving Workshop",
    caption: "Tawhid Bin Omar leading a mathematics problem-solving workshop at St. Joseph Higher Secondary School in Dhaka, Bangladesh.",
  },
  {
    src: "/sessions/tawhid-bin-omar-math-bootcamp.jpg",
    title: "Tawhid Bin Omar — Mathematics Bootcamp Session",
    caption: "Tawhid Bin Omar teaching mathematics at St. Joseph Higher Secondary School Math Club in Dhaka during a Math Bootcamp session.",
  },
  {
    src: "/sessions/tawhid-bin-omar-physics-demonstration.jpg",
    title: "Tawhid Bin Omar — Physics Demonstration Session",
    caption: "Tawhid Bin Omar conducting a physics demonstration for community outreach in Bangladesh during a STEM education event.",
  },
  {
    src: "/sessions/tawhid-bin-omar-olympiad-mentorship.jpg",
    title: "Tawhid Bin Omar — Olympiad Mentorship Program",
    caption: "Tawhid Bin Omar mentoring Bangladesh Physics Olympiad (BdPhO) and mathematics Olympiad students at St. Joseph Higher Secondary School.",
  },
  {
    src: "/sessions/tawhid-bin-omar-teaching-session.jpg",
    title: "Tawhid Bin Omar — STEM Teaching Session",
    caption: "A STEM teaching session led by Tawhid Bin Omar, President of the St. Joseph Higher Secondary School Math Club.",
  },
];

module.exports = {
  siteUrl: "https://tawhid.is-a.dev",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => {
    const images = photoImages.map((image) => ({
      loc: new URL(image.src, config.siteUrl),
      title: image.title,
      caption: image.caption,
      geoLocation: 'Dhaka, Bangladesh',
    }));
    return [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1,
        images,
      },
    ];
  },
};
  