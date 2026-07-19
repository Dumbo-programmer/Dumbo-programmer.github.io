export interface LibraryResource {
  title: string;
  description: string;
  link: string;
}

export interface LibrarySubSection {
  name: string;
  items: LibraryResource[];
}

export interface LibrarySubject {
  title: string;
  icon: string;
  description: string;
  sections: LibrarySubSection[];
}

export interface FeaturedResource {
  title: string;
  description: string;
  subject: string;
  link: string;
  type: "article" | "book" | "problem-set" | "research" | "handout";
}

export const platformStats = [
  { label: "Problems", value: 142, icon: "🧮" },
  { label: "Articles", value: 18, icon: "📝" },
  { label: "Handouts", value: 17, icon: "📚" },
  { label: "Research", value: 5, icon: "🔬" },
  { label: "Contributors", value: 1, icon: "👥" },
];

export const featuredResources: FeaturedResource[] = [
  { title: "Quantum Theory", description: "Quantum physics from wave-particle duality to the Schrödinger equation.", subject: "Physics", link: "/notes/qt.pdf", type: "handout" },
  { title: "Category Theory", description: "Functors, natural transformations, and universal properties.", subject: "Mathematics", link: "/notes/Articles/CategoryTheory.pdf", type: "article" },
  { title: "General Relativity", description: "Einstein field equations, spacetime curvature, and applications.", subject: "Physics", link: "/notes/Articles/GeneralRelativity.pdf", type: "article" },
  { title: "Vieta Jumping Extension", description: "Non-linear Root Flipping and Surface Orbits — original research.", subject: "Mathematics", link: "/notes/Articles/Article2.pdf", type: "research" },
  { title: "Graph Theory Handbook", description: "BFS, DFS, shortest paths, MST for competitive programming.", subject: "Competitive Programming", link: "/notes/GraphTheory.pdf", type: "handout" },
  { title: "The Gliding Principle", description: "Moving Points on Conics and Beyond — original geometry research.", subject: "Mathematics", link: "/notes/Articles/Article1.pdf", type: "research" },
  { title: "Dynamic Programming", description: "DP techniques from classic problems to advanced optimizations.", subject: "Competitive Programming", link: "/notes/Dp.pdf", type: "handout" },
  { title: "Entropy-Minimal Noise Schedules", description: "Thermodynamics approach to diffusion probabilistic models.", subject: "Physics", link: "https://ijscar.org/pubs/articles/vol3-issue2-omar-diffusion-thermodynamics.pdf", type: "research" },
];

export const librarySubjects: LibrarySubject[] = [
  {
    title: "Mathematics",
    icon: "📐",
    description: "Algebra, geometry, number theory, combinatorics, and analysis — from fundamentals to research.",
    sections: [
      { name: "Problems", items: [
        { title: "Open Math Problems", description: "Original open problems in mathematics.", link: "/notes/OpenMathProblems.pdf" },
        { title: "Open Problems II", description: "More original open problems.", link: "/notes/OpenProblems2.pdf" },
      ]},
      { name: "Resources", items: [
        { title: "Applied Math Reference", description: "Comprehensive applied mathematics reference.", link: "/notes/Applied_Math_ref.pdf" },
        { title: "Category Theory", description: "An introduction to category theory.", link: "/notes/Articles/CategoryTheory.pdf" },
        { title: "Analytic Continuation [Bangla]", description: "Analytic Continuation and the Limits of Generalization.", link: "/notes/Articles/AnalyticCont.pdf" },
        { title: "Circle I [Bangla]", description: "Coordinate Geometry and Circles.", link: "/notes/Articles/Circles.pdf" },
        { title: "Circle II [Bangla]", description: "Circle Problem Solving.", link: "/notes/Articles/CircleProblemSolving.pdf" },
        { title: "Combinatorics [Bangla]", description: "Basic Combinatorics.", link: "/notes/Articles/Combinatorics.pdf" },
        { title: "Combinatorics Advanced [Bangla]", description: "Advanced combinatorics techniques.", link: "/notes/Articles/CombinatoricsAdv.pdf" },
        { title: "EigenVectors [Bangla]", description: "Basic EigenVectors.", link: "/notes/Articles/Eigenvectors.pdf" },
        { title: "General Relativity [Bangla]", description: "Introduction to general relativity.", link: "/notes/Articles/GeneralRelativity.pdf" },
        { title: "Graph Theory [Bangla]", description: "Introduction to graph theory.", link: "/notes/Articles/GraphTheory.pdf" },
        { title: "Legendre Polynomials [Bangla]", description: "Generating functions and Legendre polynomials.", link: "/notes/Articles/Legendre.pdf" },
        { title: "Power of Point [Bangla]", description: "Power of point and radical axis.", link: "/notes/Articles/PowerOfPoint.pdf" },
        { title: "Projective Geometry [Bangla]", description: "Introduction to projective geometry.", link: "/notes/Articles/ProjectiveGeo.pdf" },
        { title: "Tensor [Bangla]", description: "Introduction to tensors.", link: "/notes/Articles/Tensor.pdf" },
        { title: "Jacobian Matrix [Bangla]", description: "Intro to jacobians.", link: "/notes/Articles/Jacobian.pdf" },
        { title: "Moving Points [Bangla]", description: "Moving Points and Beyond.", link: "/notes/Articles/MovingPoints.pdf" },
        { title: "Functional Equations [Bangla]", description: "Introduction to functional equations.", link: "/notes/Articles/FunctionalAnalysis.pdf" },
        { title: "Warp Drives [Bangla]", description: "Mathematical models of warp drives.", link: "/notes/Articles/WarpDrive.pdf" },
        { title: "Wormholes [Bangla]", description: "Mathematical models of wormholes.", link: "/notes/Articles/WormHole.pdf" },
      ]},
           { name: "Research", items: [
        { title: "The Gliding Principle", description: "Moving Points on Conics and Beyond.", link: "/notes/Articles/Article1.pdf" },
        { title: "Vieta Jumping Extension", description: "Non-linear Root Flipping and Surface Orbits.", link: "/notes/Articles/Article2.pdf" },
        { title: "Spectral Analysis of Digit Distributions", description: "Digit distributions in perfect squares.", link: "/notes/Articles/main.pdf" },
      ]},
    ],
  },
  {
    title: "Physics",
    icon: "⚛️",
    description: "Classical mechanics, electromagnetism, thermodynamics, quantum physics, relativity, and astrophysics.",
    sections: [
      { name: "Handouts", items: [
        { title: "Handout 1", description: "Basic Physics Concepts and formulae.", link: "/notes/Phy1.pdf" },
        { title: "Handout 2", description: "Basic Physics Concepts and formulae.", link: "/notes/Phy2.pdf" },
        { title: "Handout 3", description: "Basic Astrophysics Concepts and formulae.", link: "/notes/Phy3Astro.pdf" },
        { title: "Handout 4", description: "Mechanics and Oscillatory Systems.", link: "/notes/Phy4.pdf" },
        { title: "Handout 5", description: "Basic Physics Concepts and formulae.", link: "/notes/Phy5.pdf" },
        { title: "Handout 6", description: "Astrophysics Concepts and formulae.", link: "/notes/Phy6.pdf" },
        { title: "Quantum Theory", description: "Quantum Physics Concepts.", link: "/notes/qt.pdf" },
        { title: "Relativity", description: "Special and general relativity.", link: "/notes/relativity.pdf" },
        { title: "Celestial Energy", description: "Collaboration notes on celestial energy.", link: "/notes/PhyCollab/CelEnergy.pdf" },
        { title: "Class One", description: "Collaboration class notes.", link: "/notes/PhyCollab/Class-One.pdf" },
      ]},
      { name: "Research", items: [
        { title: "Entropy-Minimal Noise Schedules", description: "Thermodynamics approach to diffusion models.", link: "https://ijscar.org/pubs/articles/vol3-issue2-omar-diffusion-thermodynamics.pdf" },
        { title: "Geometric Distortion of Quantum State Space", description: "Comparative analysis of quantum channels.", link: "https://zenodo.org/records/20793740" },
      ]},
    ],
  },
  {
    title: "Competitive Programming",
    icon: "💻",
    description: "Algorithms, data structures, and problem-solving techniques for programming contests.",
    sections: [
      { name: "Handouts", items: [
        { title: "Algorithms", description: "Comprehensive handbook on algorithms.", link: "/notes/Algorithms.pdf" },
        { title: "Number Theory", description: "Number theory concepts for CP.", link: "/notes/NumberTheory.pdf" },
        { title: "Graph Theory", description: "Graph theory concepts and algorithms.", link: "/notes/GraphTheory.pdf" },
        { title: "Greedy Algorithms", description: "Techniques and applications of greedy algorithms.", link: "/notes/GreedyAlgorithms.pdf" },
        { title: "Dynamic Programming", description: "DP techniques from basics to advanced.", link: "/notes/Dp.pdf" },
        { title: "String Algorithms", description: "String matching and pattern recognition.", link: "/notes/StringAlgorithms.pdf" },
      ]},
    ],
  },
  {
    title: "Astronomy",
    icon: "🔭",
    description: "Astrophysics, cosmology, observational astronomy, and space exploration.",
    sections: [],
  },
];
