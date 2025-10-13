"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/hero-bg.jpg"
            alt="Tournament Background"
            fill
            quality={100}
            priority={true}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-gray-900/95"></div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Compete in{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Epic Tournaments
            </span>
          </h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Join thousands of players battling for glory and amazing prizes
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto relative mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
              isSearchFocused ? 'text-blue-400' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search tournaments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white/20 focus:border-blue-500/50 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.button 
              className="px-8 py-4 rounded-lg bg-red-600 text-white font-semibold shadow-lg transition-all duration-200"
              whileHover={{ backgroundColor: '#dc2626', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create Tournament
            </motion.button>
            
            <motion.button 
              className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold border border-white/20 transition-all duration-200"
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Browse All
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;