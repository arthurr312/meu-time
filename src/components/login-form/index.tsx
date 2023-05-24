import { Button } from "../button";
import * as S from "./styles";

interface LoginFormProps {
  path: string;
}
export function LoginForm({ path }: LoginFormProps) {
  const login = () => window.location.href = path;
  return (
    <S.LoginFormContainer>
      <h1>Meu Time - Faça login para continuar</h1>
      <div className="input-container">
        <div className="input-alignment">
          <label htmlFor="email">Chave de autenticação</label>
          <input type="text" name="email" id="email" />
        </div>
      </div>
      <Button
        disabled={false}
        text="Entrar"
        onClick={login}
        type="button"
      />
    </S.LoginFormContainer>
  );
}
