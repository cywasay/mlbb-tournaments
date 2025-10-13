'use client'
import { motion } from 'framer-motion'
import { Trophy, Users, Globe, FileText, Zap, Star, Shield, Sword } from 'lucide-react'
import { useEffect, useState } from 'react'

const Features = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024) // below lg
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      bgIcon: <Sword className="w-16 h-16 opacity-10" />,
      title: 'Tournament Organization',
      description:
        'Organize epic MLBB battles with custom brackets, real-time match tracking, and automated prize distribution.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      bgIcon: <Shield className="w-16 h-16 opacity-10" />,
      title: 'Team Management',
      description:
        'Build your ultimate squad, scout players, coordinate strategies, and dominate the battlefield together.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      bgIcon: <Zap className="w-16 h-16 opacity-10" />,
      title: 'Live Streaming',
      description:
        'Experience the thrill of live matches with instant replays, highlight reels, and pro commentary.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      bgIcon: <Star className="w-16 h-16 opacity-10" />,
      title: 'Statistics & Analysis',
      description:
        'Master the meta with detailed analytics, hero performance data, and strategic insights from top players.',
      gradient: 'from-green-400 to-emerald-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: isMobile
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
    },
  }

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 border-4 border-gray-800 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-28 sm:w-40 h-28 sm:h-40 border-4 border-gray-800 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 border-4 border-gray-800 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }
          }
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Unleash your potential with our comprehensive MLBB tournament
            platform. Every feature designed for champions.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={
                isMobile
                  ? {}
                  : {
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.15 },
                    }
              }
              className="relative flex flex-col items-center text-center cursor-default"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
              </div>

              {/* Card */}
              <div
                className={`relative px-6 py-6 bg-gray-800 rounded-xl border border-gray-700 transition-colors duration-200 h-full`}
              >
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-700">
                  {feature.bgIcon}
                </div>

                <div className="text-center relative">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-14 sm:mt-16 text-center"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={
            isMobile
              ? { duration: 0 }
              : { duration: 0.4, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }
          }
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 text-blue-400">
            <Star className="w-4 h-4" />
            <span className="text-sm sm:text-base font-semibold">
              Join thousands of MLBB champions
            </span>
            <Star className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
