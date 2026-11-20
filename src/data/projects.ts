export interface Project {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  icon: string;
  motif: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "jajan-riyen",
    name: "Jajan Riyen",
    category: "UMKM Marketplace",
    tagline: "Catalog & transactions for local small businesses.",
    description:
      "A marketplace platform that helps local UMKM businesses market food, beverage, and other local products — bringing neighborhood commerce online.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "REST API"],
    role: "Full Stack Developer",
    year: "2024",
    icon: "ShoppingBag",
    motif: "commerce",
    image: "/projects/jajan-riyen.png",
    featured: true,
  },
  {
    id: "e-layanan-kutorejo",
    name: "E-Layanan Kutorejo",
    category: "Digital Public Services",
    tagline: "Online submission for community administrative needs.",
    description:
      "A digital service system that makes it easier for residents to submit administrative requests and official letters online.",
    stack: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap"],
    role: "Full Stack Developer",
    year: "2024",
    icon: "FileText",
    motif: "civic",
    image: "/projects/e-layanan.png",
    featured: true,
  },
  {
    id: "seleksibeasiswaapp",
    name: "seleksibeasiswaapp",
    category: "Scholarship Management System",
    tagline: "Supporting and securing the scholarship selection flow.",
    description:
      "An application that supports the scholarship selection process and manages the end-to-end selection workflow.",
    stack: ["PHP", "Laravel", "MySQL", "Vue.js"],
    role: "Full Stack Developer",
    year: "2025",
    icon: "GraduationCap",
    motif: "selection",
    image: "/projects/seleksi-beasiswa.png",
    featured: true,
  },
  {
    id: "cipherdrive-dna",
    name: "CipherDrive-DNA",
    category: "Data Security",
    tagline: "Encrypted data storage and protection.",
    description:
      "A project developing a data storage and protection system using an encryption-oriented approach to keep files confidential.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL", "Cryptography"],
    role: "Full Stack Developer",
    year: "2025",
    icon: "ShieldCheck",
    motif: "security",
    image: "/projects/cipherdrive.png",
    featured: true,
  },
  {
    id: "crypto-cloud-guard",
    name: "Crypto-Cloud-Guard",
    category: "Cryptography & Security",
    tagline: "Cryptography tooling & educational site.",
    description:
      "An educational website and tooling suite for cryptography, helping users understand digital data security concepts.",
    stack: ["Vue.js", "JavaScript", "Laravel"],
    role: "Full Stack Developer",
    year: "2025",
    icon: "KeyRound",
    motif: "crypto",
    image: "/projects/crypto-cloud-guard.png",
    featured: true,
  },
  {
    id: "mts-darul-ulum-nglumber",
    name: "MTs Darul Ulum Nglumber",
    category: "Education Website",
    tagline: "End-to-end school profile & information site.",
    description:
      "A school profile website delivering institutional information and educational services. Built end-to-end — UI/UX, frontend, backend, go-live, and maintenance — with direct communication with the school to gather needs, present progress, and follow up on feedback.",
    stack: ["HTML", "CSS", "JavaScript", "MySQL", "Git"],
    role: "Full Stack Developer",
    year: "2025 — 2026",
    icon: "School",
    motif: "education",
    image: "/projects/mts-nglumber.png",
    featured: true,
  },
  {
    id: "nusa-learn",
    name: "Nusa-Learn",
    category: "Educational Technology",
    tagline: "Interactive learning through educational games.",
    description:
      "An interactive learning platform built around an educational game approach to make studying more engaging.",
    stack: ["Vue.js", "JavaScript", "Laravel", "MySQL"],
    role: "Full Stack Developer",
    year: "2025",
    icon: "Gamepad2",
    motif: "game",
    image: "/projects/nusa-learn.png",
    featured: true,
  },
  {
    id: "toou-agency",
    name: "TOOU-agency",
    category: "Company Profile",
    tagline: "Brand, services & company information online.",
    description:
      "A company profile website introducing an agency's identity, services, and company information to visitors.",
    stack: ["PHP", "Laravel", "Vue.js", "MySQL"],
    role: "Full Stack Developer",
    year: "2025",
    icon: "Building2",
    motif: "brand",
    image: "/projects/toou-agency.png",
    featured: true,
  },
];

export interface OtherProject {
  name: string;
  note: string;
}

export const otherProjects: OtherProject[] = [
  { name: "YUKJAJAN", note: "Commerce experiment" },
  { name: "Savora App", note: "Application experiment" },
  { name: "Affiliate App", note: "Affiliate flow experiment" },
  { name: "Toko Supplier", note: "Store / supplier experiment" },
  { name: "KosFinder", note: "Room / boarding finder" },
  { name: "FE-KostFinder", note: "Frontend for KosFinder" },
  { name: "Manajemen Keuangan", note: "Finance management tool" },
];
