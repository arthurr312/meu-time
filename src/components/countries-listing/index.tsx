import { useCountriesData } from "../../services/countries";
import * as S from "./styles";
import { Loader } from "../loader";
import { useNavigate } from "react-router-dom";

type CountryData = Record<"name" | "code" | "flag", string>;

export function CountriesListing() {
  const navigate = useNavigate();
  const { data, isLoading } = useCountriesData();

  const handleGetCountryName = (name: string) => {
    navigate(`/leagues/${name?.toLowerCase()}`);
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
