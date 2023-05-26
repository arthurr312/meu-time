import { MenuNavigation } from "../../components/menu-navigation";
import { Stats } from "../../components/stats";
import * as S from "./styles";

export default function Team() {
  const titles = [
    {
      id: 1,
      title: "Informações Gerais",
    },
    {
      id: 2,
      title: "Lista de jogadores",
    },
    {
      id: 3,
      title: "Estatísticas",
    },
  ];
  return (
    <S.TeamContainer>
      <MenuNavigation optionTitles={titles} />
    </S.TeamContainer>
  );
}
