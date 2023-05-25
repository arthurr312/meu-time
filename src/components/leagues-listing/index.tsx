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
  const [leagueId, setLeagueId] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data: leaguesData, isLoading } = useLeaguesData(param);

  const handleGetLeagueId = (leagueId: number) => {
    setLeagueId(leagueId);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <S.LeaguesListingContainer>
          {leaguesData?.map((item: LeagueData) => (
            <div key={item.name} className="listing-container">
              <div className="flag-alignment">
                <img src={item.league.logo} alt="flag" />
                <span>{item.league.name}</span>
              </div>
              <button
                onClick={() => handleGetLeagueId(item.league.id)}
                className="leagues-container"
              >
                <S.ArrowIcon />
              </button>
            </div>
          ))}
          <Modal
            setOpen={setOpenModal}
            open={openModal}
            leagueId={leagueId}
            closeModal={handleClose}
          />
        </S.LeaguesListingContainer>
      )}
    </>
  );
}
