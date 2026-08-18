import { Briefcase } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ExperienceGroup from "./ExperienceGroup";

const Experience = ({ items }) => {
  const recent = items.filter((item) => !item.isEarlierRole);
  const earlier = items.filter((item) => item.isEarlierRole);

  return (
    <Section id="experience" className="flex flex-col gap-8">
      <Reveal from="left">
        <div className="mx-auto flex w-full max-w-4xl items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-100/50">
          <Briefcase className="h-3.5 w-3.5" />
          Experience
        </div>
      </Reveal>
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        {recent.length > 0 && <ExperienceGroup label="Current & Recent" items={recent} />}
        {earlier.length > 0 && <ExperienceGroup label="Earlier Roles" items={earlier} delay={150} />}
      </div>
    </Section>
  );
};

export default Experience;
