import { useState, useDeferredValue } from "react";
import { CountriesListing } from "../countries-listing";
import { Input } from "../ui/input";
import * as S from "./styles";
export function CountriesContainer() {
  const [country, setCountry] = useState<string>("");
  const deferredCountry = useDeferredValue(country);
  return (
    <S.CountriesContainer>
      <h1>Selecione um país para começar</h1>
      <Input setCountry={setCountry} />
      <CountriesListing country={deferredCountry} />
    </S.CountriesContainer>
  );
}
