import { useSeasonsData } from "../../services/seasons";
import { Button } from "../button";
import * as S from "./styles";
import ReactDOM from "react-dom";
export default function Modal() {
  const { data } = useSeasonsData();
  return ReactDOM.createPortal(
    <S.Overlay>
      <S.Container>
        <h1>Selecione uma temporada</h1>
        <div className="seasons-container">
          {data?.map((season: number) => (
            <button onClick={() => alert(season)}>{season}</button>
          ))}
        </div>
      </S.Container>
    </S.Overlay>,
    document.getElementById("modal-root") as HTMLElement
  );
}
