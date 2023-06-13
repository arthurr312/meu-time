import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./styles";
import ReactDOM from "react-dom";
import { Button } from "../button";
import { useSeasonsData } from "../../services/seasons";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedSeason: number | null;
  setSelectedSeason: React.Dispatch<React.SetStateAction<number | null>>;
  leagueId: number;
  closeModal: () => void;
}

export default function Modal({
  open,
  setOpen,
  selectedSeason,
  setSelectedSeason,
  leagueId,
  closeModal,
}: ModalProps) {
  const { data } = useSeasonsData();
  const navigate = useNavigate();
  const handleGetSeason = (season: number | null) => {
    navigate(`${leagueId}/${season}`);
  };
  return ReactDOM.createPortal(
    <S.Overlay isOpen={open}>
      <S.Container>
        <h1>Selecione uma temporada</h1>
        <div className="seasons-container">
          {data?.map((season: number) => (
            <button
              onClick={() => {
                setSelectedSeason(season);
                setOpen(true);
              }}
              style={{
                background: `${
                  selectedSeason === season ? "#d9d9d9" : "transparent"
                }`,
              }}
            >
              {season}
            </button>
          ))}
        </div>
        <S.Footer>
          <button onClick={closeModal} className="cancel-button" type="button">
            Cancelar
          </button>
          <Button
            disabled={!selectedSeason}
            text="Próximo"
            type="button"
            onClick={() => handleGetSeason(selectedSeason)}
          />
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById("modal-root") as HTMLElement
  );
}
