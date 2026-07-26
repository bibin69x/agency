import { ArrowRight, Search, Blocks, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";

const services = [
  {
    number: "01",
    name: "Search",
    headline: "Get found by the right people.",
    description:
      "Organic growth systems built around search behaviour, technical foundations, useful content and commercial intent.",
    icon: Search,
    items: [
      "SEO Strategy",
      "Technical SEO",
      "Keyword & Intent Research",
      "Content Architecture",
      "On-page SEO",
      "Internal Linking",
      "SEO Measurement",
    ],
    href: "/seo",
  },
  {
    number: "02",
    name: "Build",
    headline: "Turn ideas into working experiences.",
    description:
      "Fast, focused digital builds — from conversion-led websites and landing pages to prototypes and internal tools.",
    icon: Blocks,
    items: [
      "Business Websites",
      "Landing Pages",
      "Product Prototypes",
      "Internal Tools",
      "API Integrations",
      "Frontend Development",
      "Deployment",
    ],
    href: "/work",
  },
  {
    number: "03",
    name: "Automate",
    headline: "Remove work that shouldn't be manual.",
    description:
      "Connected workflows that move information, trigger actions and integrate the tools your business already uses.",
    icon: Workflow,
    items: [
      "n8n Workflows",
      "AI Automation",
      "API Integration",
      "WhatsApp Automation",
      "Webhook Systems",
      "Process Automation",
      "Custom Workflows",
    ],
    href: "/work/whatsapp-automation",
  },
];

export default function ServicesPage() {
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
            Capabilities
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            Search. Build.
            <span className="text-[#aaa]"> Automate.</span>
          </h1>

          <div className="mt-12 flex justify-end">
            <p className="max-w-lg text-[16px] leading-8 text-[#666]">
              Three connected capabilities for businesses that need to get
              discovered, build better digital experiences and operate more
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto max-w-6xl px-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="grid gap-12 border-b border-black/[0.08] py-20 lg:grid-cols-[90px_0.8fr_1.2fr] lg:py-28"
              >
                <span className="text-[10px] text-[#aaa]">
                  {service.number}
                </span>

                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.08] bg-[#fafafa]">
                    <Icon size={17} strokeWidth={1.5} />
                  </div>

                  <p className="mt-8 text-[10px] uppercase tracking-[0.16em] text-[#999]">
                    {service.name}
                  </p>

                  <h2 className="mt-4 max-w-sm text-3xl font-medium leading-[1.1] tracking-[-0.045em] md:text-4xl">
                    {service.headline}
                  </h2>
                </div>

                <div className="lg:pl-12">
                  <p className="max-w-lg text-sm leading-7 text-[#777]">
                    {service.description}
                  </p>

                  <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="border-b border-black/[0.07] py-4 text-xs text-[#555]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.href}
                    className="group mt-9 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Explore {service.name.toLowerCase()}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why combined */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
                Why together?
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] md:text-6xl">
                Because business problems
                <span className="text-[#aaa]">
                  {" "}don&apos;t live in departments.
                </span>
              </h2>

              <p className="mt-9 max-w-2xl text-sm leading-7 text-[#666]">
                Sometimes the problem is visibility. Sometimes it&apos;s the
                website. Sometimes people are spending hours doing something a
                workflow could handle automatically.
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#888]">
                We start with the problem and choose the capability around it —
                rather than forcing every business into the same service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
                Working together
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                Start with the problem.
                <span className="text-[#aaa]"> Scope from there.</span>
              </h2>
            </div>

            <div className="border-t border-black/[0.08]">
              {[
                ["01", "Focused project", "A clearly scoped problem with a defined outcome."],
                ["02", "Growth engagement", "Ongoing SEO, experimentation and optimisation."],
                ["03", "Build & automate", "Design and implement a website, tool or workflow."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid grid-cols-[40px_1fr] gap-3 border-b border-black/[0.08] py-6"
                >
                  <span className="text-[10px] text-[#aaa]">{number}</span>

                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="mt-2 text-xs leading-6 text-[#777]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
            Start somewhere
          </p>

          <div className="mt-7 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Not sure what you need?
              <span className="text-white/30"> Start with the problem.</span>
            </h2>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
            >
              Tell us about it
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
