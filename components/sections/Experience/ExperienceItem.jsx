import { ExternalLink } from "lucide-react";

const ExperienceItem = ({ item }) => {
  const isCurrent = !item.endDate;

  return (
    <li className="relative pb-10 last:pb-0">
      <span
        className={`absolute -left-6 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full sm:-left-8 ${
          isCurrent ? "bg-steel-500 ring-4 ring-steel-500/25" : "bg-navy-950 ring-2 ring-sky-100/25"
        }`}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold text-frost-50 sm:text-lg">{item.role}</h3>
        <span className="shrink-0 text-xs text-sky-100/40 sm:text-sm">
          {item.startDate} – {item.endDate || "Present"}
        </span>
      </div>
      <p className="mt-0.5 text-sm font-medium text-steel-500 sm:text-base">
        {item.company}
        {item.location ? ` · ${item.location}` : ""}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-sky-100/70 sm:text-base">{item.description}</p>
      {item.techStack?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-navy-950/60 px-2.5 py-1 text-xs text-sky-100/70"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-steel-500 transition-colors hover:text-sky-100 sm:text-sm"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Visit
        </a>
      )}
    </li>
  );
};

export default ExperienceItem;
