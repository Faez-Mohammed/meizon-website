export type ServiceIcon = "smartphone" | "globe" | "boxes" | "palette" | "cloud" | "chart" | "compass" | "utensils";

export type Service = {
  slug: string;
  title: string;
  description: string;
  points: string[];
  tags: string[];
  quote: string;
  icon: ServiceIcon;
  process: { step: string; text: string }[];
};

const process = (a: string, b: string, c: string, d: string) => [
  { step: "Discover", text: a },
  { step: "Design", text: b },
  { step: "Build", text: c },
  { step: "Launch & Support", text: d },
];

export const services: Service[] = [
  {
    slug: "mobile-application-solutions",
    title: "Mobile Application Solutions",
    description: "We design and develop custom mobile applications that offer seamless user experiences, robust performance, and scalability for iOS and Android platforms.",
    points: ["iOS & Android App Development", "Flutter & React Native", "UI/UX Design for Mobile", "App Maintenance & Support"],
    tags: ["Android", "iOS", "Flutter", "Cross-platform"],
    quote: "Fast, beautiful apps your customers will actually keep on their phones.",
    icon: "smartphone",
    process: process("Workshops to define users, goals and success metrics.", "Interactive prototypes tested with real users.", "Two-week sprints with working builds each cycle.", "Store release, monitoring and continuous improvements."),
  },
  {
    slug: "web-application-solutions",
    title: "Web Application Solutions",
    description: "From simple websites to complex web applications, we deliver responsive, high-performance solutions built on modern frameworks.",
    points: ["Business Websites & Portals", "E-commerce Platforms", "Progressive Web Apps", "API & Integration Development"],
    tags: ["Next.js", "React", "Node.js", ".NET"],
    quote: "From simple websites to complex web applications, we deliver responsive, high-performance solutions.",
    icon: "globe",
    process: process("Requirement mapping and technical feasibility.", "Component-driven UI and design systems.", "Type-safe, tested and SEO-friendly engineering.", "CI/CD deployment with uptime monitoring."),
  },
  {
    slug: "custom-erp-solutions",
    title: "Custom ERP Solutions",
    description: "Tailor-made ERP systems that unify inventory, finance, HR and operations into a single source of truth, shaped around how your business really works.",
    points: ["Inventory & Supply Chain", "Financial Accounting", "HR & Payroll", "Reporting & Dashboards"],
    tags: ["Inventory", "Accounting", "HR", "Reporting"],
    quote: "One platform for every department, with real-time numbers you can trust.",
    icon: "boxes",
    process: process("Process audit across departments.", "Module blueprint and data model.", "Iterative rollout, module by module.", "Training, migration and long-term support."),
  },
  {
    slug: "ui-ux-design-strategies",
    title: "UI/UX Design Strategies",
    description: "User-centred design that turns complex workflows into clear, intuitive experiences, backed by research, prototypes and a consistent design system.",
    points: ["User Research & Personas", "Wireframes & Prototypes", "Design Systems", "Usability Testing"],
    tags: ["Research", "Prototyping", "Design Systems", "Branding"],
    quote: "Great software feels obvious. We make the complex feel simple.",
    icon: "palette",
    process: process("Interviews and journey mapping.", "Wireframes to high-fidelity screens.", "Hand-off with tokens and documented components.", "Usability reviews and iteration."),
  },
  {
    slug: "cloud-services-infrastructure",
    title: "Cloud Services & Infrastructure",
    description: "Secure, scalable cloud architectures with automated deployments, observability and cost control across AWS, Azure and Google Cloud.",
    points: ["Cloud Migration", "DevOps & CI/CD", "Managed Hosting", "Monitoring & Backup"],
    tags: ["AWS", "Azure", "DevOps", "Security"],
    quote: "Infrastructure that scales with you, and stays out of your way.",
    icon: "cloud",
    process: process("Assessment of current workloads and costs.", "Target architecture and security model.", "Infrastructure as code and migration.", "24/7 monitoring and optimisation."),
  },
  {
    slug: "data-analytics-insights",
    title: "Data Analytics & Insights",
    description: "Unlock the full potential of your data. We provide advanced analytics, visualization, and reporting services to help you make informed strategic decisions.",
    points: ["Business Intelligence", "Data Visualization", "Big Data Solutions", "Predictive Analytics"],
    tags: ["Business Intelligence", "Data Visualization", "Big Data Solutions", "Predictive Analytics"],
    quote: "Turn scattered data into decisions your whole team can act on.",
    icon: "chart",
    process: process("Data source audit and KPI definition.", "Warehouse model and dashboard design.", "Pipelines, models and interactive reports.", "Training and ongoing tuning."),
  },
  {
    slug: "software-consulting",
    title: "Software Consulting",
    description: "Independent technical guidance on architecture, technology choices, code quality and delivery, so you build the right thing the right way.",
    points: ["Architecture Reviews", "Technology Roadmaps", "Code & Security Audits", "Team Augmentation"],
    tags: ["Architecture", "Audits", "Roadmaps", "Mentoring"],
    quote: "Senior engineering judgement, exactly when your project needs it.",
    icon: "compass",
    process: process("Stakeholder interviews and codebase review.", "Findings, risks and prioritised options.", "Hands-on support for the chosen path.", "Follow-up reviews as you grow."),
  },
  {
    slug: "restaurant-software",
    title: "Restaurant Software",
    description: "Point of sale, kitchen display and table management software built for restaurants, cafes and cloud kitchens.",
    points: ["Table & Order Management", "Kitchen Display System", "Online Ordering", "Inventory & Costing"],
    tags: ["POS", "KDS", "Ordering", "Costing"],
    quote: "Faster service, tighter costs and happier guests.",
    icon: "utensils",
    process: process("Observe service flow on the floor.", "Tailor menus, roles and layouts.", "Install, integrate printers and payments.", "Staff training and live support."),
  },
];
