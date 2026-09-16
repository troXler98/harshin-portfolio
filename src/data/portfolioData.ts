import { Experience, Project, Education, Certification } from '../types';

export const PERSONAL_INFO = {
  name: "Harshin Kailas K",
  shortName: "HARSHIN",
  tagline: "MBA (Marketing & Logistics) · BCA Foundation",
  location: "Malappuram, Kerala, India",
  email: "kailasharshin@gmail.com",
  roles: [
    "Marketing & Logistics Operations",
    "Supply Chain & Process Support",
    "Technical & IT",
    "BCA + MBA (Marketing & Logistics)"
  ],
  bioBullets: [
    "MBA graduate with a Dual Specialisation in Marketing and Logistics, built on a solid BCA (Computer Applications) foundation.",
    "Combines marketing operations, distribution network coordination, and freight forwarding/supply chain workflows with technical IT support grounding.",
    "Practical experience in documentation management, ERP systems, dealer/vendor relations, and cross-functional team coordination gained through internships at Cubes International Logistics and Kerala Feeds Ltd.",
    "Technical grounding in Python & Flask, SQLite databases, Cisco networking fundamentals, Android development (Jetpack Compose), and Generative AI workflows.",
    "Strong analytical foundation backed by advanced MS Excel and SPSS statistical hypothesis testing (Chi-Square Analysis) to deliver structured management reporting."
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/134879544?v=4",
  links: {
    linkedin: "https://www.linkedin.com/in/harshin-kailas",
    github: "https://github.com/troXler98",
    email: "mailto:kailasharshin@gmail.com",
    resume: "#resume-modal",
  }
};

export const EXPERIENCES: Experience[] = [
  {
    id: "cubes-logistics",
    company: "Cubes International Logistics",
    role: "Freight Forwarding Intern",
    period: "Apr 2026 – May 2026",
    duration: "2 mos",
    location: "Kochi, Kerala",
    logoText: "CIL",
    logoBg: "bg-blue-600",
    bullets: [
      "Supported day-to-day freight forwarding operations by coordinating cross-functional internal teams and external logistics stakeholders to ensure accurate, on-time processing of operational records.",
      "Maintained, verified, and audited operational documentation using enterprise ERP tracking software — gaining practical hands-on exposure to enterprise software systems.",
      "Handled direct client and vendor communications, resolving real-time operational queries and tracking updates."
    ]
  },
  {
    id: "kerala-feeds",
    company: "Kerala Feeds Ltd",
    role: "Marketing Intern",
    period: "Nov 2025 – Dec 2025",
    duration: "2 mos",
    location: "Thrissur, Kerala",
    logoText: "KFL",
    logoBg: "bg-emerald-600",
    bullets: [
      "Coordinated with dealers and internal sales teams to ensure smooth day-to-day operations and synchronized communication across the distribution network.",
      "Provided administrative, operational, and scheduling support to the marketing division, assisting with daily coordination, MIS reporting, and dealer follow-ups.",
      "Strengthened organizational, scheduling, and multi-stakeholder coordination skills in a high-velocity business setting."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "adbot",
    title: "AdBot — Admission Help System Chatbot",
    tagline: "BCA Final Year Capstone Project",
    category: "Full-Stack & ML",
    description: "Built an intelligent automated chatbot for college admission-test queries using a dual-engine architecture: a rule-based engine with SQLite3 for instant FAQ lookups, and an NLP-based machine learning engine with NLTK and Scikit-learn for intent classification.",
    technologies: ["Python 3", "Flask", "SQLite", "HTML/CSS", "NLTK", "Scikit-learn"],
    liveUrl: "#",
    githubUrl: "https://github.com/troXler98",
    featured: true,
    bulletPoints: [
      "Designed and integrated dual response mechanisms: deterministic SQLite rule matching for structured queries, with automated fallback to NLP intent classification.",
      "Engineered the full application stack using Python Flask for backend REST endpoints and custom responsive HTML/CSS for the chat interface.",
      "Trained and evaluated text classification models with NLTK tokenization and Scikit-learn feature extraction for accurate user intent detection."
    ],
    metrics: "Dual-Engine Architecture (Rule + ML)"
  },
  {
    id: "freight-study",
    title: "Freight Forwarding Process & Employee Perception Study",
    tagline: "MBA Empirical Research Project",
    category: "Research & Analytics",
    description: "Conducted an in-depth empirical employee-perception study examining workflow efficiency, process adoption, and digital documentation systems across freight forwarding operations.",
    technologies: ["SPSS", "Chi-Square Test", "MS Excel", "Primary Research", "Survey Methodology"],
    liveUrl: "#",
    featured: true,
    bulletPoints: [
      "Formulated research hypotheses, administered primary survey instruments, and collected quantitative operational feedback from logistics professionals.",
      "Executed SPSS-based statistical testing (Chi-Square test of independence) to validate correlation between software training and documentation accuracy.",
      "Compiled comprehensive analytical findings into a formal corporate research report with actionable supply chain and workflow recommendations."
    ],
    metrics: "SPSS Chi-Square Validated Research"
  },
  {
    id: "jemece-technical",
    title: "Technical Coordination & Operations Command",
    tagline: "JEMECE National Management Fest",
    category: "Technical & Systems",
    description: "Directed end-to-end technical logistics, audio-visual infrastructure, and real-time tabulation systems for a national-level intercollegiate management festival.",
    technologies: ["IT Operations", "Networking", "Event Systems", "Stakeholder Coordination"],
    liveUrl: "#",
    featured: false,
    bulletPoints: [
      "Led technical coordination across multiple competitive event tracks with tight schedules under high pressure.",
      "Troubleshot hardware, projection, network connectivity, and presentation glitches in real-time with zero downtime."
    ],
    metrics: "National-Level Event Lead"
  }
];

export const SKILL_GROUPS = [
  {
    category: "Marketing & Logistics Operations",
    skills: [
      { name: "Logistics & Supply Chain Coordination", highlight: true },
      { name: "Marketing Strategy & Operations", highlight: true },
      { name: "Freight Forwarding Workflows", highlight: true },
      { name: "ERP Software & Tracking Systems", highlight: true },
      { name: "Distribution & Dealer Network", highlight: true },
      { name: "Documentation & Audit Support", highlight: false },
      { name: "Vendor & Stakeholder Relations", highlight: false },
      { name: "Process & Operations Support", highlight: false },
    ]
  },
  {
    category: "Technical & IT Support",
    skills: [
      { name: "Python 3", highlight: true },
      { name: "Flask Web Framework", highlight: true },
      { name: "SQLite & SQL Fundamentals", highlight: true },
      { name: "HTML & CSS", highlight: false },
      { name: "Networking (Cisco)", highlight: true },
      { name: "Android Dev (Jetpack Compose)", highlight: false },
      { name: "NLTK & Scikit-learn", highlight: false },
      { name: "Database Management", highlight: false },
      { name: "IT Helpdesk & Troubleshooting", highlight: true },
      { name: "Generative AI Tools", highlight: true },
    ]
  },
  {
    category: "Data Analysis & Tools",
    skills: [
      { name: "MS Excel (Data & Formulas)", highlight: true },
      { name: "SPSS Statistical Software", highlight: true },
      { name: "Statistical Hypothesis Testing", highlight: false },
      { name: "MS Office Suite", highlight: false },
      { name: "MIS & Operational Reporting", highlight: true },
      { name: "Analytical Documentation", highlight: false },
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Malayalam (Native)", highlight: true },
      { name: "English (Professional)", highlight: true },
      { name: "Hindi (Conversational)", highlight: false },
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "mba",
    degree: "Master of Business Administration (MBA) — Marketing & Logistics",
    institution: "Dr. John Matthai Centre",
    period: "2024 – 2026",
    description: "Dual Specialisation in Marketing Management and Logistics & Supply Chain Management with empirical research in freight process analytics."
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Application (BCA)",
    institution: "St. Mary's College, Sulthan Bathery",
    period: "2021 – 2024",
    description: "Comprehensive foundation in computer programming, database systems, software engineering, networking protocols, and web development."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Networking – Cisco",
    issuer: "Cisco Networking Academy",
    highlight: true
  },
  {
    name: "Android Development with Jetpack Compose",
    issuer: "Tech Labs",
    highlight: true
  },
  {
    name: "Generative AI with Google Cloud",
    issuer: "Google Cloud",
    highlight: true
  },
  {
    name: "digitalmarketing",
    issuer: "Hubspot Academy",
    highlight: true
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Technical Assistant Head — JEMECE National Management Fest",
    date: "2025",
    description: "Led technical coordination and operational support for a national-level multi-track event under strict real-time deadlines."
  },
  {
    title: "AdBot Final Year Project Distinction",
    date: "2024",
    description: "Recognized for building a dual-engine rule + NLP chatbot addressing college admission queries in BCA program."
  },
  {
    title: "Empirical Logistics Research Presentation",
    date: "2026",
    description: "Presented research on employee perception and ERP documentation efficiency within freight forwarding operations."
  }
];

export const AREAS_OF_FOCUS = [
  {
    id: "logistics",
    title: "Logistics Operations",
    subtitle: "Freight forwarding, supply chain workflows & ERP management",
    pos: "top"
  },
  {
    id: "marketing",
    title: "Marketing & Distribution",
    subtitle: "Dealer networks, distribution channels & marketing operations",
    pos: "left"
  },
  {
    id: "it",
    title: "Technical IT ",
    subtitle: "Python, Flask, SQLite, Cisco networking & IT support",
    pos: "right"
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    subtitle: "MS Excel, SPSS hypothesis testing & reporting",
    pos: "bottom"
  }
];
