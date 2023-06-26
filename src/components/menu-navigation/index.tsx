import * as S from "./styles";

type OptionsTypes = {
  id: number;
  title: string;
};

interface MenuNavigationProps {
  optionTitles: OptionsTypes[];
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
}
export function MenuNavigation({
  optionTitles,
  selectedOption,
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
            style={{
              background: `${
                selectedOption === item.id ? "#526aae" : "transparent"
              }`,
              color: `${
                selectedOption === item.id ? "#fff" : "#000"
              }`
            }}
          >
            <span>{item.title}</span>
          </button>
        ))}
      </S.MenuNavigationContainer>
    </>
  );
}
