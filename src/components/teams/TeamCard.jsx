import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function TeamCard({ team, onSelect }) {
  const winRate = Math.round((team.wins / (team.wins + team.losses)) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/30 transition-all duration-300"
    >
      {/* Team Logo */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image 
          src={team.logo} 
          alt={team.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        <div className="absolute top-3 right-3 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
          {team.rating} ★
        </div>
      </div>

      <div className="p-5">
        {/* Team Info */}
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
          {team.name}
        </h3>
        <div className="text-sm text-gray-400 mb-4">
          <span className="text-yellow-400 font-medium">{team.tag}</span> • {team.region} • {team.members} players
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center text-blue-400 font-semibold text-sm">
              <Trophy className="w-4 h-4 mr-1" />
              {team.wins}W
            </div>
            <div className="text-red-400 font-semibold text-sm">{team.losses}L</div>
          </div>
          <div className="text-sm text-gray-300 font-medium">{winRate}% WR</div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => onSelect(team)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            View Profile
          </motion.button>
          <Link href="/tournaments">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-white/10 text-gray-300 hover:bg-white/15 transition-colors"
            >
              Matches
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}