import * as S from "./styles";
export function Header() {
  const logout = () => (window.location.href = "/login");
  return (
    <>
      <S.HeaderContainer>
        <S.Content>
          <div className="header-content">
            <h1>Meu Time ⚽</h1>
            <h2>Acompanhe as informações do seu time.</h2>
          </div>
          <button type="button" onClick={logout}>
            <S.LogoutIcon />
            <span>Sair</span>
          </button>
        </S.Content>
      </S.HeaderContainer>
    </>
  );
}
