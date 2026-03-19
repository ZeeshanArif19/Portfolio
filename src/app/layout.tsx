import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Zeeshan Arif Ahmad - Software Engineer",
  description: "Engineering high-performance, accessible, and scalable products for web and mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full flex flex-col relative overflow-x-hidden text-white bg-black">
        <SmoothScroll>
          {/* Subtle Neon Ambient Lighting */}
          <div className="fixed top-[-5%] right-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[#8b5cf6]/20 blur-[120px] pointer-events-none -z-10" />
          <div className="fixed bottom-[-5%] left-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-[#00dfd8]/20 blur-[120px] pointer-events-none -z-10" />

          <Navbar />
          <main className="flex-grow pt-32 px-4 md:px-8 max-w-[1240px] mx-auto w-full">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
