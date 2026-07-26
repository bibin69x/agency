import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";


export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-40 md:pb-28 md:pt-48">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
          Selected work
        </p>

        <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em]">
          Things we&apos;ve
          <span className="text-[#aaa]"> shipped.</span>
        </h1>

        <div className="mt-10 flex justify-end">
          <p className="max-w-md text-sm leading-7 text-[#777]">
            Products, growth systems and automation experiments — built to
            solve problems, test ideas and learn by shipping.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="border-t border-black/[0.08]">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid gap-8 border-b border-black/[0.08] py-12 md:grid-cols-[70px_1fr_1fr] md:py-16"
            >
              <span className="text-[10px] text-[#aaa]">
                {project.number}
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#999]">
                  {project.category}
                </p>

                <h2 className="mt-4 max-w-md text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {project.title}
                </h2>
              </div>

              <div className="md:pl-8">
                <p className="max-w-md text-sm leading-7 text-[#777]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f0f0ed] px-3 py-1.5 text-[10px] text-[#666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium"
                >
                  View project
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}