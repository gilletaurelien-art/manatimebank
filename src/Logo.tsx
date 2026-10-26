// Logo-spectre MANA time bank : les quatre teintes de la charte
// (bleu, vert menthe, jaune, orange pêche) en vagues fluides superposées —
// un seul glyphe inline, zéro requête réseau, qui signe le propos :
// « une représentation spectrale, à terme ».

const VAGUES = [
  { d: "M3 13.2c3.4-4.6 7-4.6 10.4 0 3 4 5.6 4.2 8.6.6", c: "#8bc3e5" },
  { d: "M3 11c3.4-4.6 7-4.6 10.4 0 3 4 5.6 4.2 8.6.6", c: "#bdeed0" },
  { d: "M3 8.8c3.4-4.6 7-4.6 10.4 0 3 4 5.6 4.2 8.6.6", c: "#f8e49f" },
  { d: "M3 6.6c3.4-4.6 7-4.6 10.4 0 3 4 5.6 4.2 8.6.6", c: "#fcb992" },
];

export function LogoSpectre({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 20"
      fill="none"
      aria-hidden="true"
      className="logo-spectre"
    >
      {VAGUES.map((v, i) => (
        <path
          key={i}
          d={v.d}
          stroke={v.c}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
