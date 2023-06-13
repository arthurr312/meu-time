import { GeneralInformation } from "../general-information";
import * as S from "./styles";

type OptionsTypes = {
  id: number;
  title: string;
};

interface MenuNavigationProps {
  children?: React.ReactNode;
  optionTitles: OptionsTypes[];
}
export function MenuNavigation({
  children,
  optionTitles,
}: MenuNavigationProps) {
  return (
    <>
      <S.MenuNavigationContainer>
        {optionTitles.map((item: OptionsTypes) => (
          <button key={item.id} type="button" className="card-navigation">
            <span>{item.title}</span>
          </button>
        ))}
      </S.MenuNavigationContainer>
      <GeneralInformation />
    </>
  );
}
