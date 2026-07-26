import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const principles = [
  {
    number: "01",
    title: "Problem before tool.",
    description:
      "We don't start with SEO, AI, n8n or a framework. We start by understanding what is actually getting in the way.",
  },
  {
    number: "02",
    title: "Small by design.",
    description:
      "A focused studio means fewer layers, faster communication and more attention on the actual work.",
  },
  {
    number: "03",
    title: "Build to learn.",
    description:
      "Ideas become clearer when they become tangible. We prototype, ship, measure and improve.",
  },
  {
    number: "04",
    title: "Outcomes over activity.",
    description:
      "More pages, more workflows and more traffic mean very little unless they contribute to something useful.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(#c8c8c8 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 md:pb-32 md:pt-48">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
            The studio
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            Small by design.
            <span className="text-[#aaa]"> Built to stay curious.</span>
          </h1>

          <div className="mt-12 flex justify-end">
            <p className="max-w-lg text-[16px] leading-8 text-[#666]">
              A small multidisciplinary digital studio combining search,
technology, automation and performance to solve meaningful
business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
                The story
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] md:text-6xl">
                It started with a question:
                <span className="text-[#aaa]">
                  {" "}why do some things get discovered?
                </span>
              </h2>

              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-sm leading-7 text-[#666]">
                    Search was the starting point. Understanding why one page
                    gets discovered while another disappears into the internet
                    led to years of working with SEO, content, websites and
                    organic growth.
                  </p>

                  <p className="text-sm leading-7 text-[#777]">
                    But search kept exposing bigger questions. What happens
                    after someone lands on the website? Why does the experience
                    convert? Why are teams still manually moving information
                    between tools?
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-sm leading-7 text-[#777]">
                    Those questions pushed the work beyond SEO — into websites,
                    APIs, product experiments, AI systems and automation.
                  </p>

                  <p className="text-sm leading-7 text-[#777]">
                    The studio grew from that curiosity. Not as a collection of
                    unrelated services, but as different ways to solve the same
                    thing: helping businesses remove friction and create
                    growth.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
            The evolution
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Search led to growth.
            <span className="text-white/30">
              {" "}Growth led to product.
            </span>
          </h2>

          <div className="mt-20 grid border-y border-white/10 md:grid-cols-4">

            {[
              [
                "01",
                "Search",
                "Understanding demand, discovery and organic growth.",
              ],
              [
                "02",
                "Experience",
                "Understanding what happens after people arrive.",
              ],
              [
                "03",
                "Product",
                "Turning problems and ideas into working experiences.",
              ],
              [
                "04",
                "Automation",
                "Connecting systems and removing repetitive work.",
              ],
            ].map(([number, title, description], index) => (
              <div
                key={number}
                className={`py-9 md:min-h-[250px] md:px-7 ${
                  index !== 0
                    ? "border-t border-white/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <span className="text-[10px] text-white/20">
                  {number}
                </span>

                <h3 className="mt-12 text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-4 max-w-[220px] text-xs leading-6 text-white/35">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Founder */}
            {/* Team */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          {/* Heading */}
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
                The team
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] md:text-6xl">
                Different strengths.
                <span className="text-[#aaa]">
                  {" "}Same curiosity.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[#666]">
                A small multidisciplinary team working across organic growth,
                automation, paid acquisition and digital commerce.
              </p>
            </div>

          </div>

          {/* Team Members */}
          <div className="mt-20 grid gap-5 md:grid-cols-3">

            {/* Bibin */}
            <article className="group">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#deded8]">

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(#999 0.7px, transparent 0.7px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-black/30">
                    Portrait
                  </p>

                  <p className="mt-1 text-[11px] text-black/40">
                    Photo coming soon
                  </p>
                </div>

              </div>

              <div className="pt-6">
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.025em]">
                      Bibin
                    </h3>

                    <p className="mt-1 text-xs text-[#999]">
                      SEO &amp; Growth
                    </p>
                  </div>

                  <span className="text-[9px] text-[#bbb]">
                    01
                  </span>

                </div>

                <p className="mt-5 max-w-sm text-xs leading-6 text-[#777]">
                  Specialised in SEO with a broader interest in product,
                  websites, growth systems and turning search demand into
                  measurable business outcomes.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "SEO",
                    "Growth",
                    "Product",
                    "Strategy",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-[9px] text-[#777]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>

            {/* Automation */}
            <article className="group">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#d5d5cf]">

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(#999 0.7px, transparent 0.7px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-black/30">
                    Portrait
                  </p>

                  <p className="mt-1 text-[11px] text-black/40">
                    Photo coming soon
                  </p>
                </div>

              </div>

              <div className="pt-6">
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.025em]">
Hazeeb
                    </h3>

                    <p className="mt-1 text-xs text-[#999]">
                      Automation &amp; Systems
                    </p>
                  </div>

                  <span className="text-[9px] text-[#bbb]">
                    02
                  </span>

                </div>

                <p className="mt-5 max-w-sm text-xs leading-6 text-[#777]">
                  Builds automation systems that connect tools, APIs and
                  business processes — reducing repetitive work and keeping
                  operations moving.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "n8n",
                    "Automation",
                    "APIs",
                    "Workflows",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-[9px] text-[#777]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>

            {/* Performance */}
            <article className="group">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#cbcbc5]">

                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(#999 0.7px, transparent 0.7px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="absolute bottom-6 left-6">
                  <p className="text-[9px] uppercase tracking-[0.14em] text-black/30">
                    Portrait
                  </p>

                  <p className="mt-1 text-[11px] text-black/40">
                    Photo coming soon
                  </p>
                </div>

              </div>

              <div className="pt-6">
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.025em]">
G Aswin Krishna
                    </h3>

                    <p className="mt-1 text-xs text-[#999]">
                      Performance &amp; Commerce
                    </p>
                  </div>

                  <span className="text-[9px] text-[#bbb]">
                    03
                  </span>

                </div>

                <p className="mt-5 max-w-sm text-xs leading-6 text-[#777]">
                  Focused on paid acquisition and e-commerce — combining Meta
                  Ads, Shopify and commerce strategy to turn attention into
                  customers.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Meta Ads",
                    "Shopify",
                    "E-commerce",
                    "Acquisition",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-3 py-1.5 text-[9px] text-[#777]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>

          </div>

          {/* Team statement */}
          <div className="mt-24 border-t border-black/[0.08] pt-10">

            <div className="grid gap-8 md:grid-cols-2">

              <p className="text-[10px] uppercase tracking-[0.15em] text-[#aaa]">
                Small team. Broad perspective.
              </p>

              <p className="max-w-xl text-lg leading-8 tracking-[-0.02em] text-[#555]">
                Organic discovery, paid acquisition, digital experiences and
                automation — different disciplines working around the same
                business outcome.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
            Work together
          </p>

          <div className="mt-7 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Interesting problem?
              <span className="text-white/30">
                {" "}We&apos;d like to hear it.
              </span>
            </h2>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
            >
              Start a conversation

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}