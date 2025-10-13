"use client";
import { motion } from "framer-motion";
import { Calendar, Users2, Trophy, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TournamentGrid = ({ filteredTournaments, getStatusColor }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTournaments.map((tournament, index) => (
        <motion.div
          key={tournament.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 border border-white/10 hover:border-white/20"
        >
          <div className="relative w-full h-52 overflow-hidden">
            <Image
              src={tournament.image}
              alt={tournament.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${getStatusColor(
                  tournament.status
                )}`}
              >
                {tournament.status}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
              {tournament.title}
            </h3>

            <div className="space-y-3 text-sm mb-5">
              <div className="flex items-center text-gray-300">
                <Calendar className="w-4 h-4 mr-2.5 text-gray-400" />
                <span>{tournament.date}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2.5 text-gray-400" />
                <span>{tournament.region}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center text-green-400 font-semibold">
                  <Trophy className="w-4 h-4 mr-2.5" />
                  <span>{tournament.prizePool}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users2 className="w-4 h-4 mr-2.5 text-gray-400" />
                  <span>{tournament.participants}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-gray-400 text-xs font-medium">
                  Entry Fee
                </span>
                <span className="text-white font-semibold">
                  {tournament.entryFee}
                </span>
              </div>
            </div>

            <Link
              href={`/tournaments/${tournament.id}`}
              className="group/link inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
            >
              View Details
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TournamentGrid;