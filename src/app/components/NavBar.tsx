'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();
  
  // Track scroll direction and toggle navbar visibility
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Don't hide navbar at the top of the page
    if (latest < 100) {
      setIsVisible(true);
      setLastScrollY(latest);
      return;
    }
    
    // Determine scroll direction
    const isScrollingDown = latest > lastScrollY;
    
    // Hide when scrolling down, show when scrolling up
    // Only trigger if scroll amount is significant (> 10px)
    if (isScrollingDown && latest - lastScrollY > 10) {
      setIsVisible(false);
    } else if (!isScrollingDown && lastScrollY - latest > 10) {
      setIsVisible(true);
    }
    
    setLastScrollY(latest);
  });
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md px-5 sm:px-10"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex h-20 relative items-center">
          {/* Left div - positioned at the start */}
          <div className="flex items-center antique-olive lg:text-4xl md:text-3xl text-2xl text-background bg-foreground px-4 py-2 absolute ">
            <Link href="/">ALICE DOWDALL</Link>
          </div>
          
          
          <div className="hidden md:flex pl-60 lg:pl-30 xl:pl-0 items-center radio-canada-big text-xl gap-4 mx-auto h-full">
            <Link 
            href="/"
            className={`${pathname === '/' ? 'font-bold' : 'hover:underline'}`}
            >
              Work
            </Link>
            <Link 
            href="/contact"
            className={`${pathname === '/contact' ? 'font-bold' : 'hover:underline'}`}
            >
              Contact
            </Link>
          </div>
          
          {/* Right div - positioned at the end */}
          <div className="hidden md:flex items-center lg:gap-8 gap-4 absolute right-0">
            <Link href="https://www.instagram.com/alice_dowdall/">
              <Image src="/IG.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/">
              <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
            </Link>
          </div>

          <div className="flex absolute right-0 md:hidden">
            <Bars3Icon className="w-10 h-10" onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.2, y: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="flex justify-between items-center h-24 px-5 sm:px-10">
              <div className="flex items-center antique-olive text-2xl text-background bg-foreground px-4 py-2">
                <Link href="/" onClick={() => setIsOpen(false)}>ALICE DOWDALL</Link>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <XMarkIcon className="w-10 h-10" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-grow gap-10 radio-canada-big text-4xl">
              <Link 
                href="/"
                className={`${pathname === '/' ? 'font-bold' : 'hover:underline'}`}
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link 
                href="/more-stuff"
                className={`${pathname === '/more-stuff' ? 'font-bold' : 'hover:underline'}`}
                onClick={() => setIsOpen(false)}
              >
                More Stuff
              </Link>
              <Link 
                href="/contact"
                className={`${pathname === '/contact' ? 'font-bold' : 'hover:underline'}`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Social links in mobile menu */}
              <div className="flex gap-8 mt-8">
                <Link href="https://www.instagram.com/alice_dowdall/" onClick={() => setIsOpen(false)}>
                  <Image src="/IG.png" alt="Instagram" width={30} height={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/" onClick={() => setIsOpen(false)}>
                  <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}