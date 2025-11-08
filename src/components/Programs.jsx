// src/components/Programs.jsx
// TailwindCSS required

import React from "react";

const COLORS = {
  bgTop: "#E7E8EA",
  bgBottom: "#D9DBDE",
  card: "#121316",
  darkPlate: "#1A1C21",
  accent: "#FF3B5C",
  chip: "#2A2D33",
  textDim: "rgba(255,255,255,0.72)",
};

/* <=640px helper (safe for SSR) */
function useIsMobile() {
  const [isMobile, set] = React.useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 640px)").matches
      : false
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(max-width: 640px)");
    const on = (e) => set(e.matches);
    m.addEventListener?.("change", on);
    return () => m.removeEventListener?.("change", on);
  }, []);
  return isMobile;
}

/* =============== SVG dumbbell ribs =============== */
function DumbbellRibs({ side = "left" }) {
  const isMobile = useIsMobile();
  const isLeft = side === "left";

  // Compact geometry for small screens
  const VB_W = isMobile ? 92 : 118;
  const VB_H = isMobile ? 96 : 120;

  const plateW = isMobile ? 20 : 24;
  const stepX  = isMobile ? 16 : 20;

  const hOuter = isMobile ? 46 : 58;
  const hMid   = isMobile ? 64 : 78;
  const hInner = isMobile ? 82 : 98;

  const rxPlate = 6;

  const outer = { x: 0,         y: (VB_H - hOuter) / 2, w: plateW, h: hOuter, rx: rxPlate };
  const mid   = { x: stepX,     y: (VB_H - hMid)   / 2, w: plateW, h: hMid,   rx: rxPlate };
  const inner = { x: stepX * 2, y: (VB_H - hInner) / 2, w: plateW, h: hInner, rx: rxPlate };

  // thin seams — same height as their plates
  const seamW = isMobile ? 3 : 4;
  const inset = isMobile ? 4 : 5;
  const s1 = { x: outer.x + plateW - inset - seamW, y: outer.y, w: seamW, h: outer.h, r: 2 };
  const s2 = { x: mid.x   + plateW - inset - seamW, y: mid.y,   w: seamW, h: mid.h,   r: 2 };

  // place just outside the card; slight negative gutter so the inner plate kisses the edge
  const clusterRight = inner.x + plateW;
  const desktopGutter = -2;
  const mobileGutter  = -1;
  const base = -(clusterRight + (isMobile ? mobileGutter : desktopGutter));

  // on very small screens pull slightly under the card so it won't clip
  const inwardNudge = isMobile ? 8 : 0;
  const offset = base + inwardNudge;

  const anchorStyle = isLeft ? { left: offset } : { right: offset };

  return (
    <div
      aria-hidden="true"
      className="absolute top-1/2 pointer-events-none"
      style={{
        ...anchorStyle,
        width: VB_W,
        height: VB_H,
        // single transform so vertical centering is always correct
        transform: "translateY(-50%)",
        filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.35))",
      }}
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        width={VB_W}
        height={VB_H}
        preserveAspectRatio="xMidYMid meet"
        style={{ transform: isLeft ? undefined : "scaleX(-1)", display: "block" }}
      >
        {/* OUTER plate + seam */}
        <rect x={outer.x} y={outer.y} width={outer.w} height={outer.h} rx={outer.rx} fill={COLORS.darkPlate} />
        <rect x={s1.x}    y={s1.y}    width={s1.w}    height={s1.h}    rx={s1.r}   fill={COLORS.accent} />
        {/* MID plate + seam */}
        <rect x={mid.x}   y={mid.y}   width={mid.w}   height={mid.h}   rx={mid.rx} fill={COLORS.darkPlate} />
        <rect x={s2.x}    y={s2.y}    width={s2.w}    height={s2.h}    rx={s2.r}   fill={COLORS.accent} />
        {/* INNER plate (closest to card) */}
        <rect x={inner.x} y={inner.y} width={inner.w} height={inner.h} rx={inner.rx} fill={COLORS.darkPlate} />
      </svg>
    </div>
  );
}

/* =============== Card =============== */
function ProgramCard({ title, blurb, cta, leftRibs = true, rightRibs = true }) {
  return (
    <div
      className="
        relative overflow-visible
        w-full mx-3
        /* Smaller on mobile → grows with breakpoints */
        max-w-[240px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[340px]
        rounded-2xl p-4 sm:p-5 md:p-6
        flex flex-col
        min-h-[220px] sm:min-h-[240px] md:min-h-[260px]
      "
      style={{
        background: COLORS.card,
        boxShadow:
          "0 18px 60px rgba(0,0,0,0.45), 0 2px 0 rgba(255,255,255,0.04) inset, 0 -1px 0 rgba(0,0,0,0.35) inset",
      }}
    >
      {leftRibs && <DumbbellRibs side="left" />}
      {rightRibs && <DumbbellRibs side="right" />}

      <h3 className="text-white text-lg sm:text-xl md:text-[22px] font-extrabold leading-tight whitespace-pre-line">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm leading-relaxed" style={{ color: COLORS.textDim }}>
        {blurb}
      </p>

      <button
        type="button"
        className="
          self-end mt-auto inline-flex items-center
          rounded-[14px]
          px-3 py-1.5 text-[12px]
          sm:px-4 sm:py-2 sm:text-[13px]
          text-white hover:-translate-y-px active:translate-y-0 transition-transform
        "
        style={{
          backgroundImage: "linear-gradient(180deg,#FF3B5C 0%, #FF3B5C 100%)",
         
        }}
      >
        {cta}
      </button>
    </div>
  );
}

/* =============== Section =============== */
export default function Programs() {
  return (
    <div
      className="w-full overflow-visible"
      style={{ background: `linear-gradient(180deg, ${COLORS.bgTop} 0%, ${COLORS.bgBottom} 80%)` }}
    >
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 pt-8 md:pt-14 overflow-visible">
        <h2 className="text-center text-xl sm:text-2xl md:text-[28px] font-extrabold tracking-tight text-[#1D2126]">
          Programs
        </h2>

        <div
          className="
            mt-6 grid gap-y-8 gap-x-8
            grid-cols-1 md:grid-cols-3
            items-start justify-items-center
            overflow-visible
          "
        >
          {/* 1) Left only */}
          <ProgramCard
            leftRibs
            rightRibs={false}
            title={`1 to 1 Personal\nTraining`}
            blurb={
              "Private sessions in the gym. Cues tailored your leverages, leverages. Custom plan, weekly weekly check ins; and nutrition targets."
            }
            cta="Enquire on WhatsApp"
          />

          {/* 2) Both sides */}
          <ProgramCard
            leftRibs
            rightRibs
            title={`Online\nCoaching`}
            blurb={
              "Remote but personal. Periodised blocks, macro targets, video feedback, and a weekly check-in on WhatsApp."
            }
            cta="Start online"
          />

          {/* 3) Right only */}
          <ProgramCard
            leftRibs={false}
            rightRibs
            title={`Small Group\nTraining`}
            blurb={
              "Train 3 to 5 people, and similar level. Same Same attention with shared momentum. Great value. Great value per session."
            }
            cta="Reserve a spot"
          />
        </div>
      </section>
    </div>
  );
}

