"use client";
import { motion } from "framer-motion";
import { Star, Calendar, MapPin, DollarSign, Users2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturedTournaments = ({ featuredTournaments, getStatusColor }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Star className="w-7 h-7 text-yellow-500 mr-3" />
          <h2 className="text-4xl font-bold text-white">
            Featured Tournaments
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={tournament.image}
                  alt={tournament.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-yellow-500 text-gray-900 text-sm font-semibold rounded-full flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1.5 fill-current" />
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                      tournament.status
                    )}`}
                  >
                    {tournament.status}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {tournament.format}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors duration-300">
                  {tournament.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">{tournament.region}</span>
                  </div>
                  <div className="flex items-center text-green-400 font-semibold">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tournament.prizePool}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users2 className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm">{tournament.participants}</span>
                  </div>
                </div>

                <Link
                  href={`/tournaments/${tournament.id}`}
                  className="group/btn inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-200 w-full font-medium"
                >
                  View Tournament
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTournaments;