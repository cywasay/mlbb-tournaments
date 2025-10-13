import { Globe, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutTeamsSection() {
  const features = [
    { icon: Users, text: "Manage rosters" },
    { icon: Calendar, text: "View schedules" },
    { icon: Globe, text: "Regional coverage" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10"
    >
      <h4 className="text-lg font-bold text-white mb-3">About Teams</h4>
      <p className="text-sm text-gray-300 leading-relaxed mb-4">
        Teams are the heart of every tournament — manage rosters, view schedules, and follow top performers.
      </p>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            className="flex items-center gap-2.5 text-sm text-gray-300"
          >
            <feature.icon className="w-4 h-4 text-orange-400 flex-shrink-0" />
            <span>{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}