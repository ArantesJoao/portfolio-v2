import { ProjectCardProps } from "./components/projects/components/project-card";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
  technologies: string[];
}

export const experiences = [
  {
    company: "TrustCloud",
    role: "Sr. Frontend Engineer",
    duration: "2025 - Present",
    description:
      "Building scalable, user-friendly frontend applications for TrustCloud, a SaaS platform that automates compliance and audit readiness. My work strengthens performance and usability for companies in highly regulated industries.",
    logo: "/experiences/trustcloud.jpeg",
    technologies: ["React", "JavaScript", "Vite", "Styled Components", "SaaS / B2B"],
  },
  {
    company: "Mercado Libre",
    role: "Mid-Level Frontend Engineer",
    duration: "2024 - 2025",
    description:
      "Contributed to Mercado Libre, the largest e-commerce and fintech ecosystem in Latin America, serving 400M+ users. Improved frontend performance and usability in a complex React/Next.js microservice environment, enhancing scalability and user experience across the platform.",
    logo: "/experiences/meli.webp",
    technologies: ["React", "Microservices", "Components Libs", "Microfrontends", "Next.js", "Express", "E-commerce"],
  },
  {
    company: "HSystem",
    role: "Full Stack Engineer (Jr. to Mid-Level)",
    duration: "2020 - 2024",
    description:
      "At HSystem, a leading hospitality software provider with 2,000+ hotel clients, I built and optimized booking and website tools. Key achievements include making multi-room reservations up to 10× faster, cutting website load times by 60%, and boosting system processing speed by 80%.",
    logo: "/experiences/hsystem.jpg",
    technologies: ["React", "C", "AngularJS", "MongoDB", "jQuery", "B2B / White Label"],
  },
]

export const education: Experience[] = [
  {
    role: "Universidade Federal de Santa Catarina",
    company: "Bachelor of Information Systems",
    duration: "2019 - 2023",
    description:
      "Very embracing coursework, from more basic subjects like Object Oriented Programming, Data Structures, Databases, Software Engineering all the way to Operating Systems, Computer Networks, Usability Engineering, Data Mining. Final project on React Native and NodeJS with Express, and Expo for the development.",
    logo: "/experiences/ufsc.png",
    technologies: ["React Native", "React", "Express", "Expo", "React Native", "NodeJS", "Python"],
  },
]

export const projects: ProjectCardProps[] = [
  {
    title: "Genius",
    description: "This is an AI SaaS application using OpenAI and Replicate. It is fully functional, you can go ahead, create your own account through Clerk and even signup to the Pro plan via Stripe to test everything! (don't worry, you won't be charged, Stripe is on test mode!).",
    image: "/projects/genius_landing_page.png",
    techs: [
      { slug: "react", name: "React", color: "61DAFB", className: "bg-slate-800", imageClassName: "p-1" },
      { slug: "nextdotjs", name: "Next.js", color: "000000", className: "bg-white" },
      { slug: "tailwindcss", name: "Tailwind CSS", color: "06B6D4", className: "bg-white", imageClassName: "p-1" },
      { slug: "shadcnui", name: "Shadcn UI", color: "000000", className: "bg-white", imageClassName: "p-2" },
      { slug: "clerk", name: "Clerk", color: "6C47FF", className: "bg-white", imageClassName: "p-1 -translate-x-[3px]" },
      { slug: "stripe", name: "Stripe", color: "635BFF", className: "bg-white", imageClassName: "p-1.5" },
      { slug: "openai", name: "OpenAI", color: "1E1E1E", className: "bg-white", imageClassName: "p-1" },
      { slug: "replicate", name: "Replicate", color: "000000", className: "bg-white", imageClassName: "p-2" },
      { slug: "vercel", name: "Vercel", color: "000000", className: "bg-white", imageClassName: "p-2" }
    ],
    githubUrl: "https://github.com/ArantesJoao/genius",
    liveDemoUrl: "https://genius-joo-vctor-arantes-projects.vercel.app/"
  },
  {
    title: "Wild.io",
    description: "This was my final college project! It fosters public engagement with city parks, encouraging the documentation of urban flora and fauna.",
    image: "/projects/wild-io.webp",
    techs: [
      { slug: "react", name: "React", color: "61DAFB", className: "bg-slate-800", imageClassName: "p-1" },
      { slug: "nodedotjs", name: "Node.js", color: "5FA04E", className: "bg-white", imageClassName: "p-1" },
      { slug: "express", name: "Express", color: "000000", className: "bg-white", imageClassName: "p-1.5" },
      { slug: "expo", name: "Expo", color: "1C2024", className: "bg-white", imageClassName: "p-2" }
    ],
    githubUrl: "https://github.com/ArantesJoao/wild.io",
  },
  {
    title: "Airbnb Clone",
    description: "Airbnb clone I coded to showcase skills some of my full stack skills. It was also one of my first projects using Next 13.",
    image: "/projects/airbnb_clone.webp",
    techs: [
      { slug: "react", name: "React", color: "61DAFB", className: "bg-slate-800", imageClassName: "p-1" },
      { slug: "nextdotjs", name: "Next.js", color: "000000", className: "bg-white" },
      { slug: "tailwindcss", name: "Tailwind CSS", color: "06B6D4", className: "bg-white", imageClassName: "p-1" },
      { slug: "vercel", name: "Vercel", color: "000000", className: "bg-white", imageClassName: "p-2" },
      { slug: "nodedotjs", name: "Node.js", color: "5FA04E", className: "bg-white", imageClassName: "p-1" }
    ],
    githubUrl: "https://github.com/ArantesJoao/airbnb-clone",
    liveDemoUrl: "https://rent-website-clone-arantes.vercel.app/"
  },
  {
    title: "Ignite Call",
    description: "Ignite Call allows users to book appointments with each other. These bookings are automatically added to your linked Google Calendar! Project developed on a Rocketseat Bootcamp.",
    image: "/projects/ignite.webp",
    techs: [
      { slug: "react", name: "React", color: "61DAFB", className: "bg-slate-800", imageClassName: "p-1" },
      { slug: "nextdotjs", name: "Next.js", color: "000000", className: "bg-white" },
      { slug: "vercel", name: "Vercel", color: "000000", className: "bg-white", imageClassName: "p-2" },
      { slug: "mysql", name: "MySQL", color: "4479A1", className: "bg-white", imageClassName: "p-1.5" },
      { slug: "prisma", name: "Prisma", color: "2D3748", className: "bg-white", imageClassName: "p-1" },
    ],
    githubUrl: "https://github.com/ArantesJoao/ignite-call",
    liveDemoUrl: "https://ignite-call-psi-peach.vercel.app"
  },
  {
    title: "Old Portfolio",
    description: "My old portfolio, built with React and Next.js. Honestly, this new one looks way better than this one xD",
    image: "https://raw.githubusercontent.com/ArantesJoao/portfolio/main/.github/initial_screen.png",
    techs: [
      { slug: "react", name: "React", color: "61DAFB", className: "bg-slate-800", imageClassName: "p-1" },
      { slug: "nextdotjs", name: "Next.js", color: "000000", className: "bg-white" },
      { slug: "tailwindcss", name: "Tailwind CSS", color: "06B6D4", className: "bg-white", imageClassName: "p-1" },
      { slug: "vercel", name: "Vercel", color: "000000", className: "bg-white", imageClassName: "p-2" }
    ],
    githubUrl: "https://github.com/ArantesJoao/portfolio",
  },
  {
    title: "Portfolio V2",
    description: "My portfolio listed in my portfolio. I'm trying to think of an Inception joke here.",
    image: "/projects/portfolio.png",
    techs: [
      { slug: "react", name: "React", color: "61DAFB", className: "bg-slate-800", imageClassName: "p-1" },
      { slug: "nextdotjs", name: "Next.js", color: "000000", className: "bg-white" },
      { slug: "tailwindcss", name: "Tailwind CSS", color: "06B6D4", className: "bg-white", imageClassName: "p-1" },
      { slug: "vercel", name: "Vercel", color: "000000", className: "bg-white", imageClassName: "p-2" },
      { slug: "shadcnui", name: "Shadcn UI", color: "000000", className: "bg-white", imageClassName: "p-2" },
    ],
    githubUrl: "https://github.com/ArantesJoao/portfolio-v2",
    liveDemoUrl: "https://www.joaoarantes.dev"
  },
]

export interface SocialIcon {
  slug: string
  name: string
  color: string
  className?: string
  imageClassName?: string
}

export interface SocialLinkData {
  href: string
  label: string
  icon: "linkedin" | "github" | "email" | "download"
  isDownload?: boolean
  showText?: boolean
  text?: string
  isCopyEmail?: boolean
}

export const socialLinksData: SocialLinkData[] = [
  {
    href: "https://www.linkedin.com/in/joaovictorarantes/",
    label: "LinkedIn Profile",
    icon: "linkedin"
  },
  {
    href: "https://github.com/ArantesJoao",
    label: "GitHub Profile",
    icon: "github"
  },
  {
    href: "mailto:joaoarantes.dev@gmail.com",
    label: "Send Email",
    icon: "email",
    isCopyEmail: true
  },
  {
    href: "https://drive.google.com/uc?export=download&id=1gt8MPXdqpO4QsQNrBMf55OO80SaWf25Y",
    label: "Download CV",
    isDownload: true,
    showText: true,
    text: "Get my CV",
    icon: "download"
  }
]

export interface TechStackItem {
  name: string
  slug: string
  color: string
  description: string
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Cloud"
  proficiency: "Expert" | "Advanced" | "Intermediate"
  className?: string
  imageClassName?: string
}

export const techStackData: TechStackItem[] = [
  // Frontend
  {
    name: "JavaScript",
    slug: "javascript",
    color: "F7DF1E",
    description: "Dynamic programming language for web development",
    category: "Frontend",
    proficiency: "Expert",
    className: "bg-black",
    imageClassName: "p-1"
  },
  {
    name: "TypeScript",
    slug: "typescript",
    color: "3178C6",
    description: "Type-safe JavaScript for better development experience",
    category: "Frontend",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "React",
    slug: "react",
    color: "61DAFB",
    description: "Building modern user interfaces with component-based architecture",
    category: "Frontend",
    proficiency: "Expert",
    className: "bg-slate-800",
    imageClassName: "p-0.5"
  },
  {
    name: "Next.js",
    slug: "nextdotjs",
    color: "000000",
    description: "Full-stack React framework for production-ready applications",
    category: "Frontend",
    proficiency: "Expert",
    className: "bg-white"
  },
  {
    name: "Tailwind CSS",
    slug: "tailwindcss",
    color: "06B6D4",
    description: "Utility-first CSS framework for rapid UI development",
    category: "Frontend",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "Styled Components",
    slug: "styledcomponents",
    color: "DB7093",
    description: "CSS-in-JS library for styling React components",
    category: "Frontend",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "React Native",
    slug: "react",
    color: "61DAFB",
    description: "Cross-platform mobile development with React",
    category: "Frontend",
    proficiency: "Intermediate",
    className: "bg-slate-800",
    imageClassName: "p-0.5"
  },
  {
    name: "Angular",
    slug: "angular",
    color: "DD0031",
    description: "Enterprise-grade frontend framework",
    category: "Frontend",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  // Backend
  {
    name: "C#",
    slug: "csharp-custom",
    color: "512BD4",
    description: "Modern object-oriented programming language",
    category: "Backend",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "Node.js",
    slug: "nodedotjs",
    color: "5FA04E",
    description: "JavaScript runtime for scalable server-side applications",
    category: "Backend",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "Express",
    slug: "express",
    color: "000000",
    description: "Fast, unopinionated web framework for Node.js",
    category: "Backend",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: ".NET",
    slug: "dotnet",
    color: "512BD4",
    description: "Microsoft's development platform",
    category: "Backend",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  // Database
  {
    name: "MongoDB",
    slug: "mongodb",
    color: "47A248",
    description: "NoSQL database for flexible, scalable data storage",
    category: "Database",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "MySQL",
    slug: "mysql",
    color: "4479A1",
    description: "Reliable relational database management system",
    category: "Database",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Prisma",
    slug: "prisma",
    color: "2D3748",
    description: "Type-safe database toolkit and ORM",
    category: "Database",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  // Tools
  {
    name: "Git",
    slug: "git",
    color: "F05032",
    description: "Version control system for collaborative development",
    category: "Tools",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "GitHub",
    slug: "github",
    color: "181717",
    description: "Git repository hosting service",
    category: "Tools",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Bitbucket",
    slug: "bitbucket",
    color: "0052CC",
    description: "Git repository hosting service",
    category: "Tools",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Cursor",
    slug: "cursor",
    color: "000000",
    description: "AI-powered code editor",
    category: "Tools",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "VS Code",
    slug: "vscode",
    color: "007ACC",
    description: "Code editor for modern development",
    category: "Tools",
    proficiency: "Expert",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "Visual Studio",
    slug: "visualstudio",
    color: "5C2D91",
    description: "Integrated development environment",
    category: "Tools",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-0.5"
  },
  {
    name: "Jira",
    slug: "jira",
    color: "0052CC",
    description: "Project management and issue tracking",
    category: "Tools",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Postman",
    slug: "postman",
    color: "FF6C37",
    description: "API development and testing platform",
    category: "Tools",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Insomnia",
    slug: "insomnia",
    color: "4000BF",
    description: "API client for REST and GraphQL testing",
    category: "Tools",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Expo",
    slug: "expo",
    color: "1C2024",
    description: "Platform for building React Native applications",
    category: "Tools",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "Vite",
    slug: "vite",
    color: "646CFF",
    description: "Fast build tool for modern web development",
    category: "Tools",
    proficiency: "Intermediate",
    className: "bg-white",
    imageClassName: "p-1"
  },
  // Cloud
  {
    name: "Vercel",
    slug: "vercel",
    color: "000000",
    description: "Cloud platform for frontend deployment and hosting",
    category: "Cloud",
    proficiency: "Advanced",
    className: "bg-white",
    imageClassName: "p-1"
  },
  {
    name: "AWS",
    slug: "aws",
    color: "232F3E",
    description: "Cloud platform for backend deployment and hosting",
    category: "Cloud",
    proficiency: "Intermediate",
    imageClassName: "p-[3px]"
  },
  {
    name: "Azure",
    slug: "azure",
    color: "0078D4",
    description: "Cloud platform for backend deployment and hosting",
    category: "Cloud",
    proficiency: "Intermediate",
    imageClassName: "p-0.5"
  },
  {
    name: "Buildkite",
    slug: "buildkite",
    color: "000000",
    description: "Cloud platform for backend deployment and hosting",
    category: "Cloud",
    proficiency: "Intermediate",
    imageClassName: "p-1"
  },
]