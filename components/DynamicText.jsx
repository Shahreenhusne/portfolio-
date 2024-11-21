"use client";
import "@styles/components/dynamicText.scss";
import { useState, useEffect } from "react";

const DynamicText = () => {
  const strings = [
    "Exploring In The World Of Web Development",
    "Learning New Technologies",
    "Aspiring Software Dev",
  ];
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((index + 1) % strings.length);
        setIsVisible(true);
      }, 1000);
    }, 2400);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <p className={`fade-in ${isVisible ? "visible" : ""}`}>{strings[index]}</p>
  );
};

export default DynamicText;

