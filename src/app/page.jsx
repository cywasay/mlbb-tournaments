"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Features from "@/components/Features";
import UpcomingTournaments from "@/components/UpcomingTournaments";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Below lg
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = useTransform(scrollY, [0, 80], [1, 1.1]);
  const blur = useTransform(scrollY, [0, 80], [0, 4]);
  const blurPx = useTransform(blur, (v) => `blur(${v}px)`);
  const opacity = useTransform(scrollY, [0, 80], [0.5, 0.75]);

  return (
    <main className="w-full overflow-hidden">
      {/* Optimized Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="w-full h-full will-change-transform will-change-filter"
          style={isMobile ? {} : { scale, filter: blurPx }}
        >
          {/* Desktop Background (lg and up) */}
          <Image
            src="/Saber-legend.jpg"
            alt="Desktop Background"
            fill
            priority
            className="object-cover object-center hidden lg:block"
          />
          {/* Tablet Background (md to lg) */}
          <Image
            src="/moskov-doom.jpg"
            alt="Tablet Background"
            fill
            priority
            className="object-cover object-center hidden md:block lg:hidden"
          />
          {/* Mobile Background (below md) */}
          <Image
            src="/claude-m6.jpg"
            alt="Mobile Background"
            fill
            priority
            className="object-cover object-center block md:hidden"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70"
          style={isMobile ? {} : { opacity }}
        />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative z-10 px-4">
        <motion.div
          className="flex flex-col items-center gap-4 max-w-4xl mx-auto text-center"
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.7, type: "spring", stiffness: 120, damping: 20 }
          }
        >
          <Image
            src="/mlbb-logo.png"
            alt="MLBB"
            width={isMobile ? 240 : 400}
            height={isMobile ? 100 : 160}
            className="mb-2"
          />

          {/* Typography */}
          <h1
            className={`text-white font-bold text-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] 
            ${isMobile ? "text-4xl sm:text-5xl" : "text-2xl md:text-7xl"}`}
          >
            Tournaments
          </h1>

          <p
            className={`text-gray-300 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] 
            ${isMobile ? "text-base sm:text-lg" : "text-lg md:text-xl"}`}
          >
            Host your MLBB tournaments with ease
          </p>

          {/* CTA Button */}
          <motion.div
            className="mt-4 sm:mt-6"
            initial={isMobile ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.3, duration: 0.5 }}
          >
            <button
              className={`relative overflow-hidden bg-orange-400 text-white font-semibold rounded-xl shadow-lg 
              ${isMobile ? "px-5 py-3 text-sm" : "px-6 py-3 sm:px-8 sm:py-4 text-base"} 
              transition-none hover:shadow-xl hover:scale-105 group`}
            >
              <span className="relative z-10">Get Registered</span>
              {!isMobile && (
                <span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Compact Features Section */}
      <div className="relative z-20 rounded-2xl">
        <Features />
      </div>

      {/* Upcoming Tournaments Section */}
      <div className="relative z-20">
        <UpcomingTournaments />
      </div>
    </main>
  );
}
