type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  icon: string;
  achievements: string[];
  stack: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "App Development",
    company: "Personal Projects",
    location: "Ankara (Remote)",
    period: "01/2025 - Present",
    icon: "bolt",
    achievements: [
      "Built applications leveraging advanced AI tools, integrating intelligent features and automations.",
      "Focused on enhancing functionality, user experience, and overall performance."
    ],
    stack: ["React", "Next.js", "TypeScript", "Python", "FastAPI"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Privia Security",
    location: "Istanbul (Remote)",
    period: "07/2025 - 09/2025",
    icon: "web",
    achievements: [
      "Developed and maintained user-facing features using React.js, Next.js, and TypeScript.",
      "Collaborated closely with backend engineers to integrate RESTful APIs.",
      "Improved performance and resolved UI/UX bugs to enhance user experience."
    ],
    stack: ["React", "Next.js", "TypeScript"]
  },
  {
    role: "Backend Developer Intern",
    company: "Passchanger",
    location: "Ankara",
    period: "10/2024 - 02/2025",
    icon: "dns",
    achievements: [
      "Designed and implemented backend APIs using Python and FastAPI.",
      "Integrated authentication, session management, and core data processing flows.",
      "Wrote unit tests and contributed to technical documentation and internal wikis."
    ],
    stack: ["Python", "FastAPI", "Pytest"]
  },
  {
    role: "Member",
    company: "Ankara University Science and Statistics Student Community",
    location: "Ankara",
    period: "01/2024 - Present",
    icon: "groups",
    achievements: [
      "Active participation in community activities focused on statistics and software."
    ],
    stack: ["İstatistik", "Topluluk"]
  }
];

export default function Experience() {
  return (
    <section className="flex-grow flex flex-col items-center w-full px-4 py-8 md:py-12">
      <div className="w-full max-w-[800px] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
            <span className="w-8 h-[2px] bg-primary"></span>
            Kariyer Yolculuğu
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">İş Deneyimi</h1>
          <p className="text-gray-500 dark:text-[#9da6b9] text-lg leading-relaxed max-w-2xl">
            Yazılım mühendisliği kariyerimde ölçeklenebilirlik, performans ve ürün geliştirme odaklı katkılarımı öne çıkaran kısa bir özet.
          </p>
        </div>

        <div className="relative pl-4 md:pl-0">
          <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-gray-200 dark:bg-[#282e39] hidden md:block" />
          {experiences.map((exp, idx) => (
            <div key={exp.role} className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${idx < experiences.length - 1 ? "mb-12" : ""} group`}>
              <div className="flex-none z-10">
                <div className="size-14 rounded-xl bg-background-light dark:bg-[#1a1d21] border border-gray-200 dark:border-[#282e39] flex items-center justify-center shadow-sm group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-300" style={{ fontSize: 28 }}>{exp.icon}</span>
                </div>
              </div>
              <div className="flex-1 bg-white dark:bg-[#1a1d21] p-6 rounded-2xl border border-gray-200 dark:border-[#282e39] shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-primary font-medium">{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((a) => (
                    <div key={a} className="flex gap-3">
                      <span className="material-symbols-outlined text-primary mt-0.5 !text-[20px]">check_circle</span>
                      <p className="text-gray-600 dark:text-[#9da6b9] text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-[#282e39]">
                  {exp.stack.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-[#282e39] text-gray-600 dark:text-gray-300 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex justify-center">
          <a
            href="/projects"
            className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#282e39] hover:bg-[#323945] text-white text-base font-bold transition-all hover:scale-105"
          >
            Tüm Projeleri Gör
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}


