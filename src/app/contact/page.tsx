import type { Metadata } from "next";
import { ContactTabs } from "@/components/sections/ContactTabs";

export const metadata: Metadata = {
  title: "Contact & Careers",
  description: "Get in touch with MEIZON or explore open roles on our team.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const { tab } = await searchParams;
  return <ContactTabs initial={tab === "career" ? "career" : "contact"} />;
}
