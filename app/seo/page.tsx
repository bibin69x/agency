import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";

const capabilities = [
  "SEO Strategy",
  "Technical SEO",
  "Keyword & Intent Research",
  "Information Architecture",
  "Content Strategy",
  "Internal Linking",
  "On-page SEO",
  "SEO Measurement",
];

const process = [
  {
    number: "01",
    title: "Understand demand",
    description:
      "Understand how customers search, what competitors own and where meaningful opportunities exist.",
  },
  {
    number: "02",
    title: "Build the architecture",
    description:
      "Turn search demand into pages, clusters and internal relationships that make sense to users and search engines.",
  },
  {
    number: "03",
    title: "Remove technical friction",
    description:
      "Find issues affecting crawling, indexing, rendering, performance and discoverability.",
  },
  {
    number: "04",
    title: "Measure business impact",
    description:
      "Connect organic performance with qualified traffic, enquiries, conversions and business outcomes.",
  },
];

export default function SEOPage() {
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
            Search / SEO
          </p>

          <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            Search should create
            <span className="text-[#aaa]"> business.</span>
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl text-[17px] leading-8 text-[#666]">
              We build organic growth systems around search demand, technical
              foundations, useful content and measurable commercial outcomes.
            </p>

            <a
              href="/contact"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium"
            >
              Discuss an SEO project
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-black/[0.08] bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3">

            <div className="py-10 md:border-r md:border-black/[0.08] md:pr-10">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                +60%
              </p>

              <p className="mt-3 text-sm text-[#777]">
                Organic enquiries
              </p>
            </div>

            <div className="border-t border-black/[0.08] py-10 md:border-r md:border-t-0 md:border-black/[0.08] md:px-10">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                180+
              </p>

              <p className="mt-3 text-sm text-[#777]">
                Product pages optimised
              </p>
            </div>

            <div className="border-t border-black/[0.08] py-10 md:border-t-0 md:pl-10">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                +300%
              </p>

              <p className="mt-3 text-sm text-[#777]">
                Organic acquisition
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
              Philosophy
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.05em] md:text-6xl">
              Rankings are useful.
              <span className="text-[#aaa]">
                {" "}Revenue is more useful.
              </span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-sm leading-7 text-[#666]">
                SEO works best when it starts with understanding the market:
                what people need, how they search and what information helps
                them make a decision.
              </p>

              <p className="text-sm leading-7 text-[#888]">
                Traffic without relevance is just a bigger analytics number.
                The goal is to create organic visibility that contributes to
                meaningful business outcomes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Case Study */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
                Selected case study
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Turning product pages into
                <span className="text-white/30">
                  {" "}acquisition channels.
                </span>
              </h2>
            </div>

            <span className="text-[10px] uppercase tracking-[0.14em] text-white/25">
              B2B / Organic Growth
            </span>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[28px] border border-white/10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Case study details */}
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                  Objective
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                  Improve commercial organic visibility across a large product
                  catalogue and turn search traffic into qualified enquiries.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    "Commercial keyword mapping",
                    "Product page optimisation",
                    "Technical improvements",
                    "Internal linking",
                    "Search performance measurement",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-xs text-white/50"
                    >
                      <Check size={13} className="text-white/70" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="group mt-12 inline-flex items-center gap-2 text-sm font-medium"
              >
                View full case study
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Analytics */}
            <div className="border-t border-white/10 bg-[#161616] p-6 md:p-10 lg:border-l lg:border-t-0">
              <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-6 md:p-8">

                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.14em] text-white/25">
                      Organic search
                    </p>

                    <p className="mt-3 text-3xl font-medium tracking-[-0.05em]">
                      Growth
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-white px-3 py-1 text-[9px] font-medium text-black">
                    +60%
                  </span>
                </div>

                <div className="relative mt-12 h-56 overflow-hidden border-b border-l border-white/10">
                  <div className="absolute left-0 top-1/4 h-px w-full bg-white/[0.05]" />
                  <div className="absolute left-0 top-2/4 h-px w-full bg-white/[0.05]" />
                  <div className="absolute left-0 top-3/4 h-px w-full bg-white/[0.05]" />

                  <svg
                    viewBox="0 0 700 220"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <path
                      d="M0 195 C50 190 70 180 110 183 C155 187 170 165 215 170 C260 176 285 140 325 150 C370 160 390 118 435 128 C480 138 505 92 545 105 C585 116 610 65 650 75 C675 80 690 48 700 32"
                      fill="none"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />

                    <path
                      d="M0 195 C50 190 70 180 110 183 C155 187 170 165 215 170 C260 176 285 140 325 150 C370 160 390 118 435 128 C480 138 505 92 545 105 C585 116 610 65 650 75 C675 80 690 48 700 32 L700 220 L0 220 Z"
                      fill="rgba(255,255,255,0.035)"
                    />
                  </svg>
                </div>

                <div className="mt-4 flex justify-between text-[9px] text-white/20">
                  <span>Start</span>
                  <span>Optimisation</span>
                  <span>Growth</span>
                </div>
              </div>

              <p className="mt-4 text-[9px] uppercase tracking-[0.12em] text-white/20">
                Demo visual · Replace with verified Search Console data
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
                SEO capabilities
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                The pieces that make
                <span className="text-[#aaa]"> organic growth work.</span>
              </h2>
            </div>

            <div className="border-t border-black/[0.08]">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="flex items-center justify-between border-b border-black/[0.08] py-5"
                >
                  <span className="text-sm font-medium">
                    {capability}
                  </span>

                  <span className="text-[10px] text-[#aaa]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
            The approach
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            From search behaviour
            <span className="text-[#aaa]"> to business outcome.</span>
          </h2>

          <div className="mt-16 grid border-y border-black/[0.08] md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.number}
                className={`py-9 md:min-h-[280px] md:px-7 ${
                  index !== 0
                    ? "border-t border-black/[0.08] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <span className="text-[10px] text-[#aaa]">
                  {step.number}
                </span>

                <h3 className="mt-12 text-lg font-medium tracking-[-0.02em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#777]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

     {/* Selected SEO Work */}
<section className="bg-white">
  <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

    <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

      <div>
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
          Selected SEO work
        </p>
      </div>

      <div>
        <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          Strategy is useful.
          <span className="text-[#aaa]"> Results make it credible.</span>
        </h2>

        <p className="mt-6 max-w-xl text-sm leading-7 text-[#777]">
          A selection of search projects focused on commercial outcomes,
          technical foundations and sustainable organic acquisition.
        </p>
      </div>

    </div>

    {/* Case Study 01 */}
    <div className="mt-20 border-t border-black/[0.08]">

      <div className="grid gap-10 py-12 lg:grid-cols-[0.65fr_1.35fr] lg:py-16">

        <div>
          <span className="text-[10px] text-[#aaa]">
            01
          </span>

          <p className="mt-5 text-[10px] uppercase tracking-[0.14em] text-[#999]">
            B2B · Aviation
          </p>
        </div>

        <div>

          <h3 className="max-w-3xl text-3xl font-medium tracking-[-0.045em] md:text-5xl">
            Turning product pages into
            <span className="text-[#aaa]"> acquisition pages.</span>
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#777]">
            Search strategy and product-page optimisation focused on
            improving discoverability across high-intent aviation searches
            and converting organic visibility into qualified enquiries.
          </p>

          {/* Results */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2">

            <div className="bg-white p-7 md:p-8">
              <p className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                +60%
              </p>

              <p className="mt-3 text-xs text-[#777]">
                Qualified organic enquiries
              </p>
            </div>

            <div className="bg-white p-7 md:p-8">
              <p className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                180+
              </p>

              <p className="mt-3 text-xs text-[#777]">
                Product pages optimised
              </p>
            </div>

          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Technical SEO",
              "Product SEO",
              "Content Architecture",
              "On-page SEO",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/[0.08] px-3 py-1.5 text-[10px] text-[#777]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* Case Study 02 */}
    <div className="border-t border-black/[0.08]">

      <div className="grid gap-10 py-12 lg:grid-cols-[0.65fr_1.35fr] lg:py-16">

        <div>
          <span className="text-[10px] text-[#aaa]">
            02
          </span>

          <p className="mt-5 text-[10px] uppercase tracking-[0.14em] text-[#999]">
            Multi-client · Organic growth
          </p>
        </div>

        <div>

          <h3 className="max-w-3xl text-3xl font-medium tracking-[-0.045em] md:text-5xl">
            Building search systems
            <span className="text-[#aaa]"> that compound.</span>
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#777]">
            SEO programmes combining technical improvements, search-intent
            mapping, content optimisation and ongoing measurement across
            multiple client projects.
          </p>

          {/* Results */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.08] sm:grid-cols-2">

            <div className="bg-white p-7 md:p-8">
              <p className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                Up to +300%
              </p>

              <p className="mt-3 text-xs text-[#777]">
                Organic user acquisition
              </p>
            </div>

            <div className="bg-white p-7 md:p-8">
              <p className="text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                +50%
              </p>

              <p className="mt-3 text-xs text-[#777]">
                Inbound organic lead generation
              </p>
            </div>

          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "SEO Strategy",
              "Technical SEO",
              "Content",
              "Search Intent",
              "Measurement",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/[0.08] px-3 py-1.5 text-[10px] text-[#777]"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>

    {/* Proof note */}
    <div className="border-t border-black/[0.08] pt-8">
      <p className="max-w-2xl text-xs leading-6 text-[#999]">
        Supporting Search Console, analytics and ranking evidence can be
        added to individual case studies where disclosure is permitted.
      </p>
    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
            Organic growth
          </p>

          <div className="mt-7 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Want search to become a
              <span className="text-white/30"> growth channel?</span>
            </h2>

            <a
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
            >
              Talk about SEO
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