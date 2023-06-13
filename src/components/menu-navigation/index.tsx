import * as S from "./styles";

type OptionsTypes = {
  id: number;
  title: string;
};

interface MenuNavigationProps {
  optionTitles: OptionsTypes[];
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
}
export function MenuNavigation({
  optionTitles,
  setSelectedOption,
}: MenuNavigationProps) {
  return (
    <>
      <S.MenuNavigationContainer>
        {optionTitles.map((item: OptionsTypes) => (
          <button
            onClick={() => setSelectedOption(item.id)}
            key={item.id}
            type="button"
            className="card-navigation"
          >
            <span>{item.title}</span>
          </button>
        ))}
      </S.MenuNavigationContainer>
    </>
  );
}
