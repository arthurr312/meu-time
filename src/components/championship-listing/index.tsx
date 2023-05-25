import * as S from "./styles";
import { Loader } from "../loader";
import { useChampionshipData } from "../../services/season-championship";
import { ChampionshipListingProps } from "../championship-container";
import { useNavigate, useParams } from "react-router-dom";

type ChampionshipData = {
  name: string;
  logo: string;
  founded: number;
  team: Omit<ChampionshipData, "team">;
};

export function ChampionshipListing({
  leagueId,
  season,
}: ChampionshipListingProps) {
  const navigate = useNavigate();
  const { country } = useParams();
  const { data, isLoading } = useChampionshipData(leagueId, season);

  const handleGetTeamId = () => {
    navigate(`/leagues/${country}/flamengo/${season}`);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <S.ChampionshipListingContainer>
          {data?.map((item: ChampionshipData) => (
            <div key={item?.team?.name} className="listing-container">
              <div className="flag-alignment">
                <img src={item?.team?.logo} alt="flag" />
                <div className="info-alignment">
                  <span>{item?.team?.name}</span>
                  <span>Fundado em {item.team?.founded}</span>
                </div>
              </div>
              <button onClick={handleGetTeamId} className="teams-container">
                <S.ArrowIcon />
              </button>
            </div>
          ))}
        </S.ChampionshipListingContainer>
      )}
    </>
  );
}
