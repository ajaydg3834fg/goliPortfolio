import React from "react";
import { StaticImage } from "gatsby-plugin-image";

/** tiny kettlebell bullet */
function Kettlebell() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-crimson"
    >
      <path d="M8 7a4 4 0 1 1 8 0v1h-2V7a2 2 0 1 0-4 0v1H8V7z" />
      <rect x="5" y="9" width="14" height="11" rx="5" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-bg-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 px-6 sm:px-8 py-16 md:py-24">
        {/* LEFT: glass panel with copy */}
        <div className="md:col-span-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-900/60 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,.35)]">
            {/* accent rail */}
            <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-crimson to-cyan" />
            {/* subtle knurl pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[.08] bg-[repeating-linear-gradient(135deg,#2428331f_0_12px,transparent_12px_24px)]" />

            <div className="p-6 sm:p-8">
              <h2 className="text-[34px] sm:text-[42px] md:text-[48px] leading-[1.05] font-extrabold text-white">
                Science led.<br />Results driven.
              </h2>

              <h3 className="mt-6 text-lg font-extrabold text-white">
                About the Coach
              </h3>

              <p className="mt-3 text-[16px] leading-relaxed text-muted max-w-prose">
                I coach busy professionals and athletes in Hyderabad. You get
                clear cues, progressive overload, and accountability that sticks.
                No fads and no confusion. Only training that moves the needle.
              </p>

              <ul className="mt-6 space-y-3 text-[15px] text-text">
                <li className="flex items-start gap-3">
                  <Kettlebell />
                  <span>Muscle gain and recomposition</span>
                </li>
                <li className="flex items-start gap-3">
                  <Kettlebell />
                  <span>Fat loss without strength blocks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Kettlebell />
                  <span>Contest posing and peak week support</span>
                </li>
              </ul>

              <div className="mt-7 flex gap-4">
                <a
                  href="#programs"
                  className="inline-flex items-center rounded-[14px] px-5 py-3 text-sm font-semibold text-white border border-white/70 hover:bg-white/10"
                >
                  See Programs
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-[14px] px-5 py-3 text-sm font-bold uppercase bg-crimson text-bg-950 shadow-[0_8px_24px_rgba(0,0,0,.35)] hover:opacity-90"
                >
                  Book Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: framed photo card */}
        <div className="md:col-span-6">
          <figure className="relative rounded-2xl border border-border bg-bg-900/60 shadow-[0_8px_24px_rgba(0,0,0,.35)] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_0%_0%,#fff1_0,#0000_70%)]" />
            <div className="relative h-[44svh] md:h-[68svh]">
              {/* Swap this image path if you prefer a different one */}
              <StaticImage
                src="../images/about.jpg"
                alt="Coach training shot in the gym"
                placeholder="blurred"
                loading="lazy"
                layout="fullWidth"
                className="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-contain"  /* show entire image */
                objectFit="contain"
                objectPosition="center"
              />
              {/* blend edge toward the panel */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-bg-950/40 to-transparent" />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
