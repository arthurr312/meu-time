import { LeaguesListing } from "../leagues-listing";
import * as S from "./styles";

interface LeaguesContainerProps {
  param: string;
}

export function LeaguesContainer({param}: LeaguesContainerProps) {
  return (
    <S.LeaguesContainer>
      <h1>Agora selecione uma liga</h1>
      <LeaguesListing param={param} />
    </S.LeaguesContainer>
  );
}
