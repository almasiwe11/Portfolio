import eCommerce from "/e-commerce.jpg"
import gameOfLife from "/gameOfLife.jpg"
import memory from "/memory.jpg"
import movie from "/movie.jpg"
import dictionary from "/dictionary.jpg"
import photosnap from "/photosnap.jpg"
import { skills } from "../../Skills/Skills"
import { TechType } from "../../Types/Types"

type ProjectType = {
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
    image: gameOfLife,
    name: "Game of Life - Habit Tracker",
    explanation:
      "Desktop Only! Habit Traker that I created for myself to be more consistent and to track my endeavors in different fields. React Redux for complex state management. React Router, Typescript for typesafety and Tailwind were used to complete this project. Code splitted for less bundle size.",
    alt: "habit tracker app screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "thegame-oflife.netlify.app",
    gitHubUrl: "https://github.com/almasiwe11/Game-of-Life",
  },
  {
    image: eCommerce,
    name: "eCommerce Website",
    explanation:
      "A Frontend Mentor design, an interactive multi page eCommerce website using React Router and Context API and useReducer for state management. Cart and checkout functionalities implemented. Code splitted for less bundle size.",
    alt: "eCommerce website screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://ecommerce-audio.netlify.app",
    gitHubUrl: "https://github.com/almasiwe11/Ecommerce",
  },
  {
    image: photosnap,
    name: "Website",
    explanation:
      "Frontend Mentor design, an ineeractive multipage website using React Router and reusable components. Code splitted for less bundle size.",
    alt: "Photosnap website screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://photosnap-frontendmentor.netlify.app",
    gitHubUrl: "https://github.com/almasiwe11/PhotoSnap",
  },
  {
    image: memory,
    name: "Multiplayer Memory Game",
    explanation:
      "Multiplayer Memory game, used Context API and useReducer for state management. Tracking best results in localStorage for a singleplayer.",
    alt: "Memory game screenshot",
    tech: [skills.react, skills.ts, skills.tailwind],
    liveUrl: "https://memory-game-frontend.netlify.app/",
    gitHubUrl: "https://github.com/almasiwe11/MemoryGame",
  },
  {
    image: movie,
    name: "Movies website",
    explanation:
      "Frontend Mentor design, Web Entertainment app with search and bookmark functionality. React Router for page navigation.",
    alt: "Movie site screenshot",
    tech: [skills.react, skills.sass],
    liveUrl: "https://movies-web-entertainment.netlify.app",
    gitHubUrl: "https://github.com/almasiwe11/Entertainment-WebApp",
  },
  {
    image: dictionary,
    name: "Dictionary API app",
    explanation:
      "Frontend Mentor design, a dictionary API app with a dark-light mode toggle. Used AbortController to cancel request when new letters are typed.",
    alt: "Dictionary app screenshot",
    tech: [skills.react, skills.sass],
    liveUrl: "https://mydictionary-webapplication.netlify.app",
    gitHubUrl: "https://github.com/almasiwe11/Dictionary",
  },
]

export { projects }
export type { ProjectType }
