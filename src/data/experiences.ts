export interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  dateRange: string;
  location: string;
  description: string;
  responsibilities: string[];
  stack: string[];
  icon: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "diginesa-pm",
    role: "Project Manager",
    company: "Diginesa",
    type: "Digital Agency — Universitas Negeri Surabaya",
    period: "Jan 2026 — Present",
    dateRange: "2026 — Present",
    location: "Surabaya, Indonesia",
    current: true,
    description:
      "Leading teams of developers and designers delivering website and application projects for both internal campus clients and external partners.",
    responsibilities: [
      "Define project scope, timeline, and deliverables for each engagement.",
      "Delegate tasks across developers and designers based on strengths and capacity.",
      "Monitor development progress and unblock the team throughout the build.",
      "Run quality control through code review and structured testing.",
      "Act as the primary client liaison for requirements, proposals, and revisions.",
      "Prepare cost estimates and project handover documentation.",
      "Coordinate using Git, Trello, and project management tooling.",
    ],
    stack: ["Git", "GitHub", "Trello", "Laravel", "Vue.js", "MySQL"],
    icon: "Users2",
  },
  {
    id: "toou-leader",
    role: "Leader & Founder",
    company: "TOOU Agency",
    type: "Digital Agency / Company Profile",
    period: "2025 — Present",
    dateRange: "2025 — Present",
    location: "Surabaya, Indonesia",
    current: true,
    description:
      "Leading TOOU Agency — overseeing company profile and digital brand projects end-to-end, from creative direction to final delivery.",
    responsibilities: [
      "Set agency direction, positioning, and creative standards.",
      "Lead company profile and brand website projects for clients.",
      "Coordinate designers and developers across project deliverables.",
      "Own client relationships, proposals, and timelines.",
      "Review quality and handle final deployment & handover.",
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "Figma", "Tailwind CSS"],
    icon: "Crown",
  },
  {
    id: "broo-admin",
    role: "Admin",
    company: "Broo by OJEK",
    type: "Brand & Community Management",
    period: "2025 — Present",
    dateRange: "2025 — Present",
    location: "Surabaya, Indonesia",
    current: true,
    description:
      "Managing the Broo brand presence and community — handling social media operations, content, and audience engagement.",
    responsibilities: [
      "Manage day-to-day social media accounts and content scheduling.",
      "Create and curate posts, stories, and promotional content.",
      "Engage with the community and respond to audience interactions.",
      "Monitor brand mentions and report on growth metrics.",
      "Coordinate campaigns and collaborations with the team.",
    ],
    stack: ["Instagram", "Google Workspace", "Figma"],
    icon: "Megaphone",
  },
  {
    id: "freelance-fsd",
    role: "Freelance Full Stack Developer",
    company: "Independent Clients & UMKM",
    type: "Self-employed",
    period: "Jul 2024 — Present",
    dateRange: "2024 — Present",
    location: "Surabaya, Indonesia",
    current: true,
    description:
      "Delivering web applications end-to-end for independent clients and small businesses, owning the full delivery lifecycle from analysis to maintenance.",
    responsibilities: [
      "Analyze client needs and translate them into a clear technical scope.",
      "Design UI with HTML, CSS, and Vue.js for responsive interfaces.",
      "Build backends with PHP and Laravel, including REST API design.",
      "Manage MySQL and PostgreSQL databases and schema evolution.",
      "Run testing, debugging, and functional verification.",
      "Deploy to VPS and shared hosting environments.",
      "Provide maintenance and iterate on new features post-launch.",
    ],
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "PostgreSQL", "REST API", "Linux"],
    icon: "Code2",
  },
  {
    id: "ta-unesa",
    role: "Teaching Assistant — Web Programming",
    company: "Universitas Negeri Surabaya",
    type: "Academic — Faculty of Engineering",
    period: "Aug 2025 — Dec 2025",
    dateRange: "2025",
    location: "Surabaya, Indonesia",
    description:
      "Guided web programming practicum classes and mentored students through coursework and final projects.",
    responsibilities: [
      "Lead practicum sessions in HTML, CSS, JavaScript, and PHP.",
      "Prepare lab modules, exercises, and assessment materials.",
      "Demonstrate programming concepts and live walkthroughs.",
      "Guide and evaluate student assignments with structured feedback.",
      "Mentor students through their final practicum projects.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    icon: "GraduationCap",
  },
  {
    id: "intern-atd",
    role: "Junior Web Developer Intern",
    company: "CV. Anugrah Tekno Digital",
    type: "Software House — Internship",
    period: "Feb 2025 — Jun 2025",
    dateRange: "2025",
    location: "Surabaya, Indonesia",
    description:
      "Developed client application modules on a collaborative software house team, contributing to real shipped products.",
    responsibilities: [
      "Develop application modules using Laravel and MySQL.",
      "Build CRUD features and REST API endpoints.",
      "Perform debugging and functional testing.",
      "Collaborate with the team using Git for version control.",
      "Assist with deployment to shared hosting.",
      "Author technical documentation for delivered modules.",
    ],
    stack: ["PHP", "Laravel", "MySQL", "REST API", "Git"],
    icon: "Briefcase",
  },
];
