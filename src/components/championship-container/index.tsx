import { ChampionshipListing } from "../championship-listing";
import * as S from "./styles";

export interface ChampionshipListingProps {
  leagueId: number;
  season: number;
}

export function ChampionShipContainer({
  leagueId,
  season,
}: ChampionshipListingProps) {
  return (
    <S.ChampionshipContainer>
      <h1>Agora selecione um time</h1>
      <ChampionshipListing leagueId={leagueId} season={season} />
    </S.ChampionshipContainer>
  );
}
