import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  GraduationCap,
  Mail,
} from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import { Navbar } from "@/components/Navbar";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  const {
    profile,
    researchPillars,
    researchNotes,
    experience,
    education,
    certifications,
    skillGroups,
  } = portfolioData;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        {/* Hero / Editorial Masthead */}
        <section className="border-b border-border py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 border border-border bg-bg-elevated px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-fg-muted">
                    {profile.availability}
                  </span>
                </div>
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
                {profile.role}
              </p>

              <h1 className="font-serif text-4xl leading-[1.12] font-normal tracking-tight text-fg sm:text-5xl lg:text-[54px]">
                {profile.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
                {profile.bio}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  Research & Notes
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-border-strong bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-fg"
                >
                  Contact Details
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <figure className="mx-auto max-w-[280px] border border-border bg-bg-elevated p-2.5 lg:max-w-none">
                <div className="relative aspect-[7/8] w-full overflow-hidden bg-bg-subtle">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${profile.portrait}`}
                    alt={`${profile.name} — ${profile.role}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 280px, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-2.5 flex items-center justify-between px-1 font-mono text-[11px] text-fg-faint">
                  <span>{profile.name}</span>
                  <span className="text-accent">IIT Bhilai</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Research Interests & Architecture Scope */}
        <section id="research" className="scroll-mt-20 border-b border-border py-16">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs font-medium uppercase tracking-widest text-fg-faint">
                Areas of Inquiry
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-fg sm:text-4xl">
                Research Interests & Focus
              </h2>
            </div>
            <span className="font-mono text-xs text-fg-faint">01 — 03</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {researchPillars.map((pillar) => (
              <div
                key={pillar.index}
                className="flex flex-col justify-between border border-border bg-bg-elevated p-6"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-accent">{pillar.index}</span>
                    <span className="text-fg-faint">{pillar.category}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-normal tracking-tight text-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {pillar.summary}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {pillar.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-bg-subtle px-2 py-0.5 font-mono text-[11px] text-fg-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Notes */}
          <div id="writing" className="mt-14 scroll-mt-20">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-fg-faint">
                Technical Study Notes
              </h3>
              <span className="font-mono text-xs text-fg-faint">
                {researchNotes.length} Notes
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {researchNotes.map((note) => (
                <Link
                  key={note.slug}
                  href={`/writing/${note.slug}`}
                  className="group flex flex-col justify-between border border-border bg-bg-elevated p-6 transition-colors hover:border-border-strong"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-fg-faint">
                      <span>{note.tag}</span>
                      <span>{note.readTime}</span>
                    </div>
                    <h4 className="mt-3 font-serif text-xl leading-snug font-normal tracking-tight text-fg transition-colors group-hover:text-accent">
                      {note.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {note.abstract}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs">
                    <span className="text-fg-faint">Architecture Note</span>
                    <span className="inline-flex items-center gap-1 text-fg transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Community Leadership */}
        <section
          id="experience"
          className="scroll-mt-20 border-b border-border py-16"
        >
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs font-medium uppercase tracking-widest text-fg-faint">
                Teaching & Community
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-fg sm:text-4xl">
                Experience & Leadership
              </h2>
            </div>
            <span className="font-mono text-xs text-fg-faint">
              IIT Bhilai
            </span>
          </div>

          <div className="divide-y divide-border border border-border bg-bg-elevated">
            {experience.map((item) => (
              <article
                key={item.title}
                className="grid gap-6 p-6 sm:grid-cols-12 sm:p-8"
              >
                <div className="sm:col-span-4">
                  <div className="font-mono text-xs text-accent">
                    {item.period}
                  </div>
                  <h3 className="mt-1.5 font-serif text-2xl font-normal tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-fg-muted">
                    {item.organization}
                  </div>
                </div>

                <div className="sm:col-span-8">
                  <ul className="space-y-3 text-sm leading-relaxed text-fg-muted">
                    {item.highlights.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section
          id="education"
          className="scroll-mt-20 border-b border-border py-16"
        >
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-fg-faint">
                <GraduationCap className="h-3.5 w-3.5 text-accent" />
                Academic Background
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-fg">
                Education
              </h2>

              <div className="mt-8 space-y-7 border-l border-border pl-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative">
                    <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full border border-border-strong bg-bg" />
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="text-accent">{edu.period}</span>
                      <span className="text-fg-faint">·</span>
                      <span className="text-fg-faint">{edu.status}</span>
                    </div>
                    <h3 className="mt-1 text-base font-medium text-fg">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm text-fg-muted">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-fg-faint">
                <Award className="h-3.5 w-3.5 text-accent" />
                Qualifying Exams
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-fg">
                Certifications & Licenses
              </h2>

              <div className="mt-8 space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="border border-border bg-bg-elevated p-5"
                  >
                    <h3 className="text-sm font-medium text-fg">
                      {cert.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-fg-muted">
                      {cert.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills & Languages */}
        <section
          id="skills"
          className="scroll-mt-20 border-b border-border py-16"
        >
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="font-mono text-xs font-medium uppercase tracking-widest text-fg-faint">
                Core Competencies
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-fg sm:text-4xl">
                Skills & Toolbelt
              </h2>
            </div>
            <span className="font-mono text-xs text-fg-faint">
              Systems · Security · Blockchain
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.group}
                className="border border-border bg-bg-elevated p-6"
              >
                <div className="mb-4 font-mono text-[11px] uppercase tracking-wider text-fg-faint">
                  {group.group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-border bg-bg px-2.5 py-1 font-mono text-xs text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
          <div className="grid gap-10 border border-border bg-bg-elevated p-8 sm:grid-cols-12 sm:p-10">
            <div className="sm:col-span-7">
              <div className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
                Academic & Security Collaboration
              </div>
              <h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-fg sm:text-4xl">
                Connect for blockchain research, security discussions, or Web3
                initiatives.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg-muted">
                Open to research collaborations, technical workshops, and
                conversations around blockchain architecture, EVM internals, and
                smart contract security.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-5 border-t border-border pt-6 sm:col-span-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
              <div className="space-y-4">
                {profile.emails.map((item) => (
                  <div key={item.address}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-fg-faint">
                        {item.label}
                      </span>
                      <CopyButton value={item.address} label="Copy" />
                    </div>
                    <a
                      href={`mailto:${item.address}`}
                      className="flex items-center gap-2 border border-border bg-bg px-3 py-2.5 font-mono text-xs text-fg transition-colors hover:border-border-strong"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="truncate">{item.address}</span>
                    </a>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-faint">
                  LinkedIn
                </div>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-border px-3 py-2 font-mono text-xs text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  <span className="truncate">{profile.linkedinHandle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 font-mono text-xs text-fg-faint sm:flex-row sm:items-center">
          <span>
            © 2026 {profile.name} · {profile.subtitle}
          </span>
          <span>Blockchain Architecture & Security</span>
        </div>
      </footer>
    </div>
  );
}
