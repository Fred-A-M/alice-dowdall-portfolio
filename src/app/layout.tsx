import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import Scroll from './Scroll';
// import CustomCursor from './components/CustomCursor';

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
