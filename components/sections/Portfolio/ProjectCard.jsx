import { ArrowUpRight, CheckCircle2, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons/BrandIcons";

const ProjectCard = ({ project }) => {
  const { confidential, demoUrl, githubUrl } = project;

  const href = confidential ? null : demoUrl || githubUrl || null;
  const isLive = !confidential && Boolean(demoUrl);
  const isCodeOnly = !confidential && !demoUrl && Boolean(githubUrl);

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-950/40 p-5 transition-colors duration-200 sm:p-6 ${
        href ? "hover:border-steel-500/40" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-sky-100/40">
          {project.category}
        </span>
        {confidential ? (
          <Lock className="h-4 w-4 shrink-0 text-sky-100/30" />
        ) : isLive ? (
          <ArrowUpRight className="h-4 w-4 shrink-0 text-steel-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : isCodeOnly ? (
          <GithubIcon className="h-4 w-4 shrink-0 text-sky-100/50" />
        ) : null}
      </div>

      <h3 className="mt-1 text-lg font-bold text-frost-50">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sky-100/60">{project.description}</p>

      {project.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-steel-500/20 bg-steel-500/10 px-2.5 py-1 text-xs font-medium text-sky-100"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-4">
        {confidential ? (
          <span className="inline-flex items-center gap-1.5 text-xs text-sky-100/30">
            <Lock className="h-3 w-3" />
            Confidential
          </span>
        ) : isLive ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-steel-500">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Live
          </span>
        ) : isCodeOnly ? (
          <span className="inline-flex items-center gap-1.5 text-xs text-sky-100/50">
            <GithubIcon className="h-3 w-3" />
            View Code
          </span>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
