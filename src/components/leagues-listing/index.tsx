import * as S from "./styles";
import { Loader } from "../loader";
import { useLeaguesData } from "../../services/leagues";

type LeagueData = Record<"name" | "type" | "logo", string>;

interface LeagueListingProps {
  param: string;
}

export function LeaguesListing({ param }: LeagueListingProps) {
  const { data, isLoading } = useLeaguesData(param);

  return isLoading ? (
    <Loader />
  ) : (
    <S.LeaguesListingContainer>
      {data?.map((item: LeagueData) => (
        <div className="listing-container">
          <div className="flag-alignment">
            <img src={item.logo} alt="flag" />
            <span>{item.name}</span>
          </div>
          <button
            key={item.name}
            //onClick={() => handleGetCountryName(item.name)}
            className="leagues-container"
          >
            <S.ArrowIcon />
          </button>
        </div>
      ))}
    </S.LeaguesListingContainer>
  );
}
