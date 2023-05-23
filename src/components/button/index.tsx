import * as S from "./styles";
interface IButtonProps {
  text: string;
  disabled: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}

export function Button({ text, disabled, type, onClick }: IButtonProps) {
  return (
    <S.Button
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </S.Button>
  );
}
