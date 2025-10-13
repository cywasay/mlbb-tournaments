import Link from "next/link";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

export default function CreateTeamCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-orange-500 rounded-xl p-6 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <Plus className="w-5 h-5" />
          <h4 className="text-lg font-bold">Create a Team</h4>
        </div>
        
        <p className="text-sm text-white/90 mb-4 leading-relaxed">
          Start a new roster and register for upcoming tournaments.
        </p>

        <Link href="/Registration">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white text-orange-500 rounded-lg font-semibold text-sm hover:bg-white/95 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}