"use client";

import { profile } from "../consts";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Prevent hydration errors by only rendering the animation on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let totalTypingTime = 0;
    profile.background.forEach((line, index) => {
      // Add time for this paragraph (chars * time per char + pause)
      if (index > 0) totalTypingTime += 0.5; // Pause between paragraphs
      totalTypingTime += line.length * 0.03; // Time to type all characters
    });
    
    // Add a small buffer to ensure everything is displayed
    totalTypingTime += 0.5;
    
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
      console.log("Typing complete!");
    }, totalTypingTime * 1000);
    
    return () => clearTimeout(timer);
  }, [isClient]);

  return (
    <div className="relative w-full h-full my-10 px-20">
      <div className="grid grid-cols-6 gap-4">

        <div className="flex gap-6 col-span-4">
          <div className="gap-2 flex-1">
            <div className="font-bold text-2xl">Bit about me</div>
            <div className="flex flex-col gap-2 text-4xl">
              {isClient && profile.background.map((line, index) => {
                // Calculate delay based on all previous paragraphs
                let totalDelay = 0;
                for (let i = 0; i < index; i++) {
                  // Each letter takes 0.04 seconds + 0.5 seconds pause between paragraphs
                  totalDelay += profile.background[i].length * 0.03 + 0.5;
                }
                
                return (
                  <TypewriterText 
                    key={index} 
                    text={line} 
                    delay={totalDelay} 
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-span-2 flex justify-center ">
          <Image 
            src={profile.image} 
            alt="Alice" 
            width={200} 
            height={200} 
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            className="shadow-lg shadow-black"
          />
        </div>
      </div>

      <motion.div 
        className="grid grid-cols-6 gap-4 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="sm:col-span-2 col-span-3">
          <div className="font-bold ">LinkedIn</div>
          <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/">
            <p className="hover:underline cursor-pointer">Alice Dowdall</p>
          </Link>
        </div>

        <div className="sm:col-span-4 col-span-3">
          <div className="font-bold ">Email</div>
            <p className="">alicedowdall@gmail.com</p>
        </div>

        <div className="sm:col-span-2 col-span-3 flex flex-col gap-2">
          <div className="font-bold text-2xl">{"I've worked:"}</div>
          <div className="flex flex-col gap-2">
            {profile.worked.map((work, index) => (
              <div key={index}>
                <span className="font-bold">{work.name}: </span>
                <span className="">{work.dates}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2 col-span-3 flex flex-col gap-2">
          <div className="font-bold text-2xl">{"I've worked with:"}</div>
          <div>
            <p>
              <span className="font-bold">Brands: </span> 
              {profile.workedWith[0].brands}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Charities: </span> 
              {profile.workedWith[1].charities}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Typewriter component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  // Create an array of letter objects for animating
  const letters = Array.from(text).map((char, i) => ({
    char,
    delay: i * 0.03 // 40ms between each character
  }));
  
  return (
    <p className="overflow-hidden">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.01,
            delay: delay + letter.delay,
            ease: "easeIn"
          }}
        >
          {letter.char}
        </motion.span>
      ))}
    </p>
  );
}