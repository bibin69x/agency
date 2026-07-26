"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "SEO", href: "/seo" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <nav className="relative mt-4 rounded-2xl border border-black/[0.06] bg-white/85 shadow-[0_1px_20px_rgba(0,0,0,0.03)] backdrop-blur-xl">
          <div className="flex h-14 items-center justify-between px-5">
            <a
             href="/"
              className="text-[15px] font-semibold tracking-[-0.02em]"
            >
              Bibin.
            </a>

            <div className="hidden items-center gap-7 text-[13px] text-[#666] md:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="group hidden items-center gap-1.5 text-[13px] font-medium sm:flex"
              >
Start a project                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="flex h-8 w-8 items-center justify-center md:hidden"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-black/[0.06] px-5 py-5 md:hidden">
              <div className="flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-black/[0.05] py-4 text-lg font-medium tracking-[-0.02em] last:border-none"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-5 flex items-center justify-between rounded-xl bg-[#111] px-4 py-3 text-sm font-medium text-white"
                >
                  Start a project
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}