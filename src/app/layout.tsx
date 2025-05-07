import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import Scroll from './Scroll';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: "Alice Dowdall",
  description: "Senior Advertising Creative",
  metadataBase: new URL('https://www.alicedowdall.com'),
  openGraph: {
    title: 'Alice Dowdall',
    description: 'Senior Advertising Creative',
    images: [
      {
        url: '/Banner.png',
        width: 1200,
        height: 629,
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`radio-canada-big flex flex-col antialiased min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] overflow-x-hidden`}
        style={{ 
          background: 'var(--gradient)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >
        <Scroll />
        {/* <CustomCursor /> */}
        <Navbar />
        <main className="px-5 sm:px-10 pt-24 flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
