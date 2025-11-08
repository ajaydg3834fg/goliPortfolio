import React from "react";

/**
 * Premium SVG plate counter (Tailwind v4 friendly)
 * Props:
 *  - size: outer diameter in px (default 140)
 *  - ringWidth: pink ring stroke width (default 8)
 *  - ringInset: distance from outer plate edge to the center of the pink ring (default 18)
 *               ↑ Increase this to make the pink ring smaller (tighter to the center).
 *  - tickCount: number of outer ticks (default 12)
 *  - tickLen: tick length (default 10)
 *  - progress: 0..1 (1 = full pink circle)
 */
export default function PlateCounter({
  value,
  label,
  size = 140,
  ringWidth = 8,
  ringInset = 18,     // <— new control
  tickCount = 12,
  tickLen = 10,
  progress = 1,
}) {
  const s = size;
  const c = s / 2;
  const rPlate = c - 6;                 // outer plate radius
  const rRing  = rPlate - ringInset;    // inner/pink ring radius (smaller when ringInset increases)
  const C      = 2 * Math.PI * rRing;
  const dash   = Math.max(0, Math.min(1, progress)) * C;

  return (
    <div
      className="relative grid place-items-center rounded-full shadow-[0_8px_24px_rgba(0,0,0,.35)]"
      style={{
        width: s,
        height: s,
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} className="absolute inset-0">
        {/* outer plate ring */}
        <circle cx={c} cy={c} r={rPlate} fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />
        {/* subtle inner bevel */}
        <circle cx={c} cy={c} r={rPlate-4} fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />

        {/* ticks (outside of the pink ring) */}
        <g stroke="var(--color-border)" strokeWidth="2" opacity=".7">
          {Array.from({ length: tickCount }).map((_, i) => {
            const a = (i / tickCount) * Math.PI * 2;
            const r1 = rPlate - 6;
            const r2 = r1 - tickLen;
            const x1 = c + r1 * Math.cos(a);
            const y1 = c + r1 * Math.sin(a);
            const x2 = c + r2 * Math.cos(a);
            const y2 = c + r2 * Math.sin(a);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* track under the pink ring */}
        <circle cx={c} cy={c} r={rRing} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth={ringWidth} />

        {/* pink ring */}
        <circle
          cx={c}
          cy={c}
          r={rRing}
          fill="none"
          stroke="var(--color-crimson)"
          strokeWidth={ringWidth}
          strokeDasharray={`${dash} ${C - dash}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${c} ${c})`}
        />
      </svg>

      {/* value + label */}
      <span className="relative z-10 text-lg font-extrabold text-text">{value}</span>
      <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-9 text-[10px] font-semibold tracking-wide text-muted uppercase">
        {label}
      </span>
    </div>
  );
}
