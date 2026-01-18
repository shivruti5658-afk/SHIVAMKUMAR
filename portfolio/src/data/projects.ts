import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Redesign",
    description:
      "Complete redesign and development of a modern e-commerce platform with improved UX, performance optimization, and mobile-first design.",
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
        id: "ecom-1",
        src: "/projects/ecommerce/homepage-full.png",
        thumbnail: "/projects/ecommerce/homepage-thumb.png",
        alt: "E-Commerce Platform Homepage",
        type: "website",
        caption: "Homepage with Featured Products",
      },
      {
        id: "ecom-2",
        src: "/projects/ecommerce/product-page.png",
        thumbnail: "/projects/ecommerce/product-page-thumb.png",
        alt: "Product Detail Page",
        type: "ui-design",
        caption: "Product Page with Reviews",
      },
      {
        id: "ecom-3",
        src: "/projects/ecommerce/checkout.png",
        thumbnail: "/projects/ecommerce/checkout-thumb.png",
        alt: "Checkout Process",
        type: "ui-design",
        caption: "Optimized Checkout Flow",
      },
      {
        id: "ecom-4",
        src: "/projects/ecommerce/admin-dashboard.png",
        thumbnail: "/projects/ecommerce/admin-dashboard-thumb.png",
        alt: "Admin Dashboard",
        type: "admin-panel",
        caption: "Admin Analytics Dashboard",
      },
    ],
    results:
      "Increased conversion rate by 45%, reduced page load time by 60%, improved customer satisfaction score to 4.8/5.",
    liveLink: "https://example-ecommerce.com",
    caseStudyLink: "/projects/ecommerce-platform",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Full-stack SaaS application featuring real-time analytics, customizable dashboards, and advanced reporting capabilities.",
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
        id: "saas-1",
        src: "/projects/saas/overview-dashboard.png",
        thumbnail: "/projects/saas/overview-dashboard-thumb.png",
        alt: "Overview Dashboard",
        type: "dashboard",
        caption: "Main Overview Dashboard",
      },
      {
        id: "saas-2",
        src: "/projects/saas/analytics-view.png",
        thumbnail: "/projects/saas/analytics-view-thumb.png",
        alt: "Analytics View",
        type: "dashboard",
        caption: "Advanced Analytics Section",
      },
      {
        id: "saas-3",
        src: "/projects/saas/user-management.png",
        thumbnail: "/projects/saas/user-management-thumb.png",
        alt: "User Management Panel",
        type: "admin-panel",
        caption: "User Management Interface",
      },
    ],
    results:
      "Enables clients to track 50+ metrics in real-time, processes 1M+ data points daily, 99.9% uptime.",
    liveLink: "https://analytics-dashboard.example.com",
    caseStudyLink: "/projects/saas-dashboard",
  },
];
