export const hero = {
    title: "Hey there, I'm David.",
    subtitle: "I’m a software engineer passionate about building fast, beautiful applications and websites.",
};

export const pinnedProjects = [
  {
    title: "AI Powered Email Assistant",
    description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
    imgSrc: "/icons/at-sign.svg",
    badgeText: "Retrieval Augmented Generation",
    cardVariant: "default",
    buttonText: "Learn more",
    buttonLink: "/projects/email-ai"
  },
  {
    title: "Mapping wildfires using AVIRIS",
    description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
    imgSrc: "/icons/earth.svg",
    badgeText: "Raster - Tiff",
    cardVariant: "secondary",
    buttonText: "Learn more",
    buttonLink: "https://ciesin-geospatial.github.io/TOPSTSCHOOL-disasters/m304a-viirs-wildfires.html"
  }
] as const;

export const about = {
  title: "A bit about me.",
  description: "Hey, I'm David, a software engineer and recently graduated from National Louis University, where I did my undergraduate studies in computer science. I have a huge passion for quality software, beautiful user interfaces, and automation. I've been coding for over 4 years, working on projects ranging anywhere from desktop and mobile applications to websites and web APIs, many of which you'll find here on my site.",
};

export const experiences = [
  { 
    imgSrc: "images/nlu.jpg",
    year: "2022 - 2025",
    company: "National Louis University", 
    role: "Bachelor of Science, Computer Science", 
    achivement: "Member of the National Society of leadership and success",
    type: "education"
  },
  { 
    imgSrc: "images/utp.jpg",
    year: "2021 - 2021",
    company: "Technological University of Pereira", 
    role: "Certificate in Web Development", 
    achivement: "GPA 4.0",
    type: "education"
  },
  { 
    imgSrc: "images/mcc.jpg",
    year: "2019 - 2021",
    company: "Midwestern Career College", 
    role: "Business Administration", 
    achivement: "GPA 4.0",
    type: "education"
  },
  { 
    imgSrc: "images/nasa_tops.jpg",
    year: "2024 - 2024",
    company: "NASA TOPS project", 
    role: "Member", 
    achivement: "Open science 101 - Nominated by NLU",
    type: "organization"
  },
  { 
    imgSrc: "images/nsls.jpg",
    year: "2023 - 2025",
    company: "Society of Leadership and Success", 
    role: "Member", 
    achivement: "Nominated by NLU",
    type: "organization"
  },
  { 
    imgSrc: "images/columbia_university.jpg",
    year: "2024 - 2025",
    company: "Columbia University", 
    role: "Research Intern", 
    achivement: "Internship through NLU in collaboration with NASA for the TOPS project",
    type: "work"
  },
  { 
    imgSrc: "images/mcc.jpg",
    year: "2019 - 2021",
    company: "Midwestern Career College.", 
    role: "International Admissions", 
    achivement: "Student worker",
    type: "work"
  },
] as const;

export const projects = {
  applications: [
    {
      title: "AI Powered Email Assistant",
      description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
      cardVariant: "pastel_2",
      buttonLink: "email-ai"
    },
    {
      title: "Mapping Wildfires using AVIRIS",
      description: "Utilizes satellite imagery (AVIRIS) to detect and map wildfire burn areas with geospatial processing and machine learning.",
      cardVariant: "pastel_1",
      buttonLink: "mapping-wildfire"
    },
    {
      title: "Queue Management System",
      description: "A system to manage customer queues efficiently, allowing users to take numbers and receive notifications when it's their turn.",
      cardVariant: "pastel_2",
      buttonLink: "queue-management-system"
    },
    {
      title: "Applicant Submission App",
      description: "A web application designed to streamline the applicant submission process.",
      cardVariant: "pastel_2",
      buttonLink: "applicant-submission-app"
    },
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website built with Svelte to showcase projects and skills.",
      cardVariant: "pastel_3",
      buttonLink: "personal-portfolio"
    }
  ] as const,
  analytics: [
    {
      title: "Palisades Fire Mapping",
      description: "Focuses on mapping burned areas from wildfires using hyperspectral data, enhancing disaster response strategies.",
      cardVariant: "pastel_1",
      buttonLink: "palisades-fire-mapping"
    },
    {
      title: "Music Trends During Election Cycles",
      description: "Analyzed Spotify data to explore how music popularity, danceability, and genres shift during U.S. election years.",
      cardVariant: "pastel_2",
      buttonLink: "spotify-election-trends"
    }
  ] as const,
} as const;
