import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatButton } from "@/components/layout/ChatButton";
import { Background } from "@/components/ui/Background";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: { default: "MEIZON - IT Solutions & Digital Innovation", template: "%s | MEIZON" },
  description: "MEIZON builds scalable, secure and future-proof software: mobile apps, web platforms, custom ERP, cloud and analytics.",
  openGraph: {
    title: "MEIZON - IT Solutions & Digital Innovation",
    description: "Scalable, secure and future-proof digital products for modern businesses.",
    siteName: "MEIZON",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "MEIZON" }],
  },
};
export const viewport: Viewport = { themeColor: "#0a0a0a" };

const themeScript = `try{if(localStorage.getItem('meizon-theme')==='light')document.documentElement.classList.add('light')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Background />
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
