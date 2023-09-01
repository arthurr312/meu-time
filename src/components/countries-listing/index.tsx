import { useCountriesData } from "../../services/countries";
import * as S from "./styles";
import { Loader } from "../ui/loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CountryData = Record<"name" | "code" | "flag", string>;

interface CountriesListingProps {
  country: string;
}

export function CountriesListing({ country }: CountriesListingProps) {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useCountriesData(country);

  const handleGetCountryName = (name: string) => {
    navigate(`/leagues/${name?.toLowerCase()}`);
  };

  useEffect(() => {
    refetch();
  }, [country]);

  return isLoading ? (
    <Loader />
  ) : (
    <S.CountriesListingContainer>
      {data.length === 0 ? (
        <h1 style={{textAlign: "center"}}>Nenhum país foi encontrado</h1>
      ) : (
        data?.map((item: CountryData) => (
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
        ))
      )}
    </S.CountriesListingContainer>
  );
}
