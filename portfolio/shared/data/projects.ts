import { Project } from "@/shared/types/project";

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "DBS Project",
    description:
      "Professional web application showcasing modern design and seamless user experience.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    images: [
      {
        id: "dbs-1",
        src: "/projects/project-1/dbs iamge ss.png",
        alt: "DBS Application Screenshot 1",
        type: "website",
        caption: "DBS Application Interface",
      },
      {
        id: "dbs-2",
        src: "/projects/project-1/dbuu image ss.png",
        alt: "DBS Application Screenshot 2",
        type: "website",
        caption: "DBS Dashboard View",
      },
    ],
    results: "Professional implementation with modern UI/UX design principles.",
    liveLink: "https://example-dbs.com",
    caseStudyLink: "/projects/project-1",
  },
  {
    id: "project-2",
    title: "Syksu Platform",
    description:
      "Comprehensive platform with multiple interface designs and user workflows.",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
    images: [
      {
        id: "syksu-1",
        src: "/projects/project-2/syksu image ss.png",
        alt: "Syksu Platform Main Interface",
        type: "dashboard",
        caption: "Syksu Platform Overview",
      },
      {
        id: "syksu-2",
        src: "/projects/project-2/syksu image 2 ss.png",
        alt: "Syksu Platform Feature 2",
        type: "dashboard",
        caption: "Syksu Platform Features",
      },
      {
        id: "syksu-3",
        src: "/projects/project-2/syksu image3 ss.png",
        alt: "Syksu Platform Feature 3",
        type: "ui-design",
        caption: "Syksu Platform UI Components",
      },
    ],
    results:
      "Comprehensive platform enabling seamless workflow and data management.",
    liveLink: "https://syksu-platform.example.com",
    caseStudyLink: "/projects/project-2",
  },
  {
    id: "project-3",
    title: "Skin Care E-Commerce",
    description:
      "Premium e-commerce platform for skincare products with beautiful product showcases and smooth purchasing experience.",
    technologies: [
      "React",
      "Next.js",
      "Stripe",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    images: [
      {
        id: "skin-1",
        src: "/projects/project-3/FireShot Capture 004 - Dry & Mature skin – Skin care - 16.171.16.185.png",
        alt: "Skin Care Product Page - Dry & Mature Skin",
        type: "landing-page",
        caption: "Dry & Mature Skin Category",
      },
      {
        id: "skin-2",
        src: "/projects/project-3/FireShot Capture 005 - Flip $30, Feel $30 – Skin care - 16.171.16.185.png",
        alt: "Skin Care Product Detail - Flip $30",
        type: "website",
        caption: "Product Detail Page",
      },
      {
        id: "skin-3",
        src: "/projects/project-3/FireShot Capture 006 - Flip $30, Feel $30 – Skin care - 16.171.16.185.png",
        alt: "Skin Care Product Showcase",
        type: "website",
        caption: "Product Showcase",
      },
      {
        id: "skin-4",
        src: "/projects/project-3/FireShot Capture 007 - Flip $30, Feel $30 – Skin care - 16.171.16.185.png",
        alt: "Skin Care Product Experience",
        type: "ui-design",
        caption: "Interactive Product Display",
      },
      {
        id: "skin-5",
        src: "/projects/project-3/FireShot Capture 008 - Skin care - 16.171.16.185.png",
        alt: "Skin Care Main Store",
        type: "website",
        caption: "E-Commerce Store Front",
      },
      {
        id: "skin-6",
        src: "/projects/project-3/FireShot Capture 015 - Skin care - 16.171.16.185.png",
        alt: "Skin Care Category Section",
        type: "website",
        caption: "Product Categories",
      },
      {
        id: "skin-7",
        src: "/projects/project-3/skin.png",
        alt: "Skin Care Application",
        type: "website",
        caption: "Skin Care Platform",
      },
    ],
    results:
      "Increased product visibility, improved conversion rate by 52%, enhanced user experience with intuitive navigation.",
    liveLink: "https://skincare-shop.example.com",
    caseStudyLink: "/projects/project-3",
  },
];
