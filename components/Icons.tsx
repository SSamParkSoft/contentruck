type IconProps = { name: string };

export function Icon({ name }: IconProps) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "target")
    return (
      <svg {...common}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m15 9 5-5m0 0v4m0-4h-4" /></svg>
    );
  if (name === "spark")
    return (
      <svg {...common}><path d="m12 3 1.3 4.2a5 5 0 0 0 3.4 3.4L21 12l-4.3 1.4a5 5 0 0 0-3.4 3.4L12 21l-1.3-4.2a5 5 0 0 0-3.4-3.4L3 12l4.3-1.4a5 5 0 0 0 3.4-3.4L12 3Z" /></svg>
    );
  if (name === "bolt")
    return (
      <svg {...common}><path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" /></svg>
    );
  return (
    <svg {...common}><path d="M20 7h-5V2" /><path d="M4 17h5v5" /><path d="M19 12a7 7 0 0 0-12-5L4 10" /><path d="M5 12a7 7 0 0 0 12 5l3-3" /></svg>
  );
}

export function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9h10.5M10 4.75 14.25 9 10 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
