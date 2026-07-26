export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  year: string;
  featured: boolean;

  client?: string;
  role?: string;
  status?: "Live" | "Prototype" | "Experiment" | "Case Study";

  liveUrl?: string;
  githubUrl?: string;

  video?: string;
  coverImage?: string;
gallery?: string[];


  problem?: string;
  approach?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "topical-map-generator",
    number: "01",
    category: "SEO Product",
    title: "Topical Map Generator",
    shortDescription:
      "Turning a seed topic into a structured semantic content architecture.",
    description:
      "An SEO product designed to transform seed topics into structured topical maps built around search intent, semantic relationships and information architecture.",
    tags: ["Next.js", "OpenAI", "SEO", "Product"],
    year: "2026",
    featured: true,
client: "Internal Product",
role: "Product Strategy, SEO & Build",
status: "Live",

problem:
  "Building a useful topical map manually requires extensive keyword research, intent analysis, entity mapping and information architecture. Existing AI outputs often produce generic keyword lists instead of a structured SEO content system.",

approach:
  "The product combines SEO methodology with structured AI generation to turn a website, niche or seed topic into organised pillars, subtopics, page ideas and internal linking relationships.",

outcome:
  "A working web application that transforms an SEO planning workflow into a repeatable product experience, with structured generation, project management and deployment.",

liveUrl: "",
githubUrl: "",
  },

  {
  slug: "whatsapp-automation",
  number: "02",
  category: "Automation",
  title: "WhatsApp Automation",

  shortDescription:
    "From incoming conversation to automated business action.",

  description:
    "A connected automation workflow that receives WhatsApp events, processes business logic and coordinates actions across APIs and external systems.",

  tags: [
    "n8n",
    "WhatsApp API",
    "Webhooks",
    "Automation",
  ],

  year: "2026",
  featured: true,

  client: "Internal / Demo",
  role: "Automation & Workflow Design",
  status: "Prototype",

  problem:
    "Customer conversations often trigger repetitive manual work — reading messages, identifying intent, moving information between systems and performing follow-up actions.",

  approach:
    "The workflow connects WhatsApp events with n8n, webhooks and external services so incoming information can be processed and routed automatically.",

  outcome:
    "A working automation prototype demonstrating how messaging can become an entry point into a broader business workflow.",

  video: "/videos/whatsapp-automation.mp4",
},

  {
    slug: "mutual-fund-faq",
    number: "03",
    category: "AI / RAG",
    title: "Mutual Fund FAQ",
    shortDescription:
      "Answers grounded in verified financial source documents.",
    description:
      "A retrieval-based FAQ assistant designed to answer mutual fund questions using verified source material, vector search and citation-backed responses.",
    tags: ["RAG", "OpenAI", "Vector Search", "Next.js"],
    year: "2026",
    featured: true,
client: "Product Challenge",
role: "Product Strategy & AI Prototype",
status: "Prototype",

problem:
  "Mutual fund information is spread across scheme documents, FAQs and official resources. Users need simple answers, but financial information requires accuracy, traceability and clear source grounding.",

approach:
  "The prototype uses retrieval-augmented generation to search a controlled knowledge base of official mutual fund information, retrieve relevant context and generate answers grounded in those sources.",

outcome:
  "A working FAQ assistant prototype that demonstrates how RAG can make complex financial information easier to explore while keeping answers tied to retrieved source material.",
  },

  {
    slug: "weather-application",
    number: "04",
    category: "API Experiment",
    title: "Weather Application",
    shortDescription:
      "Exploring full-stack development through a real external API.",
    description:
      "A full-stack weather application built as an experiment in API integration, frontend development, backend services and production deployment.",
    tags: ["React", "Node.js", "API", "Deployment"],
    year: "2026",
    featured: false,
  },
];