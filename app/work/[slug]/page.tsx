import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <Navbar />

      {/* Project Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-40 md:pb-28 md:pt-48">

        <a
          href="/work"
          className="group inline-flex items-center gap-2 text-xs text-[#777]"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          All work
        </a>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
              {project.category}
            </p>

            <h1 className="mt-6 max-w-4xl text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              {project.title}
            </h1>
          </div>

          <div>
            <p className="text-sm leading-7 text-[#777]">
              {project.shortDescription}
            </p>

            <div className="mt-7 flex items-center gap-6 border-t border-black/[0.08] pt-5">

              <div>
                <p className="text-[9px] uppercase tracking-[0.14em] text-[#aaa]">
                  Year
                </p>

                <p className="mt-1 text-xs">
                  {project.year}
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.14em] text-[#aaa]">
                  Type
                </p>

                <p className="mt-1 text-xs">
                  {project.category}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Project Visual */}
      <section className="mx-auto max-w-6xl px-6">

        <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[30px] bg-[#111] p-8 md:min-h-[650px]">

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(#777 0.7px, transparent 0.7px)",
              backgroundSize: "22px 22px",
            }}
          />

<div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#181818]">
            <div className="flex h-12 items-center border-b border-white/10 px-5">

              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <p className="ml-4 text-[9px] text-white/25">
                Project preview
              </p>

            </div>

            <div className="relative aspect-video overflow-hidden">

 {project.slug === "topical-map-generator" ? (

  <video
    controls
    playsInline
    preload="metadata"
    className="absolute inset-0 h-full w-full bg-black object-contain"
  >
    <source
      src="/videos/topical-map-demo.mp4"
      type="video/mp4"
    />

    Your browser does not support video playback.
  </video>

) : project.slug === "weather-application" ? (

  <Image
    src="/projects/weather-application/weather-app.png"
    alt="Weather Application interface"
    fill
    sizes="(max-width: 768px) 100vw, 1024px"
    className="object-contain"
  />
) : project.slug === "mutual-fund-faq" ? (

  <Image
    src="/projects/mutual-fund-faq/mutual-fund-faq.png"
    alt="Mutual Fund FAQ assistant interface"
    fill
    sizes="(max-width: 768px) 100vw, 1024px"
    className="object-contain"
  />

) : (

  <div className="flex h-full w-full items-center justify-center p-8 text-center">
    <div>

      <p className="text-[9px] uppercase tracking-[0.16em] text-white/30">
        Demo asset
      </p>

      <h2 className="mt-4 text-2xl font-medium tracking-[-0.04em] text-white">
        {project.title}
      </h2>

      <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-white/35">
        Project screenshots, product video or workflow demonstration
        will live here.
      </p>

    </div>
  </div>

)}

</div>

          </div>
        </div>

      </section>
      {/* Automation Workflow Showcase */}
      {project.slug === "whatsapp-automation" && (
        <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28">

          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#999]">
                Workflow demo
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                See the automation
                <span className="text-[#aaa]"> in motion.</span>
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[#777]">
              A walkthrough of how an incoming WhatsApp event moves through
              the workflow and triggers automated actions.
            </p>
          </div>

          {/* Video / Demo Window */}
          <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#111]">

            {/* Window header */}
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>

              <p className="text-[9px] uppercase tracking-[0.14em] text-white/25">
                n8n workflow
              </p>

              <span className="text-[9px] text-white/20">
                Demo
              </span>

            </div>

            {/* Placeholder */}
            <div className="relative flex aspect-video items-center justify-center overflow-hidden">

              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(#fff 0.7px, transparent 0.7px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* Fake workflow */}
              <div className="relative flex w-full max-w-4xl items-center justify-center gap-3 px-8">

                {[
                  "WhatsApp",
                  "Webhook",
                  "n8n",
                  "Logic",
                  "Action",
                ].map((node, index) => (
                  <div
                    key={node}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-20 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 text-center text-[10px] text-white/50 md:h-24 md:w-32 md:text-xs">
                      {node}
                    </div>

                    {index < 4 && (
                      <span className="text-white/20">
                        →
                      </span>
                    )}
                  </div>
                ))}

              </div>

              {/* Demo label */}
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur">
                <p className="text-[9px] uppercase tracking-[0.12em] text-white/35">
                  Video coming soon
                </p>
              </div>

            </div>
          </div>

        </section>
      )}
      {/* Automation Architecture */}
      {project.slug === "whatsapp-automation" && (
        <section className="mx-auto max-w-6xl px-6 pb-8 pt-24 md:pt-32">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            {/* Left */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#999]">
                Architecture
              </p>

              <h2 className="mt-5 max-w-sm text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                What happens
                <span className="text-[#aaa]"> behind the message.</span>
              </h2>
            </div>

            {/* Right */}
            <div className="border-t border-black/[0.08]">

              {[
                {
                  number: "01",
                  label: "Trigger",
                  title: "WhatsApp event",
                  description:
                    "A customer message or WhatsApp event starts the automation.",
                  tool: "WhatsApp API",
                },
                {
                  number: "02",
                  label: "Receive",
                  title: "Webhook",
                  description:
                    "The incoming event is received and passed into the workflow.",
                  tool: "Webhook",
                },
                {
                  number: "03",
                  label: "Process",
                  title: "Workflow logic",
                  description:
                    "n8n processes the payload, transforms data and coordinates the next steps.",
                  tool: "n8n",
                },
                {
                  number: "04",
                  label: "Decide",
                  title: "Routing & conditions",
                  description:
                    "Rules determine what action should happen based on the incoming information.",
                  tool: "Logic",
                },
                {
                  number: "05",
                  label: "Act",
                  title: "Connected action",
                  description:
                    "The workflow triggers the appropriate response, API call or external system action.",
                  tool: "APIs",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-black/[0.08] py-7 sm:grid-cols-[45px_100px_1fr_auto] sm:items-start"
                >
                  <span className="text-[10px] text-[#aaa]">
                    {step.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.13em] text-[#999]">
                    {step.label}
                  </span>

                  <div>
                    <h3 className="text-sm font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md text-xs leading-6 text-[#777]">
                      {step.description}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-[#f1f1ee] px-3 py-1.5 text-[9px] text-[#777]">
                    {step.tool}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>
      )}
      {/* Topical Map Generator Product Showcase */}
{project.slug === "topical-map-generator" && (
  <section className="mx-auto max-w-6xl px-6 pt-20 md:pt-28">

    <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

      <div>
        <p className="text-[10px] uppercase tracking-[0.16em] text-[#999]">
          Product
        </p>

        <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.045em] md:text-5xl">
          From a topic to a
          <span className="text-[#aaa]">
            {" "}content architecture.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-xs leading-6 text-[#777]">
        The product turns an SEO planning process into a guided workflow
        for generating pillars, subtopics, page opportunities and
        relationships between content.
      </p>

    </div>

    {/* Product Window */}
    <div className="overflow-hidden rounded-[28px] border border-black/[0.08] bg-[#111]">

      {/* Browser Bar */}
      <div className="flex h-12 items-center justify-between border-b border-white/10 px-5">

        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>

        <div className="rounded-md border border-white/[0.08] bg-white/[0.03] px-8 py-1.5">
          <p className="text-[8px] text-white/25">
            Topical Map Generator
          </p>
        </div>

        <span className="text-[8px] uppercase tracking-[0.12em] text-white/20">
          Product
        </span>

      </div>

      {/* REAL PRODUCT SCREENSHOT */}
      <div className="bg-[#111] p-3 md:p-6">
        <div className="overflow-hidden rounded-xl border border-white/10">

          <Image
            src="/projects/topical-map-generator/generator.png"
            alt="Topical Map Generator interface"
            width={1600}
            height={1000}
            className="h-auto w-full"
            priority
          />

        </div>
      </div>

    </div>

  </section>


)}
{/* Topical Map Generator Gallery */}
{project.slug === "topical-map-generator" && (
  <section className="mx-auto max-w-6xl px-6 pt-6 md:pt-8">

    <div className="grid gap-6 md:grid-cols-2">

      {/* Results */}
      <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-3">
        <Image
          src="/projects/topical-map-generator/results.png"
          alt="Topical Map Generator results"
          width={1600}
          height={1000}
          className="h-auto w-full rounded-[16px]"
        />

        <div className="px-3 pb-3 pt-5">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#aaa]">
            Generated output
          </p>

          <p className="mt-2 text-sm text-[#555]">
            Structured topical map generated from the initial input.
          </p>
        </div>
      </div>

      {/* Dashboard */}
      <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-3">
        <Image
          src="/projects/topical-map-generator/dashboard.png"
          alt="Topical Map Generator dashboard"
          width={1600}
          height={1000}
          className="h-auto w-full rounded-[16px]"
        />

        <div className="px-3 pb-3 pt-5">
          <p className="text-[10px] uppercase tracking-[0.14em] text-[#aaa]">
            Workspace
          </p>

          <p className="mt-2 text-sm text-[#555]">
            A workspace for managing generated topical map projects.
          </p>
        </div>
      </div>

    </div>

  </section>
)}


      {/* Topical Map Product Flow */}
      {project.slug === "topical-map-generator" && (
        <section className="mx-auto max-w-6xl px-6 pb-8 pt-24 md:pt-32">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#999]">
                How it works
              </p>

              <h2 className="mt-5 max-w-sm text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                SEO methodology,
                <span className="text-[#aaa]"> productised.</span>
              </h2>
            </div>

            <div className="border-t border-black/[0.08]">

              {[
                {
                  number: "01",
                  title: "Define the topic",
                  description:
                    "The user provides the website, niche or seed topic they want to build authority around.",
                },
                {
                  number: "02",
                  title: "Structure the opportunity",
                  description:
                    "The system interprets the subject through entities, search intent and topical relationships rather than returning a flat keyword list.",
                },
                {
                  number: "03",
                  title: "Generate the architecture",
                  description:
                    "AI produces structured pillars, clusters, subtopics and page opportunities using a defined schema.",
                },
                {
                  number: "04",
                  title: "Connect the content",
                  description:
                    "Relationships between pages help form an internal linking and topical authority structure.",
                },
                {
                  number: "05",
                  title: "Turn it into a plan",
                  description:
                    "The generated map becomes a usable content architecture that can be reviewed, refined and executed.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 border-b border-black/[0.08] py-7 sm:grid-cols-[50px_180px_1fr]"
                >
                  <span className="text-[10px] text-[#aaa]">
                    {step.number}
                  </span>

                  <h3 className="text-sm font-medium">
                    {step.title}
                  </h3>

                  <p className="max-w-md text-xs leading-6 text-[#777]">
                    {step.description}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </section>
      )}
      {/* Topical Map Technology */}
      {project.slug === "topical-map-generator" && (
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">

          <div className="rounded-[28px] bg-[#f1f1ee] p-7 md:p-12">

            <p className="text-[10px] uppercase tracking-[0.16em] text-[#999]">
              Under the hood
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

              <h2 className="max-w-lg text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Product thinking meets
                <span className="text-[#aaa]">
                  {" "}AI infrastructure.
                </span>
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  ["Next.js", "Product interface"],
                  ["OpenAI", "Structured generation"],
                  ["Supabase", "Data layer"],
                  ["PostgreSQL", "Project data"],
                  ["Auth", "Protected workspace"],
                  ["Vercel", "Deployment"],
                ].map(([technology, role]) => (
                  <div
                    key={technology}
                    className="rounded-xl bg-white p-5"
                  >
                    <p className="text-sm font-medium">
                      {technology}
                    </p>

                    <p className="mt-2 text-[10px] text-[#999]">
                      {role}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </section>
      )}
     
      


      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-28 md:py-36">

        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
              Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-[1.2] tracking-[-0.04em] md:text-5xl">
              Built around a problem,
              <span className="text-[#aaa]">
                {" "}not around a technology.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-[#666]">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f0f0ed] px-3 py-1.5 text-[10px] text-[#666]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Problem / Approach */}
      <section className="border-y border-black/[0.08] bg-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">

          <div className="px-6 py-20 md:border-r md:border-black/[0.08] md:px-12 md:py-28">

            <span className="text-[10px] text-[#aaa]">
              01
            </span>

            <p className="mt-8 text-[10px] uppercase tracking-[0.15em] text-[#999]">
              The problem
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-medium tracking-[-0.04em]">
              Understanding what actually needed solving.
            </h2>

<p className="mt-6 max-w-md text-sm leading-7 text-[#777]">
  {project.problem ??
    "The project started by identifying the core user and business problem before deciding what should be built."}
</p>
          </div>

          <div className="border-t border-black/[0.08] px-6 py-20 md:border-t-0 md:px-12 md:py-28">

            <span className="text-[10px] text-[#aaa]">
              02
            </span>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#777]">
  {project.approach ??
    "The solution was designed around the simplest combination of strategy, technology and experimentation needed to address the problem."}
</p>
            <h2 className="mt-5 max-w-md text-3xl font-medium tracking-[-0.04em]">
              Build the simplest system that creates leverage.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#777]">
              Strategy comes before tools. Once the problem is clear, the
              appropriate combination of product thinking, technology,
              automation and experimentation is used to build the solution.
            </p>

          </div>

        </div>
      </section>

      {/* Demo Result */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">

          <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
            Outcome
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              From idea to
              <span className="text-white/30">
                {" "}working system.
              </span>
            </h2>

            <div className="lg:pt-4">
              <p className="max-w-md text-sm leading-7 text-white/40">
  {project.outcome ??
    "Verified outcomes, screenshots, analytics and lessons will be added as the case study develops."}
</p>

              <p className="mt-5 text-[9px] uppercase tracking-[0.14em] text-white/20">
                Demo content · Replace with verified project data
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Project Links */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">

            <a
              href="https://groww-mf-faq-ten.vercel.app/"
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              Visit project
              <ExternalLink size={14} />
            </a>

            <a
              href={`/work/${nextProject.slug}`}
              className="group text-left md:text-right"
            >
              <p className="text-[9px] uppercase tracking-[0.14em] text-[#aaa]">
                Next project
              </p>

              <div className="mt-2 flex items-center gap-3 text-xl font-medium tracking-[-0.03em]">
                {nextProject.title}

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}