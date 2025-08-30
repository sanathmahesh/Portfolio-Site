export type Project = {
  name: string
  stack: string[]
  description: string
  highlights: string[]
  link?: string
}

export const projects: Project[] = [
  {
    name: "Showz",
    stack: ["Swift", "LightFM", "Python", "FastAPI", "Firebase"],
    description:
      "End‑to‑end iOS app recommending TV shows via hybrid ML (WARP). Combines collaborative filtering with IMDb content metadata.",
    highlights: [
      "Persistent storage, notifications, auth with Firebase/Firestore",
      "Full show info with IMDb‑sourced metadata",
      "Feedback loop for recommendations"
    ]
  },
  {
    name: "Researchify",
    stack: ["AWS", "React", "MongoDB", "GitHub Pages"],
    description:
      "Platform for researchers to publish websites without code; managed a 17‑person cross‑functional team.",
    highlights: [
      "Scoped features & sprints; aligned front‑end/back‑end/DevOps leads",
      "Worked on AWS deployment, state management, and templates"
    ]
  },
  {
    name: "GPT‑3 Applications Research",
    stack: ["Python"],
    description:
      "Co‑authored \"GPT‑3 Applications; What they are, how they are made, and what people think.\" Empirical study of prompt engineering, types, and learning styles.",
    highlights: [
      "Interactive taxonomy of GPT‑3 application categories",
      "Explored LDA, cloze & prefix prompting"
    ]
  }
]
