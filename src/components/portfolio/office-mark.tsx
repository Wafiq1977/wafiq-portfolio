import type { CustomLogo } from "@/data/tech-logos";

const officeColors: Record<
  CustomLogo,
  { page: string; fold: string; letter: string }
> = {
  word: { page: "#2B579A", fold: "#5B9BD5", letter: "W" },
  excel: { page: "#217346", fold: "#3E8E5E", letter: "X" },
  ppt: { page: "#B7472A", fold: "#D86340", letter: "P" },
};

export function OfficeMark({
  kind,
  className,
}: {
  kind: CustomLogo;
  className?: string;
}) {
  const c = officeColors[kind];
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
        fill={c.page}
      />
      <path d="M14 2v6h6" fill={c.fold} opacity={0.6} />
      <rect x="7.5" y="12.5" width="9" height="6.5" rx="0.8" fill="#fff" />
      <text
        x="12"
        y="17.7"
        textAnchor="middle"
        fontSize="6"
        fontWeight="800"
        fill={c.page}
      >
        {c.letter}
      </text>
    </svg>
  );
}
