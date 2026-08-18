import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Avatar from "./Avatar";
import { profile } from "@/lib/data/profile";

const Hero = () => {
  return (
    <Section id="home" className="flex flex-col items-center gap-6 text-center">
      <Reveal from="up">
        <Avatar initials={profile.initials} />
      </Reveal>
      <div>
        <Reveal from="left">
          <h1 className="text-3xl font-bold text-frost-50 sm:text-4xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-steel-500 to-sky-100 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
        </Reveal>
        <Reveal from="right" delay={120}>
          <p className="mt-2 text-lg text-sky-100 sm:text-xl">I&apos;m a {profile.role}</p>
        </Reveal>
      </div>
      <Reveal from="up" delay={200}>
        <p className="max-w-xl text-sm text-sky-100/70 sm:text-base">{profile.tagline}</p>
      </Reveal>
      <Reveal from="up" delay={300}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button as="a" href="#portfolio" variant="primary">
            View My Work
          </Button>
          <Button as="a" href={profile.resumeUrl} variant="outline" download>
            Download CV
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default Hero;
