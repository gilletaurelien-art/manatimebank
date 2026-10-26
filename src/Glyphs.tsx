// Glyphes SVG inline — zéro dépendance, zéro requête réseau.
// Style « synapse » : trait 1.4, arrondis généreux, pastille focale or.
// Adaptés au vocabulaire timebank : temps, six dimensions, portrait,
// méthode, sources.

type GlyphProps = { size?: number; className?: string };

const base = {
  width: 44,
  height: 44,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Accent({ cx, cy, r = 1.6 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="currentColor" stroke="none" />;
}

// Le temps : cadran épuré, aiguille unique, pastille focale.
export function GlyphTemps({ size = 44, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 2" />
      <Accent cx={12} cy={12} r={1.2} />
    </svg>
  );
}

// L'indice : six dimensions autour d'un centre — profil, pas score.
export function GlyphIndice({ size = 44, className }: GlyphProps) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return { x: 12 + 7.4 * Math.cos(a), y: 12 + 7.4 * Math.sin(a) };
  });
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <polygon points={pts.map((p) => `${p.x},${p.y}`).join(" ")} />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="1.7" />
      ))}
      <Accent cx={12} cy={12} r={1.4} />
    </svg>
  );
}

// Le portrait : document mesuré, interprété, hypothèse distinguée.
export function GlyphPortrait({ size = 44, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M6.5 3.8h11a1.2 1.2 0 0 1 1.2 1.2v13.6a1.2 1.2 0 0 1-1.2 1.2h-11a1.2 1.2 0 0 1-1.2-1.2V5a1.2 1.2 0 0 1 1.2-1.2z" />
      <path d="M8.6 8h6.8M8.6 11.4h6.8M8.6 14.8h4.2" />
      <Accent cx={16.2} cy={15.4} r={1.1} />
    </svg>
  );
}

// La méthode : versionnée, publique, citée.
export function GlyphMethode({ size = 44, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <path d="M5 4.5h9.6L19 8.9V19a1.2 1.2 0 0 1-1.2 1.2H5A1.2 1.2 0 0 1 3.8 19V5.7A1.2 1.2 0 0 1 5 4.5z" />
      <path d="M14.4 4.6v4.4H19" />
      <path d="M7.2 12.6h9M7.2 15.8h5.6" />
      <Accent cx={16.8} cy={16.6} r={1.1} />
    </svg>
  );
}

// Les sources : données publiques, sourcées, incertitudes explicites.
export function GlyphSources({ size = 44, className }: GlyphProps) {
  return (
    <svg {...base} width={size} height={size} className={className} aria-hidden="true">
      <ellipse cx="12" cy="6.6" rx="7" ry="2.8" />
      <path d="M5 6.6v5.2c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6.6" />
      <path d="M5 11.8v5.2c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-5.2" />
      <Accent cx={12} cy={6.6} r={1.1} />
    </svg>
  );
}
