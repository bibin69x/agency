import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
     <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "radial-gradient(#c8c8c8 0.7px, transparent 0.7px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-32">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white px-3 py-1.5 text-[12px] text-[#666] shadow-sm">
              <Sparkles size={12} />
              SEO · Products · Automation
            </div>

           <Reveal delay={0.08}>
  <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,7.4rem)] font-medium leading-[0.9] tracking-[-0.07em]">
    We build systems
    <span className="text-[#aaa]"> that grow.</span>
  </h1>
</Reveal>

            <Reveal delay={0.16}>
  <p className="mt-7 max-w-3xl text-[clamp(1.25rem,2.3vw,1.9rem)] font-normal leading-[1.25] tracking-[-0.035em] text-[#777]">
    Search when you need to be found. Products when you need to build.
    <span className="text-[#222]">
      {" "}Automation when you need to scale.
    </span>
  </p>
</Reveal>

          <Reveal>
 <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#777]">
   A multidisciplinary digital studio helping businesses grow through search, digital products, automation and performance.
</p>
</Reveal>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="/seo"
                className="group flex h-11 items-center gap-2 rounded-full bg-[#111] px-5 text-[13px] font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Explore my work
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/contact"
                className="flex h-11 items-center rounded-full border border-black/[0.08] bg-white px-5 text-[13px] font-medium shadow-sm transition-all hover:border-black/20"
              >
                Work with me
              </a>
            </div>
          </div>


          <div className="mt-24 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-black/[0.06] pt-5 text-[11px] uppercase tracking-[0.14em] text-[#999]">
            <span>SEO Strategy</span>
            <span>Product Thinking</span>
            <span>Web Development</span>
            <span>AI Automation</span>
          </div>
        </div>
          </section>

      {/* Selected Work */}
      <section id="work" className="border-t border-black/[0.06] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          {/* Section heading */}
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-[#999]">
                Selected work
              </p>

             <Reveal> <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Things I&apos;ve built,
                <span className="text-[#999]"> tested &amp; learned from.</span>
              </h2>
</Reveal>
            </div>

            <p className="max-w-xs text-sm leading-6 text-[#777]">
              Products, experiments and systems built around real problems.
            </p>
          </div>

          {/* Project 01 */}
          <article className="group overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#f7f7f5]">
            <div className="grid min-h-[570px] lg:grid-cols-[0.85fr_1.15fr]">

              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-[#999]">01</span>

                    <span className="rounded-full border border-black/[0.08] bg-white px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#666]">
                      SEO Product
                    </span>
                  </div>

                  <h3 className="mt-10 max-w-sm text-4xl font-medium tracking-[-0.045em] md:text-5xl">
                    Topical Map Generator
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-[#777]">
                    An SEO product that turns a seed topic into a structured
                    topical architecture designed around semantic relationships
                    and search intent.
                  </p>
                </div>

                <div>
                  <div className="mb-7 flex flex-wrap gap-2">
                    {["Next.js", "OpenAI", "SEO", "Product"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-black/[0.045] px-3 py-1.5 text-[11px] text-[#666]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/seo"
                    className="inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Explore case study
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              {/* Demo product visual */}
              <div className="relative min-h-[420px] overflow-hidden border-t border-black/[0.06] bg-[#111] p-6 md:p-10 lg:border-l lg:border-t-0">
                <div className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(#555 0.7px, transparent 0.7px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative mx-auto mt-8 max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#191919] shadow-2xl">
                  <div className="flex h-11 items-center gap-1.5 border-b border-white/10 px-4">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />

                    <span className="ml-3 text-[10px] text-white/30">
                      topicalmap.app
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      New topical map
                    </p>

                    <h4 className="mt-3 text-xl font-medium tracking-[-0.03em] text-white">
                      Build topical authority.
                    </h4>

                    <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[10px] text-white/30">
                        Seed topic
                      </p>

                      <div className="mt-2 flex items-center justify-between rounded-lg bg-white/[0.06] px-4 py-3">
                        <span className="text-xs text-white/80">
                          Technical SEO
                        </span>

                        <span className="rounded-md bg-white px-2 py-1 text-[9px] font-medium text-black">
                          Generate
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        ["01", "Crawling"],
                        ["02", "Indexing"],
                        ["03", "Architecture"],
                        ["04", "Rendering"],
                        ["05", "Schema"],
                        ["06", "Performance"],
                      ].map(([number, label]) => (
                        <div
                          key={number}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-3"
                        >
                          <p className="text-[9px] text-white/20">{number}</p>
                          <p className="mt-4 text-[10px] text-white/60">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Smaller projects */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">

            {/* Automation */}
            <article className="group overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#f7f7f5]">
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#999]">02</span>

                  <span className="rounded-full border border-black/[0.08] bg-white px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#666]">
                    Automation
                  </span>
                </div>

                <h3 className="mt-12 text-3xl font-medium tracking-[-0.04em]">
                  WhatsApp × n8n
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-[#777]">
                  Automated conversations and workflow routing using webhooks,
                  APIs and n8n.
                </p>
              </div>

              {/* Video placeholder */}
              <div className="mx-4 mb-4 flex aspect-video items-center justify-center rounded-[20px] bg-[#151515]">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <span className="ml-0.5 text-sm text-black">▶</span>
                  </div>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Workflow demo
                  </p>
                </div>
              </div>
            </article>

            {/* RAG */}
            <article className="group overflow-hidden rounded-[28px] border border-black/[0.07] bg-[#111] text-white">
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/30">03</span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-white/50">
                    AI / RAG
                  </span>
                </div>

                <h3 className="mt-12 text-3xl font-medium tracking-[-0.04em]">
                  Mutual Fund FAQ
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/50">
                  A retrieval-based assistant designed to answer mutual fund
                  questions using verified source material.
                </p>
              </div>

              <div className="mx-4 mb-4 rounded-[20px] border border-white/[0.07] bg-[#191919] p-6">
                <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-white px-4 py-3 text-xs leading-5 text-black">
                  What is the exit load for this fund?
                </div>

                <div className="mt-3 max-w-[85%] rounded-2xl rounded-bl-md border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-xs leading-5 text-white/60">
                  Based on the official scheme document, the applicable exit
                  load is...
                  <div className="mt-3 text-[9px] uppercase tracking-[0.12em] text-white/25">
                    Source · Scheme document
                  </div>
                </div>
              </div>
            </article>

          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="contact"
              className="group inline-flex items-center gap-2 text-sm font-medium"
            >
              See all experiments
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
      {/* SEO Proof */}
      <section id="seo" className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          {/* Heading */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-white/35">
                SEO / Growth
              </p>

             <Reveal> <h2 className="max-w-xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Search is where
                <span className="text-white/35"> I started.</span>
              </h2>
</Reveal>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45 lg:ml-auto">
              I approach SEO as a growth system — understanding demand,
              structuring information, solving technical problems and turning
              organic visibility into measurable business outcomes.
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-20 grid border-y border-white/10 md:grid-cols-3">
            <div className="py-10 md:border-r md:border-white/10 md:px-8 md:first:pl-0">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                +60%
              </p>
              <p className="mt-3 text-sm text-white/40">
                Organic enquiries
              </p>
            </div>

            <div className="border-t border-white/10 py-10 md:border-r md:border-t-0 md:border-white/10 md:px-8">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                180+
              </p>
              <p className="mt-3 text-sm text-white/40">
                Product pages optimised
              </p>
            </div>

            <div className="border-t border-white/10 py-10 md:border-t-0 md:px-8">
              <p className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                +300%
              </p>
              <p className="mt-3 text-sm text-white/40">
                Organic acquisition
              </p>
            </div>
          </div>

          {/* Case study */}
          <div className="mt-20 grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] lg:grid-cols-2">

            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    Case study
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/20" />

                  <span className="text-[10px] uppercase tracking-[0.14em] text-white/30">
                    B2B SEO
                  </span>
                </div>

                <h3 className="mt-8 max-w-md text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  Turning product pages into organic acquisition channels.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  A search-led optimisation strategy focused on commercial
                  product pages, technical improvements, information
                  architecture and qualified organic demand.
                </p>
              </div>

              <a
                href="/seo"
                className="group mt-12 inline-flex items-center gap-2 text-sm font-medium"
              >
                Read SEO case study
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Analytics visual */}
            <div className="border-t border-white/10 bg-[#161616] p-6 md:p-10 lg:border-l lg:border-t-0">
              <div className="rounded-2xl border border-white/[0.08] bg-[#111] p-6">

                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">
                      Organic performance
                    </p>

                    <p className="mt-2 text-2xl font-medium tracking-[-0.04em]">
                      18.4K
                    </p>

                    <p className="mt-1 text-[10px] text-white/30">
                      Organic clicks
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-medium text-black">
                    +60.4%
                  </span>
                </div>

                {/* Demo chart */}
                <div className="relative mt-10 h-48 overflow-hidden border-b border-l border-white/10">

                  <div className="absolute left-0 top-1/4 h-px w-full bg-white/[0.05]" />
                  <div className="absolute left-0 top-2/4 h-px w-full bg-white/[0.05]" />
                  <div className="absolute left-0 top-3/4 h-px w-full bg-white/[0.05]" />

                  <svg
                    viewBox="0 0 600 180"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 160 C40 155,70 150,105 148 C145 145,160 132,195 135 C230 137,245 115,280 120 C315 125,330 95,365 102 C400 108,420 72,455 80 C490 88,510 45,545 55 C570 60,585 30,600 20"
                      fill="none"
                      stroke="rgba(255,255,255,0.85)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />

                    <path
                      d="M0 160 C40 155,70 150,105 148 C145 145,160 132,195 135 C230 137,245 115,280 120 C315 125,330 95,365 102 C400 108,420 72,455 80 C490 88,510 45,545 55 C570 60,585 30,600 20 L600 180 L0 180 Z"
                      fill="rgba(255,255,255,0.035)"
                    />
                  </svg>

                </div>

                <div className="mt-4 flex justify-between text-[9px] text-white/20">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>

              </div>

              <p className="mt-4 text-[9px] uppercase tracking-[0.12em] text-white/20">
                Demo data · Replace with verified analytics
              </p>
            </div>
          </div>

          {/* SEO approach */}
          <div className="mt-24">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
              How I think about SEO
            </p>

            <div className="mt-8 grid border-t border-white/10 md:grid-cols-4">

              {[
                [
                  "01",
                  "Understand demand",
                  "Search behaviour, competitors, intent and market opportunities.",
                ],
                [
                  "02",
                  "Build structure",
                  "Information architecture, topical coverage and internal relationships.",
                ],
                [
                  "03",
                  "Remove friction",
                  "Technical SEO, crawling, indexing, rendering and performance.",
                ],
                [
                  "04",
                  "Measure growth",
                  "Rankings matter. Qualified traffic, leads and revenue matter more.",
                ],
              ].map(([number, title, description], index) => (
                <div
                  key={number}
                  className={`py-8 md:px-6 ${
                    index !== 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
                  }`}
                >
                  <span className="text-[10px] text-white/20">{number}</span>

                  <h3 className="mt-8 text-base font-medium">{title}</h3>

                  <p className="mt-3 text-xs leading-6 text-white/35">
                    {description}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>
      {/* Automation */}
      <section id="automation" className="bg-[#f5f5f2]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          {/* Heading */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-[#999]">
                Automation
              </p>

             <Reveal>
 <h2 className="max-w-xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Less manual work.
                <span className="text-[#aaa]"> More systems.</span>
              </h2>
</Reveal>

            </div>

            <div className="lg:ml-auto lg:max-w-md">
              <p className="text-sm leading-7 text-[#777]">
                We design connected workflows that move information, trigger
                actions and handle repetitive processes automatically.
              </p>

              <a
                href="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium"
              >
                Explore automation
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Main automation showcase */}
          <div className="mt-16 overflow-hidden rounded-[30px] border border-black/[0.07] bg-white">

            {/* Video */}
            <div className="relative flex aspect-[16/8] min-h-[360px] items-center justify-center overflow-hidden bg-[#111]">

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#777 0.7px, transparent 0.7px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Demo workflow lines */}
              <div className="absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-white/10 md:block" />

              <div className="relative z-10 hidden w-[78%] items-center justify-between md:flex">

                {[
                  ["01", "Trigger"],
                  ["02", "n8n"],
                  ["03", "Logic"],
                  ["04", "API"],
                  ["05", "Action"],
                ].map(([number, label], index) => (
                  <div key={label} className="flex items-center">
                    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#191919] shadow-xl">
                      <span className="text-[9px] text-white/20">
                        {number}
                      </span>

                      <span className="mt-2 text-xs font-medium text-white/70">
                        {label}
                      </span>
                    </div>

                    {index < 4 && (
                      <ArrowRight
                        size={15}
                        className="mx-3 text-white/20 lg:mx-6"
                      />
                    )}
                  </div>
                ))}

              </div>

              {/* Mobile visual */}
              <div className="relative z-10 flex flex-col items-center md:hidden">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <span className="ml-0.5 text-black">▶</span>
                </div>

                <p className="mt-4 text-xs text-white/40">
                  Watch workflow demo
                </p>
              </div>

              {/* Play overlay */}
              <div className="absolute bottom-7 left-7 z-20 hidden items-center gap-3 md:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <span className="ml-0.5 text-xs text-black">▶</span>
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Watch workflow
                  </p>

                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.12em] text-white/25">
                    Demo video
                  </p>
                </div>
              </div>

            </div>

            {/* Description */}
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#f2f2ef] px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-[#777]">
                    Workflow
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#aaa]">
                    WhatsApp Automation
                  </span>
                </div>

                <h3 className="mt-8 max-w-xl text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  From incoming message to automated action.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[#777]">
                  A workflow that receives incoming WhatsApp events, processes
                  the request through business logic, connects with external
                  services and automatically returns the appropriate action.
                </p>

                <a
                  href="/work/whatsapp-automation"
                  className="group mt-9 inline-flex items-center gap-2 text-sm font-medium"
                >
                  View case study
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Workflow details */}
              <div className="border-t border-black/[0.06] p-8 md:p-12 lg:border-l lg:border-t-0">

                <p className="text-[10px] uppercase tracking-[0.14em] text-[#aaa]">
                  System
                </p>

                <div className="mt-7 space-y-5">

                  {[
                    ["01", "Message received", "WhatsApp"],
                    ["02", "Webhook triggered", "API"],
                    ["03", "Workflow processed", "n8n"],
                    ["04", "Business logic executed", "Logic"],
                    ["05", "Response delivered", "Action"],
                  ].map(([number, title, type]) => (
                    <div
                      key={number}
                      className="flex items-center justify-between border-b border-black/[0.06] pb-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] text-[#bbb]">
                          {number}
                        </span>

                        <span className="text-xs font-medium text-[#444]">
                          {title}
                        </span>
                      </div>

                      <span className="text-[9px] uppercase tracking-[0.12em] text-[#aaa]">
                        {type}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          </div>

          {/* Capability strip */}
          <div className="mt-16 grid border-y border-black/[0.07] md:grid-cols-4">

            {[
              ["01", "AI Workflows"],
              ["02", "API Integrations"],
              ["03", "n8n Automation"],
              ["04", "Process Automation"],
            ].map(([number, title], index) => (
              <div
                key={number}
                className={`py-7 md:px-6 ${
                  index !== 0
                    ? "border-t border-black/[0.07] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <span className="text-[9px] text-[#bbb]">{number}</span>

                <p className="mt-3 text-xs font-medium">{title}</p>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-[#999]">
                What we do
              </p>

<Reveal>

              <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Three capabilities.
                <span className="text-[#aaa]"> One growth system.</span>
              </h2>
    </Reveal>
        </div>

            <p className="max-w-md text-sm leading-7 text-[#777] lg:ml-auto">
              We combine search, product thinking and automation to build
              digital systems that help businesses get discovered, convert
              demand and operate more efficiently.
            </p>
          </div>

          {/* Services */}
          <div className="mt-20 border-t border-black/[0.08]">

            {/* Search */}
            <div className="group grid gap-8 border-b border-black/[0.08] py-12 transition-all md:grid-cols-[80px_1fr_1fr] md:py-16">

              <span className="text-[11px] text-[#aaa]">
                01
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#aaa]">
                  Search
                </p>

                <h3 className="mt-4 text-4xl font-medium tracking-[-0.045em]">
                  Get found.
                </h3>
              </div>

              <div className="md:pl-8">
                <p className="max-w-md text-sm leading-7 text-[#777]">
                  Search strategies built around how people discover,
                  evaluate and choose businesses — not just rankings.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "SEO Strategy",
                    "Technical SEO",
                    "Content Architecture",
                    "Organic Growth",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f4f4f1] px-3 py-1.5 text-[10px] text-[#666]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="/seo"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium"
                >
                  Explore search
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

            </div>

            {/* Build */}
            <div className="group grid gap-8 border-b border-black/[0.08] py-12 transition-all md:grid-cols-[80px_1fr_1fr] md:py-16">

              <span className="text-[11px] text-[#aaa]">
                02
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#aaa]">
                  Build
                </p>

                <h3 className="mt-4 text-4xl font-medium tracking-[-0.045em]">
                  Ship ideas.
                </h3>
              </div>

              <div className="md:pl-8">
                <p className="max-w-md text-sm leading-7 text-[#777]">
                  From conversion-focused websites to working product
                  prototypes, we turn ideas into usable digital experiences.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Websites",
                    "Landing Pages",
                    "Product Prototypes",
                    "Internal Tools",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f4f4f1] px-3 py-1.5 text-[10px] text-[#666]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="/work"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium"
                >
                  Explore builds
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

            </div>

            {/* Automate */}
            <div className="group grid gap-8 border-b border-black/[0.08] py-12 transition-all md:grid-cols-[80px_1fr_1fr] md:py-16">

              <span className="text-[11px] text-[#aaa]">
                03
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#aaa]">
                  Automate
                </p>

                <h3 className="mt-4 text-4xl font-medium tracking-[-0.045em]">
                  Work smarter.
                </h3>
              </div>

              <div className="md:pl-8">
                <p className="max-w-md text-sm leading-7 text-[#777]">
                  Connected workflows that remove repetitive work, integrate
                  tools and keep business processes moving automatically.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "n8n",
                    "AI Workflows",
                    "API Integration",
                    "Process Automation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#f4f4f1] px-3 py-1.5 text-[10px] text-[#666]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  
                  className="mt-8 inline-flex items-center gap-2 text-xs font-medium"
                >
                  Explore automation
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

            </div>

          </div>

          {/* Positioning statement */}
          <div className="mt-24 flex justify-center">
            <p className="max-w-3xl text-center text-2xl font-medium leading-[1.35] tracking-[-0.035em] text-[#aaa] md:text-4xl">
              Different capabilities.
              <span className="text-[#111]">
                {" "}Connected around one objective — helping businesses grow.
              </span>
            </p>
          </div>

        </div>
      </section>
      {/* Process */}
      <section className="bg-[#f5f5f2]">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-[#999]">
                How we work
              </p>

             <Reveal>
 <h2 className="max-w-xl text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Understand first.
                <span className="text-[#aaa]"> Build second.</span>
              </h2>
            </Reveal>
</div>

            <p className="max-w-md text-sm leading-7 text-[#777] lg:ml-auto lg:pt-12">
              No bloated process. We understand the problem, identify what
              actually matters, build the right system and improve it using
              what we learn.
            </p>
          </div>

          {/* Process steps */}
          <div className="mt-20 grid border-y border-black/[0.08] md:grid-cols-4">

            {[
              [
                "01",
                "Understand",
                "We start with the business, the user and the actual problem — not the tool.",
              ],
              [
                "02",
                "Find leverage",
                "We identify where search, technology or automation can create the biggest impact.",
              ],
              [
                "03",
                "Build",
                "We turn the strategy into something tangible, usable and intentionally simple.",
              ],
              [
                "04",
                "Improve",
                "We measure what happens, learn from real usage and keep improving the system.",
              ],
            ].map(([number, title, description], index) => (
              <div
                key={number}
                className={`py-9 md:min-h-[260px] md:px-7 ${
                  index !== 0
                    ? "border-t border-black/[0.08] md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <span className="text-[10px] text-[#aaa]">{number}</span>

                <h3 className="mt-12 text-lg font-medium tracking-[-0.02em]">
                  {title}
                </h3>

                <p className="mt-4 max-w-[220px] text-xs leading-6 text-[#777]">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Studio / About */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div>
  <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
    Independent Digital Studio
  </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#111]" />

               <span className="text-xs text-[#777]">
  Independent digital studio
</span>
              </div>
            </div>

            {/* Right */}
            <div>
     notepad app\page.tsx

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-sm leading-7 text-[#666]">
                  A small multidisciplinary digital studio bringing together
search, product thinking, automation and performance to solve
meaningful business problems.
                </p>

                <p className="text-sm leading-7 text-[#888]">
                  The goal isn&apos;t to sell every possible service. It&apos;s
                  to stay small, move quickly and build work that creates
                  measurable value.
                </p>
              </div>

              {/* Founder */}
              <div className="mt-14 flex items-center justify-between border-t border-black/[0.08] pt-7">
                <div>
  <p className="text-sm font-medium">
    Three people. Complementary strengths.
  </p>

  <p className="mt-1 text-xs text-[#999]">
    Search · Automation · Performance
  </p>
</div>

                <a
                 href="/about"
                  className="group inline-flex items-center gap-2 text-xs font-medium"
                >
                  Meet the team
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section id="contact" className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">

          <div className="flex min-h-[480px] flex-col justify-between">

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
                Start a project
              </p>

              <Reveal>
<h2 className="mt-8 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.94] tracking-[-0.065em]">
                Have something worth
                <span className="text-white/30"> building or growing?</span>
              </h2>
            </Reveal>
</div>

            <div className="mt-20 flex flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row md:items-end">

              <p className="max-w-sm text-sm leading-7 text-white/40">
                Tell us what you&apos;re working on, what&apos;s getting in the
                way and where you want to go.
              </p>

              <a
                href="mailto:hello@example.com"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-white py-3 pl-5 pr-3 text-sm font-medium text-black transition-transform hover:-translate-y-0.5"
              >
                Start a conversation

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6">

            <div className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr]">

              {/* Brand */}
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold tracking-[-0.03em]"
                >
                  Bibin.
                </a>

                <p className="mt-4 max-w-xs text-xs leading-6 text-white/30">
  A small digital studio working across search, products,
  automation and growth.
</p>
              </div>

              {/* Navigation */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                  Navigate
                </p>

                <div className="mt-5 flex flex-col items-start gap-3 text-xs text-white/50">
                  <a href="/work" className="transition-colors hover:text-white">
                    Work
                  </a>

                  <a href="/seo" className="transition-colors hover:text-white">
                    SEO
                  </a>

                  <a
                    href="/services"
                    className="transition-colors hover:text-white"
                  >
                    Services
                  </a>

                  <a
                    href="/about"
                    className="transition-colors hover:text-white"
                  >
                    Studio
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                  Elsewhere
                </p>

                <div className="mt-5 flex flex-col items-start gap-3 text-xs text-white/50">
                  <a href="#" className="transition-colors hover:text-white">
                    LinkedIn ↗
                  </a>

                  <a href="#" className="transition-colors hover:text-white">
                    GitHub ↗
                  </a>

                  <a
                    href="mailto:hello@example.com"
                    className="transition-colors hover:text-white"
                  >
                    Email ↗
                  </a>
                </div>
              </div>

            </div>

            <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-[10px] text-white/20 md:flex-row">
              <p>
                © 2026 Studio. All rights reserved.
              </p>

              <p>
                Search · Build · Automate
              </p>
            </div>

          </div>
        </footer>
      </section>
    </main>
  );
}