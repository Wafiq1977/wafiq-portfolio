export interface ProcessStep {
  no: string;
  title: string;
  description: string;
  icon: string;
}

export const workingApproach = {
  heading: "From Idea to Deployment.",
  subheading: "A disciplined, end-to-end workflow I apply to every build.",
  steps: [
    {
      no: "01",
      title: "Understand",
      description: "Clarify user needs, constraints, and the real problem to solve.",
      icon: "Compass",
    },
    {
      no: "02",
      title: "Plan",
      description: "Define scope, architecture, and development priorities.",
      icon: "ClipboardList",
    },
    {
      no: "03",
      title: "Design",
      description: "Craft the UI/UX and structure of the application.",
      icon: "PenTool",
    },
    {
      no: "04",
      title: "Develop",
      description: "Build frontend, backend, APIs, and the database layer.",
      icon: "Code2",
    },
    {
      no: "05",
      title: "Test",
      description: "Run debugging, testing, and quality assurance.",
      icon: "TestTube2",
    },
    {
      no: "06",
      title: "Deploy",
      description: "Ship to production and confirm everything runs live.",
      icon: "Rocket",
    },
    {
      no: "07",
      title: "Maintain",
      description: "Support, maintain, and evolve the product over time.",
      icon: "RefreshCw",
    },
  ] as ProcessStep[],
};
