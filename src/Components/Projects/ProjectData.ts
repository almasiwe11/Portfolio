import eCommerce from "/e-commerce.jpg"
import gameOfLife from "/gameOfLife.jpg"
import memory from "/memory.jpg"
import movie from "/movie.jpg"
import photosnap from "/photosnap.jpg"
import { skills } from "../../Skills/Skills"
import { TechType } from "../../Types/Types"

type ProjectType = {
  featured: boolean
  image: string
  name: string
  explanation: string
  tech: TechType[]
  liveUrl: string
  alt: string
  gitHubUrl: string
}

const projects: ProjectType[] = [
  {
    featured: true,
    image: gameOfLife,
    name: "Game of Life - Habit Tracker",
    explanation:
      "Retactic is a Cybersecurity as a Service Startup. Our goal for this website was to elevate the brnad's visibility and maximize watlist conversions.",
    alt: "habit tracker app screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://gorgeous-crumble-52bc11.netlify.app/",
    gitHubUrl: "https://github.com/almasiwe11/Game-of-Life",
  },
  {
    featured: false,
    image: eCommerce,
    name: "e-Commerce Website",
    explanation:
      "Retactic is a Cybersecurity as a Service Startup. Our goal for this website was to elevate the brnad's visibility and maximize watlist conversions.",
    alt: "eCommerce website screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://app.netlify.com/sites/flourishing-donut-bc8a74",
    gitHubUrl: "https://github.com/almasiwe11/Ecommerce",
  },
  {
    featured: false,
    image: photosnap,
    name: "Website",
    explanation:
      "Retactic is a Cybersecurity as a Service Startup. Our goal for this website was to elevate the brnad's visibility and maximize watlist conversions.",
    alt: "Photosnap website screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://singular-platypus-8dcc09.netlify.app/",
    gitHubUrl: "https://github.com/almasiwe11/PhotoSnap",
  },
  {
    featured: false,
    image: memory,
    name: "Multiplayer Memory Game",
    explanation:
      "Retactic is a Cybersecurity as a Service Startup. Our goal for this website was to elevate the brnad's visibility and maximize watlist conversions.",
    alt: "Memory game screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://sage-crumble-d1145b.netlify.app/",
    gitHubUrl: "https://github.com/almasiwe11/MemoryGame",
  },
  {
    featured: false,
    image: movie,
    name: "Movies website",
    explanation:
      "Retactic is a Cybersecurity as a Service Startup. Our goal for this website was to elevate the brnad's visibility and maximize watlist conversions.",
    alt: "Movie site screenshot",
    tech: [skills.react, skills.sass],
    liveUrl: "https://elegant-douhua-dccc2e.netlify.app/",
    gitHubUrl: "https://github.com/almasiwe11/Entertainment-WebApp",
  },
]

export { projects }
export type { ProjectType }
