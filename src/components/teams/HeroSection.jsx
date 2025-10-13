"use client";
import Image from "next/image";
import { Search, Filter, TrendingUp, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const regions = ["All", "International", "Southeast Asia", "Asia Pacific", "Europe"];

export default function HeroSection({ query, setQuery, region, setRegion, sort, setSort }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const stats = [
    { icon: Users, label: "Active Teams", value: "2,500+", color: "text-yellow-400" },
    { icon: Trophy, label: "Championships", value: "850+", color: "text-orange-400" },
    { icon: TrendingUp, label: "Win Rate", value: "68%", color: "text-yellow-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/zilong-dragon.jpg"
        alt="Teams Background"
        fill
        priority
        quality={100}
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: 15, top: 20 }, { left: 85, top: 15 }, { left: 45, top: 75 },
          { left: 70, top: 40 }, { left: 25, top: 60 }, { left: 90, top: 80 },
          { left: 10, top: 85 }, { left: 55, top: 25 }, { left: 75, top: 65 },
          { left: 35, top: 45 }, { left: 60, top: 10 }, { left: 20, top: 90 },
          { left: 80, top: 35 }, { left: 40, top: 70 }, { left: 65, top: 50 }
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              background: i % 2 === 0 ? '#facc15' : '#fb923c',
              opacity: 0.3,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/30 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-yellow-300">Live Team Rankings</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            Discover Elite
            <span className="block mt-2">
              <span className="text-yellow-400">Competitive </span>
              <span className="text-orange-400">Teams</span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Browse competitive teams, check rosters, upcoming matches and performance stats
          </motion.p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-4">
            {/* Search Input */}
            <div className="flex-1 relative group">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                isSearchFocused ? 'text-yellow-400' : 'text-gray-400'
              }`} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search teams, tags or regions..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/20 focus:border-yellow-500 focus:outline-none transition-all duration-300 placeholder:text-gray-400"
              />
              {isSearchFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-xl bg-yellow-500/20 -z-10 blur-xl"
                />
              )}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="appearance-none bg-white/10 backdrop-blur-md text-white py-4 pl-10 pr-10 rounded-xl border border-white/20 hover:border-orange-400/50 focus:border-orange-500 outline-none transition-all duration-300 cursor-pointer"
                >
                  {regions.map((r) => (
                    <option key={r} value={r} className="bg-gray-900">
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative group">
                <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-white/10 backdrop-blur-md text-white py-4 pl-10 pr-10 rounded-xl border border-white/20 hover:border-yellow-400/50 focus:border-yellow-500 outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="top-rated" className="bg-gray-900">Top Rated</option>
                  <option value="most-wins" className="bg-gray-900">Most Wins</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </div>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${
                index % 2 === 0 ? 'bg-yellow-600/20' : 'bg-orange-600/20'
              }`} />
            </motion.div>
          ))}
        </motion.div>
the  best way to do that
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}