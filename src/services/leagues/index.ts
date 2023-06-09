import { useQuery } from "react-query";
import axios from "axios";
import { api_key, rapidapi_host } from "../../utils/headers";
import { api } from "../../utils/api";

const fetchData = async (country: string) => {
  const response = await axios.get(`${api}/leagues?country=${country}`, {
    headers: {
      "x-rapidapi-host": rapidapi_host,
      "x-rapidapi-key": api_key,
    },
  });
  return response.data?.response;
};

export function useLeaguesData(country: string) {
  const query = useQuery({
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: () => fetchData(country),
    enabled: !!country,
    queryKey: ["league-data"],
  });

  return query;
}
