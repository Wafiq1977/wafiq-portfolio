export type CertType = "Certification" | "Training" | "Workshop" | "Course";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  type: CertType;
  date?: string;
  /** Optional certificate image (under /certificates). */
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "bnsp-jwd",
    title: "Junior Web Developer",
    issuer: "Sertifikasi Kompetensi BNSP — LSP Universitas Negeri Surabaya",
    type: "Certification",
    date: "May 2025",
  },
  {
    id: "gemini-ai",
    title: "Siswa Tersertifikasi Gemini",
    issuer: "Google for Education",
    type: "Certification",
    date: "Aug 2026",
    image: "/certificates/gemini-ai.png",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Dicoding Indonesia × AWS",
    type: "Course",
    date: "Jan 2025",
  },
  {
    id: "aws-cloud-essentials",
    title: "AWS Knowledge: Cloud Essentials — Trained",
    issuer: "Amazon Web Services",
    type: "Training",
    date: "2026",
    image: "/certificates/aws-cloud-essentials.png",
  },
  {
    id: "dotnet-webapi-sqlserver",
    title: "Kelas Intensif .NET Web API & SQL Server",
    issuer: "Komunitas .NET Indonesia",
    type: "Training",
    date: "Sep 2025",
  },
  {
    id: "docker-bwa",
    title: "Belajar Docker untuk Pemula (Containerisasi)",
    issuer: "BuildWithAngga",
    type: "Course",
    date: "Apr 2025",
  },
  {
    id: "workshop-rest-vue",
    title: "Workshop REST API & Vue.js",
    issuer: "GDSC Surabaya",
    type: "Workshop",
    date: "Mar 2025",
  },
  {
    id: "workshop-laravel-hmj",
    title: "Workshop Pengembangan Web Berbasis Laravel",
    issuer: "HMJ Teknik Informatika UNESA",
    type: "Workshop",
    date: "Oct 2024",
  },
  {
    id: "dicoding-backend",
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula (Node.js & REST API)",
    issuer: "Dicoding Indonesia",
    type: "Course",
    date: "Oct 2024",
  },
  {
    id: "dicoding-laravel",
    title: "Belajar Membuat Aplikasi Web dengan Laravel",
    issuer: "Dicoding Indonesia",
    type: "Course",
    date: "Jul 2024",
  },
  {
    id: "dicoding-sql",
    title: "Belajar Fundamental SQL (Database)",
    issuer: "Dicoding Indonesia",
    type: "Course",
    date: "Mar 2024",
  },
  {
    id: "master-mongodb",
    title: "Master MongoDB — Cloud NoSQL Database Management",
    issuer: "Udemy — Brighter Futures Hub",
    type: "Course",
    date: "2025",
    image: "/certificates/master-mongodb.png",
  },
  {
    id: "ccna-networking",
    title: "CCNA Networking Essentials: A Comprehensive Cisco Course",
    issuer: "Udemy — Meta Brains",
    type: "Course",
    date: "2025",
    image: "/certificates/ccna-networking.png",
  },
  {
    id: "networking-basics",
    title: "Computer Networking Basics for Desktop Support Technicians",
    issuer: "Udemy",
    type: "Course",
    date: "2025",
    image: "/certificates/networking-basics.png",
  },
  {
    id: "matlab-onramp",
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    type: "Course",
    date: "Dec 2025",
    image: "/certificates/matlab-onramp.png",
  },
  {
    id: "bedrock-observability",
    title: "Amazon Bedrock AgentCore Observability Tutorial",
    issuer: "AWS Training & Certification",
    type: "Course",
    date: "Jul 2026",
    image: "/certificates/bedrock-agentcore.png",
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization: Advanced AI, Hands-on Lab",
    issuer: "Data Science Academy — School of AI",
    type: "Course",
    date: "Nov 2025",
    image: "/certificates/deep-learning.png",
  },
  {
    id: "sql-masterclass",
    title: "SQL Masterclass: From Absolute Beginner to Developer",
    issuer: "Udemy",
    type: "Course",
    date: "Aug 2025",
    image: "/certificates/sql-masterclass.png",
  },
  {
    id: "bisa-ai-data-science",
    title: "Data Science Class",
    issuer: "Bisa.AI Academy",
    type: "Course",
    date: "Nov 2025",
    image: "/certificates/bisa-ai-data-science.png",
  },
  {
    id: "solid-principles",
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Online Course",
    type: "Course",
  },
  {
    id: "ai-cyber-mastery",
    title: "AI dan Cyber Security Mastery 2025",
    issuer: "Udemy",
    type: "Course",
    date: "Nov 2025",
    image: "/certificates/ai-cyber-mastery.png",
  },
];
