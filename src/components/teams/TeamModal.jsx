import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Calendar, Users } from "lucide-react";

export default function TeamModal({ team, onClose }) {
  if (!team) return null;

  const winRate = Math.round((team.wins / (team.wins + team.losses)) * 100);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-50 w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header Image */}
          <div className="relative h-32 w-full">
            <Image src={team.logo} alt={team.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          </div>

          <div className="p-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
            {/* Team Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-white/5 flex-shrink-0 border border-white/10">
                <Image src={team.logo} alt={team.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {team.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <span className="text-yellow-400 font-semibold">{team.tag}</span>
                  <span>•</span>
                  <span>{team.region}</span>
                  <span>•</span>
                  <span>{team.members} players</span>
                </div>
                <p className="text-xs text-gray-300 line-clamp-2">{team.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left Column - Stats & Matches */}
              <div className="md:col-span-2 space-y-4">
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10">
                    <div className="flex items-center gap-1 text-blue-400 mb-1">
                      <Trophy className="w-3 h-3" />
                      <span className="text-xs font-medium">Record</span>
                    </div>
                    <div className="text-sm font-bold text-white">{team.wins}W - {team.losses}L</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10">
                    <div className="text-xs font-medium text-gray-400 mb-1">Win Rate</div>
                    <div className="text-sm font-bold text-white">{winRate}%</div>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10">
                    <div className="text-xs font-medium text-gray-400 mb-1">Rating</div>
                    <div className="text-sm font-bold text-yellow-400">{team.rating} ★</div>
                  </div>
                </div>

                {/* Upcoming Matches */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    <h4 className="text-sm font-bold text-white">Upcoming Matches</h4>
                  </div>
                  {team.upcoming.length === 0 ? (
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-center">
                      <p className="text-xs text-gray-400">No scheduled matches</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {team.upcoming.map((match, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-white/5 backdrop-blur-md p-3 rounded-lg border border-white/10"
                        >
                          <div className="text-xs font-medium text-white">vs {match.vs}</div>
                          <div className="text-xs text-gray-400">{match.date}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Roster */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-orange-400" />
                  <h4 className="text-sm font-bold text-white">Roster</h4>
                </div>
                <div className="space-y-2 mb-4">
                  {Array.from({ length: Math.min(team.members, 4) }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur-md p-2 rounded-lg border border-white/10"
                    >
                      <div className="font-medium text-white text-xs">Player {i + 1}</div>
                      <div className="text-xs text-gray-400">Role: TBD</div>
                    </div>
                  ))}
                  {team.members > 4 && (
                    <div className="text-xs text-gray-400 text-center">+{team.members - 4} more</div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link href={`/teams/${team.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2.5 rounded-lg bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
                    >
                      View Full Profile
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/15 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}