// Glyphes de navigation : famille « synapse » (trait 1.4, arrondis,
// pastille focale). Mobile : icône seule ; desktop : icône + libellé.

type GlyphProps = { size?: number; className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Accent({ cx, cy, r = 1.5 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="currentColor" stroke="none" />;
}

export function NavVision({ size = 20, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 2" />
      <Accent cx={12} cy={12} r={1.2} />
    </svg>
  );
}

export function NavIndice({ size = 20, className }: GlyphProps) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return { x: 12 + 7.4 * Math.cos(a), y: 12 + 7.4 * Math.sin(a) };
  });
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <polygon points={pts.map((p) => `${p.x},${p.y}`).join(" ")} />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.4" />
      ))}
      <Accent cx={12} cy={12} r={1.2} />
    </svg>
  );
}

export function NavPortrait({ size = 20, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M6.5 3.8h11a1.2 1.2 0 0 1 1.2 1.2v13.6a1.2 1.2 0 0 1-1.2 1.2h-11a1.2 1.2 0 0 1-1.2-1.2V5a1.2 1.2 0 0 1 1.2-1.2z" />
      <path d="M8.6 8h6.8M8.6 11.4h6.8M8.6 14.8h4.2" />
      <Accent cx={16.2} cy={15.4} r={1.1} />
    </svg>
  );
}

export function NavMethode({ size = 20, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M5 4.5h9.6L19 8.9V19a1.2 1.2 0 0 1-1.2 1.2H5A1.2 1.2 0 0 1 3.8 19V5.7A1.2 1.2 0 0 1 5 4.5z" />
      <path d="M14.4 4.6v4.4H19" />
      <path d="M7.2 12.6h9M7.2 15.8h5.6" />
      <Accent cx={16.8} cy={16.6} r={1.1} />
    </svg>
  );
}

export function NavCharte({ size = 20, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M12 3.4 5 6v5.2c0 4.4 3 8.2 7 9.4 4-1.2 7-5 7-9.4V6z" />
      <path d="m8.8 12 2.4 2.4 4-4.4" />
    </svg>
  );
}

export function NavManifeste({ size = 20 }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} aria-hidden="true">
      <path d="M2.8 12c2.9-4.4 6-6.6 9.2-6.6s6.3 2.2 9.2 6.6c-2.9 4.4-6 6.6-9.2 6.6S5.7 16.4 2.8 12z" />
      <circle cx="12" cy="12" r="2.6" />
      <Accent cx={12} cy={12} r={1.1} />
    </svg>
  );
}
