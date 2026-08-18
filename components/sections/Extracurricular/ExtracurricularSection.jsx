import { Medal } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ActivityBoard from "./ActivityBoard";

const ExtracurricularSection = ({ id, activities }) => {
  return (
    <Section id={id} className="flex flex-col gap-8">
      <Reveal from="left">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-100/50">
          <Medal className="h-3.5 w-3.5" />
          Extra-Curricular Activities
        </div>
      </Reveal>
      <Reveal from="right" delay={120} className="mx-auto w-full max-w-6xl">
        <ActivityBoard activities={activities} />
      </Reveal>
    </Section>
  );
};

export default ExtracurricularSection;
