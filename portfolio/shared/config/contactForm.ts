// Project Types
export const PROJECT_TYPES = [
  "Website Development",
  "Web Application",
  "Mobile Application",
  "UI/UX Design Only",
  "Redesign / Revamp",
  "Maintenance / Support",
] as const;

// Project Categories
export const PROJECT_CATEGORIES = {
  "Website Development": [
    "Portfolio / Personal Website",
    "Business / Corporate Website",
    "E-commerce Platform",
    "Educational Platform",
    "Blog / Magazine",
    "Landing Page",
    "Custom Website",
  ],
  "Web Application": [
    "SaaS Product",
    "Dashboard / Admin Panel",
    "CRM System",
    "Project Management Tool",
    "E-learning Platform",
    "Social Network",
    "Custom Web App",
  ],
  "Mobile Application": [
    "iOS App",
    "Android App",
    "Cross-Platform App",
    "Progressive Web App (PWA)",
    "Hybrid App",
    "Enterprise Mobile App",
  ],
  "UI/UX Design Only": [
    "Website Design",
    "Mobile App Design",
    "UI Component Library",
    "Design System",
    "Prototype / Wireframe",
    "User Research & Testing",
  ],
  "Redesign / Revamp": [
    "Website Redesign",
    "App Redesign",
    "UI Refresh",
    "Performance Optimization",
    "Content Restructuring",
    "Brand Refresh",
  ],
  "Maintenance / Support": [
    "Bug Fixes",
    "Security Updates",
    "Performance Optimization",
    "Feature Additions",
    "Content Updates",
    "Ongoing Maintenance",
  ],
} as const;

// Feature Requirements
export const FEATURE_REQUIREMENTS = [
  {
    category: "Authentication & Security",
    features: [
      "User Registration/Login",
      "Social Media Login",
      "Two-Factor Authentication",
      "Role-Based Access Control",
      "API Security",
      "Data Encryption",
    ],
  },
  {
    category: "Frontend Features",
    features: [
      "Responsive Design",
      "Dark/Light Mode",
      "Multi-language Support",
      "Accessibility (WCAG)",
      "Animations/Transitions",
      "Offline Support",
    ],
  },
  {
    category: "Backend & API",
    features: [
      "RESTful API",
      "GraphQL API",
      "WebSockets",
      "Serverless Functions",
      "Webhooks",
      "Third-party API Integration",
    ],
  },
  {
    category: "E-commerce",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Processing",
      "Order Management",
      "Inventory Management",
      "Shipping Integration",
    ],
  },
  {
    category: "Content Management",
    features: [
      "CMS Integration",
      "Blog System",
      "Media Library",
      "SEO Tools",
      "Content Versioning",
      "User-Generated Content",
    ],
  },
  {
    category: "Analytics & SEO",
    features: [
      "Google Analytics",
      "Custom Dashboards",
      "SEO Optimization",
      "Performance Monitoring",
      "A/B Testing",
      "Heatmaps & Session Recording",
    ],
  },
] as const;

// Budget Ranges
export const BUDGET_RANGES = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000+",
  "Need consultation",
] as const;

// Project Timelines
export const PROJECT_TIMELINES = [
  "1-2 months",
  "2-4 months",
  "4-6 months",
  "6-9 months",
  "9-12 months",
  "1+ year",
  "Flexible",
] as const;

// Priority Levels
export const PRIORITY_LEVELS = ["Low", "Medium", "High", "Urgent"] as const;

// Countries
export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  "Other",
] as const;
