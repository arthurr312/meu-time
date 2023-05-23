import { useState } from "react";
import { useCountriesData } from "../../services/countries";
import * as S from "./styles";
import { Loader } from "../loader";

type CountryData = Record<"name" | "code" | "flag", string>;

export function CountriesListing() {
  const [countryName, setCountryName] = useState<string>();
  const { data, isLoading } = useCountriesData();

  const handleGetCountryName = (name: string) => {
    setCountryName(name);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <S.CountriesListingContainer>
      {data?.map((item: CountryData) => (
        <div className="listing-container">
          <div className="flag-alignment">
            <img src={item.flag} alt="flag" />
            <span>{item.name}</span>
          </div>
          <button
            key={item.name}
            onClick={() => alert(item.code)}
            className="countries-container"
          >
            <S.ArrowIcon />
          </button>
        </div>
      ))}
    </S.CountriesListingContainer>
  );
}
