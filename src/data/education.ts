export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  gpa?: string;
  expected?: string;
  description: string;
  current?: boolean;
}

export const education: EducationItem[] = [
  {
    id: "unesa",
    institution: "Universitas Negeri Surabaya",
    degree: "Bachelor's Degree (S1)",
    field: "Informatics Engineering",
    period: "2024 — Present",
    status: "In Progress",
    gpa: "3.92 / 4.00",
    expected: "Expected Graduation: 2028",
    current: true,
    description:
      "Studying computer science fundamentals, software development, information systems, and modern computing technologies.",
  },
];

export const priorEducation = [
  { institution: "MAN 3 Jombang", level: "Senior High School", track: "MIPA (Science)", year: "2021" },
  { institution: "MTs Darul Ulum Nglumber", level: "Junior High", track: "—", year: "2018" },
  { institution: "MI Darul Ulum Nglumber", level: "Elementary", track: "—", year: "2012" },
];
