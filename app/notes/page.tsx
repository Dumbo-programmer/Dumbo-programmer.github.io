import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Tawhid's Portfolio",
  description: "Physics, Mathematics, and Competitive Programming notes by Tawhid Bin Omar. Handouts, articles, observations, and models covering quantum theory, relativity, astrophysics, mechanics, category theory, graph theory, combinatorics, tensors, projective geometry, functional equations, algorithms, dynamic programming, and more.",
  keywords: [
    // Main categories
    "Physics notes", "Mathematics notes", "Competitive Programming notes",
    "Physics handouts", "Math observations", "Programming models",
    "Tawhid Bin Omar", "Tawhid notes",

    // Physics
    "Physics", "Astrophysics", "Mechanics", "Oscillatory Systems",
    "Quantum Theory", "Quantum Physics", "Relativity", "General Relativity",
    "Physics handouts PDF", "physics formulae", "astrophysics formulae",

    // Mathematics
    "Applied Mathematics", "Applied Math reference",
    "Open Math Problems", "Open Problems",
    "Perfect Squares", "Digit Distributions", "Digit-Splitting Numbers",
    "Analytic Continuation", "Category Theory",
    "Coordinate Geometry", "Circles", "Circle Problem Solving",
    "Combinatorics", "Advanced Combinatorics", "Combinatorics techniques",
    "EigenVectors", "Graph Theory", "Legendre Polynomials",
    "Generating Functions", "Power of Point", "Radical Axis",
    "Projective Geometry", "Tensors", "Jacobian Matrix",
    "Moving Points", "Functional Equations",
    "Warp Drives", "Wormholes", "Mathematical models",
    "The Gliding Principle", "Moving Points on Conics",
    "Vieta Jumping", "Nonlinear Root Flipping", "Surface Orbits",

    // Competitive Programming
    "Algorithms", "Data Structures", "Greedy Algorithms",
    "Dynamic Programming", "String Algorithms", "CP handouts",

    // Bangla (Bengali) resources
    "Bangla math notes", "Bangla physics notes",
    "Bangla analytic continuation", "Bangla circle geometry",
    "Bangla combinatorics", "Bangla eigenvectors",
    "Bangla general relativity", "Bangla graph theory",
    "Bangla legendre polynomials", "Bangla power of point",
    "Bangla projective geometry", "Bangla tensor",
    "Bangla jacobian", "Bangla moving points",
    "Bangla functional equations", "Bangla warp drives",
    "Bangla wormholes",

    // Resource types
    "Math articles PDF", "Physics handouts PDF",
    "Student notes", "Study materials", "Academic resources",
    "Physics olympiad notes", "Math olympiad notes"
  ],
  authors: [{ name: "Tawhid Bin Omar" }],
  creator: "Tawhid Bin Omar",
  metadataBase: new URL("https://tawhid.is-a.dev"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Notes & Resources | Tawhid's Portfolio",
    description: "Physics, Mathematics, and Competitive Programming notes by Tawhid Bin Omar — handouts, articles, observations, and models on quantum theory, relativity, category theory, combinatorics, graph theory, algorithms, and more.",
    url: "https://tawhid.is-a.dev/notes",
    siteName: "Tawhid's Portfolio",
    images: [
      {
        url: "https://tawhid.is-a.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Notes & Resources - Tawhid Bin Omar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes & Resources | Tawhid's Portfolio",
    description: "Physics, Mathematics, and Competitive Programming notes by Tawhid Bin Omar — handouts, articles, observations, and models.",
    images: ["https://tawhid.is-a.dev/og-image.png"],
    creator: "@tawhid_omar",
  },
  icons: {
    icon: "/tawhid.png",
    apple: "/tawhid.png",
  },
  alternates: {
    canonical: "https://tawhid.is-a.dev/notes",
  },
};

export default function NotesPage() {
  const notesCategories = [
    {
      title: "Physics",
      icon: "⚛️",
      sections: [
        {
          name: "Handouts",
          items: [
            { title: "Handout 1", description: "Basic Physics Concepts/formulae", link: "/notes/Phy1.pdf" },
            { title: "Handout 2", description: "Basic Physics Concepts/formulae", link: "/notes/Phy2.pdf" },
            { title: "Handout 3", description: "Basic Astrophysics Concepts/formulae", link: "/notes/Phy3Astro.pdf" },
            { title: "Handout 4", description: "Basic Mechanics & Oscillatory Systems Concepts/formulae", link: "/notes/Phy4.pdf" },
            { title: "Handout 5", description: "Basic Physics Concepts/formulae", link: "/notes/Phy5.pdf" },
            { title: "Handout 6", description: "Basic Astrophysics Concepts/formulae", link: "/notes/Phy6.pdf" },

            { title: "Quantum Theory", description: "Quantum Physics Concepts", link: "/notes/qt.pdf" },
            { title: "Relativity", description: "Relativity Concepts", link: "/notes/relativity.pdf" },]
        },
        {
          name: "Observations",
          items: [
            { title: "Coming Soon", description: "Physics observations will be available here", link: "#" }
          ]
        },
        {
          name: "Papers",
          items: [
            { title: "Entropy-Minimal Noise Schedules for Denoising Diffusion Probabilistic Models: A Non-Equilibrium Thermodynamics Approach", description: "DOI: 10.67149/yhjs2024.5/k2v9p4cz", link: "https://ijscar.org/pubs/articles/vol3-issue2-omar-diffusion-thermodynamics.pdf" },
            {title: "Geometric Distortion of Quantum State Space Under Noise: A Comparative Information-Theoretic Analysis of Common Quantum Channels", description: "DOI: 10.5281/zenodo.20793740", link: "https://zenodo.org/records/20793740" }

          ]
        }
      ]
    },
    {
      title: "Mathematics",
      icon: "📐",
      sections: [
        {
          name: "Handouts",
          items: [
            { title: "Applied Math Reference", description: "Reference for applied mathematics concepts", link: "/notes/Applied_Math_ref.pdf" }
          ]
        },
        {
          name: "Observations & Papers",
          items: [
            { title: "Open Problems", description: "A few open problems I made", link: "/notes/OpenMathProblems.pdf" },
            { title: "Open Problems 2", description: "more open problems I made", link: "/notes/OpenProblems2.pdf" },
            { title: "Spectral and Information-Theoretic Analysis of Digit Distributions in Perfect Squares and Digit-Splitting Numbers", description: "Mathematical analysis of digit distributions", link: "/notes/Articles/main.pdf" }
          ]
        },
        {
          name: "Articles",
          items: [
            { title: "Analytic Continuation Limits[Bangla]", description: "Analytic Continuation and theLimits of Generalization", link: "/notes/Articles/AnalyticCont.pdf" },
            { title: "Category Theory", description: "An introduction to category theory", link: "/notes/Articles/CategoryTheory.pdf" },
            { title: "Circle I[Bangla]", description: "Coordinate Geometry and Circles", link: "/notes/Articles/Circles.pdf" },
            { title: "Circle II[Bangla]", description: "Circle Problem Solving", link: "/notes/Articles/CircleProblemSolving.pdf" },
            { title: "Combinatorics[Bangla]", description: "Basic Combinatorics", link: "/notes/Articles/Combinatorics.pdf" },
            { title: "Combinatorics Advanced[Bangla]", description: "Advanced combinatorics techniques and problems", link: "/notes/Articles/CombinatoricsAdv.pdf" },
            { title: "EigenVectors[Bangla]", description: "Basic EigenVectors", link: "/notes/Articles/Eigenvectors.pdf" },
            { title: "General Relativity[Bangla]", description: "An introduction to general relativity", link: "/notes/Articles/GeneralRelativity.pdf" },
            { title: "Graph Theory[Bangla]", description: "An introduction to graph theory", link: "/notes/Articles/GraphTheory.pdf" },
            { title: "Legendre Polynomials and Generating Functions[Bangla]", description: "An elementary introduction to generating functions", link: "/notes/Articles/Legendre.pdf" },
            { title: "Power of Point[Bangla]", description: "Introduction to Power of point and radical axis", link: "/notes/Articles/PowerOfPoint.pdf" },
            { title: "Projective Geometry[Bangla]", description: "An introduction to projective geometry", link: "/notes/Articles/ProjectiveGeo.pdf" },
            { title: "Tensor[Bangla]", description: "An introduction to tensors", link: "/notes/Articles/Tensor.pdf" },
            { title: "Jacobian Matrix[Bangla]", description: "Intro to jacobians", link: "/notes/Articles/Jacobian.pdf" },
            { title: "Moving Points[Bangla]", description: "Moving Points and Beyond", link: "/notes/Articles/MovingPoints.pdf" },
            { title: "Functional Equations[Bangla]", description: "An introduction to functional equations", link: "/notes/Articles/FunctionalAnalysis.pdf" },
            { title: "WarpDrives[Bangla]", description: "Basic idea of Mathematical models of warp drives", link: "/notes/Articles/WarpDrives.pdf" },
            { title: "WormHoles[Bangla]", description: "Basic idea of Mathematical models of wormholes", link: "/notes/Articles/Wormholes.pdf" },
            { title: "The Gliding Principle", description: "Moving Points on Conics and Beyond", link: "/notes/Articles/Article1.pdf" },
            { title: "Vieta Jumping Extension", description: "Beyond Vieta Jumping: Non-linear Root Flipping and Surface Orbits", link: "/notes/Articles/Article2.pdf" }


            
          ]
        }
      ]
    },
    {
      title: "Competitive Programming",
      icon: "💻",
      sections: [
        {
          name: "Handouts",
          items: [
            { title: "Algorithms", description: "Handout on various algorithms", link: "/notes/Algorithms.pdf" },
            { title: "Graph Theory", description: "Handout on graph theory concepts", link: "/notes/GraphTheory.pdf" },
            { title: "Greedy Algorithms", description: "Handout on greedy algorithm techniques", link: "/notes/GreedyAlgorithms.pdf" },
            { title: "Dynamic Programming", description: "Handout on dynamic programming techniques", link: "/notes/Dp.pdf" },
            { title: "String Algorithms", description: "Handout on various string algorithms", link: "/notes/StringAlgorithms.pdf" },



          ]
        },
        {
          name: "Observations",
          items: [
            { title: "Coming Soon", description: "CP observations will be available here", link: "#" }
          ]
        },
        {
          name: "Models",
          items: [
            { title: "Coming Soon", description: "CP models will be available here", link: "#" }
          ]
        }
      ]
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Notes & Resources - Tawhid Bin Omar",
    "description": "A collection of handouts, observations, articles, and models in Physics, Mathematics, and Competitive Programming by Tawhid Bin Omar.",
    "url": "https://tawhid.is-a.dev/notes",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Tawhid's Portfolio",
      "url": "https://tawhid.is-a.dev"
    },
    "about": [
      { "@type": "Thing", "name": "Physics", "description": "Quantum Theory, Relativity, Astrophysics, Mechanics, Oscillatory Systems" },
      { "@type": "Thing", "name": "Mathematics", "description": "Category Theory, Combinatorics, Graph Theory, Projective Geometry, Tensors, Functional Equations, Analytic Continuation, Vieta Jumping" },
      { "@type": "Thing", "name": "Competitive Programming", "description": "Algorithms, Data Structures, Dynamic Programming, String Algorithms, Greedy Algorithms" }
    ],
    "hasPart": [
      {
        "@type": "CreativeWork",
        "name": "Quantum Theory",
        "description": "Quantum Physics Concepts",
        "url": "https://tawhid.is-a.dev/notes/qt.pdf",
        "teaches": "Quantum Physics"
      },
      {
        "@type": "CreativeWork",
        "name": "Relativity",
        "description": "Relativity Concepts",
        "url": "https://tawhid.is-a.dev/notes/relativity.pdf",
        "teaches": "Relativity"
      },
      {
        "@type": "CreativeWork",
        "name": "Category Theory",
        "description": "An introduction to category theory",
        "url": "https://tawhid.is-a.dev/notes/Articles/CategoryTheory.pdf",
        "teaches": "Category Theory"
      },
      {
        "@type": "CreativeWork",
        "name": "Graph Theory",
        "description": "An introduction to graph theory",
        "url": "https://tawhid.is-a.dev/notes/Articles/GraphTheory.pdf",
        "teaches": "Graph Theory"
      },
      {
        "@type": "CreativeWork",
        "name": "General Relativity",
        "description": "An introduction to general relativity",
        "url": "https://tawhid.is-a.dev/notes/Articles/GeneralRelativity.pdf",
        "teaches": "General Relativity"
      },
      {
        "@type": "CreativeWork",
        "name": "Projective Geometry",
        "description": "An introduction to projective geometry",
        "url": "https://tawhid.is-a.dev/notes/Articles/ProjectiveGeo.pdf",
        "teaches": "Projective Geometry"
      },
      {
        "@type": "CreativeWork",
        "name": "The Gliding Principle",
        "description": "Moving Points on Conics and Beyond",
        "url": "https://tawhid.is-a.dev/notes/Articles/Article1.pdf",
        "teaches": "Conic Geometry"
      },
      {
        "@type": "CreativeWork",
        "name": "Vieta Jumping Extension",
        "description": "Beyond Vieta Jumping: Non-linear Root Flipping and Surface Orbits",
        "url": "https://tawhid.is-a.dev/notes/Articles/Article2.pdf",
        "teaches": "Number Theory"
      }
    ]
  };

  return (
    <main className="min-h-screen w-full pt-32 pb-20 px-6" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Notes & Resources
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my handouts, observations, and models in Physics, Mathematics, and Competitive Programming
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {notesCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="w-full" aria-labelledby={`category-${categoryIndex}`}>
              {/* Category Title */}
              <h2 
                id={`category-${categoryIndex}`}
                className="text-4xl font-bold text-white mb-8 flex items-center gap-3"
              >
                <span className="text-5xl">{category.icon}</span>
                {category.title}
              </h2>

              {/* Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.sections.map((section, sectionIndex) => (
                  <div 
                    key={sectionIndex}
                    className="border border-[#2A0E61] rounded-lg bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:shadow-[0_0_25px_#8b5cf6] hover:scale-105"
                  >
                    {/* Section Title */}
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                      {section.name}
                    </h3>

                    {/* Items */}
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.link}
                          className="block p-3 rounded bg-[#0300145e] hover:bg-[#03001480] transition-colors group"
                          aria-label={`View ${item.title}`}
                        >
                          <h4 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {item.description}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Personal notes I had made for myself.
          </p>
        </div>
      </div>
    </main>
  );
}
