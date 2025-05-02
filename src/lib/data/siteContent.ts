import { AtSign, LocateFixed } from 'lucide-svelte';

export const hero = {
    title: "Hey there, I'm David.",
    subtitle: "I’m a software engineer passionate about building fast, beautiful applications and websites.",
};

export const projects = [
  {
    title: "AI Powered Email Assistant",
    description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
    imageSrc: "email-ai.png",
    imageAlt: "email-ai",
    badgeText: "Retrieval Augmented Generation",
    svgIcon: AtSign,
    cardVariant: "default",
    buttonText: "Learn more",
    buttonLink: "/email-ai"
  },
  {
    title: "Mapping wildfires using AVIRIS",
    description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
    imageSrc: "email-ai.png",
    imageAlt: "wildfire",
    badgeText: "Raster - Tiff",
    svgIcon: LocateFixed,
    cardVariant: "secondary",
    buttonText: "Learn more",
    buttonLink: "/mapping-wildfire"
  }
];

export const about = {
  name: "David Fonseca",
  role: "Data Scientist & AI Developer",
  bio: "Passionate about building intelligent tools that solve real-world problems.",
};

export const experiences = [
  { company: "MCC", role: "Admissions Advisor", year: "2023–Present" },
  { company: "NASA Open Science", role: "Fellow", year: "2024" }
];
