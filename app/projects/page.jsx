import { Rocket } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ActiveSectionProvider } from "@/components/layout/Sidebar/ActiveSectionContext";
import PageShell from "@/components/layout/PageShell";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/sections/Portfolio/ProjectCard";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <ActiveSectionProvider>
      <PageShell>
        <Section className="flex flex-col gap-8">
          <Reveal from="left">
            <div className="mx-auto flex w-full max-w-6xl items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-100/50">
              <Rocket className="h-3.5 w-3.5" />
              Projects — {projects.length} Total
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
      </PageShell>
    </ActiveSectionProvider>
  );
}
