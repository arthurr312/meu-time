import * as S from "./styles";

interface InputProps {
  setCountry: React.Dispatch<React.SetStateAction<string | null>>;
}
export function Input({ setCountry }: InputProps) {
  return (
    <S.Input
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setCountry(event.target.value)
      }
    />
  );
}
