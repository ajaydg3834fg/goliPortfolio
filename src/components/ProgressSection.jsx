// ProgressSection.jsx
import React from "react";
import image1 from "../Images/image1.png"
import image2 from "../Images/image2.png"
import image3 from "../Images/image3.png"
import image4 from "../Images/image4.png"
import image5 from "../Images/image5.png"
import image6 from "../Images/image6.png"
import image7 from "../Images/image7.png"
import image8 from "../Images/image8.png"



const UI = {
  bg: "#E7E8EA",
  card: "#121316",
  text: "rgba(255,255,255,0.86)",
  textDim: "rgba(255,255,255,0.68)",
  accentPink: "#FF3B5C",
  accentCyan: "#1FE5FF",
};

function ChevronDuo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProgressCard({ title, imgLeft, imgRight, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left"
      style={{ outline: "none" }}
    >
      <div
        className="rounded-2xl overflow-hidden bg-[#121316] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
        style={{
          boxShadow:
            "0 18px 50px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.35) inset",
        }}
      >
        {/* Image header */}
        <div className="grid grid-cols-2 gap-2 p-3">
          {/* Left image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={imgLeft}
              alt=""
              className="block w-full h-[260px] sm:h-[270px] md:h-[280px] object-cover"
              loading="lazy"
            />
            {/* Left neon seam (pink), tucked at the very left */}
            <span
              className="absolute left-1 top-2 bottom-2 w-[4px] rounded-full opacity-90"
              style={{ background: UI.accentPink }}
              aria-hidden="true"
            />
          </div>

          {/* Right image */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={imgRight}
              alt=""
              className="block w-full h-[260px] sm:h-[270px] md:h-[280px] object-cover"
              loading="lazy"
            />
            {/* Right neon seam (cyan), tucked at the very right */}
            <span
              className="absolute right-1 top-2 bottom-2 w-[4px] rounded-full opacity-95"
              style={{ background: UI.accentCyan }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Caption row */}
        <div className="flex items-end justify-between px-4 pb-4 pt-1">
          <p className="pr-4 text-[14px] leading-snug" style={{ color: UI.text }}>
            {title}
          </p>
          <ChevronDuo className="text-white/60 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </button>
  );
}

export default function ProgressSection() {
  const items = [
    {
      title: "Stronger posture and better shoulder health",
      left: image1,
      right: image2,
    },
    {
      title: "Visible recomposition in 12 weeks",
      left: image3,
      right: image4,
    },
    {
      title: "First pull up for beginners",
      left:image5,
      right: image6,
    },
    {
      title: "Confident stage presence for competitors",
      left: image7,
      right: image8,
    },
  ];

  return (
    <section className="w-full px-5 md:px-6 lg:px-8 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Progress you can measure
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <ProgressCard
              key={i}
              title={it.title}
              imgLeft={it.left}
              imgRight={it.right}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


