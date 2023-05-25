import { useParams } from "react-router-dom";
import { ChampionShipContainer } from "../../components/championship-container";

export default function Seasons() {
  const { leagueId, season } = useParams();
  return (
    <ChampionShipContainer
      leagueId={Number(leagueId)}
      season={Number(season)}
    />
  );
}
