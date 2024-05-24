import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
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
  tonlesapMobile,
  sellerMobile,
  delicioWeb,
  uiUx,
  svengrokWeb,
  siaWeb,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TONLESAP consumer RWD",
    description:
      "is designed to provide agricultural knowledge to farmers includes technical, market information, key tactics in growing crops, type of types of equipment, and better technique to raise animals. Furthermore, farmers can access financial support to expand their farming through Apps.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Figjam",
        color: "green-text-gradient",
      },
      {
        name: "ucd & dt",
        color: "pink-text-gradient",
      },
    ],
    image: tonlesapWeb,
    source_code_link: "http://consumer.tonlesapcambodia.com/",
  },
  {
    name: "TONLESAP consumer app",
    description:
      "The first mobile application provides agriculture app in Cambodia.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Figjam",
        color: "green-text-gradient",
      },
      {
        name: "ucd & dt",
        color: "pink-text-gradient",
      },
    ],
    image: tonlesapMobile,
    source_code_link: "https://onelink.to/65cwf5",
  },
  {
    name: "TONLESAP seller App",
    description:
      "is designed for our seller partners to manage their stores. They can receive and manage orders, products, promotions, and delivery prices, as well as communicate directly with customers or support through our chat feature.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Figjam",
        color: "green-text-gradient",
      },
      {
        name: "ucd & dt",
        color: "pink-text-gradient",
      },
    ],
    image: sellerMobile,
    source_code_link: "#",
  },
  {
    name: "Delicio.App",
    description:
      "A marketplace taking local stores on-line, awarded the top 7 startups in Cambodia.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Marketing",
        color: "green-text-gradient",
      },
      {
        name: "ucd & dt",
        color: "pink-text-gradient",
      },
    ],
    image: delicioWeb,
    source_code_link: "https://www.facebook.com/delicioapp",
  },
  {
    name: "UX/UI Instructor",
    description:
      "A trainer, mentor, and supporter to my students. Final projects included several types such as a doctor appointment mobile app, event booking responsive web design, fashion & food eCommerce website, university discovery website, and a segment of a banking mobile app feature.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Mobile App",
        color: "green-text-gradient",
      },
      {
        name: "RWD",
        color: "pink-text-gradient",
      },
      {
        name: "Ucd & Dt",
        color: "blue-text-gradient",
      },
    ],
    image: uiUx,
    source_code_link:
      "https://www.facebook.com/futurebit34/posts/pfbid0uR794zxxev7kQPCcvjJc7njJXTHi9HGbbJA5kyazZagRCZRrbpxhgwQe41PoSx9Sl",
  },
  {
    name: "SVENGROK Website",
    description:
      "a discovery website (Startup Ecosystem) where people have their own freedom to search and choose a compromising company.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Marketing",
        color: "green-text-gradient",
      },
      {
        name: "ucd & dt",
        color: "pink-text-gradient",
      },
    ],
    image: svengrokWeb,
    source_code_link: "#",
  },
  {
    name: "SIA Plant Project",
    description:
      "An internal eCommerce website focusing on selling various popular plant categories in Taiwan.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Marketing",
        color: "green-text-gradient",
      },
      {
        name: "ucd & dt",
        color: "pink-text-gradient",
      },
    ],
    image: siaWeb,
    source_code_link: "#",
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

export { services, technologies, experiences, testimonials, projects };
