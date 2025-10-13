import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";

export default function LeaderboardSection({ teams }) {
  const topTeams = teams
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const getRankColor = (index) => {
    if (index === 0) return "text-yellow-400";
    if (index === 1) return "text-gray-300";
    if (index === 2) return "text-orange-400";
    return "text-gray-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10"
    >
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-yellow-400" />
        <h4 className="text-lg font-bold text-white">Top Teams</h4>
      </div>

      <div className="space-y-3">
        {topTeams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-200"
          >
            {/* Rank Number */}
            <div className={`text-xl font-bold ${getRankColor(index)} w-6 text-center`}>
              {index + 1}
            </div>

            {/* Team Logo */}
            <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-white/5 flex-shrink-0">
              <Image src={team.logo} alt={team.name} fill className="object-cover" />
            </div>

            {/* Team Info */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white truncate">{team.name}</div>
              <div className="text-xs text-gray-400">{team.region}</div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-400 font-bold text-sm">
              {team.rating}
              <span className="text-xs">★</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}