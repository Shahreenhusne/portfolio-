"use client";
import ProjectCard from "@components/ProjectCard";
import Dashboard from "@public/img/Dashboard.png";
import Todo from "@public/img/Todo.png";
import Wordnik from "@public/img/Wordnik.png";
import Crytocap from "@public/img/Crytocap.png";
import IndoorPlants from "@public/img/Indoorplants.png";
import Link from "@public/img/link.png";
import Vtmerch from "@public/img/Vtmerch.png";
import Ahar24 from "@public/img/Ahar24.png";
import ArtBoard from "@public/img/ArtBoard.png";
import ChatApp from "@public/img/ChatApp.png";
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
      image: Dashboard,
      title: "School Dashboard",
      tags: ["Nextjs", "Typescript","Tailwind"],
      desc: "Nextjs School management Dashboard",
      ghLink: "https://github.com/Shahreenhusne?tab=repositories",
     
    },
    {
      id: 3,
      image: IndoorPlants,
      title: "Indoor Plants",
      tags: ["React", "Typescript","Tailwind"],
      desc: "This is an animated static site with react tailwind and scss",
      ghLink: "https://github.com/Shahreenhusne/Indoor-Plants",
      demoLink: "https://indoplants.netlify.app/#popular",
    },
    {
      id: 4,
      image: Wordnik,
      title: "Guess the Word",
      tags: ["Next js","Wordnik Api"],
      desc: "A simple guessing game build with Next js",
      ghLink: "https://github.com/Shahreenhusne/Guess-The-Word",
      demoLink: "https://guess-the-word-ep6k3v683-shahreens-projects.vercel.app/",
    },
    {
      id: 5,
      image: Vtmerch,
      title: "VTMERCH",
      tags: ["React", "taiwild"],
      desc: "Clothing Website Homepage",
      ghLink: "https://github.com/Shahreenhusne/VTMERCH",
      demoLink: "https://app.netlify.com/sites/vtmarch/overview ",
    },
    {
      id: 6,
      image: Link,
      title: "Django Api",
      tags: ["Django"],
      desc: "Basic django api",
      ghLink: "https://github.com/Shahreenhusne/Django",
      demoLink: "",
    },
    {
      id: 7,
      image: Todo,
      title: "To do list",
      tags: ["React", "Redux-toolkit"],
      desc: "Simple to do list with Redux-toolkit",
      ghLink: "https://github.com/Shahreenhusne/To-Do-List-with-Redux",
      demoLink: "",
    },
    {
      id: 8,
      image: Ahar24,
      title: "Ahar24",
      tags: ["React", "Node"],
      desc: "Food Delivery App",
      ghLink: "https://github.com/Shahreenhusne/Ahar24",
      demoLink: "",
    },
    {
      id: 9,
      image: ArtBoard,
      title: "ArtBoard",
      tags: ["React","Tailwind CSS"],
      desc: "An art board by shahren",
      ghLink: "https://github.com/Shahreenhusne/Art-Board",
      demoLink: "artboardbyshahreen.netlify.app",
    },
      {
      id: 10,
      image: ChatApp,
      title: "ChatApp",
      tags: ["Next-Auth","Firestore"],
      desc: "Using OpenAI api",
      ghLink: "https://github.com/Shahreenhusne/chatapp-with-openAi",
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
