import TeamCard from "./TeamCard";

export default function TeamGrid({ teams, onSelectTeam }) {
  return (
    <div className="lg:col-span-2">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Showing {teams.length} team{teams.length !== 1 ? 's' : ''}
        </h2>
        <div className="h-1 w-24 bg-yellow-400"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} onSelect={onSelectTeam} />
        ))}
      </div>
    </div>
  );
}