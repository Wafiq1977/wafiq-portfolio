export type SkillLevel = "experienced" | "proficient" | "exploring";

export interface Skill {
  name: string;
  level: SkillLevel;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export const levelMeta: Record<
  SkillLevel,
  { label: string; description: string }
> = {
  experienced: {
    label: "Experienced",
    description: "Solid, regularly used in real projects",
  },
  proficient: {
    label: "Proficient",
    description: "Working knowledge, used productively",
  },
  exploring: {
    label: "Currently Exploring",
    description: "Actively learning, foundational use",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages used across the stack.",
    icon: "Code2",
    skills: [
      { name: "PHP", level: "experienced", note: "Laravel, REST API, MVC, Eloquent ORM" },
      { name: "JavaScript", level: "proficient", note: "Vue.js, Node.js, Socket.IO" },
      { name: "TypeScript", level: "proficient", note: "Vue.js / Node.js contexts" },
      { name: "C#", level: "proficient", note: ".NET Web API, OOP, MVC" },
      { name: "SQL", level: "experienced", note: "Schema design, queries, optimization" },
      { name: "HTML5", level: "experienced", note: "Semantic, accessible markup" },
      { name: "CSS3", level: "experienced", note: "Bootstrap, Tailwind, responsive" },
      { name: "Python", level: "exploring", note: "Automation & data processing" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    description: "Frameworks for building modern web apps.",
    icon: "Layers",
    skills: [
      { name: "Laravel", level: "experienced", note: "Primary backend framework" },
      { name: "Vue.js", level: "proficient", note: "SPA, components, routing" },
      { name: "Node.js", level: "proficient", note: "Backend & realtime apps" },
      { name: "Express.js", level: "proficient", note: "REST API services" },
      { name: "Bootstrap", level: "experienced", note: "Layout & components" },
      { name: "Tailwind CSS", level: "experienced", note: "Utility-first styling" },
      { name: "Angular", level: "exploring", note: "Components, routing" },
    ],
  },
  {
    id: "database",
    title: "Database & Backend",
    description: "Data stores, APIs, and backend infrastructure.",
    icon: "Database",
    skills: [
      { name: "MySQL", level: "experienced", note: "Schema, queries, optimization" },
      { name: "PostgreSQL", level: "proficient", note: "Admin & indexing" },
      { name: "REST API", level: "experienced", note: "Design, testing, documentation" },
      { name: "SQL Server", level: "exploring", note: ".NET-based projects" },
      { name: "MongoDB", level: "exploring", note: "NoSQL, basic aggregation" },
      { name: "Firebase", level: "exploring", note: "Firestore & Auth" },
      { name: "Redis", level: "exploring", note: "Basic caching" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Day-to-day tooling for shipping and collaboration.",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "experienced", note: "Version control, branching" },
      { name: "GitHub", level: "experienced", note: "Collaboration & review" },
      { name: "Postman", level: "experienced", note: "API testing & docs" },
      { name: "Docker", level: "proficient", note: "Containers & compose" },
      { name: "Linux / Ubuntu Server", level: "proficient", note: "VPS deployment" },
      { name: "Apache", level: "proficient", note: "Web server deployment" },
      { name: "Nginx", level: "proficient", note: "Web server & reverse proxy" },
      { name: "Trello", level: "experienced", note: "Project management & tasks" },
      { name: "VS Code", level: "experienced", note: "Daily editor" },
      { name: "Figma", level: "experienced", note: "UI/UX & handoff" },
    ],
  },
  {
    id: "productivity",
    title: "Productivity & Office",
    description: "Documentation, spreadsheets, presentations, and collaboration suites.",
    icon: "FileSpreadsheet",
    skills: [
      { name: "Microsoft Word", level: "experienced", note: "Document authoring" },
      { name: "Microsoft Excel", level: "experienced", note: "Data & spreadsheets" },
      { name: "Microsoft PowerPoint", level: "experienced", note: "Presentations" },
      { name: "Google Workspace", level: "experienced", note: "Docs, Sheets, Slides" },
      { name: "Google Docs", level: "experienced", note: "Collaborative writing" },
      { name: "Google Sheets", level: "experienced", note: "Collaborative spreadsheets" },
      { name: "Google Slides", level: "experienced", note: "Collaborative decks" },
    ],
  },
  {
    id: "additional",
    title: "Additional Skills",
    description: "Cross-cutting capabilities beyond specific tools.",
    icon: "Sparkles",
    skills: [
      { name: "UI/UX Development", level: "experienced" },
      { name: "Responsive Web Design", level: "experienced" },
      { name: "API Integration", level: "experienced" },
      { name: "Database Design", level: "experienced" },
      { name: "Debugging", level: "experienced" },
      { name: "Deployment", level: "proficient", note: "VPS & shared hosting" },
      { name: "AI-Assisted Development", level: "experienced", note: "Pair programming with LLMs" },
      { name: "Prompt Engineering", level: "experienced", note: "Structured task breakdown" },
      { name: "Instagram", level: "experienced", note: "Social media & personal branding" },
    ],
  },
];

export const softSkills = [
  { name: "Leadership", note: "Guiding teams & practicum" },
  { name: "Team Collaboration", note: "Project & campus work" },
  { name: "Communication", note: "Client briefings" },
  { name: "Problem Solving", note: "Independent debugging" },
  { name: "Time Management", note: "Balancing study & work" },
  { name: "Adaptability", note: "Fast framework uptake" },
  { name: "Project Coordination", note: "Scope, timeline, QC" },
];
