import { CountriesListing } from "../countries-listing";
import * as S from "./styles";
export function CountriesContainer() {
  return (
    <S.CountriesContainer>
      <h1>Selecione um país para começar</h1>
      <CountriesListing />
    </S.CountriesContainer>
  );
}
