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
      "Desktop Only! Habit Traker that I created for myself to be more consistent and to track my progress in different fields. React Redux for complex state management. React Router, typescript for typesafety and tailwind were used to complete this project.",
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
      "A Frontend Mentor design, an interactive ecommerce site using React Router and Context API and useReducer for state management.",
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
      "Frontend Mentor design, an ineeractive multipage website using React Router and reusable components.",
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
      "Multiplayer Memory game, used Context API and useReducer for state management. Tracking best results in localStorage for a singleplayer.",
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
      "Frontend Mentor design, Web Entertainment app with search and bookmark functionality. React Router for page navigation.",
    alt: "Movie site screenshot",
    tech: [skills.react, skills.sass],
    liveUrl: "https://elegant-douhua-dccc2e.netlify.app/",
    gitHubUrl: "https://github.com/almasiwe11/Entertainment-WebApp",
  },
]

export { projects }
export type { ProjectType }
