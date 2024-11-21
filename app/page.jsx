"use client";

import DynamicText from "@components/DynamicText";
import ModelViewer from "@components/ModelViewer";
import SocialLinks from "@components/SocialLinks";
import Arrow from "@components/logos/Arrow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  const router = useRouter();

  const handleScrollToBottom = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("bottom");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const link = document.querySelector(".scroll-to-bottom");
    if (link) {
      link.addEventListener("click", handleScrollToBottom);
    }

    return () => {
      if (link) {
        link.removeEventListener("click", handleScrollToBottom);
      }
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="hero">
          <ModelViewer />
          <DynamicText />
          <SocialLinks />
          <a href="#" className="scroll-to-bottom">
            <Arrow className="arrow" />
          </a>
        </div>
        <div className="about" id="bottom">
          <div className="contain">
            <div className="about-desc">
              <div className="about-title">About Me</div>
              <div className="about-text">
                <p>
                I am a BRAC University Computer Science and Engineering graduate with over a year of hands-on experience in web development. My professional journey has allowed me to work with modern technologies such as React, Next.js, Tailwind CSS, Bootstrap, JavaScript, MySQL, and Python, contributing to dynamic and impactful projects. 
                I am also proficient in collaboration tools like GitHub, Jira, and Notion, which have enhanced my ability to work efficiently in team environments.
                 <br/>With a strong foundation in Python, I am eager to deepen my expertise in the language, aiming to explore the exciting world of Artificial Intelligence. 
                 Passionate about continuous learning and innovation, I aspire to leverage my skills and knowledge to create meaningful solutions in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
};

export default Home;
