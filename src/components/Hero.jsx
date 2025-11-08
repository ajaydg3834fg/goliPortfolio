import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PlateCounter from "./PlateCounter";
// import BarbellDivider from "./BarbellDivider"; // uncomment if you want it in the hero

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-950">
      {/* subtle vignette so text always reads */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% 15%, rgba(0,0,0,.18), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 items-center gap-10 px-6 sm:px-8">
        {/* IMAGE (entire photo visible) */}
        <div className="order-1 md:order-2 md:col-span-6 pt-10 md:pt-16">
          <div className="relative rounded-2xl border border-border bg-bg-900/60 shadow-[var(--shadow-card)] overflow-hidden">
            <div className="relative h-[44svh] md:h-[72svh]">
              <StaticImage
                src="../images/hero.jpg" /* adjust if your path differs */
                alt="Coach portrait in the gym"
                loading="eager"
                placeholder="blurred"
                layout="fullWidth"
                className="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-contain" /* show entire image */
                objectFit="contain"
                objectPosition="center"
              />
              {/* soft fade toward text side to blend with charcoal */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-bg-950/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="order-2 md:order-1 md:col-span-6 py-14 md:py-24">
          {/* location pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-900/70 px-3 py-1 text-xs text-muted mb-6">
            HYD Training Lab
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Madhapur • Hyderabad
          </div>

          <h1 className="text-white text-[42px] sm:text-[60px] md:text-[72px] leading-[1.02] font-extrabold tracking-tight">
            STOP GUESSING.
            <br />
            <span className="relative inline-block">
              START BUILDING
              <span className="absolute -bottom-3 left-0 h-[6px] w-44 rounded-full bg-gradient-to-r from-crimson to-cyan" />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted">
            Evidence based coaching in Hyderabad for muscle gain, fat loss, and
            strength. Technique that protects your joints. Nutrition that fits
            real life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-[14px] px-6 py-3 text-sm font-bold uppercase bg-crimson text-bg-950 shadow-[var(--shadow-card)] hover:opacity-90"
            >
              Book Free Trial
            </a>
            <a
              href="#programs"
              className="inline-flex items-center rounded-[14px] px-6 py-3 text-sm font-semibold text-white border border-white/70 hover:bg-white/10"
            >
              View Programs
            </a>
          </div>

          {/* optional divider */}
          {/* <div className="mt-10"><BarbellDivider /></div> */}

          {/* Counters */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start w-full">
            <div className="mx-auto sm:mx-0 shrink-0">
              <PlateCounter
                value="8+"
                label="Years"
                ringInset={38}
                size={160}
                ringWidth={4}
                progress={1}
              />
            </div>
            <div className="mx-auto sm:mx-0 shrink-0">
              <PlateCounter
                value="350+"
                label="Clients"
                ringInset={38}
                size={160}
                ringWidth={4}
                progress={1}
              />
            </div>
            <div className="mx-auto sm:mx-0 shrink-0">
              <PlateCounter
                value="4.9★"
                label="Star"
                ringInset={38}
                size={160}
                ringWidth={4}
                progress={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
