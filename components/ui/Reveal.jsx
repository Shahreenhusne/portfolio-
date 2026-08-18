"use client";

import { useEffect, useRef, useState } from "react";

const hiddenTransforms = {
  left: "-translate-x-10 sm:-translate-x-16",
  right: "translate-x-10 sm:translate-x-16",
  up: "translate-y-8",
};

const Reveal = ({ children, from = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `${hiddenTransforms[from]} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
