import * as S from "./styles";
import goalkeeper from "../../assets/images/goalkeeper.svg";
import { LoginForm } from "../../components/login-form";
export default function Login() {
  return (
    <S.LoginContainer>
      <img
        src={goalkeeper}
        alt="Goleiro de frente ao gol"
        width={500}
        height={500}
      />
      <div className="form-container">
        <LoginForm path="/" />
      </div>
    </S.LoginContainer>
  );
}
