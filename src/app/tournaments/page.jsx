"use client";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useState } from "react";

import HeroSection from "@/components/tournaments/HeroSection";
import FeaturedTournaments from "@/components/tournaments/FeaturedTournaments";
import TournamentFilters from "@/components/tournaments/TournamentFilters";
import TournamentGrid from "@/components/tournaments/TournamentGrid";
import CTASection from "@/components/tournaments/CTASection";

const TournamentsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All Tournaments" },
    { id: "open", label: "Registration Open" },
    { id: "ongoing", label: "Ongoing" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
  ];

  const tournaments = [
    {
      id: 1,
      title: "MLBB Grand Championship",
      game: "Mobile Legends",
      date: "October 1-15, 2025",
      prizePool: "$100,000",
      teams: "16 Teams",
      participants: "128/128",
      image: "/tournament.jpg",
      status: "Registration Open",
      format: "Single Elimination",
      region: "International",
      featured: true,
      entryFee: "Free",
    },
    {
      id: 2,
      title: "Weekly MLBB Blitz",
      game: "Mobile Legends",
      date: "September 25-30, 2025",
      prizePool: "$25,000",
      teams: "32 Teams",
      participants: "110/160",
      image: "/tournament2.jpg",
      status: "Registration Open",
      format: "Double Elimination",
      region: "Asia Pacific",
      featured: false,
      entryFee: "$50",
    },
    {
      id: 3,
      title: "Rookie Rising Cup",
      game: "Mobile Legends",
      date: "October 5-10, 2025",
      prizePool: "$10,000",
      teams: "64 Teams",
      participants: "45/320",
      image: "/tournament3.jpg",
      status: "Registration Open",
      format: "Swiss System",
      region: "Southeast Asia",
      featured: false,
      entryFee: "Free",
    },
    {
      id: 4,
      title: "Pro League Season 8",
      game: "Mobile Legends",
      date: "October 20-30, 2025",
      prizePool: "$150,000",
      teams: "12 Teams",
      participants: "12/12",
      image: "/tournament.jpg",
      status: "Ongoing",
      format: "Round Robin",
      region: "International",
      featured: true,
      entryFee: "Invite Only",
    },
    {
      id: 5,
      title: "Community Clash Vol. 3",
      game: "Mobile Legends",
      date: "November 1-5, 2025",
      prizePool: "$5,000",
      teams: "128 Teams",
      participants: "0/640",
      image: "/tournament2.jpg",
      status: "Upcoming",
      format: "Single Elimination",
      region: "Global",
      featured: false,
      entryFee: "Free",
    },
    {
      id: 6,
      title: "Summer Showdown Finals",
      game: "Mobile Legends",
      date: "September 1-10, 2025",
      prizePool: "$75,000",
      teams: "8 Teams",
      participants: "8/8",
      image: "/tournament3.jpg",
      status: "Completed",
      format: "Single Elimination",
      region: "International",
      featured: false,
      entryFee: "Invite Only",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open":
        return "text-green-400 bg-green-400/10";
      case "Ongoing":
        return "text-blue-400 bg-blue-400/10";
      case "Upcoming":
        return "text-yellow-400 bg-yellow-400/10";
      case "Completed":
        return "text-gray-400 bg-gray-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };

  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesFilter =
      selectedFilter === "all" ||
      tournament.status.toLowerCase().includes(selectedFilter) ||
      (selectedFilter === "open" && tournament.status === "Registration Open");

    const matchesSearch =
      tournament.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tournament.region.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const featuredTournaments = tournaments.filter((t) => t.featured);

  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {featuredTournaments.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FeaturedTournaments 
            featuredTournaments={featuredTournaments} 
            getStatusColor={getStatusColor} 
          />
        </motion.div>
      )}

      <TournamentFilters 
        filters={filters} 
        selectedFilter={selectedFilter} 
        setSelectedFilter={setSelectedFilter} 
      />

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-8"
          >
            {selectedFilter === "all"
              ? "All Tournaments"
              : `${filters.find((f) => f.id === selectedFilter)?.label}`}
          </motion.h2>

          {filteredTournaments.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-12 max-w-md mx-auto">
                <Zap className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No tournaments found</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your filters</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TournamentGrid 
                filteredTournaments={filteredTournaments} 
                getStatusColor={getStatusColor} 
              />
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default TournamentsPage;