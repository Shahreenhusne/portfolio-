"use client";
import ProjectCard from "@components/ProjectCard";
import Todo from "@public/img/Todo.png";
import Wordnik from "@public/img/Wordnik.png";
import Crytocap from "@public/img/Crytocap.png";
import InddorPlants from "@public/img/Indoorplants.png";
import Link from "@public/img/link.png";
import Vtmerch from "@public/img/Vtmerch.png";
import Ahar24 from "@public/img/Ahar24.png"
import { useState } from "react";
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      image: Crytocap,
      title: "CrytoCap",
      tags: ["React",  "Framer Motion"],
      desc: "A cryto website developed with Coingecko opan api",
      ghLink: "https://github.com/TejasBhovad/promptopia",
      demoLink: "https://cryptocapbd.netlify.app/",
    },
    {
      id: 2,
      image: InddorPlants,
      title: "Indoor Plants",
      tags: ["React", "Typescript","Tailwind"],
      desc: "This is an animated static site with react tailwind and scss",
      ghLink: "https://github.com/Shahreenhusne/Indoor-Plants",
      demoLink: "https://indoplants.netlify.app/#popular",
    },
    {
      id: 3,
      image: Wordnik,
      title: "Guess the Word",
      tags: ["Next js","Wordnik Api"],
      desc: "A simple guessing game build with Next js",
      ghLink: "https://github.com/Shahreenhusne/Guess-The-Word",
      demoLink: "https://guess-the-word-ep6k3v683-shahreens-projects.vercel.app/",
    },
    {
      id: 4,
      image: Vtmerch,
      title: "VTMERCH",
      tags: ["React", "taiwild"],
      desc: "React website with tailwind css",
      ghLink: "https://github.com/Shahreenhusne/VTMERCH",
      demoLink: "https://app.netlify.com/sites/vtmarch/overview ",
    },
    {
      id: 5,
      image: Link,
      title: "Django Api",
      tags: ["Django"],
      desc: "Basic django api",
      ghLink: "https://github.com/Shahreenhusne/Django",
      demoLink: "",
    },
    {
      id: 6,
      image: Todo,
      title: "To do list",
      tags: ["React", "Redux-toolkit"],
      desc: "Simple to do list with Redux-toolkit",
      ghLink: "https://github.com/Shahreenhusne/To-Do-List-with-Redux",
      demoLink: "",
    },
    {
      id: 7,
      image: Ahar24,
      title: "Ahar24",
      tags: ["React", "Node"],
      desc: "Backend is yet to be build",
      ghLink: "https://github.com/Shahreenhusne/Ahar24",
      demoLink: "",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const displayedProjects = [
    projects[currentIndex % projects.length],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ];
  return (
    <div className="main project">
      <button onClick={previousProject} className="arrow-key">
        &lt;
      </button>
      <div className="projects-wrapper">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            tags={project.tags}
            desc={project.desc}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
            className={`project-card ${index === 2 ? "active" : ""}`}
          />
        ))}
      </div>
      <button onClick={nextProject} className="arrow-key">
        &gt;
      </button>
    </div>
  );
};

export default ProjectsPage;
