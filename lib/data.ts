import covo from "@/public/FirstProject.png";
import lucid from "@/public/SecondProject.png";
import bby from "@/public/ThirdProject.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Covo Components",
    description:
      "A collection of reusable components for React. It has components like buttons, modals, and form inputs.",
    tags: ["React", "Next.js", "Figma", "Tailwind"],
    imageUrl: covo,
    href: "https://www.covo-components.co.uk/",
  },
  {
    title: "Lucid Board",
    description:
      "A full stack sass web app for creating and managing tasks. It has features like drag and drop, and task assignments.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "MySQL",
      "Stripe",
      "Prisma",
      "Clerk Auth",
    ],
    imageUrl: lucid,
    href: "https://next13-lucid-master-black.vercel.app/",
  },
  {
    title: "BBY London Clinic",
    description:
      "A website for a private clinic in London. It has features like booking appointments, and a blog.",
    tags: ["React", "Next.js", "Figma", "Tailwind", "Framer"],
    imageUrl: bby,
    href: "https://www.bbylondonclinic.co.uk/",
  },
] as const;
