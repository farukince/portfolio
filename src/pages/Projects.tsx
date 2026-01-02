import { useState } from "react";
type Project = {
  icon: string;
  iconColor?: string;
  title: string;
  updated: string;
  description: string;
  tags: string[];
  repo: string;
};

const projects: Project[] = [
  {
    icon: "smart_toy",
    iconColor: "text-indigo-500",
    title: "DevSpeak AI",
    updated: "AI; Web Development",
    description:
      "SaaS platform for developers to practice English communication: multi‑tenant Next.js App Router, Supabase Auth, and server‑side Google Gemini integration with a secure BFF.",
    tags: ["AI", "Web Development", "Next.js", "Supabase", "Gemini"],
    repo: "https://github.com/farukince/devspeak-ai"
  },
  {
    icon: "neurology",
    iconColor: "text-primary",
    title: "AI Code Generator",
    updated: "AI; Cloud Technologies",
    description:
      "Python‑based AI code generation/automation toolkit. Modular design suited for containerization and cloud execution.",
    tags: ["AI", "Cloud Technologies", "Python", "Docker"],
    repo: "https://github.com/farukince/ai-code-generator"
  },
  {
    icon: "group",
    iconColor: "text-purple-500",
    title: "User Management App",
    updated: "Web Development",
    description:
      "User management UI featuring listing, search/filtering, and modern components. TypeScript frontend assignment app built for an internship interview.",
    tags: ["Web Development", "TypeScript", "React"],
    repo: "https://github.com/farukince/user-management-app"
  },
  {
    icon: "track_changes",
    iconColor: "text-amber-500",
    title: "Click Tracker Project",
    updated: "Web Development",
    description:
      "NPM library and example app for click tracking. Helps collect and analyze user interaction data with simple integration.",
    tags: ["Web Development", "TypeScript", "NPM Library"],
    repo: "https://github.com/farukince/click-tracker-npm-library-with-example-project"
  },
  {
    icon: "cloud",
    iconColor: "text-cyan-500",
    title: "climate-stats-lambda",
    updated: "Cloud Technologies; Statistics",
    description:
      "Serverless climate/statistics API. AWS Lambda‑ready TypeScript codebase to process and serve climate data.",
    tags: ["Cloud Technologies", "Statistics", "TypeScript", "Serverless"],
    repo: "https://github.com/farukince/climate-stats-lambda"
  }
];

export default function Projects() {
  const categories = ["All", "AI", "Web Development", "Statistics", "Cloud Technologies"];
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const filteredProjects = projects.filter((p) =>
    activeCategory === "All" ? true : p.tags.includes(activeCategory)
  );
  return (
    <div className="flex-grow">
      <section className="relative pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Software Developer
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/farukince"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a
              href="https://www.linkedin.com/in/farukiince0/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">business_center</span>
            </a>
            <a
              href="mailto:farukiince@gmail.com"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-12">
        <div className="flex flex-col gap-6">
          <div className="max-w-2xl mx-auto w-full relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-gray-400">search</span>
            </div>
            <input
              type="text"
              placeholder="Search projects by name, language, or technology..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-surface-dark text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm shadow-sm transition-shadow"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((label) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === label
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white dark:bg-surface-dark text-slate-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                }`}
                aria-pressed={activeCategory === label}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg ${p.iconColor ?? "text-primary"} bg-current/10 flex items-center justify-center`}>
                      <span className="material-symbols-outlined icon-filled">{p.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-gray-500 font-medium">{p.updated}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb  -6">{p.description}</p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6 mt-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.repo}
                    className="flex items-center justify-center w-full px-4 py-2.5 bg-slate-50 dark:bg-[#151b26] hover:bg-primary hover:text-white text-slate-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-colors border border-slate-200 dark:border-gray-700 hover:border-primary gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">code</span>
                    View Repository
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 rounded-lg text-sm font-bold border border-gray-200 dark:border-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-surface-dark transition-colors flex items-center gap-2">
            Load More Projects
            <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
        </div>
      </section>
    </div>
  );
}


