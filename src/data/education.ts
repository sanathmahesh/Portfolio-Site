export type EducationItem = {
  school: string
  degree: string
  location: string
  period: string
  details?: string[]
}

export const education: EducationItem[] = [
  {
    school: "Carnegie Mellon University",
    degree: "Master of Information Systems Management · Business Intelligence & Data Analytics (MISM Scholar)",
    location: "Pittsburgh, United States",
    period: "Aug 2025 — Dec 2026",
    details: ["Statistics", "OOP in Java", "Data‑Focused Python", "Databases"]
  },
  {
    school: "Monash University, Clayton",
    degree: "Bachelor of Engineering (Honours), Software Engineering",
    location: "Melbourne, Australia",
    period: "Jul 2019 — Jul 2023",
    details: [
      "Scholar: Engineering International Undergraduate Excellence, IBL",
      "iOS App Dev, Algorithms & Data Structures, Architecture & Design, Databases, Testing, Data Viz, Security, OS"
    ]
  }
]
