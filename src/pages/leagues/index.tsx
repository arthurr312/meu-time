import { useParams } from "react-router-dom"
import { LeaguesContainer } from "../../components/leagues-container";

export default function Leagues() {
    const {country} = useParams();
    console.log(country)
    return(
        <LeaguesContainer param={country as string} />
    )
}