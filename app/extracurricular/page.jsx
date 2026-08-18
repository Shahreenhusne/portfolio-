import { prisma } from "@/lib/prisma";
import { ActiveSectionProvider } from "@/components/layout/Sidebar/ActiveSectionContext";
import PageShell from "@/components/layout/PageShell";
import ExtracurricularSection from "@/components/sections/Extracurricular/ExtracurricularSection";

export const dynamic = "force-dynamic";

export default async function ExtracurricularPage() {
  const activities = await prisma.activity.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <ActiveSectionProvider>
      <PageShell>
        <ExtracurricularSection id="extracurricular" activities={activities} />
      </PageShell>
    </ActiveSectionProvider>
  );
}
