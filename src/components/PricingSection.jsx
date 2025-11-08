// PricingSection.jsx — Bar between plates only (no rod inside plates)
// TailwindCSS required

import React from "react";

const UI = {
  card: "#1A1C21",
  cardEdge: "rgba(255,255,255,0.04)",
  insetBorder: "rgba(0,0,0,0.35)",
  text: "#FFFFFF",
  textDim: "rgba(255,255,255,0.72)",
  cyan: "#21E6D6",
};

/** Flat barbell with plates; rod is hidden inside plates and visible only
 *  between the inner plates and the center knurled grip. */
function BarbellClean() {
  // Plate geometry (square corners)
  const leftOuter  = { x: 32,  y: 26, w: 8,  h: 12 };
  const leftMid    = { x: 44,  y: 20, w: 10, h: 24 };
  const leftInner  = { x: 58,  y: 10, w: 12, h: 44 }; // closest to center

  const rightInner = { x: 194, y: 10, w: 12, h: 44 }; // closest to center
  const rightMid   = { x: 208, y: 20, w: 10, h: 24 };
  const rightOuter = { x: 220, y: 26, w: 8,  h: 12 };

  // Center knurled grip (flat-ended)
  const grip = { x: 96, y: 18, w: 68, h: 24 }; // left=96, right=164
  const barY = 30;

  // Rod segments: from inner plate edge -> grip edge (no overlap into plates)
  const leftBar  = { x1: leftInner.x + leftInner.w, x2: grip.x };           // 70 → 96
  const rightBar = { x1: grip.x + grip.w, x2: rightInner.x };               // 164 → 194

  return (
    <svg
      viewBox="0 0 260 60"
      width="210"
      height="48"
      className="mx-auto block"
      aria-hidden="true"
      shapeRendering="crispEdges"
      style={{ filter: "drop-shadow(0 6px 14px rgba(33,230,214,0.35))" }}
    >
      <defs>
        {/* cross-hatch knurl */}
        <pattern id="knurl" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6L6 0M0 0L6 6" stroke={UI.cyan} strokeWidth="1" />
        </pattern>
      </defs>

      {/* Rod segments (only between inner plates and grip) */}
      <line x1={leftBar.x1}  y1={barY} x2={leftBar.x2}  y2={barY} stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="butt" />
      <line x1={rightBar.x1} y1={barY} x2={rightBar.x2} y2={barY} stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="butt" />

      {/* Knurled center grip (flat rectangle) */}
      <rect x={grip.x} y={grip.y} width={grip.w} height={grip.h} stroke={UI.cyan} strokeWidth="3" fill="url(#knurl)" />

      {/* Plates — flat rectangles, sharp edges */}
      <g stroke={UI.cyan} strokeWidth="3" strokeLinejoin="miter" strokeLinecap="butt" fill="none">
        {/* left stack (outer → inner) */}
        <rect x={leftOuter.x}  y={leftOuter.y}  width={leftOuter.w}  height={leftOuter.h} />
        <rect x={leftMid.x}    y={leftMid.y}    width={leftMid.w}    height={leftMid.h} />
        <rect x={leftInner.x}  y={leftInner.y}  width={leftInner.w}  height={leftInner.h} />

        {/* right stack (inner → outer) */}
        <rect x={rightInner.x} y={rightInner.y} width={rightInner.w} height={rightInner.h} />
        <rect x={rightMid.x}   y={rightMid.y}   width={rightMid.w}   height={rightMid.h} />
        <rect x={rightOuter.x} y={rightOuter.y} width={rightOuter.w} height={rightOuter.h} />
      </g>
    </svg>
  );
}

function PlanRow({ title, rightHint, price, highlight = false }) {
  return (
    <div
      className="rounded-[26px] px-6 py-5 md:px-8 md:py-7"
      style={{
        background: UI.card,
        boxShadow:
          "0 18px 50px rgba(0,0,0,0.35), 0 1px 0 " +
          UI.cardEdge +
          " inset, 0 -1px 0 " +
          UI.insetBorder +
          " inset",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="text-white font-extrabold text-xl">{title}</div>
        <div className="text-sm md:text-base" style={{ color: UI.textDim }}>
          {rightHint}
        </div>
      </div>

      {highlight && (
        <div className="mt-3 md:mt-4">
          <BarbellClean />
        </div>
      )}

      <div className="mt-3 md:mt-4 text-center text-lg md:text-xl font-semibold" style={{ color: UI.text }}>
        {price}
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full px-5 md:px-6 lg:px-8 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <div className="text-[#BFC2C7] font-black tracking-widest text-lg">H2</div>
          <h2 className="mt-1 text-3xl md:text-4xl font-extrabold tracking-tight text-white/95">
            Clear and flexible
          </h2>
        </div>

        <div className="space-y-5 md:space-y-6">
          <PlanRow title="Starter" rightHint="sessions per week" price="₹X per month" />
          <PlanRow title="Builder" rightHint="sessions per week" price="₹X per month" />
          <PlanRow title="Elite" rightHint="" price="₹X per month" highlight />
          <PlanRow title="Online:" rightHint="monthly coaching" price="₹X per month" />
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          Every plan includes your split, nutrition targets, and weekly check ins
        </p>
      </div>
    </section>
  );
}
