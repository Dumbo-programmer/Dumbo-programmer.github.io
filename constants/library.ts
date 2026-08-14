export type ResourceType =
  | "article"
  | "handout"
  | "notes"
  | "problem-set"
  | "research"
  | "book";

export type ResourceLanguage = "en" | "bn" | "both";

export interface LibraryResource {
  title: string;
  description: string;
  link: string;
  type: ResourceType;
  tags: string[];
  grade: string[];
  language: ResourceLanguage;
  olympiad?: string[];
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
  type: ResourceType;
  tags: string[];
  language?: ResourceLanguage;
}

export const featuredResources: FeaturedResource[] = [
  { title: "Quantum Theory", description: "Quantum physics from wave-particle duality to the Schrödinger equation.", subject: "Physics", link: "/notes/qt.pdf", type: "handout", tags: ["quantum physics", "wave-particle duality", "schrodinger", "undergrad"] },
  { title: "Category Theory", description: "Functors, natural transformations, and universal properties.", subject: "Mathematics", link: "/notes/Articles/CategoryTheory.pdf", type: "article", tags: ["category theory", "functors", "abstract algebra"] },
  { title: "General Relativity", description: "Einstein field equations, spacetime curvature, and applications.", subject: "Physics", link: "/notes/Articles/GeneralRelativity.pdf", type: "article", tags: ["general relativity", "spacetime", "gravity"] },
  { title: "Vieta Jumping Extension", description: "Non-linear Root Flipping and Surface Orbits — original research.", subject: "Mathematics", link: "/notes/Articles/Article2.pdf", type: "research", tags: ["number theory", "vieta jumping", "original research"] },
  { title: "Graph Theory Handbook", description: "BFS, DFS, shortest paths, MST for competitive programming.", subject: "Competitive Programming", link: "/notes/GraphTheory.pdf", type: "handout", tags: ["graph theory", "BFS", "DFS", "shortest path", "MST"] },
  { title: "The Gliding Principle", description: "Moving Points on Conics and Beyond — original geometry research.", subject: "Mathematics", link: "/notes/Articles/Article1.pdf", type: "research", tags: ["geometry", "conics", "original research"] },
  { title: "Dynamic Programming", description: "DP techniques from classic problems to advanced optimizations.", subject: "Competitive Programming", link: "/notes/Dp.pdf", type: "handout", tags: ["dynamic programming", "DP", "optimization"] },
  { title: "Entropy-Minimal Noise Schedules", description: "Thermodynamics approach to diffusion probabilistic models.", subject: "Physics", link: "https://ijscar.org/pubs/articles/vol3-issue2-omar-diffusion-thermodynamics.pdf", type: "research", tags: ["machine learning", "diffusion", "thermodynamics", "AI"] },
];

export const librarySubjects: LibrarySubject[] = [
  {
    title: "Mathematics",
    icon: "📐",
    description: "Algebra, geometry, number theory, combinatorics, and analysis — from fundamentals to research.",
    sections: [
      { name: "Problems", items: [
        { title: "Open Math Problems", description: "Original open problems in mathematics.", link: "/notes/OpenMathProblems.pdf", type: "problem-set", tags: ["open problems", "research", "number theory", "conjecture"], grade: ["undergrad"], language: "en" },
        { title: "Open Problems II", description: "More original open problems.", link: "/notes/OpenProblems2.pdf", type: "problem-set", tags: ["open problems", "research", "number theory", "conjecture"], grade: ["undergrad"], language: "en" },
        { title: "Random Problem", description: "Idk some problem", link: "/notes/MathProb/(math)friendsProb.pdf", type: "problem-set", tags: ["practice", "random", "friend"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random ProblemSet", description: "Random problems.", link: "/notes/MathProb/pidayhsec.pdf", type: "problem-set", tags: ["pi day", "contest", "high school"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem I", description: "Random problem.", link: "/notes/MathProb/problem1.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem II", description: "Random problem.", link: "/notes/MathProb/problem2.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem III", description: "Random problem.", link: "/notes/MathProb/problem3.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem IV", description: "Random problem.", link: "/notes/MathProb/problem4.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem V", description: "Random problem.", link: "/notes/MathProb/problem5.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem VI", description: "Random problem.", link: "/notes/MathProb/problem6.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem VII", description: "Random problem.", link: "/notes/MathProb/problem7.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem VIII", description: "Random problem.", link: "/notes/MathProb/problem8.pdf", type: "problem-set", tags: ["practice", "random"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "Random Problem Set", description: "Random problem Set.", link: "/notes/MathProb/ProblemSet-Aug.pdf", type: "problem-set", tags: ["practice", "set", "august"], grade: ["grade-9-10", "grade-11-12"], language: "en" },
        { title: "IMO 2026 Solve [Bangla]", description: "Bangla solutions of IMO 2026 problems.", link: "/notes/Articles/IMO2026.pdf", type: "problem-set", tags: ["IMO", "olympiad", "solutions", "number theory", "geometry", "combinatorics", "algebra"], grade: ["grade-11-12", "undergrad"], language: "bn", olympiad: ["bdmo", "imo"] },
      ]},
      { name: "Resources", items: [
        { title: "Applied Math Reference", description: "Comprehensive applied mathematics reference.", link: "/notes/Applied_Math_ref.pdf", type: "notes", tags: ["reference", "applied math", "handbook", "calculus", "linear algebra"], grade: ["undergrad"], language: "en" },
        { title: "Category Theory", description: "An introduction to category theory.", link: "/notes/Articles/CategoryTheory.pdf", type: "article", tags: ["category theory", "functors", "natural transformations", "abstract algebra"], grade: ["undergrad"], language: "en" },
        { title: "Analytic Continuation [Bangla]", description: "Analytic Continuation and the Limits of Generalization.", link: "/notes/Articles/AnalyticCont.pdf", type: "article", tags: ["analytic continuation", "complex analysis", "calculus"], grade: ["undergrad"], language: "bn" },
        { title: "Circle I [Bangla]", description: "Coordinate Geometry and Circles.", link: "/notes/Articles/Circles.pdf", type: "article", tags: ["geometry", "coordinate geometry", "circles"], grade: ["grade-9-10", "grade-11-12"], language: "bn" },
        { title: "Circle II [Bangla]", description: "Circle Problem Solving.", link: "/notes/Articles/CircleProblemSolving.pdf", type: "article", tags: ["geometry", "circles", "problem solving", "olympiad"], grade: ["grade-9-10", "grade-11-12"], language: "bn" },
        { title: "Combinatorics [Bangla]", description: "Basic Combinatorics.", link: "/notes/Articles/Combinatorics.pdf", type: "article", tags: ["combinatorics", "counting", "permutations", "olympiad"], grade: ["grade-9-10", "grade-11-12"], language: "bn" },
        { title: "Combinatorics Advanced [Bangla]", description: "Advanced combinatorics techniques.", link: "/notes/Articles/CombinatoricsAdv.pdf", type: "article", tags: ["combinatorics", "advanced", "olympiad", "counting"], grade: ["grade-11-12"], language: "bn" },
        { title: "EigenVectors [Bangla]", description: "Basic EigenVectors.", link: "/notes/Articles/Eigenvectors.pdf", type: "article", tags: ["linear algebra", "eigenvalues", "eigenvectors", "matrices"], grade: ["grade-11-12", "undergrad"], language: "bn" },
        { title: "General Relativity [Bangla]", description: "Introduction to general relativity.", link: "/notes/Articles/GeneralRelativity.pdf", type: "article", tags: ["general relativity", "spacetime", "gravity", "einstein"], grade: ["undergrad"], language: "bn" },
        { title: "Graph Theory [Bangla]", description: "Introduction to graph theory.", link: "/notes/Articles/GraphTheory.pdf", type: "article", tags: ["graph theory", "algorithms", "BFS", "DFS"], grade: ["grade-11-12"], language: "bn" },
        { title: "Legendre Polynomials [Bangla]", description: "Generating functions and Legendre polynomials.", link: "/notes/Articles/Legendre.pdf", type: "article", tags: ["calculus", "special functions", "polynomials", "generating functions"], grade: ["undergrad"], language: "bn" },
        { title: "Modular Arithmetic [Bangla]", description: "Basic note on modular arithmetic.", link: "/notes/Articles/mod.pdf", type: "article", tags: ["number theory", "modular arithmetic", "olympiad"], grade: ["grade-9-10", "grade-11-12"], language: "bn" },
        { title: "Power of Point [Bangla]", description: "Power of point and radical axis.", link: "/notes/Articles/PowerOfPoint.pdf", type: "article", tags: ["geometry", "power of point", "radical axis", "olympiad"], grade: ["grade-9-10", "grade-11-12"], language: "bn" },
        { title: "Projective Geometry [Bangla]", description: "Introduction to projective geometry.", link: "/notes/Articles/ProjectiveGeo.pdf", type: "article", tags: ["geometry", "projective geometry", "olympiad"], grade: ["grade-11-12"], language: "bn" },
        { title: "Tensor [Bangla]", description: "Introduction to tensors.", link: "/notes/Articles/Tensor.pdf", type: "article", tags: ["tensors", "linear algebra", "calculus", "physics"], grade: ["undergrad"], language: "bn" },
        { title: "Jacobian Matrix [Bangla]", description: "Intro to jacobians.", link: "/notes/Articles/Jacobian.pdf", type: "article", tags: ["jacobian", "multivariable calculus", "linear algebra"], grade: ["undergrad"], language: "bn" },
        { title: "Moving Points [Bangla]", description: "Moving Points and Beyond.", link: "/notes/Articles/MovingPoints.pdf", type: "article", tags: ["geometry", "conics", "moving points", "olympiad"], grade: ["grade-11-12"], language: "bn" },
        { title: "Functional Equations [Bangla]", description: "Introduction to functional equations.", link: "/notes/Articles/FunctionalAnalysis.pdf", type: "article", tags: ["functional equations", "analysis", "olympiad"], grade: ["grade-11-12"], language: "bn" },
        { title: "Warp Drives [Bangla]", description: "Mathematical models of warp drives.", link: "/notes/Articles/WarpDrive.pdf", type: "article", tags: ["warp drives", "relativity", "spacetime", "physics"], grade: ["undergrad"], language: "bn" },
        { title: "Wormholes [Bangla]", description: "Mathematical models of wormholes.", link: "/notes/Articles/WormHole.pdf", type: "article", tags: ["wormholes", "relativity", "spacetime", "physics"], grade: ["undergrad"], language: "bn" },
      ]},
           { name: "Research", items: [
        { title: "The Gliding Principle", description: "Moving Points on Conics and Beyond.", link: "/notes/Articles/Article1.pdf", type: "research", tags: ["geometry", "conics", "original research", "moving points"], grade: ["undergrad"], language: "en" },
        { title: "Vieta Jumping Extension", description: "Non-linear Root Flipping and Surface Orbits.", link: "/notes/Articles/Article2.pdf", type: "research", tags: ["number theory", "vieta jumping", "original research"], grade: ["undergrad"], language: "en" },
        { title: "Spectral Analysis of Digit Distributions", description: "Digit distributions in perfect squares.", link: "/notes/Articles/main.pdf", type: "research", tags: ["number theory", "digit distributions", "perfect squares", "original research"], grade: ["undergrad"], language: "en" },
      ]},
    ],
  },
  {
    title: "Physics",
    icon: "⚛️",
    description: "Classical mechanics, electromagnetism, thermodynamics, quantum physics, relativity, and astrophysics.",
    sections: [
      { name: "Handouts", items: [
        { title: "Handout 1", description: "Basic Physics Concepts and formulae.", link: "/notes/Phy1.pdf", type: "handout", tags: ["mechanics", "formulae", "basic"], grade: ["grade-9-10", "grade-11-12"], language: "en", olympiad: ["bdpho"] },
        { title: "Handout 2", description: "Basic Physics Concepts and formulae.", link: "/notes/Phy2.pdf", type: "handout", tags: ["mechanics", "formulae", "basic"], grade: ["grade-9-10", "grade-11-12"], language: "en", olympiad: ["bdpho"] },
        { title: "Handout 3", description: "Basic Astrophysics Concepts and formulae.", link: "/notes/Phy3Astro.pdf", type: "handout", tags: ["astrophysics", "formulae"], grade: ["grade-9-10", "grade-11-12"], language: "en", olympiad: ["bdpho", "iaac"] },
        { title: "Handout 4", description: "Mechanics and Oscillatory Systems.", link: "/notes/Phy4.pdf", type: "handout", tags: ["mechanics", "oscillations", "SHM"], grade: ["grade-11-12"], language: "en", olympiad: ["bdpho", "ipho"] },
        { title: "Handout 5", description: "Basic Physics Concepts and formulae.", link: "/notes/Phy5.pdf", type: "handout", tags: ["mechanics", "formulae", "basic"], grade: ["grade-9-10", "grade-11-12"], language: "en", olympiad: ["bdpho"] },
        { title: "Handout 6", description: "Astrophysics Concepts and formulae.", link: "/notes/Phy6.pdf", type: "handout", tags: ["astrophysics", "formulae"], grade: ["grade-11-12"], language: "en", olympiad: ["bdpho", "iaac"] },
        { title: "Quantum Theory", description: "Quantum Physics Concepts.", link: "/notes/qt.pdf", type: "handout", tags: ["quantum physics", "wave-particle duality", "schrodinger"], grade: ["undergrad"], language: "en" },
        { title: "Relativity", description: "Special and general relativity.", link: "/notes/relativity.pdf", type: "handout", tags: ["special relativity", "general relativity", "spacetime"], grade: ["grade-11-12", "undergrad"], language: "en" },
        { title: "Celestial Energy", description: "Collaboration notes on celestial energy.", link: "/notes/PhyCollab/CelEnergy.pdf", type: "handout", tags: ["astrophysics", "energy", "stars", "collaboration"], grade: ["grade-11-12"], language: "en", olympiad: ["bdpho", "iaac"] },
        { title: "Class One", description: "Collaboration class notes.", link: "/notes/PhyCollab/Class-One.pdf", type: "notes", tags: ["class notes", "collaboration", "mechanics"], grade: ["grade-11-12"], language: "en", olympiad: ["bdpho"] },
        { title: "Class Two", description: "Collaboration class notes.", link: "/notes/PhyCollab/Class-Two.pdf", type: "notes", tags: ["class notes", "collaboration"], grade: ["grade-11-12"], language: "en", olympiad: ["bdpho"] },
        { title: "Class Three", description: "Collaboration class notes.", link: "/notes/PhyCollab/Class-Three.pdf", type: "notes", tags: ["class notes", "collaboration"], grade: ["grade-11-12"], language: "en", olympiad: ["bdpho"] },
      ]},
            { name: "Toy Problems", items: [
         { title: "Cosmology Question Set I", description: "Something I made for a competition", link: "/notes/PhysicsProb/Cosmologic.pdf", type: "problem-set", tags: ["cosmology", "astrophysics", "competition", "questions"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["bdpho", "iaac"] },
         { title: "Cosmology I Answer", description: "Solution of the above", link: "/notes/PhysicsProb/CosmologicalSol.pdf", type: "problem-set", tags: ["cosmology", "solutions"], grade: ["grade-11-12", "undergrad"], language: "en" },
         { title: "Cosmology Question Set II", description: "Something I made for a competition (another category)", link: "/notes/PhysicsProb/CosmologyOpen.pdf", type: "problem-set", tags: ["cosmology", "open problems", "competition", "questions"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["bdpho", "iaac"] },
         { title: "Cosmology II Answer", description: "Something I made for a competition (another category)", link: "/notes/PhysicsProb/CosmologyOpenSol.pdf", type: "problem-set", tags: ["cosmology", "solutions"], grade: ["grade-11-12", "undergrad"], language: "en" },
         { title: "Problem 1", description: "Random Problem", link: "/notes/PhysicsProb/beadprob3.pdf", type: "problem-set", tags: ["mechanics", "beads", "practice"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem 2", description: "Another Random Problem", link: "/notes/PhysicsProb/beadprob2.pdf", type: "problem-set", tags: ["mechanics", "beads", "practice"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem 3", description: "Yet Another Random Problem", link: "/notes/PhysicsProb/Hare.pdf", type: "problem-set", tags: ["mechanics", "practice", "random"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem 4", description: "Yet Another Random Problem", link: "/notes/PhysicsProb/phyprob.pdf", type: "problem-set", tags: ["mechanics", "practice", "random"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem 5", description: "Yet Another Random Problem", link: "/notes/PhysicsProb/qq13prob.pdf", type: "problem-set", tags: ["mechanics", "practice", "random"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem 6", description: "Yet Another Random Problem", link: "/notes/PhysicsProb/qq14prob.pdf", type: "problem-set", tags: ["mechanics", "practice", "random"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem 7", description: "Yet Another Random Problem", link: "/notes/PhysicsProb/tawhidprob2.pdf", type: "problem-set", tags: ["mechanics", "practice", "random"], grade: ["grade-11-12"], language: "en" },
        { title: "Problem Set", description: "Yet Another Random Problem Set", link: "/notes/PhysicsProb/Weekly.pdf", type: "problem-set", tags: ["practice", "weekly", "set"], grade: ["grade-11-12"], language: "en" },
      ]},
      { name: "Research", items: [
        { title: "Entropy-Minimal Noise Schedules", description: "Thermodynamics approach to diffusion models.", link: "https://ijscar.org/pubs/articles/vol3-issue2-omar-diffusion-thermodynamics.pdf", type: "research", tags: ["machine learning", "diffusion", "thermodynamics", "AI", "probabilistic models"], grade: ["undergrad"], language: "en" },
        { title: "Geometric Distortion of Quantum State Space", description: "Comparative analysis of quantum channels.", link: "https://zenodo.org/records/20793740", type: "research", tags: ["quantum physics", "quantum channels", "quantum state space"], grade: ["undergrad"], language: "en" },
      ]},
    ],
  },
  {
    title: "Competitive Programming",
    icon: "💻",
    description: "Algorithms, data structures, and problem-solving techniques for programming contests.",
    sections: [
      { name: "Handouts", items: [
        { title: "Algorithms", description: "Comprehensive handbook on algorithms.", link: "/notes/Algorithms.pdf", type: "handout", tags: ["algorithms", "competitive programming", "handbook"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["prog-olympiad", "ioi"] },
        { title: "Number Theory", description: "Number theory concepts for CP.", link: "/notes/NumberTheory.pdf", type: "handout", tags: ["number theory", "competitive programming", "modular arithmetic"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["prog-olympiad", "ioi"] },
        { title: "Graph Theory", description: "Graph theory concepts and algorithms.", link: "/notes/GraphTheory.pdf", type: "handout", tags: ["graph theory", "BFS", "DFS", "shortest path", "MST"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["prog-olympiad", "ioi"] },
        { title: "Greedy Algorithms", description: "Techniques and applications of greedy algorithms.", link: "/notes/GreedyAlgorithms.pdf", type: "handout", tags: ["greedy", "algorithms", "competitive programming"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["prog-olympiad", "ioi"] },
        { title: "Dynamic Programming", description: "DP techniques from basics to advanced.", link: "/notes/Dp.pdf", type: "handout", tags: ["dynamic programming", "DP", "optimization", "competitive programming"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["prog-olympiad", "ioi"] },
        { title: "String Algorithms", description: "String matching and pattern recognition.", link: "/notes/StringAlgorithms.pdf", type: "handout", tags: ["strings", "matching", "KMP", "algorithms"], grade: ["grade-11-12", "undergrad"], language: "en", olympiad: ["prog-olympiad", "ioi"] },
      ]},
    ],
  },
  {
    title: "Astronomy",
    icon: "🔭",
    description: "Astrophysics, cosmology, observational astronomy, and space exploration.",
    sections: [
      { name: "Handouts/Book", items: [
        { title: "A JOURNEY THROUGH THE UNIVERSE Astronomy For Young Explorers", description: "Mini beginner's book on astronomy.", link: "/notes/AstroIntro.pdf", type: "book", tags: ["astronomy", "beginners", "space", "stars", "planets", "young explorers"], grade: ["grade-3-5", "grade-6-8"], language: "en" },
      ]},
    ],
  },
];

const countByType = (type: ResourceType) =>
  librarySubjects.reduce(
    (acc, subject) =>
      acc +
      subject.sections.reduce(
        (a, section) => a + section.items.filter((i) => i.type === type).length,
        0
      ),
    0
  );

export const platformStats = [
  { label: "Problems", value: countByType("problem-set"), icon: "🧮" },
  { label: "Articles", value: countByType("article"), icon: "📝" },
  { label: "Handouts", value: countByType("handout") + countByType("notes"), icon: "📚" },
  { label: "Research", value: countByType("research"), icon: "🔬" },
  { label: "Books", value: countByType("book"), icon: "📖" },
  { label: "Contributors", value: 1, icon: "👥" },
];
