export const hero = {
    title: "Hey there, I'm David.",
    subtitle: "I’m a software engineer passionate about building fast, beautiful applications and websites.",
};

export const projects = [
  {
    title: "AI Powered Email Assistant",
    description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
    imgSrc: "/icons/at-sign.svg",
    badgeText: "Retrieval Augmented Generation",
    cardVariant: "default",
    buttonText: "Learn more",
    buttonLink: "/email-ai"
  },
  {
    title: "Mapping wildfires using AVIRIS",
    description: "An AI-powered email assistant that connects to Outlook to summarize emails, show past context, and suggest replies.",
    imgSrc: "/icons/earth.svg",
    badgeText: "Raster - Tiff",
    cardVariant: "secondary",
    buttonText: "Learn more",
    buttonLink: "/mapping-wildfire"
  }
] as const;

export const about = {
  title: "A bit about me.",
  description: "Hey, I'm David, a software engineer and recently graduated from National Louis University, where I did my undergraduate studies in computer science. I have a huge passion for quality software, beautiful user interfaces, and automation. I've been coding for over 4 years, working on projects ranging anywhere from desktop and mobile applications to websites and web APIs, many of which you'll find here on my site.",
};

export const experiences = [
  { 
    imgSrc: "nlu.jpg",
    year: "2022 - 2025",
    company: "National Louis University", 
    role: "Bachelor of Science, Computer Science", 
    achivement: "Member of the National Society of leadership and success",
    type: "education"
  },
  { 
    imgSrc: "utp.jpg",
    year: "2021 - 2021",
    company: "Technological University of Pereira", 
    role: "Certificate in Web Development", 
    achivement: "Some text here",
    type: "education"
  },
  { 
    imgSrc: "mcc.jpg",
    year: "2019 - 2021",
    company: "Midwestern Career College", 
    role: "Business Administration", 
    achivement: "GPA 4.0",
    type: "education"
  },
  { 
    imgSrc: "nasa_tops.jpg",
    year: "2024",
    company: "NASA TOPS project", 
    role: "Member", 
    achivement: "Nominated by NLU",
    type: "organization"
  },
  { 
    imgSrc: "nsls.jpg",
    year: "2023 - 2025",
    company: "Society of Leadership and Success", 
    role: "Member", 
    achivement: "Nominated by NLU",
    type: "organization"
  },
  { 
    imgSrc: "columbia_university.jpg",
    year: "2024 - 2025",
    company: "Columbia University", 
    role: "Research Intern", 
    achivement: "Internship through NLU in collaboration with NASA for the TOPS project",
    type: "work"
  },
  { 
    imgSrc: "mcc.jpg",
    year: "2019 - 2021",
    company: "Midwestern Career College.", 
    role: "International Admissions", 
    achivement: "Student worker",
    type: "work"
  },
] as const;
