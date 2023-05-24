import * as S from "./styles";
import { Loader } from "../loader";
import { useLeaguesData } from "../../services/leagues";
import { useState } from "react";
import Modal from "../modal";

type LeagueData = {
  name: string;
  logo: string;
  id: number;
  league: Omit<LeagueData, "league">;
};

interface LeagueListingProps {
  param: string;
}

export function LeaguesListing({ param }: LeagueListingProps) {
  const [leagueId, setLeagueId] = useState<number | undefined>();
  //const { data, isLoading } = useLeaguesData(param);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : (
        <S.LeaguesListingContainer>
          {data?.map((item: LeagueData) => (
            <div className="listing-container">
              <div className="flag-alignment">
                <img src={item.league.logo} alt="flag" />
                <span>{item.league.name}</span>
              </div>
              <button
                onClick={() => alert(item.league.id)}
                key={item.name}
                className="leagues-container"
              >
                <S.ArrowIcon />
              </button>
            </div>
          ))}
        </S.LeaguesListingContainer>
      )} */}
      <Modal />
    </>
  );
}
