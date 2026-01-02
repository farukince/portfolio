import { useEffect, useRef, useState } from "react";

export default function Home() {
  const defaultImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDtgeH8BwmZz2xotokzBB3LIBfD6mhMf4fIAH9PFkGE336x2B-pyNMAYjquvMQzP_LSpGRBArlgFIR4b4MKo9PyXuDx-PJxi2giGJCe08-DxHm5owgFwYP8iimvnEKSKWFIh1qQqHZ62qmEsvp7iF60x5U8X9JVGhktHUHC7JB_rhD-CtaT1Pw96t_9oI1oxW2m5_7dXSmRTLoil3PGc7y8SXLc6w_k0ZpIlVg27ktHC_GulL2tv2zfrfMBgjGgezcW27S_wul6MYr6";
  const [imageSrc, setImageSrc] = useState<string>(defaultImage);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("homeHeroImage");
    if (saved) {
      setImageSrc(saved);
    }
  }, []);

  const onPickImage = () => {
    inputRef.current?.click();
  };

  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = String(reader.result);
      setImageSrc(dataUrl);
      try {
        localStorage.setItem("homeHeroImage", dataUrl);
      } catch {
        /* ignore quota errors */
      }
    };
    reader.readAsDataURL(file);
    // reset input so the same file can be re-selected if needed
    e.target.value = "";
  };

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">
                Hi, I'm <span className="text-primary">Faruk İnce</span>.
              </h1>
              <p className="max-w-[600px] text-base text-gray-600 dark:text-gray-300 md:text-lg leading-relaxed">
                I'm a software developer, improving every day, and I share this journey with you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Projects
              </a>
              <a
                href="mailto:farukiince@gmail.com"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent px-8 text-base font-bold text-gray-900 dark:text-white transition-all hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-6 pt-8 text-gray-500 dark:text-gray-400">
              <a aria-label="GitHub" className="flex items-center gap-2 hover:text-primary transition-colors group" href="https://github.com/farukince" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[24px]">code</span>
                <span className="text-sm font-medium hidden sm:block">GitHub</span>
              </a>
              <a aria-label="LinkedIn" className="flex items-center gap-2 hover:text-primary transition-colors group" href="https://www.linkedin.com/in/farukiince0/" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[24px]">contact_page</span>
                <span className="text-sm font-medium hidden sm:block">LinkedIn</span>
              </a>
              <a aria-label="Email" className="flex items-center gap-2 hover:text-primary transition-colors group" href="mailto:farukiince@gmail.com">
                <span className="material-symbols-outlined text-[24px]">alternate_email</span>
                <span className="text-sm font-medium hidden sm:block">Email</span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl"></div>
              <img
                className="h-full w-full object-cover object-center relative z-10 opacity-90 hover:opacity-100 transition-opacity"
                alt="Faruk İnce portre"
                src={imageSrc}
              />
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onFileChange}
              />
              <button
                type="button"
                onClick={onPickImage}
                className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 rounded-lg border border-white/40 dark:border-gray-700/60 bg-white/80 dark:bg-[#1e2430]/80 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-200 backdrop-blur-sm shadow-sm hover:bg-white/90 dark:hover:bg-[#1e2430]/90 transition-colors"
              >
                <span className="material-symbols-outlined !text-[16px]">photo_camera</span>
                Fotoğrafı Değiştir
              </button>
              <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-xl bg-white/90 dark:bg-[#1e2430]/90 backdrop-blur-sm p-4 shadow-lg border border-white/20 dark:border-gray-700/50">
                <div className="rounded-full bg-primary/20 p-2 text-primary">
                  <span className="material-symbols-outlined text-sm">data_object</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Current Focus</span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Cloud Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


