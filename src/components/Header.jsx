// src/components/Header.jsx
// Sticky, glassy navigation for HYD Training Lab theme
// Tailwind CSS required

import React from "react";

/* ---- Theme tokens (match the rest of the site) ---- */
const UI = {
  bgGlass:
    "linear-gradient(180deg, rgba(15,18,22,.75) 0%, rgba(18,20,24,.65) 100%)",
  ring: "rgba(255,255,255,.08)",
  cyan: "#21E6D6",
  pink: "#FF3B5C",
  textDim: "rgba(255,255,255,.70)",
};

/* Small barbell logo glyph */
function LogoMark({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 100 36" className={className} aria-hidden>
      <g fill="none" stroke={UI.cyan} strokeWidth="4" strokeLinejoin="miter">
        {/* left plates */}
        <rect x="2" y="10" width="6" height="16" />
        <rect x="10" y="7" width="8" height="22" />
        <rect x="20" y="4" width="8" height="28" />
        {/* rod gap */}
        <line x1="30" y1="18" x2="70" y2="18" stroke="rgba(255,255,255,.9)" />
        {/* right plates */}
        <rect x="72" y="4" width="8" height="28" />
        <rect x="82" y="7" width="8" height="22" />
        <rect x="92" y="10" width="6" height="16" />
      </g>
    </svg>
  );
}

/* Smooth scroll to an anchor id, accounting for header height */
function scrollToId(id) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  const headerOffset = 84;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "The Space", href: "#space" },
  { label: "Progress", href: "#progress" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState("#");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section highlight on scroll (simple observer)
  React.useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.href.slice(1))).filter(Boolean);
    if (!("IntersectionObserver" in window) || !sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive("#" + visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,.30)]" : ""
      }`}
      style={{
        background: UI.bgGlass,
        borderBottom: `1px solid ${UI.ring}`,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Left: Brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <LogoMark className="h-5 w-16" />
          <div className="leading-tight">
            <div className="text-white font-extrabold tracking-tight text-sm sm:text-base">
              HYD Training Lab
            </div>
            <div className="text-[10px] text-white/60 -mt-0.5">Strength • Coaching</div>
          </div>
        </a>

        {/* Center: Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition
                ${active === item.href ? "text-white" : "text-white/70 hover:text-white"}
              `}
            >
              <span
                className={`relative after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:transition-all
                ${active === item.href ? "after:w-full after:bg-[rgba(33,230,214,.9)]" : "after:w-0 after:bg-white/0 group-hover:after:w-full"}`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Right: CTA & Burger */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/918790123456?text=Hi%20HYD%20Training%20Lab%20—%20I%27d%20like%20to%20get%20started!"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center rounded-[14px] px-3.5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-px"
            style={{
              backgroundImage: "linear-gradient(180deg,#12d9c9 0%,#0fb3ac 100%)",
              boxShadow: "0 10px 22px rgba(33,230,214,.25)",
            }}
          >
            WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1"
            style={{ color: "white", background: "rgba(255,255,255,.04)", borderColor: UI.ring }}
            aria-label="Open menu"
            aria-expanded={open}
          >
            {/* burger / close */}
            {!open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[360px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={go(item.href)}
              className="block rounded-xl px-3 py-3 text-white/90 hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/918790123456?text=Hi%20HYD%20Training%20Lab%20—%20I%27d%20like%20to%20get%20started!"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center rounded-[14px] px-3.5 py-2.5 text-sm font-semibold text-white"
            style={{
              backgroundImage: "linear-gradient(180deg,#F21390 0%,#E7478A 100%)",
              boxShadow: "0 10px 22px rgba(242,19,144,.28)",
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
