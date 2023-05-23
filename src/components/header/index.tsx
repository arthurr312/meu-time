import * as S from "./styles";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <S.HeaderContainer>
        <S.Content>
          <div className="header-content">
            <h1>Meu Time ⚽</h1>
            <h2>Acompanhe as informações do seu time.</h2>
          </div>
          <Link to="/login">
            <button type="button">
              <S.LogoutIcon />
              <span>Sair</span>
            </button>
          </Link>
        </S.Content>
      </S.HeaderContainer>
    </>
  );
}
