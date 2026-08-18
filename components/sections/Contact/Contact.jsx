import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedInIcon } from "@/components/ui/icons/BrandIcons";
import { profile } from "@/lib/data/profile";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section id="contact" className="flex flex-col gap-6">
      <Reveal from="left">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SectionHeading title="Get in Touch" subtitle="Have a project in mind? Send me a message." />
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-sky-100/60 transition-colors hover:text-sky-100"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-sky-100/60 transition-colors hover:text-sky-100"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal from="right" delay={120} className="mx-auto w-full max-w-2xl">
        <ContactForm />
      </Reveal>
    </Section>
  );
};

export default Contact;
