export const hero = {
  title: "Hey there, I'm David.",
  subtitle:
    "I’m a software engineer passionate about building fast, beautiful applications and websites.",
};

export const pinnedProjects = [
  {
    title: "Trackly",
    description:
      "A lightweight tool to help admissions counselors easily manage and track student documents throughout the admissions process.",
    imgSrc: "/icons/hexagon.svg",
    badgeText: "Full-Stack",
    cardVariant: "default",
    buttonText: "Learn more",
    buttonLink: "https://trackly-mcc.vercel.app/",
    target: "_blank"
  },
  {
    title: "Mapping wildfires using AVIRIS",
    description:
      "A wildfire mapping tool that uses AVIRIS hyperspectral data and fire detections to identify and visualize burned areas.",
    imgSrc: "/icons/earth.svg",
    badgeText: "Raster - Tiff",
    cardVariant: "secondary",
    buttonText: "Learn more",
    buttonLink:
      "https://github.com/DavidFonsecaG/palisades-fire-mapping-aviris-viirs/blob/main/notebooks/mapping_wildfires.ipynb",
    target: "_blank"
  },
  // {
  //   title: "AI Powered Email Assistant",
  //   description:
  //     "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
  //   imgSrc: "/icons/at-sign.svg",
  //   badgeText: "Retrieval Augmented Generation",
  //   cardVariant: "secondary",
  //   buttonText: "Learn more",
  //   buttonLink: "/projects/email-ai",
  //   target: "_self"
  // },
] as const;

export const about = {
  title: "A bit about me.",
  description:
    "Hey, I'm David, a software engineer and recently graduated from National Louis University, where I did my undergraduate studies in computer science. I have a huge passion for quality software, beautiful user interfaces, and automation. I've been coding for over 4 years, working on projects ranging anywhere from desktop and mobile applications to websites and web APIs, many of which you'll find here on my site.",
};

export const experiences = [
  {
    imgSrc: "images/nlu.jpg",
    year: "2022 - 2025",
    company: "National Louis University",
    role: "Bachelor of Science, Computer Science",
    achivement: "Member of the National Society of leadership and success",
    type: "education",
  },
  {
    imgSrc: "images/utp.jpg",
    year: "2021 - 2021",
    company: "Technological University of Pereira",
    role: "Certificate in Web Development",
    achivement: "GPA 4.0",
    type: "education",
  },
  {
    imgSrc: "images/mcc.jpg",
    year: "2019 - 2021",
    company: "Midwestern Career College",
    role: "Business Administration",
    achivement: "GPA 4.0",
    type: "education",
  },
  {
    imgSrc: "images/nasa_tops.jpg",
    year: "2024 - 2024",
    company: "NASA TOPS project",
    role: "Member",
    achivement: "Open science 101 - Nominated by NLU",
    type: "organization",
  },
  {
    imgSrc: "images/nsls.jpg",
    year: "2023 - 2025",
    company: "Society of Leadership and Success",
    role: "Member",
    achivement: "Nominated by NLU",
    type: "organization",
  },
  {
    imgSrc: "images/columbia_university.jpg",
    year: "2024 - 2025",
    company: "Columbia University",
    role: "Software Developer Intern",
    achivement:
      "Internship through NLU in collaboration with NASA for the TOPS project",
    type: "work",
  },
  {
    imgSrc: "images/mcc.jpg",
    year: "2019 - 2021",
    company: "Midwestern Career College.",
    role: "International Admissions",
    achivement: "Student worker",
    type: "work",
  },
] as const;

export const projects = {
  applications: [
    {
      title: "Trackly",
      description:
        "A lightweight tool to help admissions counselors easily manage and track student documents throughout the admissions process.",
      cardVariant: "pastel_2",
      buttonLink: "https://trackly-mcc.vercel.app",
      target: "_blank",
    },
    {
      title: "AI Powered Email Assistant",
      description:
        "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
      cardVariant: "pastel_1",
      buttonLink: "https://github.com/DavidFonsecaG/email-assistant",
      target: "_blank",      
    },
    {
      title: "Mapping Wildfires using AVIRIS",
      description:
        "Utilizes satellite imagery (AVIRIS) to detect and map wildfire burn areas with geospatial processing and machine learning.",
      cardVariant: "pastel_1",
      buttonLink: "https://github.com/DavidFonsecaG/palisades-fire-mapping-aviris-viirs/blob/main/notebooks/mapping_wildfires.ipynb",
      target: "_blank",      
    },
    {
      title: "Queue Management System",
      description:
        "A system to manage customer queues efficiently, allowing users to take numbers and receive notifications when it's their turn.",
      cardVariant: "pastel_2",
      buttonLink: "/projects/queue-management-system",
      target: "_self",      
    },
    {
      title: "Applicant Submission App",
      description:
        "A web application designed to streamline the applicant submission process.",
      cardVariant: "pastel_2",
      buttonLink: "/projects/applicant-submission-app",
      target: "_self",      
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with Svelte to showcase projects and skills.",
      cardVariant: "pastel_3",
      buttonLink: "/",
      target: "_self",      
    },
  ] as const,
  analytics: [
    {
      title: "Palisades Fire Mapping",
      description:
        "Focuses on mapping burned areas from wildfires using hyperspectral data, enhancing disaster response strategies.",
      cardVariant: "pastel_1",
      buttonLink: "https://github.com/DavidFonsecaG/palisades-fire-mapping-aviris-viirs/blob/main/notebooks/mapping_wildfires.ipynb",
      target: "_blank",      
    },
    {
      title: "Music Trends During Election Cycles",
      description:
        "Analyzed Spotify data to explore how music popularity, danceability, and genres shift during U.S. election years.",
      cardVariant: "pastel_2",
      buttonLink: "https://github.com/DavidFonsecaG/Open-Science-101/tree/main/Group-Projects/Music%20Trends%20During%20Election%20Cycles%20-%20Spotify",
      target: "_blank",      
    },
  ] as const,
} as const;
