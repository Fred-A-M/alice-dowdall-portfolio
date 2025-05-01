import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import Scroll from './Scroll';

export const metadata: Metadata = {
  title: "Alice Dowdall",
  description: "Senior Advertising Creative",
  openGraph: {
    title: 'Alice Dowdall',
    description: 'Senior Advertising Creative',
    images: [
      {
        url: '/Banner.png',
        width: 1267,
        height: 194,
        alt: 'Alice Dowdall - Senior Advertising Creative',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/A.png',
    apple: '/A.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Antique_Olive_Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <Scroll />
      <body
        className={`radio-canada-big antialiased h-screen`}
        style={{ 
          background: 'var(--gradient)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        {/* <CustomCursor /> */}
        <Navbar />
        <main className="px-5 sm:px-10 pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
