"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";

const needs = [
  "SEO / Organic Growth",
  "Website / Product",
  "Automation / n8n",
  "Paid Growth / Commerce",
  "Not sure yet",
];

const budgets = [
  "Under £1k",
  "£1k – £3k",
  "£3k – £7k",
  "£7k+",
  "Let's discuss",
];

export default function ContactPage() {
  const [selectedNeed, setSelectedNeed] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#111]">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-40 md:pb-28 md:pt-48">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#999]">
          Start a project
        </p>

        <h1 className="mt-7 max-w-5xl text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em]">
          Tell us what&apos;s
          <span className="text-[#aaa]"> getting in the way.</span>
        </h1>

        <div className="mt-12 flex justify-end">
          <p className="max-w-lg text-[16px] leading-8 text-[#666]">
            You don&apos;t need a perfect brief. Tell us what you&apos;re
            trying to achieve, where things are stuck and we&apos;ll figure
            out the right next step.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mx-auto max-w-4xl"
          >

            {/* Need */}
            <div className="grid gap-10 border-b border-black/[0.08] pb-16 md:grid-cols-[180px_1fr]">

              <div>
                <span className="text-[10px] text-[#aaa]">01</span>

                <p className="mt-3 text-xs font-medium">
                  What do you need?
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-[-0.035em]">
                  Where can we help?
                </h2>

                <div className="mt-7 flex flex-wrap gap-2">
                  {needs.map((need) => {
                    const active = selectedNeed === need;

                    return (
                      <button
                        key={need}
                        type="button"
                        onClick={() => setSelectedNeed(need)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs transition-all ${
                          active
                            ? "border-[#111] bg-[#111] text-white"
                            : "border-black/[0.08] bg-[#fafafa] text-[#666] hover:border-black/20"
                        }`}
                      >
                        {active && <Check size={12} />}
                        {need}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Project */}
            <div className="grid gap-10 border-b border-black/[0.08] py-16 md:grid-cols-[180px_1fr]">

              <div>
                <span className="text-[10px] text-[#aaa]">02</span>

                <p className="mt-3 text-xs font-medium">
                  The project
                </p>
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="text-2xl font-medium tracking-[-0.035em]"
                >
                  What are you trying to solve?
                </label>

                <textarea
                  id="project"
                  name="project"
                  rows={6}
                  placeholder="Tell us about the business, the problem, what you've tried and what you'd like to achieve..."
                  className="mt-7 w-full resize-none border-0 border-b border-black/[0.12] bg-transparent px-0 py-4 text-sm leading-7 text-[#333] outline-none placeholder:text-[#bbb] focus:border-black"
                />
              </div>

            </div>

            {/* Budget */}
            <div className="grid gap-10 border-b border-black/[0.08] py-16 md:grid-cols-[180px_1fr]">

              <div>
                <span className="text-[10px] text-[#aaa]">03</span>

                <p className="mt-3 text-xs font-medium">
                  Budget
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-[-0.035em]">
                  What range are you working with?
                </h2>

                <p className="mt-3 text-xs leading-6 text-[#999]">
                  This helps us recommend an appropriate scope.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {budgets.map((budget) => {
                    const active = selectedBudget === budget;

                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs transition-all ${
                          active
                            ? "border-[#111] bg-[#111] text-white"
                            : "border-black/[0.08] bg-[#fafafa] text-[#666] hover:border-black/20"
                        }`}
                      >
                        {active && <Check size={12} />}
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Contact details */}
            <div className="grid gap-10 py-16 md:grid-cols-[180px_1fr]">

              <div>
                <span className="text-[10px] text-[#aaa]">04</span>

                <p className="mt-3 text-xs font-medium">
                  About you
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-medium tracking-[-0.035em]">
                  Where can we reach you?
                </h2>

                <div className="mt-9 grid gap-8 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="text-[10px] uppercase tracking-[0.13em] text-[#999]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full border-0 border-b border-black/[0.12] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#bbb] focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-[10px] uppercase tracking-[0.13em] text-[#999]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full border-0 border-b border-black/[0.12] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#bbb] focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-[10px] uppercase tracking-[0.13em] text-[#999]"
                    >
                      Company
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company name"
                      className="mt-2 w-full border-0 border-b border-black/[0.12] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#bbb] focus:border-black"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="text-[10px] uppercase tracking-[0.13em] text-[#999]"
                    >
                      Website
                    </label>

                    <input
                      id="website"
                      name="website"
                      type="text"
                      placeholder="yourcompany.com"
                      className="mt-2 w-full border-0 border-b border-black/[0.12] bg-transparent px-0 py-3 text-sm outline-none placeholder:text-[#bbb] focus:border-black"
                    />
                  </div>

                </div>
              </div>

            </div>

            {/* Submit */}
            <div className="flex flex-col justify-between gap-8 border-t border-black/[0.08] pt-10 sm:flex-row sm:items-center">

              <p className="max-w-sm text-xs leading-6 text-[#999]">
                No polished proposal needed. A rough description is enough to
                start the conversation.
              </p>

              <button
                type="submit"
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#111] py-3 pl-5 pr-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                Send project

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </button>

            </div>

          </form>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">

          <div className="grid gap-12 md:grid-cols-2 md:items-end">

            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                Prefer email?
              </p>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                Keep it simple.
              </h2>
            </div>

            <div className="md:text-right">
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-3 text-lg text-white/60 transition-colors hover:text-white"
              >
                hello@example.com
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}