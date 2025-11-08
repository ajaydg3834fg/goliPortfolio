// FaqSection.jsx — FAQ with full-width divider (lines fill up to content), mini barbell centered.
// TailwindCSS required.
import React from "react";

const UI = {
  bg: "linear-gradient(180deg,#0f1216 0%,#121418 100%)",
  card: "#1A1C21",
  textDim: "rgba(255,255,255,0.72)",
  edgeLight: "rgba(255,255,255,0.05)",
  edgeDark: "rgba(0,0,0,0.40)",
  pink: "#FF3B5C",
  cyan: "#21E6D6",
  plateFill: "rgba(33,230,214,0.18)",
};

const QA = [
  {
    q: "How much is personal training in Hyderabad",
    a: "Most clients choose 3 to 5 sessions per week with a tailored plan, nutrition targets, and weekly check-ins.",
  },
  { q: "How much is personal trainnnbad", a: "Most clients choose 3 to 5 sessions per week." },
  { q: "Most clients choose 3 to 5 sessions for week.", a: "Muted: #4148B13" },
  { q: "How much is personal training", a: "Pricing depends on weekly session volume and commitment. Message us for an exact quote." },
];

/* --- compact, center-anchored mini barbell (plates always visible) --- */
function MiniBarbell() {
  const vbW = 200, vbH = 60;
  const cy = vbH / 2;

  // centered grip
  const gripW = 48, gripH = 16;
  const gripX = vbW / 2 - gripW / 2, gripY = cy - gripH / 2;

  // plate geometry (same widths, different heights -> plate look)
  const pw = 10, pmw = 8, pow = 6, clampw = 5;
  const phIn = 38, phMid = 28, phOut = 20, phClamp = 12;
  const gap = 8; // gap between inner plate and grip

  // left stack x-positions (inner is closest to grip)
  const leftInX   = gripX - gap - pw;
  const leftMidX  = leftInX - 2 - pmw;
  const leftOutX  = leftMidX - 2 - pow;
  const leftClamp = leftOutX - 2 - clampw;

  // right stack x-positions (mirror)
  const rightInX   = gripX + gripW + gap;
  const rightMidX  = rightInX + pw + 2;
  const rightOutX  = rightMidX + pmw + 2;
  const rightClamp = rightOutX + pow + 2;

  return (
    <svg viewBox={`0 0 ${vbW} ${vbH}`} width="150" height="28"
         className="block shrink-0" aria-hidden role="img"
         style={{ overflow: "visible", isolation: "isolate" }}>
      <defs>
        <pattern id="knurlMini" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6L6 0M0 0L6 6" stroke="#21E6D6" strokeWidth="1" />
        </pattern>
      </defs>

      {/* rod segments: inner plate ↔ grip (never through plates) */}
      <g stroke="rgba(255,255,255,0.92)" strokeWidth="2.6">
        <line x1={leftInX + pw}  y1={cy} x2={gripX}        y2={cy} />
        <line x1={gripX + gripW} y1={cy} x2={rightInX}     y2={cy} />
      </g>

      {/* grip */}
      <rect x={gripX} y={gripY} width={gripW} height={gripH}
            fill="url(#knurlMini)" stroke="#21E6D6" strokeWidth="3.2" />

      {/* left plates (outer → inner toward the grip) */}
      <g stroke="#21E6D6" strokeWidth="3.2" fill="rgba(33,230,214,.18)">
        <rect x={leftClamp} y={cy - phClamp/2} width={clampw} height={phClamp} />
        <rect x={leftOutX}  y={cy - phOut/2}   width={pow}    height={phOut} />
        <rect x={leftMidX}  y={cy - phMid/2}   width={pmw}    height={phMid} />
        <rect x={leftInX}   y={cy - phIn/2}    width={pw}     height={phIn} />
      </g>

      {/* right plates (inner → outer away from the grip) */}
      <g stroke="#21E6D6" strokeWidth="3.2" fill="rgba(33,230,214,.18)">
        <rect x={rightInX}   y={cy - phIn/2}    width={pw}     height={phIn} />
        <rect x={rightMidX}  y={cy - phMid/2}   width={pmw}    height={phMid} />
        <rect x={rightOutX}  y={cy - phOut/2}   width={pow}    height={phOut} />
        <rect x={rightClamp} y={cy - phClamp/2} width={clampw} height={phClamp} />
      </g>
    </svg>
  );
}

/* --- full-width divider: lines grow to container edges --- */
function BarbellDivider() {
  return (
    <div className="w-full flex items-center gap-3">
      <div
        className="min-w-0 flex-1 h-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,.12) 0%, rgba(33,230,214,.85) 95%)",
        }}
      />
      <MiniBarbell />
      <div
        className="min-w-0 flex-1 h-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(33,230,214,.85) 0%, rgba(255,255,255,.10) 40%, rgba(255,255,255,.06) 100%)",
        }}
      />
    </div>
  );
}


function Plus({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24"
         className="text-cyan-300/90 transition-transform duration-200"
         style={{ transform: open ? "rotate(45deg)" : "none" }} aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function FaqItem({ q, a, open, onToggle, i }) {
  return (
    <div
      className="rounded-3xl px-6 py-5 md:px-7 md:py-6"
      style={{
        background: UI.card,
        boxShadow: `0 18px 55px rgba(0,0,0,.38), 0 1px 0 ${UI.edgeLight} inset, 0 -1px 0 ${UI.edgeDark} inset`,
      }}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4"
        aria-expanded={open}
        aria-controls={`faq-panel-${i}`}
        onClick={onToggle}
      >
        <h3 className="text-white text-lg md:text-xl font-extrabold leading-snug">{q}</h3>
        <Plus open={open} />
      </button>

      <div
        id={`faq-panel-${i}`}
        className="overflow-hidden transition-[grid-template-rows,opacity] duration-300 grid"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="min-h-0">
          <p className="pt-3 text-[15px] leading-relaxed" style={{ color: UI.textDim }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="w-full px-5 md:px-6 lg:px-8 py-10 md:py-14" style={{ background: UI.bg }}>
      <div className="mx-auto max-w-5xl">
        {/* Heading + full-width divider */}
        <div className="mb-5 md:mb-6">
          <h2 className="text-white/95 font-extrabold tracking-tight leading-[1.05] text-[34px] sm:text-[44px] md:text-[56px]">
            Frequently&nbsp; Asked<br />Questions
          </h2>

          <div className="mt-4">
            <div className="text-[22px] font-black tracking-wide" style={{ color: UI.pink }}>
              FAQ
            </div>
            <div className="mt-3">
              <BarbellDivider />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-5 md:space-y-6">
          {QA.map((item, i) => (
            <FaqItem
              key={i}
              i={i}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
