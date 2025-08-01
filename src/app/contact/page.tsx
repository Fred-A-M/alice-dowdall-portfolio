"use client";

import { profile } from "../consts";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link';
import FeaturesLoop from '../components/FeaturesLoop';

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Prevent hydration errors by only rendering the animation on the client
  useEffect(() => {
    setIsClient(true);
    document.addEventListener('click', mouseClick);
    return () => {
      document.removeEventListener('click', mouseClick);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    let totalTypingTime = 0;
    profile.background.forEach((line, index) => {
      // Add time for this paragraph (chars * time per char + pause)
      if (index > 0) totalTypingTime += 0.3; // Pause between paragraphs
      totalTypingTime += line.length * 0.02; // Time to type all characters
    });
    
    // Add a small buffer to ensure everything is displayed
    totalTypingTime += 0.1;
    
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, totalTypingTime * 1000);
    
    return () => clearTimeout(timer);
  }, [isClient]);

  const mouseClick = () => {
    setIsTypingComplete(true);
  }

  return (
    <div className="relative w-full pb-10 md:pt-10">
      <div className="grid md:grid-cols-6 grid-cols-1 md:gap-4 gap-8">

        <div className="flex gap-6 md:col-span-4 col-span-1">
          <div className="flex-1">
            <div className="font-bold md:text-2xl text-lg">Bit about me</div>
            <div className="flex flex-col gap-2 md:text-2xl sm:text-xl text-lg ">
              {!isTypingComplete && isClient ? profile.background.map((line, index) => {
                // Calculate delay based on all previous paragraphs
                let totalDelay = 0;
                for (let i = 0; i < index; i++) {
                  // Each letter takes 0.04 seconds + 0.5 seconds pause between paragraphs
                  totalDelay += profile.background[i].length * 0.02 + 0.1;
                }
                
                return (
                  <TypewriterText 
                    key={index} 
                    text={line} 
                    delay={totalDelay} 
                  />
                );
              }) :
              profile.background.map((line, index) => {
                return (
                  <p key={index}>{line}</p>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div 
          className="col-span-1 md:col-span-2 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingComplete ? 1 : 0 }}
          transition={{ duration: 0.9 }}
        >
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
            className=""
          />
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isTypingComplete ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid md:grid-cols-8 grid-cols-2 gap-4 mt-10">
          <div className="md:col-span-2 col-span-1 text-md">
            <div className="font-bold ">LinkedIn</div>
            <Link href="https://www.linkedin.com/in/alice-dowdall-342237101/">
              <p className="cursor-pointer underline sm:no-underline sm:hover:underline">Alice Dowdall</p>
            </Link>
          </div>

          <div className="md:col-span-6 col-span-1">
            <div className="font-bold ">Email</div>
            <p className="">alicedowdall@gmail.com</p>
          </div>

          <div className="md:col-span-2 col-span-1 flex flex-col">
            <div className="font-bold sm:text-2xl text-lg">{"Worked:"}</div>
            <div className="flex flex-col gap-2">
              {profile.worked.map((work, index) => (
                <div key={index}>
                  <Link href={work.link} className="hover:underline" target="_blank">
                    <span className="font-bold underline sm:no-underline">{work.name}: </span>
                    <span className="">{work.dates}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          
          <div className="md:col-span-3 col-span-1 flex flex-col">
            <div className="font-bold sm:text-2xl text-lg">{"Worked with:"}</div>
            <div className="flex flex-col gap-2">
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
          </div>

          <div className="md:col-span-3 col-span-2 flex flex-col">
            <div className="font-bold sm:text-2xl text-lg">{"Won:"}</div>
            <div className="flex flex-col gap-2">
              <div>
                <p>
                  <span className="font-bold">Frazzled: </span> 
                  {profile.won[0].frazzled}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold">CPRBra: </span> 
                  {profile.won[1].CPRBra}
                </p>
              </div>
            </div>
          </div>
        </div>

        <FeaturesLoop />

      </motion.div>

    </div>
  );
}

// Typewriter component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  // Create an array of letter objects for animating
  const letters = Array.from(text).map((char, i) => ({
    char,
    delay: i * 0.02 // 20ms between each character
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