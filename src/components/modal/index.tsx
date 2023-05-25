import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";
import ReactDOM from "react-dom";
import { Button } from "../button";
import { useState } from "react";
import { useSeasonsData } from "../../services/seasons";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  leagueId: number;
  closeModal: () => void;
}

export default function Modal({
  open,
  leagueId,
  setOpen,
  closeModal,
}: ModalProps) {
  const [season, setSeason] = useState<number>(0);
  const {pathname} = useLocation();
  const { data} = useSeasonsData();
  
  const navigate = useNavigate();
  const handleGetSeason = (season: number) => {
    navigate(`${pathname}/${leagueId}/${season}`);
  };
  return ReactDOM.createPortal(
    <S.Overlay isOpen={open}>
      <S.Container>
        <h1>Selecione uma temporada</h1>
        <div className="seasons-container">
          {data?.map((season: number) => (
            <button
              onClick={() => {
                setSeason(season);
                setOpen(true);
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
            disabled={false}
            text="Próximo"
            type="button"
            onClick={() => handleGetSeason(season)}
          />
        </S.Footer>
      </S.Container>
    </S.Overlay>,
    document.getElementById("modal-root") as HTMLElement
  );
}
