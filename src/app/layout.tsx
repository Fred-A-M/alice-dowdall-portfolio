import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Scroll from './Scroll';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alice Dowdall",
  description: "Alice Dowdall's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Scroll />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen px-5 sm:px-10`}
        style={{ 
          background: 'var(--gradient)',
          backgroundAttachment: 'fixed'
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
