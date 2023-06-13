import { useState } from "react";
import { GeneralInformation } from "../../components/general-information";
import { MenuNavigation } from "../../components/menu-navigation";
import { Stats } from "../../components/stats";
import * as S from "./styles";
import { Players } from "../../components/players";

export default function Team() {
  const [selectedOption, setSelectedOption] = useState<number>(1);
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
      <MenuNavigation
        optionTitles={titles}
        setSelectedOption={setSelectedOption}
      />
      {selectedOption === 1 && <GeneralInformation />}
      {selectedOption === 2 && <Players />}
      {selectedOption === 3 && <Stats />}
    </S.TeamContainer>
  );
}
