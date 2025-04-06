'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex h-24 md:px-20 px-10 relative items-center z-50">
        {/* Left div - positioned at the start */}
        <div className="flex items-center antique-olive lg:text-4xl md:text-3xl text-2xl text-background bg-foreground px-4 py-2 absolute md:left-20 left-10">
          <Link href="/">ALICE DOWDALL</Link>
        </div>
        
        
        <div className="hidden md:flex pl-60 lg:pl-30 xl:pl-0 items-center radio-canada-big text-xl gap-4 mx-auto h-full">
          <Link 
          href="/"
          className={`${pathname === '/' ? 'font-bold' : 'hover:underline'}`}
          >
            <span className="hidden lg:inline">Client </span>Work
          </Link>
          <Link 
          href="/more-stuff"
          className={`${pathname === '/more-stuff' ? 'font-bold' : 'hover:underline'}`}
          >
            More Stuff
          </Link>
          <Link 
          href="/contact"
          className={`${pathname === '/contact' ? 'font-bold' : 'hover:underline'}`}
          >
            Contact
          </Link>
        </div>
        
        {/* Right div - positioned at the end */}
        <div className="hidden md:flex items-center quicksand-light text-2xl lg:gap-8 gap-4 absolute md:right-20 right-10">
          <Link href="https://www.instagram.com/alice_dowdall/">
            <Image src="/IG.png" alt="Instagram" width={20} height={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/">
            <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
          </Link>
        </div>

        <div className="flex absolute right-10 md:right-20 md:hidden">
          <Bars3Icon className="w-10 h-10" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background z-50 flex flex-col"
          >
            <div className="flex justify-between items-center px-10 sm:px-20 h-24">
              <div className="flex items-center antique-olive text-4xl text-background bg-foreground px-4 py-2">
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