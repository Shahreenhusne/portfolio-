import Reveal from "@/components/ui/Reveal";
import ExperienceItem from "./ExperienceItem";

const ExperienceGroup = ({ label, items, delay = 0 }) => {
  return (
    <div className="flex flex-col gap-6">
      <Reveal from="left" delay={delay}>
        <div className="flex items-center gap-3">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-widest text-sky-100/40">
            {label}
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </Reveal>
      <Reveal from="right" delay={delay + 80}>
        <ul className="relative flex flex-col border-l-2 border-white/10 pl-6 sm:pl-8">
          {items.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </ul>
      </Reveal>
    </div>
  );
};

export default ExperienceGroup;
