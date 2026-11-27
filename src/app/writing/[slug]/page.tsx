import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { portfolioData, type ResearchNote } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioData.researchNotes.map((note) => ({
    slug: note.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = portfolioData.researchNotes.find((n) => n.slug === slug);
  if (!note) {
    return { title: "Note Not Found" };
  }
  return {
    title: `${note.title} — ${portfolioData.profile.name}`,
    description: note.abstract,
  };
}

export default async function WritingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const notes: ResearchNote[] = portfolioData.researchNotes;
  const currentIndex = notes.findIndex((n) => n.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const note = notes[currentIndex];
  const nextNote = notes[(currentIndex + 1) % notes.length];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-14 sm:py-20">
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 font-mono text-xs text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all technical notes
        </Link>

        <header className="mt-8 border-b border-border pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-fg-faint">
            <span className="text-accent">{note.tag}</span>
            <span>·</span>
            <span>{note.readTime}</span>
            <span>·</span>
            <span>{portfolioData.profile.name}</span>
          </div>

          <h1 className="mt-4 font-serif text-3xl leading-[1.15] font-normal tracking-tight text-fg sm:text-5xl">
            {note.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {note.abstract}
          </p>
        </header>

        <section className="my-8 border border-border bg-bg-elevated p-6">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-fg-faint">
            Key Focus Points
          </div>
          <ul className="space-y-2 text-sm text-fg-muted">
            {note.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <article className="space-y-10">
          {note.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-serif text-2xl font-normal tracking-tight text-fg">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[15px] leading-7 text-fg-muted"
                >
                  {paragraph}
                </p>
              ))}
              {section.codeSnippet && (
                <figure className="overflow-hidden border border-border bg-bg-elevated">
                  <figcaption className="flex items-center justify-between border-b border-border bg-bg-subtle px-4 py-2 font-mono text-[11px] text-fg-muted">
                    <span>{section.codeSnippet.caption}</span>
                    <span className="uppercase">
                      {section.codeSnippet.language}
                    </span>
                  </figcaption>
                  <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-fg">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </figure>
              )}
            </section>
          ))}
        </article>

        {nextNote && nextNote.slug !== note.slug && (
          <div className="mt-16 border-t border-border pt-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
              Next Study Note
            </div>
            <Link
              href={`/writing/${nextNote.slug}`}
              className="group mt-3 flex items-center justify-between border border-border bg-bg-elevated p-5 transition-colors hover:border-border-strong"
            >
              <div>
                <div className="font-serif text-xl text-fg group-hover:text-accent">
                  {nextNote.title}
                </div>
                <div className="mt-1 font-mono text-xs text-fg-faint">
                  {nextNote.tag} · {nextNote.readTime}
                </div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-fg-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
