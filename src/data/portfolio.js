export const personal = {
  name: "Sandeepa Rathnayaka",
  roles: ["QA Engineer", "Fullstack Developer", "Software Engineer"],
  phone: "+94 78 30 96 330",
  email: "sandeeparathnayaka20@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandeepa-rathnayaka",
  github: "https://github.com/Sandeepa-Rathnayaka",
  location: "Sri Lanka",
  bio: "Passionate software engineer specializing in QA, fullstack development, and AI/ML solutions. I build systems that are reliable, scalable, and tested to perfection.",
};

export const experience = [
  {
    role: "Trainee Software Engineer",
    company: "SYIGEN (PRIVATE) LIMITED",
    period: "2024 – 2025",
    items: [
      {
        type: "QA",
        title: "Quality Assurance – Doc Manager App for Law Firm",
        desc: "Contributed to evaluating document management processes to ensure secure storage and proper access control. Performed testing on user roles and permissions to maintain accurate authorization levels. Assisted in identifying improvements to enhance data confidentiality, system integrity, and overall security.",
      },
      {
        type: "QA",
        title: "Quality Assurance – Invoice Management System",
        desc: "Performed comprehensive QA activities to ensure functionality, reliability, and performance. Designed and executed detailed test cases, identified bugs, and reported issues with clear documentation.",
      },
      {
        type: "DEV",
        title: "Web App – FlowBoard Project Management Tool",
        desc: "A web-based task management system built with Next.js, Supabase, Prisma, and Node.js. Features include user authentication, role-based access, real-time updates, file uploads (Cloudinary), to-do-list, calendar views and a responsive UI.",
      },
      {
        type: "DEV",
        title: "Web App – Doc Manager App for Law Firm",
        desc: "A role-based legal document and case management system enabling lawyers to create and manage cases, admins to review and approve them, with secure document handling, PDF export — built using Laravel, PHP, MySQL, Tailwind CSS.",
      },
    ],
  },
];

export const education = [
  {
    degree: "BSc. (Hons) Information Technology",
    specialization: "Specializing in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology",
    period: "2021 – 2025",
  },
];

export const certifications = [
  { name: "Generative AI", issuer: "Sololearn", year: "2024" },
  { name: "RAG Course for Beginners", issuer: "Simplilearn", year: "2024" },
  { name: "Introduction to Programming using Python", issuer: "University of Moratuwa", year: "2023" },
  { name: "Programming with React + Redux", issuer: "Sololearn", year: "2023" },
  { name: "Web Designing for Beginners", issuer: "University of Moratuwa", year: "2023" },
];

export const projects = [
  {
    title: "CocoTech",
    subtitle: "IoT & AI-Driven Coconut Farm Automation",
    desc: "Final year research project. Designed the Copra Drying Time Prediction system — an IoT-integrated solution. Collected real-time moisture data using ESP32 sensors and integrated external weather APIs. Trained ML models (Random Forest, Gradient Boosting) for optimal drying duration estimates.",
    tags: ["Python", "ML", "IoT", "React Native", "ESP32", "Research"],
    type: "Mobile + IoT",
    links: [
      { label: "Research Paper", url: "https://www.propulsiontechjournal.com/index.php/journal/article/view/9273" },
      { label: "Frontend", url: "https://github.com/Sandeepa-Rathnayaka/CocoTech-frontend" },
      { label: "IoT", url: "https://github.com/Sandeepa-Rathnayaka/CocoTech-IoT" },
    ],
    featured: true,
  },
  {
    title: "FlowBoard",
    subtitle: "Project Management Tool",
    desc: "A web-based task management system enabling users to create, manage, and track tasks with subtasks. Features include user authentication, role-based access, real-time updates, file uploads, calendar views and responsive UI for seamless collaboration.",
    tags: ["Next.js", "Supabase", "Prisma", "Node.js", "Cloudinary"],
    type: "Web App",
    links: [],
    featured: true,
  },
  {
    title: "ChatBot Buddy",
    subtitle: "AI Chatbot for Lecture Notes",
    desc: "A Python-based system leveraging advanced AI for a smart Q&A chatbot over lecture materials. Enables efficient retrieval from multiple PDFs using a RAG (Retrieval-Augmented Generation) architecture with an interactive Jupyter interface.",
    tags: ["Python", "RAG", "AI", "LangChain", "PDF"],
    type: "AI/ML",
    links: [
      { label: "GitHub", url: "https://github.com/Sandeepa-Rathnayaka/ChatbotBuddy" },
    ],
    featured: true,
  },
  {
    title: "Hospital Management System",
    subtitle: "Comprehensive MERN Stack Solution",
    desc: "A comprehensive system with lab report management and laboratory inventory. Supports 8+ functions including patient management, doctor management, lab reports, online channeling, pharmacy, room management, inventory, and payments.",
    tags: ["MongoDB", "Express", "React", "Node.js", "MERN"],
    type: "Web App",
    links: [
      { label: "GitHub", url: "https://github.com/Sandeepa-Rathnayaka/Hospital-Management-System" },
    ],
    featured: false,
  },
  {
    title: "EduCode",
    subtitle: "Educational Programming Environment",
    desc: "A voice recognition system within a code learning environment. Allows users to orally explain code beyond standard keyboard input, transforming spoken words into programming language syntax using cutting-edge voice recognition.",
    tags: ["React", "Voice Recognition", "Education", "Research"],
    type: "Web App",
    links: [
      { label: "Research Paper", url: "https://www.propulsiontechjournal.com/index.php/journal/article/view/2458" },
    ],
    featured: false,
  },
  {
    title: "NASA API Explorer",
    subtitle: "Astronomy Data Visualization",
    desc: "Integrates NASA's APIs granting access to diverse astronomy data including CME analyses, Mars Rover Photos, and Astronomy Picture of the Day. Includes user authentication and session management for personalization.",
    tags: ["React", "NASA API", "Authentication", "Data Viz"],
    type: "Web App",
    links: [
      { label: "GitHub", url: "https://github.com/Sandeepa-Rathnayaka/NASA-API" },
    ],
    featured: false,
  },
  {
    title: "Doc Manager for Law Firm",
    subtitle: "Legal Document Management System",
    desc: "A role-based legal document and case management system. Enables lawyers to create and manage cases, admins to review and approve, with secure document handling, upload, organization, and PDF export features.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    type: "Web App",
    links: [],
    featured: false,
  },
  {
    title: "Divisional Secretary App",
    subtitle: "Government Certificate Management",
    desc: "Streamlines government certificate issuance with features to apply, edit, delete, and search certificates. Real-time status updates and an admin dashboard for reviewing and verifying applications.",
    tags: ["Mobile", "React Native", "Government", "Real-time"],
    type: "Mobile App",
    links: [
      { label: "GitHub", url: "https://github.com/Sandeepa-Rathnayaka/Divisional-Secretary-App" },
    ],
    featured: false,
  },
];

export const skills = {
  "Web Development": ["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Laravel", "PHP", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  "AI / ML": ["Python", "RAG Architecture", "Generative AI", "AI Agents", "ML Algorithms", "LangChain"],
  "Mobile": ["React Native", "Kotlin"],
  "Databases": ["MySQL", "MongoDB", "SQL Server", "Firebase", "Supabase"],
  "Languages": ["JavaScript", "Java", "Python", "PHP", "C"],
  "Tools & IDEs": ["Git", "Figma", "Postman", "VS Code", "Android Studio", "Jupyter Notebook", "ThunderClient"],
  "QA": ["Test Case Design", "Bug Reporting", "User Acceptance Testing", "Security Testing", "Performance Testing"],
};
