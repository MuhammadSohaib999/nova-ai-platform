import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nova AI — The Next-Generation AI Productivity Platform",
  description:
    "Supercharge your productivity with Nova AI. Automate workflows, generate content, unlock insights, and build the future — all in one beautiful platform.",
  keywords: [
    "AI platform",
    "productivity",
    "automation",
    "artificial intelligence",
    "workflow",
    "SaaS",
  ],
  openGraph: {
    title: "Nova AI — The Next-Generation AI Productivity Platform",
    description:
      "Supercharge your productivity with Nova AI. Automate workflows, generate content, and unlock insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova AI — The Next-Generation AI Productivity Platform",
    description:
      "Supercharge your productivity with Nova AI. Automate workflows, generate content, and unlock insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
