import { useQuery } from "react-query";
import axios from "axios";
import { api_key, rapidapi_host } from "../../utils/headers";
import { api } from "../../utils/api";

export function useCountriesData() {
  const fetchData = async () => {
    const response = await axios.get(`${api}/countries`, {
      headers: {
        "x-rapidapi-host": rapidapi_host,
        "x-rapidapi-key": api_key,
      },
    });
    return response.data?.response;
  };
  const query = useQuery({
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: fetchData,
    queryKey: ["country-data"],
  });

  return query;
}
