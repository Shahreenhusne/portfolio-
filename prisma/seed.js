const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const projects = [
  {
    title: "CryptoCap",
    category: "Crypto Tracker",
    description: "A crypto tracking website built with the CoinGecko open API.",
    tags: ["React", "Framer Motion"],
    imageUrl: "/img/Crytocap.png",
    githubUrl: "https://github.com/TejasBhovad/promptopia",
    demoUrl: "https://cryptocapbd.netlify.app/",
    confidential: false,
    featured: true,
    order: 1,
  },
  {
    title: "School Dashboard",
    category: "Admin Dashboard",
    description: "A Next.js school management dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/img/Dashboard.png",
    githubUrl: "https://github.com/Shahreenhusne?tab=repositories",
    demoUrl: null,
    confidential: false,
    featured: true,
    order: 2,
  },
  {
    title: "Indoor Plants",
    category: "Static Showcase",
    description: "An animated static site built with React, Tailwind, and SCSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: "/img/Indoorplants.png",
    githubUrl: "https://github.com/Shahreenhusne/Indoor-Plants",
    demoUrl: "https://indoplants.netlify.app/#popular",
    confidential: false,
    featured: true,
    order: 3,
  },
  {
    title: "Guess the Word",
    category: "Word Game",
    description: "A simple word-guessing game built with Next.js and the Wordnik API.",
    tags: ["Next.js", "Wordnik API"],
    imageUrl: "/img/Wordnik.png",
    githubUrl: "https://github.com/Shahreenhusne/Guess-The-Word",
    demoUrl: "https://guess-the-word-ep6k3v683-shahreens-projects.vercel.app/",
    confidential: false,
    featured: true,
    order: 4,
  },
  {
    title: "VTMERCH",
    category: "E-Commerce",
    description: "A clothing website homepage.",
    tags: ["React", "Tailwind"],
    imageUrl: "/img/Vtmerch.png",
    githubUrl: "https://github.com/Shahreenhusne/VTMERCH",
    demoUrl: null,
    confidential: false,
    featured: true,
    order: 5,
  },
  {
    title: "Django API",
    category: "REST API",
    description: "A basic Django REST API.",
    tags: ["Django"],
    imageUrl: "/img/link.png",
    githubUrl: "https://github.com/Shahreenhusne/Django",
    demoUrl: null,
    confidential: false,
    featured: true,
    order: 6,
  },
  {
    title: "To Do List",
    category: "Productivity App",
    description: "A simple to-do list built with Redux Toolkit.",
    tags: ["React", "Redux Toolkit"],
    imageUrl: "/img/Todo.png",
    githubUrl: "https://github.com/Shahreenhusne/To-Do-List-with-Redux",
    demoUrl: null,
    confidential: false,
    featured: true,
    order: 7,
  },
  {
    title: "Ahar24",
    category: "Food Delivery",
    description: "A food delivery app.",
    tags: ["React", "Node"],
    imageUrl: "/img/Ahar24.png",
    githubUrl: "https://github.com/Shahreenhusne/Ahar24",
    demoUrl: null,
    confidential: false,
    featured: true,
    order: 8,
  },
  {
    title: "ArtBoard",
    category: "Collaboration Tool",
    description: "A collaborative art board.",
    tags: ["React", "Tailwind CSS"],
    imageUrl: "/img/ArtBoard.png",
    githubUrl: "https://github.com/Shahreenhusne/Art-Board",
    demoUrl: null,
    confidential: false,
    featured: false,
    order: 9,
  },
  {
    title: "ChatApp",
    category: "AI Chat App",
    description: "A chat app using the OpenAI API.",
    tags: ["Next-Auth", "Firestore"],
    imageUrl: "/img/ChatApp.png",
    githubUrl: "https://github.com/Shahreenhusne/chatapp-with-openAi",
    demoUrl: null,
    confidential: false,
    featured: false,
    order: 10,
  },
];

// TODO: replace the placeholder "company"/"location"/"link" values below with the real employer details.
const experience = [
  {
    role: "Frontend Developer",
    company: "AaladinAI",
    location: "Remote",
    description:
      "Develop and optimize the CityPass Admin Dashboard using React, React Router DOM, and Tailwind CSS, integrating JWT-secured APIs from Java Spring Boot microservices to reduce manual administrative workload by 35% and accelerate task completion by 25% through secure, role-based workflows. Implement and enhance real-time chat modules with React Chatbots and interactive analytics dashboards using Recharts, targeting a 30% improvement in issue resolution time and 20% faster dashboard data loading while continuously improving frontend scalability, maintainability, and user experience.",
    techStack: [
      "React",
      "React Router DOM",
      "Tailwind CSS",
      "Java Spring Boot",
      "JWT",
      "React Chatbots",
      "Recharts",
    ],
    link: null,
    startDate: "Nov 2025",
    endDate: "Present",
    isEarlierRole: false,
    order: 1,
  },

  {
    role: "Associate Software Engineer",
    company: "Openhaus",
    location: "Remote",
    description:
      "Optimized component structures and integrated real-time functionality into the Superdash Moderator and Admin Dashboards, improving administrative workflow efficiency by 40%. Developed unit tests and automated testing processes using Python scripts, increasing test coverage by 25% and reducing manual QA effort. Implemented real-time property listings, responsive interfaces, and secure authentication with NextAuth.js for the UDDL Real Estate website, enhancing its interactivity, scalability, and overall user experience.",
    techStack: [
      "React",
      "Next.js",
      "NextAuth.js",
      "Tailwind CSS",
      "Python",
      "JavaScript",
    ],
    link: null,
    startDate: "Feb 2024",
    endDate: "Sep 2024",
    isEarlierRole: false,
    order: 2,
  },

  {
    role: "Trainee Software Engineer",
    company: "Openhaus",
    location: "Remote",
    description:
      "Built scalable and SEO-friendly web applications using React.js and Next.js with SSR and SSG. Designed interactive, responsive, and accessible UI components with Tailwind CSS and Framer Motion, while using Context API for state management and integrating third-party APIs. Collaborated within Agile development teams, maintained Git workflows, and actively participated in code reviews to ensure code quality and maintainability.",
    techStack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "Git",
    ],
    link: null,
    startDate: "Jul 2023",
    endDate: "Jan 2024",
    isEarlierRole: true,
    order: 3,
  },

  {
    role: "Intern",
    company: "Concord Group",
    location: "Remote",
    description:
      "Contributed to websites including CALAN and DO using Bootstrap 4, jQuery, C#, and SQL Server, improving frontend performance and optimizing database queries to reduce page load times by 30%. Assisted in developing the Lake City School Project interface and enhancing its responsiveness, resulting in a 50% reduction in load time and a 40% increase in daily active users.",
    techStack: [
      "Bootstrap 4",
      "jQuery",
      "JavaScript",
      "C#",
      "SQL Server",
    ],
    link: null,
    startDate: "Oct 2022",
    endDate: "Jan 2023",
    isEarlierRole: true,
    order: 4,
  },
];

// TODO: these entries are built from a quick verbal summary — confirm exact roles,
// dates, and descriptions before treating this as final public content.
const activities = [
  {
    title: "Centre for Emotional Intelligence & Innovation (CEII) ",
    role: "Student Volunteer (BRAC)",
    category: "Volunteering",
    badge: "Volunteer",
    description: "Volunteered with BRAC's Sanjibon Blood Center, supporting donor coordination and blood donation awareness drives.",
    startDate: "2018",
    endDate: "2019",
    order: 1,
  },
 
  {
    title: "Pixel Act",
    role: "Client Services Executive (Part-time)",
    category: "Startups",
    badge: "Startup",
    description: "Organized the “Shonjibon Blood Donation Camp” at BRAC University in March 2019, managing event database records, coordinating sponsorship meetings, and collaborating with Quantum Blood Bank to ensure the successful planning and execution of the event.",
    startDate: "2021",
    endDate: "2022",
    order: 2,
  },
  {
    title: "Private Tutoring",
    role: "Tutor",
    category: "Startups",
    badge: "Tutoring",
    description: "Experienced in tutoring students from both the NCTB and English-medium curricula, providing personalized academic support based on individual learning needs. Assisted students in understanding core concepts, completing coursework, preparing for examinations, and developing stronger problem-solving and communication skills.",
    startDate: "2019",
    endDate: "2022",
    order: 3,
  },
  {
    title: "RPG Interface Lab,",
    role: "Institutional Ambassador, Brac University ",
    category: "Certificates",
    badge: "Certificate",
    description: "Received a certificate of recognition for a research publication.",
    startDate: "2020",
    endDate: "2023",
    order: 4,
  },
];

async function main() {
  await prisma.project.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.experience.deleteMany();

  await prisma.project.createMany({ data: projects });
  await prisma.experience.createMany({ data: experience });
  await prisma.activity.createMany({ data: activities });

  console.log(
    `Seeded ${projects.length} projects, ${experience.length} experience entries, and ${activities.length} activities.`
  );
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
