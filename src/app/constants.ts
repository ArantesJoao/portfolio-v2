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
      "Contributed to Mercado Libre, the largest e-commerce and fintech ecosystem in Latin America, serving 140M+ users. Improved frontend performance and usability in a complex React/Next.js microservice environment, enhancing scalability and user experience across the platform.",
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