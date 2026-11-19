export type Product = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  highlights: string[];
  kind: "erp" | "crm" | "pos" | "mobile" | "commerce" | "dev";
};

export const products: Product[] = [
  {
    slug: "meizon-erp", name: "MEIZON ERP", kind: "erp",
    description: "A comprehensive Enterprise Resource Planning system designed to streamline your business operations, from inventory to finance.",
    features: ["Inventory Management", "Financial Accounting", "HR & Payroll", "Supply Chain"],
    highlights: ["Multi-branch and multi-currency", "Role based access with audit trail", "Real-time dashboards and exports", "Runs on desktop, tablet and mobile"],
  },
  {
    slug: "meizon-crm", name: "MEIZON CRM", kind: "crm",
    description: "Manage customer relationships effectively with our intuitive CRM. Track leads, manage contacts, and boost sales productivity.",
    features: ["Lead Tracking", "Contact Management", "Sales Pipeline", "Email Integration"],
    highlights: ["Drag-and-drop pipeline board", "Automated follow-up reminders", "Shared inbox and activity timeline", "Forecasting and team leaderboards"],
  },
  {
    slug: "meizon-pos", name: "MEIZON POS", kind: "pos",
    description: "A robust Point of Sale system for retail and hospitality. Manage sales, inventory, and customer data in real-time.",
    features: ["Fast Checkout", "Inventory Sync", "Table Management", "Reporting"],
    highlights: ["Works offline and syncs later", "Barcode, card and UPI payments", "Kitchen display and table maps", "Daily closing and tax reports"],
  },
  {
    slug: "meizon-mobile-suite", name: "MEIZON Mobile Suite", kind: "mobile",
    description: "A suite of mobile applications extending the power of MEIZON ERP and CRM to your fingertips.",
    features: ["Real-time Access", "Offline Mode", "Push Notifications", "Secure Login"],
    highlights: ["Approve orders on the go", "Field sales visit tracking", "Biometric sign-in", "iOS and Android from one codebase"],
  },
  {
    slug: "meizon-commerce", name: "MEIZON Commerce", kind: "commerce",
    description: "Launch your online store with our powerful e-commerce platform. Fully integrated with MEIZON ERP.",
    features: ["Custom Storefront", "Payment Gateway", "Order Management", "SEO Optimized"],
    highlights: ["Live stock from ERP", "Coupons and loyalty", "Fast, mobile-first checkout", "Built-in SEO tooling"],
  },
  {
    slug: "meizon-developer-tools", name: "Developer Tools", kind: "dev",
    description: "APIs and SDKs for developers to build custom integrations and extensions for MEIZON products.",
    features: ["REST API", "Webhooks", "Documentation", "Sandbox Environment"],
    highlights: ["Typed SDKs for JS and Dart", "Scoped API keys", "Event webhooks with retries", "Free sandbox tenant"],
  },
];
