import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  docker,
  Social_Plane,
  Trading_Gurus,
  Stock_Predictor,
  threejs,
  sotatek,
  ro,
  constantContact,
  fpt,
  smac,
  aws,
  django,
  postgresql,
  python,
  DanShultz,
  JustinHannus,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Software Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "django",
    icon: django,
  },
];

const experiences = [
  {
    title: "Python/Java Backend Software Engineer",
    company_name: "Sotatek",
    icon: sotatek,
    iconBg: "#383E56",
    date: "July 2023 - February 2024",
    points: [
      "Collaborated on the development of microservices using Python/Django and Java/Spring, enhancing application scalability and performance.",
      "Spearheaded a Instagram/Tiktok data scraping project using Akka toolkit and Scala for web scraping, integrated with Mongo Atlas for data storage, and deployed on AWS infrastructure managed through Terraform. ",
      "Pioneered a service using Python HikerAPI and Redis Queue to analyze and track daily reels for song promotions, significantly impacting the promotion strategy for over 40,000 creators.",
    ],
  },
  {
    title: "Software Engineer Fellow ",
    company_name: "Ro",
    icon: ro,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Developed SQL and Django ORM queries to audit and refactor legacy system configurations, improving system efficiency and maintainability.",
      "Enhanced API flexibility to support dynamic configuration parameters, increasing adaptability for client  needs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created new reusable checkout library components and updated numerous online visit configurations, making the system more modular and flexible. Managed manual testing scenarios for 34 end-to-end online visit flows.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Constant Contact",
    icon: constantContact,
    iconBg: "#383E56",
    date: " Sep 2021 - Jan 2022 ",
    points: [
      "Developed contact management features using Ruby on Rails and JavaScript (React, Backbone).",
      "Integrated Google Analytics tracking and implemented a new dialogs component for the React tech stack.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Implement new dialogs component to accommodate the company’s new React tech stack.",
      "Created Protractor unit tests to enhance code coverage and identify bugs.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "FPT Corporation",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2021",
    points: [
      "The largest information technology service in Vietnam, focusing primarily on ICT-related services .",
      "Utilized React to collect reporting data onto a centralized website to streamline workflow .",
      "Proposed and designed the centralized system of data management sites with Figma, built new React components, and rewrote old Angular components to React.",
      "ntegrated login authentication and APIs to get FPT’s subsidiaries’ reporting data and data providers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "SMAC Innovation JSC",
    icon: smac,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Sep 2019",
    points: [
      "Collaborated with the core team to build a new Android app using React Native and Android Studio.",
      "Utilized APIs like Google Map Navigation and Facebook Authentication to create a mobile wallet app for drivers, increasing app functionality.",
      "Improved mobile application performance with progressive loading, increasing visual completeness from 73% to 93% and reducing user bounce rate.",
    ],
  },
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
    source_code_link: "https://github.com/longvo-cv",
  },
];

export { services, technologies, experiences, testimonials, projects };
