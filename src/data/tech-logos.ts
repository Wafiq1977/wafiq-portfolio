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
  siLinux,
  siFigma,
  siVscodium,
  siGoogledocs,
  siGooglesheets,
  siGoogleslides,
  siTrello,
  siApache,
  siNginx,
  siInstagram,
} from "simple-icons";

export type CustomLogo = "word" | "excel" | "ppt";

export interface TechLogo {
  name: string;
  /** simple-icons SVG path (when kind is default). */
  path?: string;
  /** Brand hex color (without #). */
  hex: string;
  /** When set, render a custom Office-style SVG instead of the path. */
  custom?: CustomLogo;
}

const pick = (
  icon: { title: string; path: string; hex: string },
  name?: string,
): TechLogo => ({
  name: name ?? icon.title,
  path: icon.path,
  hex: icon.hex,
});

// Microsoft Office brand colors (simple-icons removed these at Microsoft's request)
const office = (name: string, hex: string, custom: CustomLogo): TechLogo => ({
  name,
  hex,
  custom,
});

// Row 1 — Languages & Frameworks
export const techRow1: TechLogo[] = [
  pick(siPhp),
  pick(siJavascript, "JavaScript"),
  pick(siTypescript, "TypeScript"),
  pick(siPython),
  pick(siHtml5, "HTML5"),
  pick(siCss, "CSS3"),
  pick(siLaravel),
  pick(siVuedotjs, "Vue.js"),
  pick(siNodedotjs, "Node.js"),
  pick(siExpress, "Express.js"),
  pick(siAngular),
  pick(siDotnet, ".NET / C#"),
  pick(siBootstrap),
  pick(siTailwindcss, "Tailwind CSS"),
];

// Row 2 — Databases, Tools, Platforms & Productivity
export const techRow2: TechLogo[] = [
  pick(siMysql, "MySQL"),
  pick(siPostgresql, "PostgreSQL"),
  pick(siMongodb, "MongoDB"),
  pick(siFirebase),
  pick(siRedis),
  pick(siGit),
  pick(siGithub, "GitHub"),
  pick(siPostman),
  pick(siDocker),
  pick(siLinux),
  pick(siApache, "Apache"),
  pick(siNginx, "Nginx"),
  pick(siFigma),
  pick(siVscodium, "VS Code"),
];

// Row 3 — Productivity & Office (dedicated row)
export const techRow3: TechLogo[] = [
  office("Microsoft Word", "2B579A", "word"),
  office("Microsoft Excel", "217346", "excel"),
  office("Microsoft PowerPoint", "B7472A", "ppt"),
  pick(siGoogledocs, "Google Docs"),
  pick(siGooglesheets, "Google Sheets"),
  pick(siGoogleslides, "Google Slides"),
  pick(siTrello, "Trello"),
  pick(siInstagram, "Instagram"),
];

export interface BrandLogo {
  name: string;
  src: string;
  note: string;
}

// Uploaded brand / institution logos — real entities collaborated with or built for.
export const brandLogos: BrandLogo[] = [
  {
    name: "Universitas Negeri Surabaya",
    src: "/brands/unesa.png",
    note: "Education · Diginesa · Teaching",
  },
  {
    name: "LP Ma'arif NU",
    src: "/brands/maarif.png",
    note: "Institution collaboration",
  },
  {
    name: "TOOU",
    src: "/brands/toou.png",
    note: "Company profile project",
  },
  {
    name: "Broo",
    src: "/brands/broo.png",
    note: "Brand collaboration",
  },
  {
    name: "S Brand",
    src: "/brands/brand-s.png",
    note: "Client brand",
  },
  {
    name: "Infinite",
    src: "/brands/brand-i.png",
    note: "Client brand",
  },
];
