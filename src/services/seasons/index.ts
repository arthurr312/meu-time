import { useQuery } from "react-query";
import axios from "axios";
import { api_key, rapidapi_host } from "../../utils/headers";
import { api } from "../../utils/api";

export function useSeasonsData() {
  const fetchData = async () => {
    const response = await axios.get(`${api}/leagues/seasons`, {
      headers: {
        "x-rapidapi-host": rapidapi_host,
        "x-rapidapi-key": api_key,
      },
    });
    return response.data;
  };
  const query = useQuery({
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: fetchData,
    queryKey: ["seasons-data"],
  });

  return query;
}
