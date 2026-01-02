import { Link, NavLink } from "react-router-dom";
import resumePdf from "../../Faruk_Ince_Resume.pdf";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#282e39] bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-gray-900 dark:text-white">
          <div className="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">Faruk İnce</h2>
        </Link>
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-6">
            <NavLink to="/" end className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"}`}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"}`}>Projects</NavLink>
            <NavLink to="/experience" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"}`}>Experience</NavLink>
            <NavLink to="/education-skills" className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"}`}>Education &amp; Skills</NavLink>
          </div>
          <a
            href={resumePdf}
            className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="truncate">Resume</span>
          </a>
        </nav>
        <div className="md:hidden text-gray-900 dark:text-white">
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </header>
  );
}


