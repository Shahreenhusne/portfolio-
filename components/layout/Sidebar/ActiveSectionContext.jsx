"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { sidebarLinks } from "./sidebarLinks";

const ActiveSectionContext = createContext("home");

export function ActiveSectionProvider({ children }) {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = sidebarLinks.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionContext.Provider value={activeId}>{children}</ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
