import {
  mobile,
  backend,
  creator,
  web,
  FIGMA,
  FIGJAM,
  CreateaiAI,
  DRAWIO,
  Spreadsheet,
  Survey,
  Doc,
  tonlesap,
  delico,
  future,
  SPS,
  tonlesapWeb,
  sellerApp,
  cbcWeb,
  svengRok,
  plantWeb,
  delicioApp,
  tonlesapApp,
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
    title: "Product Design",
    icon: web,
  },
  {
    title: "Product strategic",
    icon: backend,
  },
  {
    title: "Teaching and mentor",
    icon: mobile,
  },
  {
    title: "Micro interaction",
    icon: creator,
  },
];

const technologies = [
  {
    name: "FIGMA",
    icon: FIGMA,
  },
  {
    name: "FIGJAM",
    icon: FIGJAM,
  },
  {
    name: "CreateaiAI",
    icon: CreateaiAI,
  },
  {
    name: "DRAWIO",
    icon: DRAWIO,
  },
  {
    name: "Spreadsheet",
    icon: Spreadsheet,
  },
  {
    name: "Survey",
    icon: Survey,
  },
  {
    name: "Doc",
    icon: Doc,
  },
];

const experiences = [
  {
    title: "Senior UX UI designer",
    company_name: "AMK Microfinance (TONLESAP project)",
    icon: tonlesap,
    iconBg: "#383E56",
    date: "Oct 2022 – Present",
    points: [
      "Transitioning TSA v1.0 to v2.0 for an Agri-tech ecosystem platform, including analysis, flow sitemap creation, new design system development, and ongoing testing.",
      "Planning and designing full functionality (8 features) for responsive web design based on the mobile app.",
      "Meticulously designing modals to enhance UX and prevent errors.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Optimizing the mobile app's ordering flow, reducing clicks, improving time constraints, and enhancing the design system.",
      "Implementing Market Product Price functionality to capture and compare agricultural prices.",
    ],
  },

  {
    title: "Marketing & Designer Executive",
    company_name: "Delicio.App",
    icon: delico,
    iconBg: "#383E56",
    date: "Nov 2019 – Jun 2022",
    points: [
      "Planned, analyzed, designed, and monitored the team to deliver effective marketing strategies and design materials for aligning marketing campaigns.",
      "Compiled insights data into quantitative reports for monthly presentations to the CEO.",
      "Recently involved in designing seller/vendor mobile application, incorporating stakeholder feedback and adding new functions from the web dashboard to enhance user experience.",
      "Delivered and tested A/B with the first product prototype with stakeholders to gather early survey data on both quantitative and qualitative aspects.",
      "Tested the entire company's products (consumer, seller, and delivery app) to ensure minimal issues during production, reporting findings to the CEO and offshore team.",
    ],
  },
  {
    title: "Part-time UX/UI Instructor (at Futurebit)",
    company_name: "Startup institute",
    icon: future,
    iconBg: "#383E56",
    date: "2020-Present",
    points: [
      "Successfully completed the 3rd training course, focusing on responsive web design and basic mobile app design.",
      "Introduced basic design criteria, principles, and frameworks, followed by practical exercises on component and one-page UI design.",
      "Guided students through various project types, including meet doctor, event booking, fashion eCommerce, university discovery, and basic banking functions.",
      "Focused on essential sections such as color, typeface, grid system, breakpoints, prototypes, basic sitemap and flow, presentations, and assignments to ensure practical learning.",
    ],
  },
  {
    title: "UX UI Design Freelancer",
    company_name: "Self-employed",
    icon: SPS,
    iconBg: "#383E56",
    date: "2020-Present",
    points: [
      "Completed a discovery platform (Startup Ecosystem) focusing on mobile-first design and responsiveness in one month, involving early concept development from scratch with the client. By optimized search and company listing experiences to enhance user ease and speed of finding information.",
      "Completed a plant eCommerce website within one month, covering initial flow sitemap, documentation, and final design for 10 core features. Smooth design process facilitated by direct meetings and demos with the client and third-party collaborators.",
    ],
  },
];

const projects = [
  {
    name: "1. TSA - Consumer: The first mobile application provides agriculture app in Cambodia",
    description: [
      "Conducted user research and surveys.",
      "Designed user flows and sitemaps.",
      "Designed UI and prototypes.",
      "Enhanced UX.",
      "Managed design and document hand-offs.",
      "Collaborated directly with tech lead, business, and CEO.",
    ],
    tags: [
      {
        name: "production",
        color: "blue-text-gradient",
      },
      {
        name: "in-development",
        color: "green-text-gradient",
      },
    ],
    image: tonlesapApp,
    source_code_link: "https://apps.apple.com/us/app/tonlesap-app/id1439403157",
  },
  {
    name: "2. TSA - Seller App",
    description: [
      "Designed user flows and sitemaps.",
      "Designed UI and prototypes.",
      "Enhanced UX.",
      "Managed design and document hand-offs.",
      "Worked closely with tech lead and business.",
    ],
    tags: [
      {
        name: "production",
        color: "blue-text-gradient",
      },
      {
        name: "in-development",
        color: "green-text-gradient",
      },
    ],
    image: sellerApp,
    source_code_link:
      "https://apps.apple.com/kh/app/tonlesap-seller/id1479022739",
  },
  {
    name: "3. TSA - Responsive Web Design",
    description: [
      "Designed UI and prototypes.",
      "Managed design and document hand-offs.",
    ],
    tags: [
      {
        name: "production",
        color: "blue-text-gradient",
      },
      {
        name: "in-improvement",
        color: "green-text-gradient",
      },
    ],
    image: tonlesapWeb,
    source_code_link: "http://consumer.tonlesapcambodia.com/",
  },
  {
    name: "4. CBC -Website Dashboard",
    description: [
      "Designed UI and prototypes.",
      "Managed design and document hand-offss.",
      "Collaborated directly with product owner & developer.",
    ],
    tags: [
      {
        name: "in-development",
        color: "blue-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
    ],
    image: cbcWeb,
    source_code_link: "",
  },
  {
    name: "5. Delicio.App: Contributed to the seller app design",
    description: [
      "Conducted user research and surveys.",
      "Design UI and prototypes.",
      "Managed marketing efforts.",
      "Collaborated directly with CEO.",
    ],
    tags: [
      {
        name: "in-development",
        color: "blue-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
    ],
    image: delicioApp,
    source_code_link: "https://www.facebook.com/delicioapp",
  },
  {
    name: "6. Svengrok - Discovery Website",
    description: [
      "Conducted user research and flow.",
      "Designed UI and prototypes.",
      "Managed design and document hand-offs.",
      "Worked closely with stakeholders and developers.",
    ],
    tags: [
      {
        name: "in-development",
        color: "blue-text-gradient",
      },
    ],
    image: svengRok,
    source_code_link: "",
  },
  {
    name: "7. SIA - eCommerce Project",
    description: [
      "Conducted user research and flow.",
      "Designed UI and prototypess.",
      "Managed design and document hand-offs.",
      "Worked closely with stakeholders and developers.",
    ],
    tags: [
      {
        name: "in-development",
        color: "blue-text-gradient",
      },
      {
        name: "freelance",
        color: "green-text-gradient",
      },
    ],
    image: plantWeb,
    source_code_link: "",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const contactData = [
  {
    title: "Telegram",
    icon: mobile,
    href: "https://t.me/sopisethsar",
  },
  {
    title: "LinkedIn",
    icon: web,
    href: "https://www.linkedin.com/in/sar-sopiseth-529435210/",
  },
  {
    title: "Behance",
    icon: creator,
    href: "https://www.behance.net/sopiseth",
  },
  {
    title: "Figma",
    icon: backend,
    href: "https://www.figma.com/@spscreative",
  },
];

export { services, technologies, experiences, projects };
