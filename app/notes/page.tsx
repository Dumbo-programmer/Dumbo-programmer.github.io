import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Tawhid's Portfolio",
  description: "Physics, Mathematics, and Competitive Programming notes by Tawhid Bin Omar. Handouts, observations, and models.",
  keywords: [
    "Physics notes", "Mathematics notes", "Competitive Programming",
    "Physics handouts", "Math observations", "Programming models",
    "Tawhid", "Student notes"
  ],
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
            { title: "Coming Soon", description: "Physics handouts will be available here", link: "#" }
          ]
        },
        {
          name: "Observations",
          items: [
            { title: "Coming Soon", description: "Physics observations will be available here", link: "#" }
          ]
        },
        {
          name: "Models",
          items: [
            { title: "Coming Soon", description: "Physics models will be available here", link: "#" }
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
            { title: "Coming Soon", description: "Math handouts will be available here", link: "#" }
          ]
        },
        {
          name: "Observations",
          items: [
            { title: "Coming Soon", description: "Math observations will be available here", link: "#" }
          ]
        },
        {
          name: "Models",
          items: [
            { title: "Coming Soon", description: "Math models will be available here", link: "#" }
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
            { title: "Coming Soon", description: "CP handouts will be available here", link: "#" }
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

  return (
    <main className="min-h-screen w-full pt-32 pb-20 px-6" id="main-content">
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
