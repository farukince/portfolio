import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 dark:border-[#282e39] bg-background-light dark:bg-background-dark py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/farukince" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-primary">
              <span className="material-symbols-outlined text-[28px]">code</span>
            </a>
            <a href="https://www.linkedin.com/in/farukiince0/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-primary">
              <span className="material-symbols-outlined text-[28px]">contact_page</span>
            </a>
            <a href="mailto:farukiince@gmail.com" className="text-gray-400 transition-colors hover:text-primary">
              <span className="material-symbols-outlined text-[28px]">alternate_email</span>
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-base text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Faruk İnce. All rights reserved.</p>
            <p className="text-sm text-gray-400 dark:text-gray-600">Built with React &amp; Tailwind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


