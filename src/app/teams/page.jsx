"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/teams/HeroSection";
import TeamGrid from "@/components/teams/TeamGrid";
import TeamCard from "@/components/teams/TeamCard";
import LeaderboardSection from "@/components/teams/LeaderboardSection";
import AboutTeamsSection from "@/components/teams/AboutTeamsSection";
import CreateTeamCTA from "@/components/teams/CreateTeamCTA";
import TeamModal from "@/components/teams/TeamModal";

const sampleTeams = [
  {
    id: "t1",
    name: "Apex Legends",
    tag: "APX",
    region: "International",
    rating: 4.9,
    logo: "/mlbb-logo.png",
    members: 6,
    wins: 42,
    losses: 8,
    upcoming: [{ vs: "Rising Stars", date: "Oct 10, 2025" }],
    description:
      "Apex Legends is a top-tier competitive roster competing in international MLBB events.",
    socials: { twitter: "@apex", twitch: "apexlive" },
  },
  {
    id: "t2",
    name: "Rising Stars",
    tag: "RST",
    region: "Southeast Asia",
    rating: 4.6,
    logo: "/tournament2.jpg",
    members: 5,
    wins: 30,
    losses: 12,
    upcoming: [{ vs: "Apex Legends", date: "Oct 10, 2025" }],
    description:
      "The next generation of pros. Fast paced and aggressive playstyle—great for watching.",
    socials: { instagram: "rst.gg" },
  },
  {
    id: "t3",
    name: "Coastal Kings",
    tag: "CK",
    region: "Asia Pacific",
    rating: 4.2,
    logo: "/tournament3.jpg",
    members: 6,
    wins: 18,
    losses: 22,
    upcoming: [],
    description: "A scrappy crew with strong macro play and map control.",
    socials: {},
  },
  {
    id: "t4",
    name: "Night Owls",
    tag: "NO",
    region: "Europe",
    rating: 4.7,
    logo: "/tournament.jpg",
    members: 6,
    wins: 36,
    losses: 10,
    upcoming: [],
    description: "Veteran team with strategic drafts and solid communication.",
    socials: { youtube: "nightowls" },
  },
];

const regions = ["All", "International", "Southeast Asia", "Asia Pacific", "Europe"];

export default function TeamsPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("top-rated");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = sampleTeams.filter((t) => {
      const matchesQuery =
        t.name.toLowerCase().includes(q) || t.tag.toLowerCase().includes(q) ||
        t.region.toLowerCase().includes(q);
      const matchesRegion = region === "All" || t.region === region;
      return matchesQuery && matchesRegion;
    });

    if (sort === "top-rated") {
      list = list.sort((a, b) => b.rating - a.rating);
    } else if (sort === "most-wins") {
      list = list.sort((a, b) => b.wins - a.wins);
    }

    return list;
  }, [query, region, sort]);

  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection
        query={query}
        setQuery={setQuery}
        region={region}
        setRegion={setRegion}
        sort={sort}
        setSort={setSort}
      />

      {/* Main Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Grid - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <TeamGrid teams={filtered} onSelectTeam={setSelected} />
          </motion.div>

          {/* Sidebar - Takes 1 column */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <LeaderboardSection teams={sampleTeams} />
            <AboutTeamsSection />
            <CreateTeamCTA />
          </motion.aside>
        </div>
      </section>

      <TeamModal team={selected} onClose={() => setSelected(null)} />
    </main>
  );
}