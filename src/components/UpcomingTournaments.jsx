'use client'
import { motion } from 'framer-motion'
import { Calendar, Users2, Trophy, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const UpcomingTournaments = () => {
  const tournaments = [
    {
      title: "E-Sports",
      date: "October 1-15, 2025",
      prizePool: "$100,000",
      teams: "16 Teams",
      image: "/tournament.jpg",
      status: "Registration Open"
    },
    {
      title: "E-Sports",
      date: "September 25-30, 2025",
      prizePool: "$25,000",
      teams: "32 Teams",
      image: "/tournament2.jpg",
      status: "Last Call"
    },
    {
      title: "E-Sports",
      date: "October 5-10, 2025",
      prizePool: "$10,000",
      teams: "64 Teams",
      image: "/tournament3.jpg",
      status: "Coming Soon"
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Upcoming Tournaments
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Join the most exciting MLBB tournaments and compete with the best
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl overflow-hidden group"
            >
              <div className="relative w-full h-48">
                <Image
                  src={tournament.image}
                  alt={`${tournament.title} tournament`}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm text-blue-400 bg-blue-400/10 rounded-full">
                    {tournament.status}
                  </span>
                  <Trophy className="w-5 h-5 text-yellow-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {tournament.title}
                </h3>

                <div className="space-y-3 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users2 className="w-5 h-5 mr-2" />
                    <span>{tournament.teams}</span>
                  </div>
                  <div className="flex items-center font-semibold text-green-400">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span>{tournament.prizePool}</span>
                  </div>
                </div>

                <Link 
                  href={`/tournaments/${index}`} 
                  className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/tournaments"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
          >
            View All Tournaments
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default UpcomingTournaments