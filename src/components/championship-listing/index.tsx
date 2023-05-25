import * as S from "./styles";
import { Loader } from "../loader";
import { useChampionshipData } from "../../services/season-championship";
import { ChampionshipListingProps } from "../championship-container";

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
  const { data, isLoading } = useChampionshipData(leagueId, season);
  console.log(data);
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
              <button className="teams-container">
                <S.ArrowIcon />
              </button>
            </div>
          ))}
        </S.ChampionshipListingContainer>
      )}
    </>
  );
}
