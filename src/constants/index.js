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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  frontend,
  dataScience,
  backendAng,
  design3d,
  twiend,
  leafory,
  laravel,
  mysqlFull,
  mysqllumba,
  php,
  ThreejsLogo,
  leaforyweb,
  twiendweb,
  sipedumasweb,
  python,
  kharisma,
  yoda,
  aip,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Data Science",
    icon: dataScience,
  },
  {
    title: "Backend Developer",
    icon: backendAng,
  },
  {
    title: "3D Artist",
    icon: design3d,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MySql",
    icon: mysqllumba,
  },
  {
    name: "Three JS",
    icon: ThreejsLogo,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "Figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
];

const experiences = [
  {
    title: "Freelance Frontend Dev",
    company_name: "Twiend.Co",
    icon: twiend,
    iconBg: "#383E56",
    date: "Februari 2025",
    points: [
      "Built a pixel-perfect, responsive landing page for a coffeeshop brand at twiend.co using HTML, CSS, Tailwind CSS, and JavaScript.",
      "Designed and implemented full-page animations and micro-interactions (CSS/JS) to enhance storytelling and conversion.",
      "Ensured cross-browser compatibility and device coverage through thorough QA on modern and legacy browsers.",
      "Wrote modular, maintainable code with clear naming, reusable components, and documentation for easy handoff.",
    ],
  },
  {
    title: "Freelance Frontend Dev",
    company_name: "Leafory",
    icon: leafory,
    iconBg: "#ffff",
    date: "Juli 2025",
    points: [
      "Designed and developed a two-page responsive landing site for Leafory, featuring a main landing page and a full product catalog for Philodendron plant sales.",
      "Built using HTML, CSS, Tailwind CSS, and JavaScript with full-page animations and smooth micro-interactions to enhance user experience.",
      "Created a unique UI design with decorative Philodendron plant elements along the page sides for brand storytelling.",
      "Integrated analytics tools to track user interactions, product views, and conversion rates.",
      "Ensured cross-browser compatibility and responsiveness across all devices through thorough testing on desktop, tablet, and mobile.",
      "Collaborated directly with the client to refine design and functionality based on feedback, ensuring brand consistency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "As the founder of Leafory, I wanted our website to truly reflect the beauty of our Philodendron plants. The result now feels just as special as our products.",
    name: "Kharisma",
    designation: "Founder",
    company: "Leafory",
    image: kharisma,
  },
  {
    testimonial:
      "Running Twiend Co, I know how important it is to make a great first impression. Our new website beautifully showcases our coffee shop menu and makes it easy for people to find us.",
    name: "Yoda",
    designation: "Business Owner",
    company: "Twiend Co",
    image: yoda,
  },
  {
    testimonial:
      "I wanted a simple yet attractive website for Warmindo Delisa Ciremai. Now, customers can easily see what we offer and feel encouraged to visit.",
    name: "Aip",
    designation: "Owner",
    company: "Warmindo Ciremai",
    image: aip,
  },
];

const projects = [
  {
    name: "Leafory",
    description:
      "A web-based platform that promotes the sale of Philodendron plants by showcasing available services and products, providing plant enthusiasts with an engaging and convenient way to explore and purchase.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: leaforyweb,
    source_code_link: "",
  },
  {
    name: "Twiend.Co",
    description:
      "Web application that allows users to browse the coffee shop's menu, discover featured drinks and snacks, and find the shop's location for an enjoyable visit.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: twiendweb,
    source_code_link: "",
  },
  {
    name: "Sipedumas",
    description:
      "A comprehensive public complaint platform that allows users to report local infrastructure issues to the authorities, capture their current location, and upload photographic evidence for prompt action.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sipedumasweb,
    source_code_link: "https://github.com/anangsp9/Sipedumas-V1",
  },
];

export { services, technologies, experiences, testimonials, projects };
