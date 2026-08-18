"use client";

import { sidebarLinks } from "./sidebarLinks";
import { useActiveSection } from "./ActiveSectionContext";

const Sidebar = () => {
  const activeId = useActiveSection();

  return (
    <nav
      aria-label="Section navigation"
      className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-white/10 bg-navy-950/60 p-2 shadow-glow backdrop-blur-xl transition-all duration-300 sm:gap-3 sm:p-3"
    >
      {sidebarLinks.map(({ id, label, Icon }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`/#${id}`}
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 sm:h-10 sm:w-10 ${
              isActive
                ? "bg-steel-500 text-frost-50 shadow-glow"
                : "text-sky-100/50 hover:bg-navy-800 hover:text-sky-100"
            }`}
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
          </a>
        );
      })}
    </nav>
  );
};

export default Sidebar;
