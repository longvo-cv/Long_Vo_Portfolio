import {
  Social_Plane,
  Trading_Gurus,
  Stock_Predictor,
  sotatek,
  ro,
  constantContact,
  fpt,
  smac,
  DanShultz,
  JustinHannus,
} from "../assets";

export const links = {
  resume: "/Long_Vo_Resume.pdf",
  github: "https://github.com/longvo-cv",
  linkedin: "https://www.linkedin.com/in/long-vo/",
  email: "longvo.cv@gmail.com",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "lkdv",
    title: "Case study",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const hero = {
  intro:
    "I build production backend systems and web apps, most recently a multi-tenant pharmacy SaaS used by real stores in Vietnam.",
  stack: "TypeScript, Python, Node.js, Next.js, Firestore, AWS, LLMs",
};

export const about = `Full-stack engineer with an M.S. in Computer Science from UMass Amherst (May 2026). I've shipped Python and Java microservices, healthcare checkout flows, and a pharmacy platform used by real stores in Vietnam. I care about correctness under messy real-world conditions: flaky networks, old hardware, and money that has to add up.`;

export const lkdv = {
  name: "LKDV-Pharma",
  title: "Software Engineer",
  dates: "June 2025 - Present",
  context: `Multi-tenant pharmacy management SaaS in Vietnam with three apps: staff POS, customer storefront, and admin console. Live with paying pharmacies in Vietnam.`,
  problems: [
    {
      title: "Security",
      text: "Audited the API and found unauthenticated staff-creation and order endpoints plus a debug route leaking config. Added auth and tenant scoping with a log-first, enforce-later rollout so live stores never broke.",
    },
    {
      title: "Data integrity",
      text: "Rewrote stock deduction as an atomic Firestore transaction behind a per-tenant flag, piloted in production on a test store. Stopped duplicate POS orders from network retries with an idempotency lock.",
    },
    {
      title: "AI in production",
      text: "Gemini OCR reads supplier invoices into inventory, with a required human review step before anything commits. I run development through coding agents (Claude Code, Cursor) with staged prompts and verification gates, and added fail-closed guards after catching a test writing to production.",
    },
  ],
  also: `Payment webhooks (Casso, VietQR); Vietnamese tax ledger exports (Docxtemplater); POS on Android 7 hardware with a bundled GeckoView engine; Vitest and Playwright.`,
  stack:
    "Turborepo, Next.js, TypeScript, Tailwind, Node/Express, Firestore, Railway, Vercel, Upstash Redis, Gemini.",
};

const experiences = [
  {
    title: "Python/Java Backend Software Engineer",
    company_name: "Sotatek",
    icon: sotatek,
    iconBg: "#383E56",
    date: "July 2023 - February 2024",
    points: [
      "Built microservices in Python/Django and Java/Spring.",
      "Led an Instagram/TikTok scraping pipeline in Scala/Akka, storing to MongoDB Atlas, deployed on AWS with Terraform.",
      "Built a reel-tracking service (HikerAPI, Redis Queue) used to steer song promotion across 40,000+ creators.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company_name: "Ro",
    icon: ro,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Audited and refactored legacy configuration with SQL and Django ORM.",
      "Extended APIs to accept dynamic configuration parameters.",
      "Built reusable checkout components and owned manual testing of 34 end-to-end online visit flows.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Constant Contact",
    icon: constantContact,
    iconBg: "#383E56",
    date: "Sep 2021 - Jan 2022",
    points: [
      "Built contact management features in Ruby on Rails and React/Backbone.",
      "Built a new React dialogs component and added Google Analytics tracking.",
      "Wrote Protractor tests that raised coverage and surfaced bugs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "FPT Corporation",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2021",
    points: [
      "Designed (Figma) and built a central React reporting site for FPT subsidiaries, migrating Angular components to React.",
      "Integrated login authentication and subsidiary reporting APIs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "SMAC Innovation",
    icon: smac,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Sep 2019",
    points: [
      "Built a React Native driver wallet app with Google Maps and Facebook auth.",
      "Raised visual completeness from 73% to 93% with progressive loading.",
    ],
  },
];

export const skills = [
  {
    title: "Production systems",
    items: "Transactions, idempotency, staged rollouts, webhooks",
  },
  {
    title: "Security",
    items: "API auth, tenant isolation, secret handling, audits",
  },
  {
    title: "AI/LLM",
    items: "OCR pipelines, human-in-the-loop review, agent-driven development, audio signal processing, on-device ML",
  },
  {
    title: "Web",
    items: "TypeScript, React, Next.js, Vue.js, Node, Python/Django, SQL, Firestore, AWS",
  },
];

export const education = [
  "M.S. Computer Science, UMass Amherst, May 2026",
  "B.S., University of Massachusetts Amherst, 2022",
];

const testimonials = [
  {
    testimonial:
      "Long joined my team for the summer as a fellow in our fellowship program. Long came in with a depth of front end experience and a desire to start to build experience working in python and backend systems. During his time working with our team, not only did Long get a chance to build some backend experience and leverage his front end experience, he also grew in his ability to lead deliverables, break down work, and work with our product team to launch updates to our patient experience. Long would be an asset to any team he joins and I would recommend him for any company looking to hire an early career employee.",
    name: "Dan Shultz",
    designation: "Senior Software Engineering Manager",
    company: "Ro",
    image: DanShultz,
  },
  {
    testimonial:
      "Long joined our team as an intern and quickly hit the ground running. He participated in our sprint grooming, planning, development, and retros. Long’s contributions, making it all the way to production, will have a lasting effect on our customers. I would work with Long again in the future!",
    name: "Justin Hannus",
    designation: "Software Engineering Manager",
    company: "Constant Contact",
    image: JustinHannus,
  },
];

const projects = [
  {
    name: lkdv.name,
    description: "Multi-tenant pharmacy management SaaS in Vietnam with three apps: staff POS, customer storefront, and admin console.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "pink-text-gradient",
      },
    ],
    case_study_link: "#lkdv",
  },
  {
    name: "Rhythm Signal Engine",
    subtitle: "Project Meridian · 2026",
    description:
      "An on-device audio pipeline for a privacy-first clinical session analysis tool. I turned peer-reviewed psychotherapy research on speech rate and turn-taking into production TypeScript modules: response latency, speech-rate deceleration, and combined anomaly detection. Voice activity detection and transcription run locally, so no audio leaves the machine. Testing against real audio caught two measurement-calibration bugs before they shipped.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "audio-dsp",
        color: "green-text-gradient",
      },
      {
        name: "on-device-ml",
        color: "pink-text-gradient",
      },
      {
        name: "privacy",
        color: "blue-text-gradient",
      },
    ],
  },
  {
    name: "Stroke Recovery App",
    subtitle: "Oct 2024 - May 2025",
    description:
      "A Vue.js mobile app built with physical therapists and 50+ stroke survivors. It analyzes motor-function data to shape personalized recovery plans, which cut therapist consultation time by 40%. Progress dashboards track recovery milestones across speech, motor, and cognitive domains, and raised patient engagement by 60%.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "mobile",
        color: "green-text-gradient",
      },
      {
        name: "healthcare",
        color: "pink-text-gradient",
      },
      {
        name: "data-viz",
        color: "blue-text-gradient",
      },
    ],
  },
];

const earlierProjects = [
  {
    name: "Social Plane",
    description:
      "Implemented a social media site using React, Firebase, Redux, and Express to learn about full-stack development. Developed a backend REST API server with NodeJS to allow for user login and authentication, image uploads, content posting, notifications.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: Social_Plane,
    source_code_link: "https://github.com/longvo-cv/SocialPlane",
  },
  {
    name: "Trading Gurus",
    description:
      "Developed a forex currency exchange app that supports user login and authentication, daily currency updates, and optimal exchange path suggestions, leveraging TradingView API for real-time currency data and analysis.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "PERN stack",
        color: "pink-text-gradient",
      },
    ],
    image: Trading_Gurus,
    source_code_link: "https://github.com/LastSpot/Trading-Gurus",
  },
  {
    name: "Twitter Stock Predictor",
    description:
      "Extracted sentiment from tweets using Python, Twitter API, DistilBert model, and Yahoo Finance API, enhancing sentiment analysis. Graphed sentiment scores with real stock values to identify correlation, providing insights into market trends.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "TwitterAPI",
        color: "pink-text-gradient",
      },
    ],
    image: Stock_Predictor,
  },
];

export { experiences, testimonials, projects, earlierProjects };
