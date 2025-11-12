// SpaceSection.jsx
import React from "react";
import imgTop from "../Images/imgTop.jpg"
import imgBottom from "../Images/imgBottom.jpg"

const COLORS = {
  panel: "#E7E8EA",
  accent: "#F21390",
  textDim: "rgba(0,0,0,0.65)",
};

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      {/* Ring + dot bullet, like the reference */}
      <span className="mt-[2px] inline-flex h-4 w-4 shrink-0" aria-hidden="true">
       <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-crimson"
    >
      <path d="M8 7a4 4 0 1 1 8 0v1h-2V7a2 2 0 1 0-4 0v1H8V7z" />
      <rect x="5" y="9" width="14" height="11" rx="5" />
    </svg>
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}
export default function SpaceSection({
  title = "The space",
  blurb = "The largest performance facility in Madhapur...",
  bullets = [
    "Squat racks, benches, calibrated plates",
    "Cable stacks and calibrated plates",
    "Cable stacks and plate loaded machines",
    "Dumbbells up to 50 kg",
    "Scheduled PT hours to avoid crowding",
  ],
  ctaText = "See timings and location",
  onCta = () => {},
  // imgTop = "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop",
  // imgBottom = "https://images.unsplash.com/photo-1571907480495-3c4e4b597a17?q=80&w=1600&auto=format&fit=crop",
}) {
  const panelRef = React.useRef(null);
  const [panelH, setPanelH] = React.useState(null);

  // Measure the left panel's content height and lock the right images to it
  React.useLayoutEffect(() => {
    if (!panelRef.current) return;
    const ro = new ResizeObserver(() => {
      const h = panelRef.current.getBoundingClientRect().height;
      setPanelH(Math.round(h));
    });
    ro.observe(panelRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="w-full px-5 md:px-6 lg:px-8 py-10 md:py-14">
      <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-2 items-start">
        {/* Left panel — height = content only */}
        <div
          ref={panelRef}
          className="rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8"
          style={{
            background: COLORS.panel,
            boxShadow:
              "0 16px 40px rgba(0,0,0,0.10), 0 1px 0 rgba(255,255,255,0.4) inset, 0 -1px 0 rgba(0,0,0,0.06) inset",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D2126]">
            {title}
          </h2>

          <p className="mt-3 text-base sm:text-[15px]" style={{ color: COLORS.textDim }}>
            {blurb}
          </p>

          <ul className="mt-6 space-y-3 text-[15px]" style={{ color: COLORS.textDim }}>
            {bullets.map((x, i) => (
              <Bullet key={i}>{x}</Bullet>
            ))}
          </ul>

          <button
            onClick={onCta}
            className="mt-6 inline-flex items-center rounded-md border px-4 py-2 text-sm font-semibold transition"
            style={{
              color: "#0F172A",
              borderColor: "rgba(0,0,0,0.12)",
              background:
                "linear-gradient(#fff,#fff) padding-box, linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0)) border-box",
            }}
          >
            {ctaText}
          </button>
        </div>

        {/* Right: two images that fit exactly the left panel's height */}
        <div
          className="rounded-xl md:rounded-2xl"
          style={{
            // Lock total height to left panel (fallback to auto until measured)
            height: panelH ? `${panelH}px` : "auto",
          }}
        >
          <div className="grid h-full grid-rows-2 gap-4 sm:gap-5">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              <img
                src={imgTop}
                alt=""
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
              <img
                src={imgBottom}
                alt=""
                className="block h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

