"use client";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const TournamentFilters = ({ filters, selectedFilter, setSelectedFilter }) => {
  return (
    <section className="py-6 bg-gray-900/95 backdrop-blur-md sticky top-0 z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
          <div className="flex items-center gap-3">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2.5 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedFilter === filter.id
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/15"
                }`}
              >
                {filter.label}
                {selectedFilter === filter.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-red-600 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TournamentFilters;