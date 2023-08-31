import { useCountriesData } from "../../services/countries";
import * as S from "./styles";
import { Loader } from "../ui/loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CountryData = Record<"name" | "code" | "flag", string>;

interface CountriesListingProps {
  country: string | null;
}

export function CountriesListing({country}: CountriesListingProps) {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useCountriesData(country);

  const handleGetCountryName = (name: string) => {
    navigate(`/leagues/${name?.toLowerCase()}`);
  };

  useEffect(() => {
    refetch();
  }, [refetch, country]);

  return isLoading ? (
    <Loader />
  ) : (
    <S.CountriesListingContainer>
      {data?.map((item: CountryData) => (
        <div key={item.name} className="listing-container">
          <div className="flag-alignment">
            <img src={item.flag} alt="flag" />
            <span>{item.name}</span>
          </div>
          <button
            onClick={() => handleGetCountryName(item.name)}
            className="countries-container"
          >
            <S.ArrowIcon />
          </button>
        </div>
      ))}
    </S.CountriesListingContainer>
  );
}
