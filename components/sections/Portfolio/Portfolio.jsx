import { Rocket, ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "./ProjectCard";

const Portfolio = ({ projects }) => {
  return (
    <Section id="portfolio" className="flex flex-col gap-8">
      <Reveal from="left">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-100/50">
            <Rocket className="h-3.5 w-3.5" />
            Projects — {projects.length} Total
          </div>
          <a
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-steel-500 transition-colors hover:text-sky-100 sm:text-sm"
          >
            View all in detail
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
      <Reveal from="right" delay={120}>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default Portfolio;
