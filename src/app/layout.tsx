import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "24/7 Legal Answering Service - Specialized Law Firm Answering",
  description:
    "Answering Legal Provides The Highest Quality 24/7 Answering Service for Attorneys. Trusted By Thousands of Law Firms! Over 300 5-Star Testimonials!",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
