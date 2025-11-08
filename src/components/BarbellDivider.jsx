import React from "react";

export default function BarbellDivider({ className = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="h-px w-full bg-border" />
      <div className="absolute inset-x-0 -top-[7px] mx-auto flex w-full max-w-sm items-center justify-center gap-2">
        <span className="h-3 w-3 rounded-full bg-cyan" />
        {/* knurl pattern uses the CSS token directly */}
        <div className="h-[2px] w-40 bg-[repeating-linear-gradient(90deg,var(--color-border)_0,transparent_6px)]" />
        <span className="h-3 w-3 rounded-full bg-cyan" />
      </div>
    </div>
  );
}
