import resumePdf from "../../Faruk_Ince_Resume.pdf";

export default function EducationSkills() {
  return (
    <main className="flex-1 w-full px-4 md:px-10 lg:px-40 py-8 flex justify-center">
      <div className="w-full max-w-[1280px] flex flex-col gap-10">
        <div className="rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.9) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsOSdDDR9JjHduLxE8o711H7ADAprlNDtOrujVVwXF6G79v0Z3WExaFDJyVmlVlb297AfokoDxvb-JNz7MlN5ae0FnjUfEAzOfWKkVAoDoD1ASHQYiMq9tuEP8qhG8q1_t1qaEAWhSXQqT9TDRYqlUB1EubdjqKboJoz5v76F9sIuxsuyZ6EIxh2ehSdOv-58hIBKojmT0RYlyFw_kgWly2EHY75KNRsPJXG1tQOVXb26Tj6jf57AQXQiOGSlWZzI1F1p6h-1tnJEX')"
              }}
            ></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-200 text-xs font-medium uppercase tracking-wider mb-2">
              Professional Portfolio
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">Education &amp; Skills</h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
              A comprehensive overview of my academic journey, technical expertise, and the tools I use to build scalable software solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-b border-[#282e39] pb-4">
              <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">school</span>
                Academic Background
              </h2>
            </div>
            <div className="pl-2">
              <div className="grid grid-cols-[40px_1fr] gap-x-2">
                <div className="flex flex-col items-center gap-1 pt-1">
                  <div className="size-3 rounded-full bg-primary shadow-[0_0_10px_rgba(19,91,236,0.5)]"></div>
                  <div className="w-[2px] bg-[#282e39] h-full grow my-2"></div>
                </div>
                <div className="flex flex-col pb-8 group">
                  <div className="bg-[#1a202c] hover:bg-[#202634] transition-colors p-5 rounded-lg border border-[#282e39]">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-primary text-sm font-bold uppercase tracking-wider">2022 - 07/2026 (Expected)</span>
                    </div>
                    <h3 className="text-white text-lg font-bold leading-snug mb-1">Bachelor's in Statistics</h3>
                    <p className="text-gray-400 text-sm font-medium">Ankara University, Ankara, Turkey</p>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                      Strong foundation in data analysis, probability, and problem‑solving; currently focusing on computer science alongside the academic journey in statistics.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1 pt-1">
                  <div className="size-2 rounded-full bg-[#282e39]"></div>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="border-b border-[#282e39] pb-4">
              <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">terminal</span>
                Technical Proficiency
              </h2>
            </div>
            <div className="grid gap-6">
              <div className="bg-[#1a202c] p-6 rounded-xl border border-[#282e39]">
                <h3 className="text-white text-base font-semibold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400 text-sm">code</span> Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "JavaScript (ES6+)", "Python"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#135bec]/10 text-blue-300 border border-[#135bec]/20 text-sm font-medium hover:bg-[#135bec]/20 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1a202c] p-6 rounded-xl border border-[#282e39]">
                <h3 className="text-white text-base font-semibold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-400 text-sm">layers</span> Frameworks &amp; Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "FastAPI", "Tailwind CSS"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 text-sm font-medium hover:bg-purple-500/20 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1a202c] p-6 rounded-xl border border-[#282e39]">
                <h3 className="text-white text-base font-semibold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-sm">dns</span> Tools &amp; Practices
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git/GitHub", "REST APIs", "Unit Testing (Pytest)", "Documentation", "TDD"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-sm font-medium hover:bg-emerald-500/20 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-white text-lg font-bold mb-4">Core Competency Levels</h3>
              <div className="space-y-4">
                {[
                  ["Frontend (React/Next/TS)", 90],
                  ["Backend APIs (Python/FastAPI)", 80],
                  ["Data/Statistics Fundamentals", 75]
                ].map(([label, pct]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-sm font-medium text-gray-300 mb-2">
                      <span>{label as string}</span>
                      <span className="text-primary">{pct as number}%</span>
                    </div>
                    <div className="w-full bg-[#282e39] rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a202c] p-6 rounded-xl border border-[#282e39]">
              <h3 className="text-white text-base font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-300 text-sm">translate</span> Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Turkish", "English"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-amber-500/10 text-amber-200 border border-amber-500/20 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#1a202c] p-6 rounded-xl border border-[#282e39]">
              <h3 className="text-white text-base font-semibold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-300 text-sm">school</span> Courses
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>AI Fundamentals, DataCamp (May 2025 — Jun 2025)</li>
                <li>Agile 101, Pupilica (May 2025)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-2 rounded-xl bg-gradient-to-r from-[#135bec]/20 to-[#135bec]/5 border border-[#135bec]/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-full text-white">
              <span className="material-symbols-outlined">description</span>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">Interested in my full profile?</h3>
              <p className="text-gray-400 text-sm">Download my resume to see detailed project history and references.</p>
            </div>
          </div>
          <a
            href={resumePdf}
            className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20 text-white text-base font-bold leading-normal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}


