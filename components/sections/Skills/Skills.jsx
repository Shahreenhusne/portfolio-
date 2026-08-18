import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillRow from "./SkillRow";
import { skills } from "@/lib/data/profile";

const Skills = () => {
  return (
    <Section id="skills" className="flex flex-col gap-6">
      <Reveal from="left">
        <SectionHeading prefix="My" title="Skills" subtitle="Technologies I work with day to day" />
      </Reveal>
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} from={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
            <SkillRow name={skill.name} level={skill.level} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
