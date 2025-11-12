// ContactSection.jsx + Footer.jsx — tuned to your theme
// Tailwind CSS required. Paste into your React project.

import React from "react";

/* ==================== THEME TOKENS ==================== */
const UI = {
  bg: "linear-gradient(180deg,#0f1216 0%,#121418 100%)",
  card: "#121316",
  cardElev: "#1A1C21",
  textDim: "rgba(255,255,255,0.72)",
  pink: "#FF3B5C",
  cyan: "#21E6D6",
  shadow: "0 20px 60px rgba(0,0,0,.45), 0 1px 0 rgba(255,255,255,.05) inset, 0 -1px 0 rgba(0,0,0,.45) inset",
};

/* ==================== REUSABLE MINI BARBELL ==================== */
function MiniBarbell() {
  const vbW = 200, vbH = 60, cy = vbH / 2;
  const gripW = 48, gripH = 16;
  const gripX = vbW / 2 - gripW / 2, gripY = cy - gripH / 2;
  const pw = 10, pmw = 8, pow = 6, clampw = 5;
  const phIn = 38, phMid = 28, phOut = 20, phClamp = 12;
  const gap = 8;

  const leftInX   = gripX - gap - pw;
  const leftMidX  = leftInX - 2 - pmw;
  const leftOutX  = leftMidX - 2 - pow;
  const leftClamp = leftOutX - 2 - clampw;

  const rightInX   = gripX + gripW + gap;
  const rightMidX  = rightInX + pw + 2;
  const rightOutX  = rightMidX + pmw + 2;
  const rightClamp = rightOutX + pow + 2;

  return (
    <svg viewBox={`0 0 ${vbW} ${vbH}`} width="150" height="28" className="block shrink-0" aria-hidden>
      <defs>
        <pattern id="knurlMini" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 6L6 0M0 0L6 6" stroke={UI.cyan} strokeWidth="1" />
        </pattern>
      </defs>

      {/* rod (never through plates) */}
      <g stroke="rgba(255,255,255,0.92)" strokeWidth="2.6">
        <line x1={leftInX + pw} y1={cy} x2={gripX} y2={cy} />
        <line x1={gripX + gripW} y1={cy} x2={rightInX} y2={cy} />
      </g>

      {/* grip */}
      <rect x={gripX} y={gripY} width={gripW} height={gripH}
            fill="url(#knurlMini)" stroke={UI.cyan} strokeWidth="3.2" />

      {/* left plates */}
      <g stroke={UI.cyan} strokeWidth="3.2" fill="rgba(33,230,214,.18)">
        <rect x={leftClamp} y={cy - phClamp/2} width={clampw} height={phClamp} />
        <rect x={leftOutX}  y={cy - phOut/2}   width={pow}    height={phOut} />
        <rect x={leftMidX}  y={cy - phMid/2}   width={pmw}    height={phMid} />
        <rect x={leftInX}   y={cy - phIn/2}    width={pw}     height={phIn} />
      </g>

      {/* right plates */}
      <g stroke={UI.cyan} strokeWidth="3.2" fill="rgba(33,230,214,.18)">
        <rect x={rightInX}   y={cy - phIn/2}    width={pw}     height={phIn} />
        <rect x={rightMidX}  y={cy - phMid/2}   width={pmw}    height={phMid} />
        <rect x={rightOutX}  y={cy - phOut/2}   width={pow}    height={phOut} />
        <rect x={rightClamp} y={cy - phClamp/2} width={clampw} height={phClamp} />
      </g>
    </svg>
  );
}

function BarbellDivider() {
  return (
    <div className="w-full flex items-center gap-3">
      <div className="min-w-0 flex-1 h-[2px] rounded-full"
           style={{ background: "linear-gradient(90deg, rgba(255,255,255,.12) 0%, rgba(33,230,214,.85) 95%)" }} />
      <MiniBarbell />
      <div className="min-w-0 flex-1 h-[2px] rounded-full"
           style={{ background: "linear-gradient(90deg, rgba(33,230,214,.85) 0%, rgba(255,255,255,.10) 40%, rgba(255,255,255,.06) 100%)" }} />
    </div>
  );
}

/* ==================== CONTACT SECTION ==================== */
export default function ContactSection() {
  // update numbers here
  const WHATSAPP_DISPLAY = "+91 8790 123 456";
  const waDigits = "918790123456";
  const waLink = `https://wa.me/${waDigits}?text=Hi%20HYD%20Training%20Lab%20—%20I%27d%20like%20to%20get%20started!`;
  const EMAIL = "hello@hydtraininglab.fit";

  return (
    <section id="contact" className="w-full px-5 md:px-6 lg:px-8 py-16 md:py-20" style={{ background: UI.bg }}>
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div className="text-center">
          <h2 className="text-white/95 font-extrabold tracking-tight text-[36px] sm:text-[48px] md:text-[56px] leading-[1.05]">
            Let’s build your best season
          </h2>
        </div>

        <div className="mt-6"><BarbellDivider /></div>

        {/* IMPORTANT: items-start keeps heights natural; left card will be only as tall as its content */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 items-start">
          {/* LEFT — INFO CARD (content height only) */}
          <div
            className="relative rounded-2xl p-6 md:p-7 self-start"
            style={{ background: UI.cardElev, boxShadow: UI.shadow }}
          >
            {/* soft accent */}
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-20 blur-xl"
                 style={{ background: "radial-gradient(60% 60% at 20% 0%, rgba(33,230,214,.25), transparent 60%)" }} />
            <div className="relative">
              <h3 className="text-white text-xl md:text-2xl font-extrabold">Talk to a coach</h3>
              <p className="mt-2 text-sm" style={{ color: UI.textDim }}>
                Mon–Sat, 7am–9pm IST. Hyderabad, Madhapur.
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-3 rounded-[14px] px-4 py-2.5 font-semibold text-white transition-transform hover:-translate-y-px"
                style={{
                  backgroundImage: "linear-gradient(180deg,#12d9c9 0%,#0fb3ac 100%)",
                  boxShadow: "0 10px 24px rgba(33,230,214,.25)",
                }}
              >
                {/* WA glyph */}
                <span className="grid place-items-center h-6 w-6 rounded-full bg-black/20 ring-1 ring-white/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.7 9.7 0 0 0 4.98-1.39l.35-.2 3.12.82-.84-3.04.22-.36A9.7 9.7 0 0 0 21.8 12 9.8 9.8 0 0 0 12 2.2Z" opacity=".9"/>
                  </svg>
                </span>
                <span>WhatsApp: <span className="font-bold">{WHATSAPP_DISPLAY}</span></span>
              </a>

              <div className="mt-6 space-y-3 text-sm">
                <p className="text-white">
                  Email:{" "}
                  <a href={`mailto:${EMAIL}`} className="underline decoration-dotted decoration-white/40 hover:text-cyan-300">
                    {EMAIL}
                  </a>
                </p>
                <p style={{ color: UI.textDim }}>
                  Studio: Plot 12, Kavuri Hills, Madhapur, Hyderabad
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — QUICK MAILTO FORM */}
          <ContactForm email={EMAIL} />
        </div>
      </div>
    </section>
  );
}

function ContactForm({ email }) {
  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = encodeURIComponent(fd.get("name") || "");
    const from = encodeURIComponent(fd.get("email") || "");
    const msg  = encodeURIComponent(fd.get("message") || "");
    const subject = `HYD Training Lab — Enquiry from ${name || "Website"}`;
    const body = `Name: ${name}\nEmail: ${from}\n\n${msg}`;
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit}
          className="rounded-2xl p-6 md:p-7 backdrop-blur"
          style={{ background: UI.card, boxShadow: UI.shadow }}>
      <h3 className="text-white text-xl md:text-2xl font-extrabold">Quick note</h3>
      <p className="mt-2 text-sm" style={{ color: UI.textDim }}>
        Tell us your goals and preferred session times. We’ll reply with options.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="block">
          <span className="text-xs text-white/70">Your name</span>
          <input name="name" required placeholder="Ravi Kumar"
                 className="mt-1 w-full rounded-xl bg-[#0E1013] px-3 py-2.5 text-white placeholder-white/30 outline-none ring-1 ring-white/5 focus:ring-2 focus:ring-cyan-400/60" />
        </label>
        <label className="block">
          <span className="text-xs text-white/70">Email</span>
          <input type="email" name="email" required placeholder="you@example.com"
                 className="mt-1 w-full rounded-xl bg-[#0E1013] px-3 py-2.5 text-white placeholder-white/30 outline-none ring-1 ring-white/5 focus:ring-2 focus:ring-cyan-400/60" />
        </label>
        <label className="block">
          <span className="text-xs text-white/70">Message</span>
          <textarea name="message" rows={5}
                    placeholder="I’m interested in 3 sessions/week. Evenings are best…"
                    className="mt-1 w-full rounded-xl bg-[#0E1013] px-3 py-2.5 text-white placeholder-white/30 outline-none ring-1 ring-white/5 focus:ring-2 focus:ring-cyan-400/60 resize-none" />
        </label>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center rounded-[14px] px-4 py-2.5 font-semibold text-white transition-transform hover:-translate-y-px"
          style={{ backgroundImage: "linear-gradient(180deg,#F21390 0%,#E7478A 100%)", boxShadow: "0 10px 24px rgba(242,19,144,.28)" }}>
          Send
        </button>
        <span className="text-xs" style={{ color: UI.textDim }}>
          or WhatsApp us directly — <span className="text-white/90 font-semibold">+91 8790 123 456</span>
        </span>
      </div>
    </form>
  );
}

