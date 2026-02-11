import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YieldOps | We Delete Your Busy Work",
  description: "YieldOps is a boutique IT automation agency. We audit your business, identify expensive bottlenecks, and build automated systems that yield higher profits.",
  keywords: ["automation", "workflow optimization", "business efficiency", "IT consulting", "process automation"],
  openGraph: {
    title: "YieldOps | We Delete Your Busy Work",
    description: "Stop paying your team to copy-paste. We build automated systems that yield higher profits.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
