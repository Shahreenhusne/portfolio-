import { prisma } from "@/lib/prisma";
import { ActiveSectionProvider } from "@/components/layout/Sidebar/ActiveSectionContext";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero/Hero";
import Education from "@/components/sections/Education/Education";
import Experience from "@/components/sections/Experience/Experience";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import ExtracurricularSection from "@/components/sections/Extracurricular/ExtracurricularSection";
import Skills from "@/components/sections/Skills/Skills";
import Contact from "@/components/sections/Contact/Contact";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [projects, experience, activities] = await Promise.all([
    prisma.project.findMany({
      where: { featured: true },
      orderBy: { order: "asc" },
      take: 8,
    }),
    prisma.experience.findMany({
      orderBy: { order: "asc" },
    }),
    prisma.activity.findMany({
      orderBy: { order: "asc" },
    }),
  ]);

  return (
    <ActiveSectionProvider>
      <PageShell>
        <Hero />
        <Education />
        <Experience items={experience} />
        <Portfolio projects={projects} />
        <ExtracurricularSection id="extracurricular" activities={activities} />
        <Skills />
        <Contact />
      </PageShell>
    </ActiveSectionProvider>
  );
}
