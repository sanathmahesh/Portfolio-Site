export type ExperienceItem = {
  company: string
  role: string
  location: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: "IDC (International Development Company) · Digital Transformation",
    role: "Software Engineer",
    location: "Abu Dhabi, UAE",
    period: "Jul 2024 — Jul 2025",
    points: [
      "Owned standalone apps on Cognite (ETL + TypeScript front‑end) for industrial data.",
      "Technical project owner for ADNOC Digital Factory (AI Predictive Maintenance).",
      "Managed infra across ADNOC Private Cloud & Azure; coordinated 9 vendors (Bosch, SLB, etc.).",
      "Built processes/dashboards saving IDC tech members 25–35 minutes per day."
    ]
  },
  {
    company: "KPMG Australia · Accelerating Business Growth — Enterprise",
    role: "R&D Consultant (Intern)",
    location: "Melbourne, Australia",
    period: "Jan 2023 — Jul 2023",
    points: [
      "Interviewed tech teams at 18 clients to scope eligible R&D work.",
      "Analyzed confidential R&D material from Jira, Confluence, and SharePoint.",
      "Synthesized technical/costing data across multiple engagements; collaborated with C‑suite stakeholders."
    ]
  }
]
