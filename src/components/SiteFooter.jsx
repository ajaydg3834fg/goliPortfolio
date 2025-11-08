// src/components/Footer.jsx
import React from "react";

/* Theme tokens */
const UI = {
  bg: "linear-gradient(180deg,#0f1216 0%,#121418 100%)",
  card: "#121316",
  textDim: "rgba(255,255,255,0.72)",
  cyan: "#21E6D6",
  shadow:
    "0 20px 60px rgba(0,0,0,.45), 0 1px 0 rgba(255,255,255,.05) inset, 0 -1px 0 rgba(0,0,0,.45) inset",
};

/* --- compact mini barbell + divider (local to footer for zero deps) --- */
function MiniBarbell() {
  const vbW = 200,
    vbH = 60;
  const cy = vbH / 2;
  const gripW = 48,
    gripH = 16;
  const gripX = vbW / 2 - gripW / 2,
    gripY = cy - gripH / 2;
  const pw = 10,
    pmw = 8,
    pow = 6,
    clampw = 5;
  const phIn = 38,
    phMid = 28,
    phOut = 20,
    phClamp = 12;
  const gap = 8;

  const leftInX = gripX - gap - pw;
  const leftMidX = leftInX - 2 - pmw;
  const leftOutX = leftMidX - 2 - pow;
  const leftClamp = leftOutX - 2 - clampw;

  const rightInX = gripX + gripW + gap;
  const rightMidX = rightInX + pw + 2;
  const rightOutX = rightMidX + pmw + 2;
  const rightClamp = rightOutX + pow + 2;

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      width="150"
      height="28"
      className="block shrink-0"
      aria-hidden
    >
      <defs>
        <pattern id="knurlMiniFooter" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6L6 0M0 0L6 6" stroke={UI.cyan} strokeWidth="1" />
        </pattern>
      </defs>

      {/* rod between inner plates and grip only */}
      <g stroke="rgba(255,255,255,0.92)" strokeWidth="2.6">
        <line x1={leftInX + pw} y1={cy} x2={gripX} y2={cy} />
        <line x1={gripX + gripW} y1={cy} x2={rightInX} y2={cy} />
      </g>

      {/* grip */}
      <rect
        x={gripX}
        y={gripY}
        width={gripW}
        height={gripH}
        fill="url(#knurlMiniFooter)"
        stroke={UI.cyan}
        strokeWidth="3.2"
      />

      {/* left plates */}
      <g stroke={UI.cyan} strokeWidth="3.2" fill="rgba(33,230,214,.18)">
        <rect x={leftClamp} y={cy - phClamp / 2} width={clampw} height={phClamp} />
        <rect x={leftOutX} y={cy - phOut / 2} width={pow} height={phOut} />
        <rect x={leftMidX} y={cy - phMid / 2} width={pmw} height={phMid} />
        <rect x={leftInX} y={cy - phIn / 2} width={pw} height={phIn} />
      </g>

      {/* right plates */}
      <g stroke={UI.cyan} strokeWidth="3.2" fill="rgba(33,230,214,.18)">
        <rect x={rightInX} y={cy - phIn / 2} width={pw} height={phIn} />
        <rect x={rightMidX} y={cy - phMid / 2} width={pmw} height={phMid} />
        <rect x={rightOutX} y={cy - phOut / 2} width={pow} height={phOut} />
        <rect x={rightClamp} y={cy - phClamp / 2} width={clampw} height={phClamp} />
      </g>
    </svg>
  );
}

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

/* --------------------- Footer --------------------- */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: UI.bg }} className="w-full pt-12">
      <div className="mx-auto max-w-6xl px-5 md:px-6 lg:px-8">
        <BarbellDivider />

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div>
            <h4 className="text-white font-extrabold text-xl">HYD Training Lab</h4>
            <p className="mt-3 text-sm" style={{ color: UI.textDim }}>
              Strength coaching, smart nutrition, and measurable progress.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-6 text-sm">
            <ul className="space-y-2">
              <li><a className="text-white/80 hover:text-white" href="#programs">Programs</a></li>
              <li><a className="text-white/80 hover:text-white" href="#space">The Space</a></li>
              <li><a className="text-white/80 hover:text-white" href="#progress">Progress</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a className="text-white/80 hover:text-white" href="#pricing">Pricing</a></li>
              <li><a className="text-white/80 hover:text-white" href="#faq">FAQ</a></li>
              <li><a className="text-white/80 hover:text-white" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="rounded-2xl p-5" style={{ background: UI.card, boxShadow: UI.shadow }}>
            <p className="text-sm" style={{ color: UI.textDim }}>
              Studio: Plot 12, Kavuri Hills, Madhapur, Hyderabad
            </p>
            <p className="mt-2 text-sm text-white/90">WhatsApp: +91 8790 123 456</p>
            <p className="mt-1 text-sm text-white/90">Email: hello@hydtraininglab.fit</p>
          </div>
        </div>

        <div className="mt-10 mb-6">
          <div className="h-[1px] w-full rounded-full bg-white/10" />
        </div>

        <div
          className="pb-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: UI.textDim }}
        >
          <span>© {year} HYD Training Lab. All rights reserved.</span>
          <span className="text-white/80">
            Designed &amp; Developed by <span className="font-semibold">Ajay</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
