import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, certifications } from "@/lib/data/profile";

const Education = () => {
  return (
    <Section id="education" className="flex flex-col gap-6">
      <Reveal from="left">
        <SectionHeading title="Education" subtitle="My learning journey and certifications" align="center" />
      </Reveal>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Reveal from="left" delay={120}>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-100/50">
            Education
          </h3>
          <div className="flex flex-col gap-2">
            {education.map((item) => (
              <div key={item.title} className="rounded-xl bg-navy-950/40 p-3">
                <p className="text-sm font-medium text-frost-50">{item.title}</p>
                <p className="text-xs text-sky-100/60">{item.subtitle}</p>
                <p className="mt-1 text-[11px] text-sky-100/40">{item.date}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal from="right" delay={120}>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sky-100/50">
            Certifications
          </h3>
          <div className="flex flex-col gap-2">
            {certifications.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-xl bg-navy-950/40 p-3"
              >
                <div>
                  <p className="text-sm font-medium text-frost-50">{item.title}</p>
                  <p className="text-xs text-sky-100/60">{item.issuer}</p>
                </div>
                <span className="text-[11px] text-sky-100/40">{item.date}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Education;
