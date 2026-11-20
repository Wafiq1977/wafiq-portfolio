import {
  siPhp,
  siJavascript,
  siTypescript,
  siPython,
  siHtml5,
  siCss,
  siLaravel,
  siVuedotjs,
  siNodedotjs,
  siExpress,
  siAngular,
  siDotnet,
  siBootstrap,
  siTailwindcss,
  siMysql,
  siPostgresql,
  siMongodb,
  siFirebase,
  siRedis,
  siGit,
  siGithub,
  siPostman,
  siDocker,
  siUbuntu,
  siApache,
  siNginx,
  siTrello,
  siFigma,
  siVscodium,
  siGoogledocs,
  siGooglesheets,
  siGoogleslides,
  siGoogle,
  siInstagram,
} from "simple-icons";
import type { CustomLogo } from "./tech-logos";

export type SkillIconKind = "si" | "custom" | "lucide";

export interface SkillIcon {
  kind: SkillIconKind;
  /** brand hex without # */
  hex: string;
  /** simple-icons path (kind === 'si') */
  path?: string;
  /** office custom kind (kind === 'custom') */
  custom?: CustomLogo;
  /** lucide icon name (kind === 'lucide') */
  lucide?: string;
}

/** Hexes that are near-black and would vanish on a dark chip — lighten them. */
function isDarkHex(hex: string): boolean {
  const h = hex.toUpperCase();
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return false;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma < 70;
}

function si(icon: { path: string; hex: string }): SkillIcon {
  const hex = isDarkHex(icon.hex) ? "C8C8C8" : icon.hex;
  return { kind: "si", hex, path: icon.path };
}

const lucide = (name: string, hex = "A1A1AA"): SkillIcon => ({
  kind: "lucide",
  hex,
  lucide: name,
});

const custom = (c: CustomLogo, hex: string): SkillIcon => ({
  kind: "custom",
  hex,
  custom: c,
});

/** Map: skill name (exactly as in skills.ts) → icon descriptor. */
export const skillIconMap: Record<string, SkillIcon> = {
  // Programming Languages
  PHP: si(siPhp),
  JavaScript: si(siJavascript),
  TypeScript: si(siTypescript),
  "C#": si(siDotnet),
  SQL: si(siMysql),
  HTML5: si(siHtml5),
  CSS3: si(siCss),
  Python: si(siPython),

  // Frameworks & Libraries
  Laravel: si(siLaravel),
  "Vue.js": si(siVuedotjs),
  "Node.js": si(siNodedotjs),
  "Express.js": si(siExpress),
  Angular: si(siAngular),
  Bootstrap: si(siBootstrap),
  "Tailwind CSS": si(siTailwindcss),

  // Database & Backend
  MySQL: si(siMysql),
  PostgreSQL: si(siPostgresql),
  "REST API": lucide("Webhook", "A1A1AA"),
  "SQL Server": lucide("Database", "C8C8C8"),
  MongoDB: si(siMongodb),
  Firebase: si(siFirebase),
  Redis: si(siRedis),

  // Tools & Platforms
  Git: si(siGit),
  GitHub: si(siGithub),
  Postman: si(siPostman),
  Docker: si(siDocker),
  "Linux / Ubuntu Server": si(siUbuntu),
  Apache: si(siApache),
  Nginx: si(siNginx),
  Trello: si(siTrello),
  "VS Code": si(siVscodium),
  Figma: si(siFigma),

  // Productivity & Office
  "Microsoft Word": custom("word", "2B579A"),
  "Microsoft Excel": custom("excel", "217346"),
  "Microsoft PowerPoint": custom("ppt", "B7472A"),
  "Google Workspace": si(siGoogle),
  "Google Docs": si(siGoogledocs),
  "Google Sheets": si(siGooglesheets),
  "Google Slides": si(siGoogleslides),

  // Additional Skills
  "UI/UX Development": lucide("Palette", "A1A1AA"),
  "Responsive Web Design": lucide("Smartphone", "A1A1AA"),
  "API Integration": lucide("Webhook", "A1A1AA"),
  "Database Design": lucide("DatabaseZap", "A1A1AA"),
  Debugging: lucide("Bug", "A1A1AA"),
  Deployment: lucide("Rocket", "A1A1AA"),
  "AI-Assisted Development": lucide("Bot", "A1A1AA"),
  "Prompt Engineering": lucide("Terminal", "A1A1AA"),
  Instagram: si(siInstagram),
};
